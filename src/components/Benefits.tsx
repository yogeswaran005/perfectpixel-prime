import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Cannot Be Hacked or Modified",
    description: "Blockchain's distributed ledger technology makes it virtually impossible to hack or alter records.",
  },
  {
    title: "No Fake Land Documents",
    description: "Cryptographic verification and IPFS storage eliminate the possibility of forged or fake documents.",
  },
  {
    title: "No Loss of Records",
    description: "Decentralized storage ensures that land records are never lost, even in case of disasters or system failures.",
  },
  {
    title: "Fast Ownership Transfer",
    description: "Smart contracts enable instant property transfers without waiting for manual verification or paperwork.",
  },
  {
    title: "Trustless System",
    description: "No need for intermediaries or mediators—the blockchain protocol ensures trust through cryptography.",
  },
  {
    title: "Reduces Disputes",
    description: "Complete transparency and immutable records dramatically reduce land ownership disputes and conflicts.",
  },
  {
    title: "Cost-Effective",
    description: "Eliminates middlemen and reduces administrative costs associated with traditional land registry systems.",
  },
  {
    title: "24/7 Accessibility",
    description: "Access land records anytime, anywhere with just an internet connection and blockchain wallet.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Why Choose
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Blockchain Registry?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Blockchain-based land registry provides a futuristic solution for secure and transparent 
              land management. It improves trust, reduces disputes, and ensures a reliable property 
              verification system for everyone.
            </p>
            <div className="pt-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-6 py-3 rounded-full border border-primary/20">
                <CheckCircle2 className="h-5 w-5" />
                <span className="font-semibold">100% Transparent & Secure</span>
              </div>
            </div>
          </div>

          {/* Right Content - Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 rounded-lg bg-card hover:shadow-card transition-all duration-300 border border-border/50"
              >
                <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
