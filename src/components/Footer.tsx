import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <GraduationCap className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">GraduPath</span>
          </Link>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#roadmap" className="hover:text-foreground transition-colors">Roadmap</a>
            <a href="#earning" className="hover:text-foreground transition-colors">Earn</a>
          </div>

          <p className="text-xs text-muted-foreground">
            © 2026 GraduPath. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
