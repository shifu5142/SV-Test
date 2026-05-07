import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <Card className="overflow-hidden border-border/70 bg-gradient-to-br from-card to-muted/40">
          <CardContent className="grid gap-8 p-6 md:grid-cols-2 md:p-10">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs text-muted-foreground">
                <span aria-hidden="true">🎬</span>
                MovieVerse
              </div>
              <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
                Discover your next favorite movie
              </h1>
              <p className="max-w-xl text-sm text-muted-foreground md:text-base">
                A clean movie homepage design with spotlight content, genre
                chips, and trending titles. No functionality, only UI.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/generate">AI Content Plan</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/all-movies">Browse Movies</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-xl border border-border/70 bg-black/90 p-5">
              <p className="mb-4 text-xs uppercase tracking-wide text-zinc-400">
                Now Showing
              </p>
              <div className="space-y-3">
                <div className="rounded-lg bg-zinc-900 p-3">
                  <p className="text-sm font-medium text-white">
                    The Midnight Code
                  </p>
                  <p className="text-xs text-zinc-400">
                    Sci-Fi • 2h 07m • 2026
                  </p>
                </div>
                <div className="rounded-lg bg-zinc-900 p-3">
                  <p className="text-sm font-medium text-white">
                    Echoes of Tomorrow
                  </p>
                  <p className="text-xs text-zinc-400">Drama • 1h 54m • 2025</p>
                </div>
                <div className="rounded-lg bg-zinc-900 p-3">
                  <p className="text-sm font-medium text-white">
                    Neon Detective
                  </p>
                  <p className="text-xs text-zinc-400">
                    Thriller • 2h 12m • 2026
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8 md:px-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold md:text-2xl">Popular Genres</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" size="sm">
            Action
          </Button>
          <Button variant="secondary" size="sm">
            Drama
          </Button>
          <Button variant="secondary" size="sm">
            Comedy
          </Button>
          <Button variant="secondary" size="sm">
            Sci-Fi
          </Button>
          <Button variant="secondary" size="sm">
            Horror
          </Button>
          <Button variant="secondary" size="sm">
            Animation
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 md:px-6">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold md:text-2xl">Trending Movies</h2>
          <Button variant="link">View all</Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Arc Light</CardTitle>
              <CardDescription>Action / Adventure</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span aria-hidden="true" className="text-amber-400">★</span>
                8.7 Rating
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span aria-hidden="true">🕒</span>
                2h 03m
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Blue Horizon</CardTitle>
              <CardDescription>Drama / Romance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span aria-hidden="true" className="text-amber-400">★</span>
                8.2 Rating
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span aria-hidden="true">🕒</span>
                1h 49m
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Red Signal</CardTitle>
              <CardDescription>Thriller / Mystery</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span aria-hidden="true" className="text-amber-400">★</span>
                8.9 Rating
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span aria-hidden="true">🕒</span>
                2h 11m
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Moonfall Station</CardTitle>
              <CardDescription>Sci-Fi</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span aria-hidden="true" className="text-amber-400">★</span>
                8.4 Rating
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span aria-hidden="true">🕒</span>
                2h 00m
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Silent Summer</CardTitle>
              <CardDescription>Indie / Drama</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span aria-hidden="true" className="text-amber-400">★</span>
                7.9 Rating
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span aria-hidden="true">🕒</span>
                1h 44m
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Last Orbit</CardTitle>
              <CardDescription>Adventure / Fantasy</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span aria-hidden="true" className="text-amber-400">★</span>
                8.6 Rating
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span aria-hidden="true">🕒</span>
                2h 16m
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

export default Home;
