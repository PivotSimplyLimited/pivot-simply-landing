import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Heart, Target, Brain, Globe, Sparkles, Users } from "lucide-react";
import coachingIcon from "@/assets/coaching-icon-emerald.jpg";
import wellnessIcon from "@/assets/wellness-icon-emerald.jpg";
import transformationIcon from "@/assets/transformation-icon-emerald.jpg";

const Services = () => {
  const services = [
    {
      icon: coachingIcon,
      iconComponent: <Brain className="w-8 h-8 text-primary" />,
      title: "Unbound Pivot",
      price: "£44 Monthly",
      description: "A comprehensive platform for self inner mastery that helps you break free from limitations and step into your authentic power.",
      features: [
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
      ],
      link: "https://unboundpivot.com/"
    },
    {
      icon: wellnessIcon,
      iconComponent: <Users className="w-8 h-8 text-primary" />,
      title: "Conscious Creator Circle",
      price: "£98 Monthly",
      description: "Live group coaching membership to help you release your success saboteurs using science-backed techniques and synchronicity.",
      features: [
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
      ],
      link: "https://academy.pivotsimply.com/awakenedyou"
    },
    {
      icon: transformationIcon,
      iconComponent: <Target className="w-8 h-8 text-primary" />,
      title: "Business & Wealth Building",
      price: "£99 Monthly",
      description: "Productize your knowledge and skills while building sustainable wealth through aligned business practices.",
      features: [
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
      ],
      link: "https://academy.pivotsimply.com/highimpactbusinessmembership"
    }
  ];

  return (
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            PivotSimply <span className="text-gradient">Services & Platforms</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our comprehensive range of services designed to facilitate your complete inner mastery and life transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2 group border-0"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-2xl w-fit group-hover:bg-primary/20 transition-colors">
                  {service.icon ? (
                    <img 
                      src={service.icon} 
                      alt={service.title}
                      className="w-16 h-16 object-cover rounded-xl"
                    />
                  ) : (
                    service.iconComponent
                  )}
                </div>
                <CardTitle className="text-xl font-playfair mb-2">{service.title}</CardTitle>
                <div className="text-2xl font-bold text-primary mb-2">{service.price}</div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full group"
                  onClick={() => window.open(service.link, '_blank')}
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-8">
          <p className="text-lg font-medium text-foreground">
            UnboundPivot – Holistic Wellness Platform
          </p>
          <p className="text-primary font-medium">
            unboundpivot.com
          </p>
        </div>

        <div className="text-center">
          <Button variant="primary" size="lg" className="group">
            Schedule Your Discovery Call
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;