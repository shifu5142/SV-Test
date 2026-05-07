import { useState } from "react";

import MenuBar from "@/components/menu-bar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Generate() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [plan, setPlan] = useState("");
  const BACKEND_URL = (
    import.meta.env.VITE_BACKEND_CONNECTION || "http://localhost:3000"
  ).replace(/\/+$/, "");
  const handleGenerate = async () => {
    const response = await fetch(BACKEND_URL + "/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, genre }),
    });
    if (!response.ok) {
      throw new Error("Failed to generate content");
    }
    const data = await response.json();
    if (data.success) {
      setPlan(data.plan);
    } else {
      throw new Error("Failed to generate content");
    }
    console.log(data);
  };
  return (
    <div className="min-h-screen bg-muted/30 flex">
      <MenuBar />

      <main className="flex-1 p-4 md:p-8">
        <Card className="mx-auto mt-8 w-full max-w-xl">
          <CardHeader>
            <CardTitle>מחולל AI לסרטים</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="movie-title">כותרת הסרט</Label>
              <Input
                id="movie-title"
                placeholder="הכנס כותרת סרט"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="movie-genre">ז׳אנר</Label>
              <Input
                id="movie-genre"
                placeholder="הכנס ז׳אנר"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              />
            </div>

            <Button onClick={handleGenerate} className="w-full">
              צור תוכן עם AI
            </Button>

            {plan && (
              <div className="rounded-md border border-border bg-muted/50 p-3">
                <p className="mb-1 text-sm font-medium">התוכנית שנוצרה:</p>
                <p className="whitespace-pre-wrap text-sm text-muted-foreground">
                  {plan}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

export default Generate;
