import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, Database } from "lucide-react";
import heroImage from "@/assets/hero-blockchain.jpg";

const Hero = () => {
  const scrollToRegister = () => {
    const element = document.getElementById("register");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToLearnMore = () => {
    const element = document.getElementById("features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Blockchain Technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20">
            <Shield className="h-4 w-4" />
            <span className="text-sm font-semibold">Powered by Blockchain Technology</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Secure Land Registry
            <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              On the Blockchain
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionizing property ownership with transparent, tamper-proof, and 
            decentralized land records. No intermediaries, no fraud, complete trust.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-full shadow-card">
              <Lock className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">100% Secure</span>
            </div>
            <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-full shadow-card">
              <Database className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium">Tamper-Proof</span>
            </div>
            <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-full shadow-card">
              <Shield className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Transparent</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              onClick={scrollToRegister}
              className="text-lg px-8 py-6 shadow-glow hover:shadow-xl transition-all"
            >
              Register Your Land
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToLearnMore}
              className="text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Secure Records</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">0</div>
              <div className="text-sm text-muted-foreground">Fraud Cases</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">∞</div>
              <div className="text-sm text-muted-foreground">Trust Level</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
