export default async function getData(endpoint) {
  let result = await fetch(`${import.meta.env.VITE_BASE_URL}${endpoint}`);
  const data = await result.json();
  return data;
}
