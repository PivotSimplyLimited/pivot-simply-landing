import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Target, TrendingUp, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import transformationIcon from "@/assets/transformation-icon-emerald.jpg";

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
      const checkoutUrl = await createCheckout(BUSINESS_PRICE_ID);
      if (checkoutUrl) {
        window.open(checkoutUrl, '_blank');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create checkout session. Please try again.",
        variant: "destructive",
      });
    }
  };
  const features = [
    "Entrepreneurial Mindset Mastery",
    "Business Foundations Blueprint",
    "Digitalise and Monetise Your Expertise",
    "Financial Clarity & Metrics",
    "Strategic Growth Planning",
    "Magnetic Brand Identity Accelerator",
    "Transformational Leadership Mastery",
    "Sales Mastery Framework",
    "Client Psychology & Insights",
    "Lead Generation Engine",
    "Offer Creation Mastery",
    "Winning Pitch Presentations",
    "Course Creation Pro",
    "Scale Your Impact",
    "Revenue Growth Strategies",
    "Personal Mastery & Peak Habits",
    "Freedom £10K /£100K Business Blueprint",
    "Scale Your Impact Automation & Systems Mastery",
    "Content Management Ecosystem",
    "Social Media Consistency on Autopilot",
    "Podcast & Blog Creation Engines"
  ];

  const testimonials = [
    {
      name: "Simeon Mihinga",
      rating: 5,
      text: "Pivot Simply is really an ideal business coaching programme for both men and women and especially those fearing to start and grow their businesses to full fledged income generating projects. Those who are hindered by psychological factors in business should not hesitate to opt for coaching services offered by @Mithlesh Singh through #pivotsimply as she has been an outstanding coach and mentor in business. Her outstanding records are never doubted."
    },
    {
      name: "Khaled W",
      rating: 5,
      text: "For about a month ago i decided to take this service and i really at first didn't think the results would be that incredible! since then i finally started my business and really on the way. highly recommended, and thaaaaaank you!"
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
                className={`px-6 py-2 rounded-md transition-all relative ${
                  isYearly 
                    ? 'bg-white text-primary font-semibold' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                Yearly
                <span className="absolute -top-2 -right-2 bg-secondary text-xs px-2 py-1 rounded-full text-primary font-bold shadow-lg border border-primary/20">
                  22% OFF
                </span>
              </button>
            </div>
          </div>
          
          {isYearly && (
            <div className="text-center mb-6">
              <p className="text-white/90 text-lg">
                Save £{yearlySavings.toFixed(0)} per year with yearly billing!
              </p>
            </div>
          )}
          {!user && (
            <div className="mb-4">
              <Link to="/auth">
                <Button variant="outline" size="sm">
                  Sign In to Subscribe
                </Button>
              </Link>
            </div>
          )}
          <Button size="lg" variant="secondary" className="mb-12" onClick={handleSubscribe}>
            Build Your Empire Today
          </Button>
          
          <div className="mx-auto mb-8 p-4 bg-white/10 rounded-2xl w-fit">
            <img 
              src={transformationIcon} 
              alt="Business & Wealth Building"
              className="w-24 h-24 object-cover rounded-xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Struggling To Build Your <span className="text-gradient">Business Empire?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {[
              "Fear of starting your own business",
              "Don't know how to monetize your skills and expertise",
              "Struggling with entrepreneurial mindset blocks",
              "Lack of clear business strategy and direction",
              "Financial insecurity and money limiting beliefs",
              "Imposter syndrome in business and leadership",
              "No idea how to generate leads or find clients",
              "Overwhelmed by business foundations and systems",
              "Can't create compelling offers that sell",
              "Struggling to scale beyond trading time for money",
              "Lack confidence in sales and presentations",
              "Don't know how to build a personal brand",
              "Afraid of failure and judgment from others",
              "Stuck in analysis paralysis instead of taking action",
              "No clear path from where you are to £10K+ months"
            ].map((painPoint, index) => (
              <div key={index} className="p-6 bg-gradient-card rounded-lg border border-destructive/20">
                <p className="text-destructive font-medium mb-2">✗</p>
                <p className="text-muted-foreground text-sm">{painPoint}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl font-semibold mb-4">Ready to transform your expertise into profitable business?</p>
            <p className="text-lg text-muted-foreground mb-8">Get the complete blueprint to build your £10K-£100K business empire.</p>
            <Button size="lg" className="mx-auto">
              Start Building Your Empire
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Build Your <span className="text-gradient">Business Empire</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete business mastery from mindset to £100K revenue systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gradient-card rounded-lg">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Card className="max-w-md mx-auto bg-gradient-card border-0 shadow-strong">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair">Business Mastery</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  £{isYearly ? yearlyPrice.toFixed(0) : monthlyPrice}
                </div>
                <div className="text-muted-foreground mb-6">
                  per {isYearly ? 'year' : 'month'}
                  {isYearly && (
                    <div className="text-sm text-secondary font-semibold mt-1">
                      Save £{yearlySavings.toFixed(0)} yearly!
                    </div>
                  )}
                </div>
                <Button size="lg" className="w-full" onClick={handleSubscribe}>
                  Start Building Wealth
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Business <span className="text-gradient">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Real entrepreneurs sharing their transformation journeys
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-medium">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="flex mr-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">Business Review</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Your Business <span className="text-gradient">Blueprint</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-0 shadow-medium text-center">
              <CardContent className="pt-6">
                <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">£10K - £100K</h3>
                <p className="text-muted-foreground">Revenue Blueprint</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-0 shadow-medium text-center">
              <CardContent className="pt-6">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Scale & Automate</h3>
                <p className="text-muted-foreground">Systems Mastery</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-0 shadow-medium text-center">
              <CardContent className="pt-6">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Aligned Success</h3>
                <p className="text-muted-foreground">Purpose-Driven Business</p>
              </CardContent>
            </Card>
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
          <Button size="lg" variant="secondary">
            Start Building - £{isYearly ? `${yearlyPrice.toFixed(0)}/year` : `${monthlyPrice}/month`}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BusinessWealthBuilding;