import { useEffect, useState } from "react";

import MenuBar from "@/components/menu-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

function SearchMovie() {
  const [searchValue, setSearchValue] = useState("");
  const BACKEND_URL = (
    import.meta.env.VITE_BACKEND_CONNECTION || "http://localhost:3000"
  ).replace(/\/+$/, "");
  async () => {
    useEffect(() => {
      const fetchMovies = async () => {
        const response = await fetch(BACKEND_URL + "/search-movie", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
      };
      return fetchMovies();
    }, [searchValue]);
  };

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
      </main>
    </div>
  );
}

export default SearchMovie;
