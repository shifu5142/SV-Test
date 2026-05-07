import { useEffect, useState } from "react";

import MenuBar from "@/components/menu-bar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Movie = {
  _id?: string;
  id?: string;
  name?: string;
  title?: string;
  genre?: string;
  description?: string;
};
function SearchMovie() {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const BACKEND_URL = (
    import.meta.env.VITE_BACKEND_CONNECTION || "http://localhost:3000"
  ).replace(/\/+$/, "");
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(BACKEND_URL + "/search-movie", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        const nextMovies = Array.isArray(data) ? data : data.movies;
        setMovies(Array.isArray(nextMovies) ? nextMovies : []);
      } catch (error) {
        console.error(error);
        setMovies([]);
      }
    };
    void fetchMovies();
  }, [BACKEND_URL]);

  const normalizedSearch = searchValue.trim().toLowerCase();
  const filteredMovies = movies.filter((movie) => {
    const movieName = (movie.name ?? movie.title ?? "").toLowerCase();
    const movieDescription = (movie.description ?? "").toLowerCase();
    return (
      movieName.includes(normalizedSearch) ||
      movieDescription.includes(normalizedSearch)
    );
  });

  return (
    <div className="min-h-screen bg-muted/30 flex">
      <MenuBar />

      <main className="flex-1 p-4 md:p-8">
        <Card className="mx-auto mt-8 w-full max-w-xl">
          <CardHeader>
            <CardTitle>Search Movies</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              placeholder="Enter movie name"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </CardContent>
        </Card>

        <div className="mx-auto mt-4 grid w-full max-w-xl gap-3">
          {filteredMovies.map((movie, index) => (
            <Card key={movie._id ?? movie.id ?? `${movie.name}-${index}`}>
              <CardHeader>
                <CardTitle>
                  {movie.name ?? movie.title ?? "Untitled Movie"}
                </CardTitle>
                <CardDescription>
                  Genre: {movie.genre ?? "Unknown"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {movie.description ?? "No description available."}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

export default SearchMovie;
