import { useState } from "react";

import MenuBar from "@/components/menu-bar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const BACKEND_URL = (
  import.meta.env.VITE_BACKEND_CONNECTION || "http://localhost:3000"
).replace(/\/+$/, "");
function AddMovie() {
  const [movieName, setMovieName] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  const handleAddMovie = async () => {
    setSubmitStatus(null);
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
    try {
      const response = await fetch(BACKEND_URL + "/AddMovie", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: trimmedName,
          genre: trimmedGenre,
          description: trimmedDescription,
        }),
      });

      if (!response.ok) {
        setSubmitStatus("error");
        return;
      }

      const data = await response.json();
      if (data.success) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
  };
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

            {submitStatus === "success" && (
              <div className="rounded-md bg-green-100 px-3 py-2 text-center text-sm font-medium text-green-800">
                הסרט נוסף
              </div>
            )}

            {submitStatus === "error" && (
              <div className="rounded-md bg-red-100 px-3 py-2 text-center text-sm font-medium text-red-800">
                ההוספה נכשלה
              </div>
            )}

            <Button onClick={handleAddMovie} className="w-full">
              הוספת סרט חדש
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
export default AddMovie;
