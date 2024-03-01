import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const freecurrencyapi = new Freecurrencyapi(
  "fca_live_Pm0YkWbQioikBF2n55BjsZ2GHaIyR4YD7euxX5a5"
);


  export async function currencyconvert(from,to,units)
  {
    const res  = await freecurrencyapi
  .latest({
    base_currency: from,
    currencies: to,
  });

  const multiplier = res.data[to];

  return (multiplier * units);
  }
