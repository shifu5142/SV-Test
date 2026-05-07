import MenuBar from "@/components/menu-bar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function AllMovies() {
  return (
    <div className="min-h-screen bg-muted/30 flex">
      <MenuBar />

      <main className="flex-1 p-4 md:p-8">
        <div className="mx-auto w-full max-w-5xl space-y-4">
          <h1 className="text-2xl font-semibold">All Movies</h1>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Inception</CardTitle>
                <CardDescription>Genre: Sci-Fi</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A thief enters dreams to steal secrets and is given one final
                  impossible mission.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="destructive" className="w-full">
                  מחיקת סרט
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Interstellar</CardTitle>
                <CardDescription>Genre: Adventure</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A team travels through a wormhole in space to save humanity
                  from extinction.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="destructive" className="w-full">
                  מחיקת סרט
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Parasite</CardTitle>
                <CardDescription>Genre: Thriller</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A poor family slowly infiltrates a wealthy household in an
                  unpredictable story.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="destructive" className="w-full">
                  מחיקת סרט
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>The Dark Knight</CardTitle>
                <CardDescription>Genre: Action</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Batman faces the Joker, who pushes Gotham into chaos and moral
                  conflict.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="destructive" className="w-full">
                  מחיקת סרט
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>La La Land</CardTitle>
                <CardDescription>Genre: Musical</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Two artists fall in love while chasing their dreams in Los
                  Angeles.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="destructive" className="w-full">
                  מחיקת סרט
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Spirited Away</CardTitle>
                <CardDescription>Genre: Animation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A young girl enters a mysterious spirit world and must find a
                  way back home.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="destructive" className="w-full">
                  מחיקת סרט
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AllMovies;
