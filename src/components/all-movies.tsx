import MenuBar from "@/components/menu-bar";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Movie = {
  _id?: string;
  id?: string;
  name?: string;
  title?: string;
  genre?: string;
  description?: string;
};

function AllMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const BACKEND_URL = (
    import.meta.env.VITE_BACKEND_CONNECTION || "http://localhost:3000"
  ).replace(/\/+$/, "");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(BACKEND_URL + "/get-movies", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();

        // Supports both: array response OR { movies: [...] }
        const nextMovies = Array.isArray(data) ? data : data.movies;
        setMovies(Array.isArray(nextMovies) ? nextMovies : []);
      } catch (error) {
        console.error(error);
        setMovies([]);
      }
    };

    void fetchMovies();
  }, [BACKEND_URL]);
  return (
    <div className="min-h-screen bg-muted/30 flex">
      <MenuBar />

      <main className="flex-1 p-4 md:p-8">
        <div className="mx-auto w-full max-w-5xl space-y-4">
          <h1 className="text-2xl font-semibold">All Movies</h1>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {movies.map((movie, index) => (
              <Card key={movie._id ?? movie.id ?? `${movie.name}-${index}`}>
                <CardHeader>
                  <CardTitle>{movie.name ?? movie.title ?? "Untitled Movie"}</CardTitle>
                  <CardDescription>Genre: {movie.genre ?? "Unknown"}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {movie.description ?? "No description available."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="destructive" className="w-full">
                    מחיקת סרט
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default AllMovies;
