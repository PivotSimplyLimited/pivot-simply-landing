import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Users, BookOpen, Award, Clock, Target, Lightbulb } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

const CertificationProgram = () => {
  const { user, createCheckout } = useAuth();

  const handleEnrollment = async () => {
    if (!user) {
      toast.error("Please log in to enroll in the certification program");
      return;
    }

    try {
      // You'll need to create a price_id for the certification program
      const url = await createCheckout("price_certification_id"); // Replace with actual price ID
      if (url) {
        window.open(url, '_blank');
      }
    } catch (error) {
      toast.error("Failed to create checkout session. Please try again.");
      console.error("Checkout error:", error);
    }
  };

  const modules = [
    {
      title: "Foundation of Transformational Coaching",
      duration: "4 weeks",
      description: "Core principles, ethics, and methodologies of transformational coaching",
      topics: ["Coaching foundations", "Ethical guidelines", "Client relationship building"]
    },
    {
      title: "Advanced Coaching Techniques",
      duration: "6 weeks", 
      description: "Deep-dive into advanced coaching methodologies and breakthrough techniques",
      topics: ["Breakthrough sessions", "Limiting belief work", "Energy alignment techniques"]
    },
    {
      title: "Business & Entrepreneurship Coaching",
      duration: "4 weeks",
      description: "Specialized training for coaching entrepreneurs and business leaders",
      topics: ["Business strategy coaching", "Leadership development", "Scaling mindset"]
    },
    {
      title: "Certification & Practice",
      duration: "4 weeks",
      description: "Real client practice, supervision, and final certification assessment",
      topics: ["Supervised practice", "Case studies", "Certification assessment"]
    }
  ];

  const benefits = [
    "Internationally recognized certification",
    "18 weeks of comprehensive training",
    "Live mentorship and supervision",
    "Access to exclusive coaching resources",
    "Ongoing professional development community",
    "Business building support and guidance"
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Certified Coach",
      text: "This certification transformed not only my coaching practice but my entire approach to helping others. The depth of training and ongoing support is unmatched."
    },
    {
      name: "David Chen", 
      role: "Business Coach",
      text: "The business coaching specialization gave me the tools and confidence to work with high-level entrepreneurs. My practice has tripled since certification."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30">
            Professional Certification Program
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Become a Certified Transformation & Business Coach
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join our comprehensive 18-week certification program and become a skilled transformation and business coach, 
            equipped to guide others through profound personal and professional breakthroughs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={handleEnrollment}
              className="bg-primary hover:bg-primary/90"
            >
              <Award className="mr-2 h-5 w-5" />
              Enroll Now
            </Button>
            <Button size="lg" variant="outline">
              Download Curriculum
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Program Overview</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive certification program combines theoretical foundations with practical application, 
              ensuring you graduate as a confident, skilled transformation and business coach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle>18 Weeks</CardTitle>
                <CardDescription>Comprehensive training program</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle>Live Mentorship</CardTitle>
                <CardDescription>Direct access to experienced coaches</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle>Certification</CardTitle>
                <CardDescription>Internationally recognized credential</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum Modules */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Curriculum Modules</h2>
            <p className="text-muted-foreground">
              Four comprehensive modules designed to build your expertise step by step
            </p>
          </div>

          <div className="grid gap-6">
            {modules.map((module, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-primary/5">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-primary" />
                        Module {index + 1}: {module.title}
                      </CardTitle>
                      <CardDescription className="mt-2">{module.description}</CardDescription>
                    </div>
                    <Badge variant="outline">{module.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    {module.topics.map((topic, topicIndex) => (
                      <Badge key={topicIndex} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Certification Benefits</h2>
            <p className="text-muted-foreground">
              What you'll gain from completing our certification program
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Graduate Success Stories</h2>
            <p className="text-muted-foreground">
              Hear from our certified coaches about their transformation journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
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

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Target className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Coaching Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our next cohort and begin your transformation into a certified professional coach.
            Early bird pricing available for limited time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={handleEnrollment}
              className="bg-white text-primary hover:bg-white/90"
            >
              <Award className="mr-2 h-5 w-5" />
              Enroll Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule Information Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificationProgram;