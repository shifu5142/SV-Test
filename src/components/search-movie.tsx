import MenuBar from "@/components/menu-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

function SearchMovie() {
  return (
    <div className="min-h-screen bg-muted/30 flex">
      <MenuBar />

      <main className="flex-1 p-4 md:p-8">
        <Card className="mx-auto mt-8 w-full max-w-xl">
          <CardHeader>
            <CardTitle>Search Movies</CardTitle>
          </CardHeader>
          <CardContent>
            <Input placeholder="Enter movie name" />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

export default SearchMovie;
