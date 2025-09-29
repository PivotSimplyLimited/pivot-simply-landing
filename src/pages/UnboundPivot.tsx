import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Brain, Zap, Heart, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import coachingIcon from "@/assets/coaching-icon-emerald.jpg";
import SimeonCredentials from "@/components/SimeonCredentials";

const UnboundPivot = () => {
  const [isYearly, setIsYearly] = useState(false);
  
  const monthlyPrice = 44;
  const yearlyPrice = 411.84;
  const yearlySavings = (monthlyPrice * 12) - yearlyPrice;
  const features = [
    "Know Your Thyself",
    "Inner Mastery Self Coaching",
    "Goal Setting & Strategy",
    "Habit Building and Transformation",
    "Heal Confidence, Anxiety, Loneliness, Self Doubt Issues",
    "Build a Resilient Growth Mindset",
    "Mindfulness Practices",
    "Stress Management",
    "Master the Art of Meditation",
    "Emotional Regulation",
    "Inner Energy Alignment",
    "Health Building Exercises",
    "Personal Transformation",
    "AI Expert Coach"
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Unbound Pivot transformed my entire approach to self-development. The inner mastery techniques are life-changing."
    },
    {
      name: "James K.", 
      rating: 5,
      text: "The AI Expert Coach feature is incredible. It's like having a personal mentor available 24/7."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
            SELF MASTERY PLATFORM
          </Badge>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            Unbound <span className="text-gradient">Pivot</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Break free from limitations and step into your authentic power with our comprehensive platform for self inner mastery.
          </p>
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold">5.0 Rating</span>
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
          <Button size="lg" variant="secondary" className="mb-12">
            Start Your Transformation Today
          </Button>
          
          <div className="mx-auto mb-8 p-4 bg-white/10 rounded-2xl w-fit">
            <img 
              src={coachingIcon} 
              alt="Unbound Pivot"
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
              Are You Struggling With <span className="text-gradient">Any Of These?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {[
              "Feeling stuck and unfulfilled in life",
              "Self-doubt and imposter syndrome holding you back",
              "Anxiety and stress overwhelming your daily life",
              "Lack of clear direction or life purpose",
              "Struggling with confidence and self-worth",
              "Feeling disconnected from your authentic self",
              "Procrastination and lack of motivation",
              "Negative thought patterns you can't break",
              "Feeling lost and unsure of your next steps"
            ].map((painPoint, index) => (
              <div key={index} className="p-6 bg-gradient-card rounded-lg border border-destructive/20">
                <p className="text-destructive font-medium mb-2">✗</p>
                <p className="text-muted-foreground">{painPoint}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl font-semibold mb-4">If any of these resonate with you...</p>
            <p className="text-lg text-muted-foreground mb-8">Unbound Pivot is designed to help you break free and step into your power.</p>
            <Button size="lg" className="mx-auto">
              Transform Your Life Today
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              What's <span className="text-gradient">Included</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need for complete inner mastery and personal transformation.
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
                <CardTitle className="text-2xl font-playfair">Special Launch Price</CardTitle>
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
                <Button size="lg" className="w-full">
                  Get Started Now
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
              Success <span className="text-gradient">Stories</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-medium">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="flex mr-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="font-semibold">{testimonial.name}</span>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
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
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands who have already started their inner mastery journey.
          </p>
          <Button size="lg" variant="secondary">
            Start Your Transformation - £{isYearly ? `${yearlyPrice.toFixed(0)}/year` : `${monthlyPrice}/month`}
          </Button>
        </div>
      </section>

      {/* Simeon's Credentials */}
      <SimeonCredentials />
    </div>
  );
};

export default UnboundPivot;