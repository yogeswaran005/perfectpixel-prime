import { Shield, Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResourceClick = (resource: string) => {
    toast({
      title: "Coming Soon",
      description: `${resource} will be available in the next update.`,
    });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                BlockLand
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Revolutionizing land registry with blockchain technology for a secure and transparent future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("benefits")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Benefits
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("register")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Register Land
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleResourceClick("Documentation")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Documentation
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleResourceClick("API Reference")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  API Reference
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleResourceClick("Support")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Support
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleResourceClick("Privacy Policy")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <button
                onClick={() => {
                  toast({
                    title: "Contact Us",
                    description: "Send an email to: contact@blockland-registry.com",
                  });
                }}
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 BlockLand Registry. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with ❤️ using Blockchain Technology
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
