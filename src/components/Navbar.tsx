import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <GraduationCap className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            GraduPath
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#roadmap" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Roadmap</a>
          <a href="#earning" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Earn</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/dashboard">Log in</Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/dashboard">Get Started</Link>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md p-4 space-y-3 animate-fade-up">
          <a href="#features" className="block text-sm font-medium text-muted-foreground py-2">Features</a>
          <a href="#roadmap" className="block text-sm font-medium text-muted-foreground py-2">Roadmap</a>
          <a href="#earning" className="block text-sm font-medium text-muted-foreground py-2">Earn</a>
          <div className="flex gap-2 pt-2">
            <Button variant="ghost" size="sm" className="flex-1" asChild>
              <Link to="/dashboard">Log in</Link>
            </Button>
            <Button size="sm" className="flex-1" asChild>
              <Link to="/dashboard">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
