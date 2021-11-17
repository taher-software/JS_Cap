const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=chicken';
const consumeMeals = async () => {
  const resp = await fetch(url);
  return resp.json();
};
consumeMeals();