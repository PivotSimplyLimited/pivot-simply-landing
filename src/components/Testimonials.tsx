import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Virgi J",
      role: "Conscious Creator Circle Member",
      content: "Something within me is shifting—quietly, but with real power. My world feels lighter, clearer. I approach life and business with a sharper focus and deeper sense of purpose. Mithlesh helped me uncover the part of me I couldn't reach alone and guided me out of unhelpful patterns into a space where joy, clarity, and progress feel natural.",
      rating: 5,
      transformation: "From Hidden Potential to Authentic Power"
    },
    {
      name: "Simeon Mihinga",
      role: "Business Coaching Client",
      content: "Pivot Simply is really an ideal business coaching programme for both men and women, especially those fearing to start and grow their businesses. Mithlesh has been an outstanding coach and mentor in business with never-doubted outstanding records.",
      rating: 5,
      transformation: "From Fear to Flourishing Business"
    },
    {
      name: "Caroline Beattie",
      role: "Conscious Creator Circle Member", 
      content: "I joined the Conscious Creator Membership and this is the best way I have invested in myself. An interesting road to discovery with usable tools for everyday self care and healing. I have achieved some personal goals that I didn't think were possible.",
      rating: 5,
      transformation: "From Self-Doubt to Personal Achievement"
    }
  ];

  const stats = [
    { number: "1000+", label: "Lives Transformed" },
    { number: "95%", label: "Success Rate" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            <span className="text-gradient">Real Transformations</span>, Real Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our clients have pivoted from limitation to limitless potential through inner mastery and holistic transformation.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-3xl md:text-4xl font-playfair font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-card shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-0 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
              <CardContent className="p-8">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                
                 {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Transformation badge */}
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-4">
                  {testimonial.transformation}
                </div>

                {/* Author */}
                <div>
                  <div className="font-semibold font-playfair">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-white rounded-2xl p-12 shadow-soft border border-primary/10">
          <h3 className="text-3xl font-playfair font-bold mb-4 text-primary">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of transformation champions and unlock your full potential with personalized inner mastery coaching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium">
              ✓ Free Discovery Call
            </div>
            <div className="bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium">
              ✓ Personalized Assessment
            </div>
            <div className="bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium">
              ✓ No Commitment Required
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;