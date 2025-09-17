import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Lightbulb, Rocket, Target } from "lucide-react";

const TransformationProcess = () => {
  const steps = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Discovery & Assessment",
      description: "We start with a deep dive into your current state, goals, and transformation vision through comprehensive assessment tools.",
      details: ["Personal Values Audit", "Life Wheel Assessment", "Goal Clarity Session", "Transformation Roadmap"]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Strategy & Design",
      description: "Create your personalized transformation blueprint using science-backed techniques and spiritual wisdom.",
      details: ["Custom Action Plan", "Habit Design", "Mindset Rewiring", "Resource Allocation"]
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Implementation & Growth",
      description: "Execute your transformation plan with ongoing support, accountability, and iterative refinement.",
      details: ["Weekly Coaching", "Progress Tracking", "Obstacle Navigation", "Skill Development"]
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Integration & Mastery",
      description: "Solidify your new identity and capabilities while preparing for sustained long-term success.",
      details: ["Identity Integration", "Success Habits", "Maintenance Strategies", "Continuous Growth"]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Your <span className="text-gradient">Transformation Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven 4-step process guides you from where you are now to your highest potential, 
            combining ancient wisdom with modern science.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-accent transform -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                {/* Step number and icon */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center shadow-glow animate-glow">
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                </div>

                <Card className="bg-gradient-card shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-0 h-full">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-playfair font-semibold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>
                    
                    <div className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-2 text-sm justify-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center bg-gradient-card rounded-2xl p-8 shadow-medium">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="w-6 h-6 text-primary" />
              <span className="text-lg font-semibold">Ready to Begin Your Transformation?</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Join hundreds of others who have successfully transformed their lives through our proven process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium">
                ✓ Science-backed methods
              </div>
              <div className="bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium">
                ✓ Personalized approach
              </div>
              <div className="bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium">
                ✓ Ongoing support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationProcess;