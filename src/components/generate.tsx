import { useState } from "react";

import MenuBar from "@/components/menu-bar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Generate() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");

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

            <Button className="w-full">צור תוכן עם AI</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

export default Generate;
