# Waypoint Stays — Hotel Search

React + Vite + Tailwind frontend for the Hotel Search API assignment.

## Setup

```bash
npm install
npm run dev
```

## API

Uses `https://demohotelsapi.pythonanywhere.com/hotels/` (fetched once, then
search/filter/sort/pagination happen client-side since the API returns the
full 500-hotel dataset regardless of query params).

## Structure

```
src/
  api/hotels.js          -> fetch layer
  hooks/useHotels.js      -> data + search/filter/sort/pagination state
  hooks/useFavorites.js   -> localStorage favorites
  components/             -> Navbar, SearchBar, FilterPanel, HotelCard,
                              Pagination, StateViews (loading/error/empty)
  pages/Home.jsx          -> search + results grid
  pages/HotelDetails.jsx  -> photo gallery + full info
```

## Features

- Search by hotel name / city
- Filter by destination, max price, min rating
- Sort by price / rating
- Pagination (9 per page)
- Favorites (persisted in localStorage)
- Loading skeletons, error state with retry, empty state
- Fully responsive, boarding-pass inspired card design

## Deploy / Push to GitHub

```bash
git init
git add .
git commit -m "Hotel search assignment"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```
