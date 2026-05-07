import { useState } from "react";

import MenuBar from "@/components/menu-bar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Movie = {
  name: string;
  genre: string;
  description: string;
};
const BACKEND_URL = (
  import.meta.env.VITE_BACKEND_CONNECTION || "http://localhost:3000"
).replace(/\/+$/, "");
function AddMovie() {
  const [movieName, setMovieName] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleAddMovie = () => {
    const trimmedName = movieName.trim();
    const trimmedGenre = genre.trim();
    const trimmedDescription = description.trim();
    if (trimmedName.length < 1) {
      alert("שם הסרט חובה - לפחות תו אחד.");
      return;
    }
    if (trimmedName.length > 20) {
      alert("שם הסרט יכול להכיל עד 20 תווים בלבד.");
      return;
    }
    if (trimmedGenre.length < 1) {
      alert("ז׳אנר חובה - לפחות תו אחד.");
      return;
    }
    if (trimmedDescription.length > 200) {
      alert("תיאור הסרט יכול להכיל עד 200 תווים בלבד.");
      return;
    }
    const response = await fetch("http://localhost:3000/movies", {
  return (
    <div className="min-h-screen bg-muted/30 flex">
      <MenuBar />

      <main className="flex-1 p-4 md:p-8">
        <Card className="mx-auto mt-8 w-full max-w-xl">
          <CardHeader>
            <CardTitle>הוספת סרט חדש</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="שם הסרט"
              value={movieName}
              onChange={(e) => setMovieName(e.target.value)}
              maxLength={20}
            />

            <Input
              placeholder="ז׳אנר"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />

            <Input
              placeholder="תיאור הסרט"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={200}
            />

            <Button onClick={handleAddMovie} className="w-full">
              הוספת סרט חדש
            </Button>
          </CardContent>
        </Card>

        <p className="mt-3 text-center text-sm text-muted-foreground">
          סה״כ סרטים שנוספו: {movies.length}
        </p>
      </main>
    </div>
  );
}
export default AddMovie;
