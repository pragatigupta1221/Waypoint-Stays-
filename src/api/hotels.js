const BASE_URL = "https://demohotelsapi.pythonanywhere.com/hotels/";

// API returns the full dataset in one go, so we fetch once and
// do searching/filtering/sorting/pagination on the client.
export async function fetchHotels() {
  const res = await fetch(BASE_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch hotels: ${res.status}`);
  }
  const json = await res.json();
  return (json.data || []).map((h) => ({
    ...h,
    price: Number(h.price),
  }));
}
