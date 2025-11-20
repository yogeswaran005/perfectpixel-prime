import { Shield, Lock, FileCheck, Users, Database, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Tamper-Proof Records",
    description: "Blockchain ensures that once recorded, land details cannot be altered, modified, or deleted by anyone.",
  },
  {
    icon: Lock,
    title: "Secure Registration",
    description: "Advanced cryptographic algorithms protect every transaction and land registration on the blockchain.",
  },
  {
    icon: FileCheck,
    title: "Document Verification",
    description: "All documents are stored using IPFS hash technology, ensuring authenticity and preventing fake documents.",
  },
  {
    icon: Users,
    title: "Owner Verification",
    description: "Instant verification of land ownership with complete transparent history accessible to all stakeholders.",
  },
  {
    icon: Database,
    title: "Permanent Storage",
    description: "Land records are stored permanently on the blockchain with no risk of loss, damage, or corruption.",
  },
  {
    icon: Zap,
    title: "Fast Transfers",
    description: "Ownership transfers happen instantly without intermediaries, reducing time and eliminating bureaucracy.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of land registry with blockchain-powered security and transparency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
