import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddMovie from "./components/add-movie";
import Home from "./components/ui/home";
import AllMovies from "./components/all-movies";
import SearchMovie from "./components/search-movie";
function App() {
  // Strip trailing slashes so we never get "//"
  const BACKEND_URL = (
    import.meta.env.VITE_BACKEND_CONNECTION || "http://localhost:3000"
  ).replace(/\/+$/, "");

  fetch(BACKEND_URL + "/")
    .then((res) => {
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddMovie" element={<AddMovie />} />
        <Route path="/all-movies" element={<AllMovies />} />
        <Route path="/SearchMovie" element={<SearchMovie />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
