export default defineEventHandler(async (event) => {
  // handle query params
  // const { name } = useQuery(event)

  // handle post data
  // const { age } = await useBody(event)

  // return {
  //   message: `Hello, ${name}! You are ${age} years old.`
  // }

  // api call with private key
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=crge3CK7XZZQzZRk07TO7CPU4bNsCjxwhK02lbPt"
  );

  return data;
});
