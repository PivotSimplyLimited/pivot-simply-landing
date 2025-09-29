import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Users, BookOpen, Award, Clock, Target, Lightbulb } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import CertificationApplicationForm from "@/components/CertificationApplicationForm";
import SimeonCredentials from "@/components/SimeonCredentials";

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

  const detailedCurriculum = [
    {
      module: 1,
      title: "Foundation of Transformational Coaching",
      duration: "4 weeks",
      overview: "Master the core principles and ethical foundations of transformational coaching",
      weeks: [
        {
          week: 1,
          title: "Coaching Foundations & Ethics",
          topics: [
            "History and evolution of transformational coaching",
            "Core principles and methodologies",
            "Professional ethics and boundaries",
            "Coach vs. therapist distinctions"
          ],
          deliverables: ["Ethics assessment", "Personal coaching philosophy draft"]
        },
        {
          week: 2,
          title: "Building Powerful Client Relationships", 
          topics: [
            "Establishing trust and rapport",
            "Creating safe spaces for transformation",
            "Active listening and presence techniques",
            "Managing resistance and breakthrough moments"
          ],
          deliverables: ["Rapport building practice sessions", "Listening skills assessment"]
        },
        {
          week: 3,
          title: "The Coaching Conversation Structure",
          topics: [
            "The GROW model and variations", 
            "Powerful questioning techniques",
            "Goal setting and outcome clarification",
            "Session planning and structure"
          ],
          deliverables: ["Practice coaching sessions", "Question bank development"]
        },
        {
          week: 4,
          title: "Assessment & Integration",
          topics: [
            "Foundation skills assessment",
            "Peer coaching practice",
            "Feedback and reflection processes",
            "Personal development planning"
          ],
          deliverables: ["Foundation certification exam", "Peer feedback review"]
        }
      ]
    },
    {
      module: 2,
      title: "Advanced Coaching Techniques",
      duration: "6 weeks",
      overview: "Deep-dive into breakthrough methodologies and energy alignment techniques",
      weeks: [
        {
          week: 5,
          title: "Limiting Beliefs & Breakthrough Work",
          topics: [
            "Identifying unconscious limiting beliefs",
            "Root cause analysis techniques", 
            "Belief transformation protocols",
            "Working with emotional blocks"
          ],
          deliverables: ["Belief assessment tools", "Breakthrough session practice"]
        },
        {
          week: 6,
          title: "Energy Alignment & Somatic Techniques",
          topics: [
            "Understanding energy and vibration in coaching",
            "Somatic awareness and body wisdom",
            "Breathing and grounding techniques",
            "Energy clearing and alignment practices"
          ],
          deliverables: ["Energy assessment practice", "Somatic technique demonstrations"]
        },
        {
          week: 7,
          title: "Neuroscience of Transformation",
          topics: [
            "Brain plasticity and habit formation",
            "Neurological basis of change",
            "Anchoring new neural pathways",
            "Visualization and mental rehearsal"
          ],
          deliverables: ["Neuroscience-based coaching plan", "Visualization script creation"]
        },
        {
          week: 8,
          title: "Advanced Communication & Influence",
          topics: [
            "Language patterns for transformation",
            "Metaphor and storytelling in coaching",
            "Reframing and perspective shifting",
            "Working with different personality types"
          ],
          deliverables: ["Language pattern practice", "Reframing exercise completion"]
        },
        {
          week: 9,
          title: "Crisis & Resistance Management",
          topics: [
            "Handling emotional breakdowns",
            "Working with resistance and sabotage",
            "Referral protocols and boundaries",
            "Emergency intervention strategies"
          ],
          deliverables: ["Crisis management protocol", "Resistance handling practice"]
        },
        {
          week: 10,
          title: "Integration & Advanced Practice",
          topics: [
            "Combining multiple techniques",
            "Creating customized coaching approaches",
            "Advanced session planning",
            "Mastery assessment preparation"
          ],
          deliverables: ["Advanced technique integration", "Mastery portfolio creation"]
        }
      ]
    },
    {
      module: 3,
      title: "Business & Entrepreneurship Coaching",
      duration: "4 weeks", 
      overview: "Specialized training for coaching entrepreneurs and business leaders",
      weeks: [
        {
          week: 11,
          title: "Business Strategy & Vision Coaching",
          topics: [
            "Strategic thinking and planning",
            "Vision creation and clarity",
            "Market analysis and positioning",
            "Competitive advantage development"
          ],
          deliverables: ["Business strategy coaching session", "Vision clarity exercise"]
        },
        {
          week: 12,
          title: "Leadership Development & Team Dynamics",
          topics: [
            "Leadership styles and effectiveness",
            "Team building and motivation",
            "Conflict resolution in business",
            "Delegation and empowerment strategies"
          ],
          deliverables: ["Leadership assessment tools", "Team dynamics analysis"]
        },
        {
          week: 13,
          title: "Scaling Mindset & Growth Strategies",
          topics: [
            "Mindset blocks to business growth",
            "Financial abundance and money beliefs",
            "Systems thinking and automation",
            "Sustainable growth planning"
          ],
          deliverables: ["Growth mindset assessment", "Scaling strategy development"]
        },
        {
          week: 14,
          title: "Business Coaching Integration",
          topics: [
            "Combining personal and business transformation",
            "Industry-specific coaching approaches",
            "ROI measurement and business impact",
            "Business coaching case studies"
          ],
          deliverables: ["Business coaching case study", "ROI measurement plan"]
        }
      ]
    },
    {
      module: 4,
      title: "Certification & Professional Practice",
      duration: "4 weeks",
      overview: "Real client practice, business building, and final certification",
      weeks: [
        {
          week: 15,
          title: "Supervised Client Practice",
          topics: [
            "Live coaching with real clients",
            "Supervisor feedback and guidance",
            "Session recording and analysis",
            "Continuous improvement protocols"
          ],
          deliverables: ["Supervised coaching sessions", "Practice reflection journal"]
        },
        {
          week: 16,
          title: "Building Your Coaching Business",
          topics: [
            "Niche identification and positioning",
            "Marketing and client acquisition",
            "Pricing strategies and packages",
            "Legal and business setup"
          ],
          deliverables: ["Business plan draft", "Marketing strategy outline"]
        },
        {
          week: 17,
          title: "Professional Development & Networks",
          topics: [
            "Continuing education requirements",
            "Professional coaching organizations",
            "Mentorship and peer support",
            "Advanced specialization options"
          ],
          deliverables: ["Professional development plan", "Network building strategy"]
        },
        {
          week: 18,
          title: "Final Certification & Graduation",
          topics: [
            "Comprehensive skill demonstration",
            "Final certification examination",
            "Portfolio presentation",
            "Graduation ceremony and recognition"
          ],
          deliverables: ["Final certification exam", "Master portfolio submission"]
        }
      ]
    }
  ];

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
      name: "Maria Rodriguez",
      role: "Certified Transformation Coach",
      text: "Simeon's certification program completely transformed my approach to coaching. The depth of knowledge and practical tools I gained have enabled me to help my clients achieve breakthrough results consistently."
    },
    {
      name: "James Thompson", 
      role: "Business & Executive Coach",
      text: "Working with Simeon and completing this certification gave me the confidence and expertise to launch my own coaching practice. Within 6 months, I was booked solid with high-paying clients."
    },
    {
      name: "Dr. Sarah Williams",
      role: "Leadership Development Coach", 
      text: "As a former therapist, I thought I knew about transformation work. Simeon's methods and certification opened up entirely new possibilities for my practice. My clients now experience deeper, lasting change."
    },
    {
      name: "Michael Chen",
      role: "Entrepreneur & Coach",
      text: "The business coaching specialization was a game-changer. Simeon's approach to helping entrepreneurs overcome their limiting beliefs and scale their businesses is unlike anything I've seen."
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
          <CertificationApplicationForm />
        </div>
      </section>

      {/* Simeon's Credentials */}
      <SimeonCredentials />

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

      {/* Detailed Curriculum */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Detailed 18-Week Curriculum</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              A comprehensive week-by-week breakdown of what you'll learn, practice, and master in our certification program.
              Each module builds upon the previous, ensuring a solid foundation for your coaching expertise.
            </p>
          </div>

          <div className="space-y-8">
            {detailedCurriculum.map((module, moduleIndex) => (
              <Card key={moduleIndex} className="overflow-hidden">
                <CardHeader className="bg-primary/10">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <Badge className="bg-primary text-primary-foreground">
                          Module {module.module}
                        </Badge>
                        {module.title}
                      </CardTitle>
                      <CardDescription className="mt-2 text-base">{module.overview}</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-sm">{module.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="grid gap-4 p-6">
                    {module.weeks.map((week, weekIndex) => (
                      <div key={weekIndex} className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-semibold text-primary">Week {week.week}: {week.title}</h4>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium mb-2 text-sm uppercase tracking-wide text-muted-foreground">Learning Topics</h5>
                            <ul className="space-y-1">
                              {week.topics.map((topic, topicIndex) => (
                                <li key={topicIndex} className="flex items-start gap-2 text-sm">
                                  <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2 text-sm uppercase tracking-wide text-muted-foreground">Deliverables</h5>
                            <ul className="space-y-1">
                              {week.deliverables.map((deliverable, deliverableIndex) => (
                                <li key={deliverableIndex} className="flex items-start gap-2 text-sm">
                                  <Target className="h-3 w-3 text-blue-500 mt-1 flex-shrink-0" />
                                  {deliverable}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
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
          <CertificationApplicationForm />
        </div>
      </section>
    </div>
  );
};

export default CertificationProgram;