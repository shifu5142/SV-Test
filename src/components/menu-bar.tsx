import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

function MenuBar() {
  return (
    <aside className="h-screen w-64 shrink-0 border-r border-border bg-card p-4">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Movie Menu</h2>
        <p className="text-sm text-muted-foreground">Quick navigation</p>
      </div>

      <nav className="space-y-2">
        <Button asChild variant="outline" className="w-full justify-start">
          <Link to="/all-movies">All Movies</Link>
        </Button>
        <Button asChild variant="outline" className="w-full justify-start">
          <Link to="/AddMovie">Add Movie</Link>
        </Button>
        <Button asChild variant="outline" className="w-full justify-start">
          <Link to="/SearchMovie">Search Movie</Link>
        </Button>
      </nav>
    </aside>
  );
}

export default MenuBar;
