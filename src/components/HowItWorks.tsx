import { Monitor, Server, Code, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: Monitor,
    number: "01",
    title: "User Interface",
    description: "Users interact with the modern, intuitive web interface to access all land registry features and services.",
  },
  {
    icon: Server,
    title: "Backend Processing",
    number: "02",
    description: "Our secure backend handles file uploads, generates cryptographic hashes, and processes all transactions safely.",
  },
  {
    icon: Code,
    number: "03",
    title: "Smart Contracts",
    description: "Solidity-based smart contracts store land details, manage ownership transfers, and ensure data integrity on the blockchain.",
  },
  {
    icon: Globe,
    number: "04",
    title: "Blockchain Network",
    description: "Ethereum network provides the decentralized infrastructure, making all records transparent, secure, and immutable.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            System Architecture
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A seamless integration of cutting-edge technologies to deliver secure and transparent land management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="relative overflow-hidden group hover:shadow-glow transition-all duration-300 bg-gradient-card border-border/50"
              >
                <div className="absolute top-0 right-0 text-[120px] font-bold text-primary/5 leading-none p-4">
                  {step.number}
                </div>
                <CardContent className="p-8 space-y-4 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center shadow-glow">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-primary">
                      Step {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
