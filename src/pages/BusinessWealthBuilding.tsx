import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Target, TrendingUp, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import transformationIcon from "@/assets/transformation-icon-emerald.jpg";
import SimeonCredentials from "@/components/SimeonCredentials";

const BusinessWealthBuilding = () => {
  const [isYearly, setIsYearly] = useState(false);
  const { user, createCheckout } = useAuth();
  const { toast } = useToast();
  
  const monthlyPrice = 99;
  const yearlyPrice = 926.64;
  const yearlySavings = (monthlyPrice * 12) - yearlyPrice;
  const BUSINESS_PRICE_ID = "price_1SChNsBtVYs7F0sEUt9REzYM";
  
  const handleSubscribe = async () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to subscribe to our services.",
        variant: "destructive",
      });
      return;
    }

    try {
      const url = await createCheckout(BUSINESS_PRICE_ID);
      if (url) {
        window.open(url, '_blank');
      }
    } catch (error) {
      toast({
        title: "Subscription Error",
        description: "Failed to create checkout session. Please try again.",
        variant: "destructive",
      });
    }
  };

  const features = [
    "Strategic Business Planning & Vision",
    "Market Analysis & Positioning",
    "Revenue Stream Development",
    "Systems & Process Optimization",
    "Leadership & Team Building",
    "Financial Management & Wealth Building",
    "Digital Marketing Mastery",
    "Sales & Conversion Strategies",
    "Scaling & Growth Methodologies",
    "Investment & Passive Income",
    "Personal Brand Development",
    "Network Building & Partnerships",
    "Risk Management & Legal Protection",
    "Tax Optimization Strategies",
    "Exit Strategy Planning"
  ];

  const testimonials = [
    {
      name: "Marcus Chen",
      role: "Tech Entrepreneur",
      text: "Simeon's business coaching helped me scale my SaaS from £10k to £100k MRR in 8 months. His strategic insights are invaluable."
    },
    {
      name: "Sarah Williams",
      role: "Consultant",
      text: "The wealth building strategies I learned transformed my financial future. I now have multiple income streams and clear investment plans."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
            BUSINESS MASTERY
          </Badge>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            Business & <span className="text-gradient">Wealth Building</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Productize your knowledge and skills while building sustainable wealth through aligned business practices.
          </p>
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold">5.0 Business Rating</span>
            </div>
            <div className="text-lg font-semibold">
              {isYearly ? `£${yearlyPrice.toFixed(0)} Yearly` : `£${monthlyPrice} Monthly`}
            </div>
          </div>
          
          {/* Pricing Toggle */}
          <div className="flex items-center justify-center mb-8">
            <div className="bg-white/10 p-1 rounded-lg flex">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 rounded-md transition-all ${
                  !isYearly 
                    ? 'bg-white text-primary font-semibold' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 rounded-md transition-all ${
                  isYearly 
                    ? 'bg-white text-primary font-semibold' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                Yearly (Save £{yearlySavings.toFixed(0)})
              </button>
            </div>
          </div>

          <Button 
            size="lg" 
            onClick={handleSubscribe}
            className="bg-white text-primary hover:bg-white/90 font-semibold"
          >
            Subscribe for £{isYearly ? `${yearlyPrice.toFixed(0)}/year` : `${monthlyPrice}/month`}
          </Button>
        </div>
      </section>

      {/* Simeon's Credentials */}
      <SimeonCredentials />

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What You'll Master</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive business and wealth-building strategies to transform your expertise into sustainable income.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg shadow-sm">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Ready to Build Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Transform your expertise into a profitable, sustainable business with our proven systems.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={handleSubscribe}
          >
            Start Building - £{isYearly ? `${yearlyPrice.toFixed(0)}/year` : `${monthlyPrice}/month`}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BusinessWealthBuilding;