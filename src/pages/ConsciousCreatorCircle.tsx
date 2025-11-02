import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Users, Heart, Brain } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import wellnessIcon from "@/assets/wellness-icon-emerald.jpg";
import SimeonCredentials from "@/components/SimeonCredentials";

const ConsciousCreatorCircle = () => {
  const [isYearly, setIsYearly] = useState(false);
  
  const monthlyPrice = 170;
  const yearlyPrice = 1591.20;
  const yearlySavings = (monthlyPrice * 12) - yearlyPrice;
  const features = [
    "Live Weekly Group Coaching",
    "Honour Your True Self",
    "Expand Self-Awareness",
    "Success Saboteur & Inner Blocks Release",
    "Synchronicity-Based Self-Discovery Methods",
    "Align Inner & Outer Worlds",
    "Cultivate an Unshakeable Growth Mindset",
    "Relationship Building",
    "Transform Your Life: Identify → Shift – Map the gap between where you are and where you want to be",
    "Live Consciously, Not on Autopilot",
    "Build Lasting Confidence & Resilience",
    "Heal Burnout & Overthinking",
    "Overcome Success Saboteurs",
    "Release Performance Anxiety & Low Mood",
    "Move from Loneliness to Self-Love",
    "Discover Your True Purpose – Clarify your life direction and align with your deeper 'why'.",
    "Practice Cognitive-Behavioural Alignment",
    "Regulate Your Nervous System in Tough Times",
    "Build and Track Transformational Habits",
    "Learn the Art of Meditation",
    "Transform Self-Doubt into Self-Belief",
    "Master Science-Backed Manifestation",
    "Activate Visualisation Techniques",
    "Become an Extraordinary Champion",
    "Achieve Aligned Success",
    "Lead with Core Values",
    "Building an effective Women's Leadership",
    "Inner energy alignment",
    "Science-Backed Techniques"
  ];

  const testimonials = [
    {
      name: "Virgi J",
      rating: 5,
      role: "Conscious Creator Circle Member",
      text: "Something within me is shifting—quietly, but with real power. My world feels lighter, clearer. I approach life and business with a sharper focus and deeper sense of purpose. Mithlesh helped me uncover the part of me I couldn't reach alone and guided me out of unhelpful patterns into a space where joy, clarity, and progress feel natural.",
      transformation: "From Hidden Potential to Authentic Power"
    },
    {
      name: "Simeon Mihinga",
      rating: 5,
      role: "Business Coaching Client",
      text: "Pivot Simply is really an ideal business coaching programme for both men and women, especially those fearing to start and grow their businesses. Mithlesh has been an outstanding coach and mentor in business with never-doubted outstanding records.",
      transformation: "From Fear to Flourishing Business"
    },
    {
      name: "Caroline Beattie",
      rating: 5,
      role: "Conscious Creator Circle Member",
      text: "I joined the Conscious Creator Membership and this is the best way I have invested in myself. An interesting road to discovery with usable tools for everyday self care and healing. I have achieved some personal goals that I didn't think were possible.",
      transformation: "From Self-Doubt to Personal Achievement"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
            LIVE GROUP COACHING
          </Badge>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 opacity-90">
            Radical Life Transformation – Live Group Coaching Membership
          </h2>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            Aligned Conscious <span className="text-gradient">Creators</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            A powerful group coaching experience designed to help you identify and release success saboteurs and inner blocks. Align your life with ease and flow using science-backed techniques, practical tools, and the power of synchronicity.
          </p>
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold">5.0 Google Rating</span>
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
            Join the Circle Today
          </Button>
          
          <div className="mx-auto mb-8 p-4 bg-white/10 rounded-2xl w-fit">
            <img 
              src={wellnessIcon} 
              alt="Conscious Creator Circle"
              className="w-24 h-24 object-cover rounded-xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Simeon's Credentials */}
      <SimeonCredentials />

      {/* Pain Points Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Ready For <span className="text-gradient">Radical Life Transformation?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {[
              "Chronic burnout and overwhelming stress",
              "Success saboteurs blocking your potential",
              "Living on autopilot instead of consciously",
              "Performance anxiety and persistent low mood", 
              "Loneliness and feeling disconnected from others",
              "Overthinking that paralyzes your progress",
              "Self-doubt undermining your achievements",
              "Struggling to regulate emotions in tough times",
              "Lack of clear life direction and purpose",
              "Limiting beliefs keeping you small",
              "Feeling like you're not living authentically",
              "Unable to break destructive patterns"
            ].map((painPoint, index) => (
              <div key={index} className="p-6 bg-gradient-card rounded-lg border border-destructive/20">
                <p className="text-destructive font-medium mb-2">✗</p>
                <p className="text-muted-foreground">{painPoint}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl font-semibold mb-4">Transform these blocks into breakthrough moments with Aligned Conscious Creators...</p>
            <p className="text-lg text-muted-foreground mb-8">A powerful group coaching experience designed to help you identify and release success saboteurs and inner blocks. Align your life with ease and flow using science-backed techniques, practical tools, and the power of synchronicity.</p>
            <Button size="lg" className="mx-auto">
              Join The Circle Today
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Transform Your <span className="text-gradient">Reality</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive live coaching with science-backed techniques for lasting transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gradient-card rounded-lg">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="font-medium text-sm leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Card className="max-w-md mx-auto bg-gradient-card border-0 shadow-strong">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair">Aligned Conscious Creators</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">Radical Life Transformation – Live Group Coaching Membership</p>
                <p className="text-xs text-muted-foreground mt-2">A powerful group coaching experience designed to help you identify and release success saboteurs and inner blocks. Align your life with ease and flow using science-backed techniques, practical tools, and the power of synchronicity.</p>
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
                  Start Your Journey
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
              Real <span className="text-gradient">Transformations</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear from members who have experienced profound shifts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-medium">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic text-sm leading-relaxed mb-4">"{testimonial.text}"</p>
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-4 inline-block">
                    {testimonial.transformation}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
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
            Ready to Join the Circle?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience live group coaching and transform your success saboteurs into strengths.
          </p>
           <Button size="lg" variant="secondary">
             Join Now - £{isYearly ? `${yearlyPrice.toFixed(0)}/year` : `${monthlyPrice}/month`}
           </Button>
        </div>
      </section>
    </div>
  );
};

export default ConsciousCreatorCircle;