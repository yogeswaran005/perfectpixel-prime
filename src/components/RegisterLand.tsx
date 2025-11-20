import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Loader2, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RegisterLand = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    landId: "",
    ownerName: "",
    location: "",
    area: "",
    document: null as File | null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, document: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.landId || !formData.ownerName || !formData.location || !formData.area) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate blockchain transaction
    await new Promise((resolve) => setTimeout(resolve, 3000));
    
    setIsLoading(false);
    setIsSuccess(true);
    
    toast({
      title: "Registration Successful!",
      description: "Your land has been registered on the blockchain.",
    });

    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({
        landId: "",
        ownerName: "",
        location: "",
        area: "",
        document: null,
      });
      setIsSuccess(false);
    }, 2000);
  };

  return (
    <section id="register" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Register Your Land
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Secure your property on the blockchain with permanent, tamper-proof records
          </p>
        </div>

        <Card className="shadow-glow border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl">Land Registration Form</CardTitle>
            <CardDescription>
              Fill in the details below to register your land on the blockchain network
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="landId">Land ID / Registry Number *</Label>
                  <Input
                    id="landId"
                    name="landId"
                    placeholder="e.g., LR-2024-001"
                    value={formData.landId}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ownerName">Owner Name *</Label>
                  <Input
                    id="ownerName"
                    name="ownerName"
                    placeholder="Full legal name"
                    value={formData.ownerName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Property Location *</Label>
                <Textarea
                  id="location"
                  name="location"
                  placeholder="Complete address with city, state, and postal code"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="area">Land Area (sq. meters) *</Label>
                <Input
                  id="area"
                  name="area"
                  type="number"
                  placeholder="e.g., 500"
                  value={formData.area}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="document">Property Document (PDF)</Label>
                <div className="flex items-center gap-4">
                  <Input
                    id="document"
                    name="document"
                    type="file"
                    accept=".pdf,.jpg,.png"
                    onChange={handleFileChange}
                    className="cursor-pointer"
                  />
                  <Upload className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-xs text-muted-foreground">
                  Upload your property deed or ownership document (Max 10MB)
                </p>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading || isSuccess}
                  className="w-full shadow-glow"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Processing on Blockchain...
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle2 className="mr-2 h-5 w-5" />
                      Registration Complete!
                    </>
                  ) : (
                    "Register on Blockchain"
                  )}
                </Button>
              </div>

              {isSuccess && (
                <div className="p-4 bg-secondary/10 border border-secondary/20 rounded-lg">
                  <p className="text-sm text-center text-secondary font-medium">
                    ✓ Transaction Hash: 0x{Math.random().toString(16).substr(2, 40)}
                  </p>
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RegisterLand;
