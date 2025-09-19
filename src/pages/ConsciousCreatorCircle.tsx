import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Users, Heart, Brain } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import wellnessIcon from "@/assets/wellness-icon-emerald.jpg";

const ConsciousCreatorCircle = () => {
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
      program: "Conscious Creator Circle",
      text: "Something within me is shifting—quietly, but with real power. My world feels lighter, clearer. I approach life and business with a sharper focus and a deeper sense of purpose. It's like stepping into a new reality—strange at first, but true to who I really am. And I'm beginning to feel at home in it. Sometimes I still feel like a stranger here, but Mithlesh reminds me, \"This isn't a new world—it's your real one. It was just hidden beneath layers of someone else's expectations.\" Thank you, Mithlesh for your patience, your faith, and your unwavering support. You helped me uncover the part of me I couldn't reach alone. You've guided me out of unhelpful patterns and into a space where joy, clarity, and progress feel natural. Just a couple months in, and I already have real reasons to smile. I feel inspired. There's still much ahead, and I know there will be challenges—but this time, I believe in a path filled with meaningful growth, real success, and maybe even a lot miracles… without the pain mistakes."
    },
    {
      name: "Caroline Beattie",
      rating: 5,
      program: "Conscious Creator Circle",
      text: "I joined the Conscious Creator Membership and this is the best way I have invested in myself. An interesting road to discovery with usable tools for everyday self care and healing. I am working through my to do list and have achieved some personal goals that I didn't think were possible."
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
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            Conscious Creator <span className="text-gradient">Circle</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Live group coaching membership to help you release your success saboteurs using science-backed techniques and synchronicity.
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
              £98 Monthly
            </div>
          </div>
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
                <CardTitle className="text-2xl font-playfair">Join the Circle</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">£98</div>
                <div className="text-muted-foreground mb-6">per month</div>
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
                      <div className="text-sm text-muted-foreground">{testimonial.program}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic text-sm leading-relaxed">"{testimonial.text}"</p>
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
            Join Now - £98/month
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ConsciousCreatorCircle;