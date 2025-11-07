import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Heart, Sparkles, Trophy, Mic, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OurJourney = () => {
  const awards = [
    {
      title: "Most Transformative Tech Empowerment Champion 2024 – UK",
      organization: "Technology Innovator Awards 2024",
      icon: Trophy,
    },
    {
      title: "Finalist — The British Business Awards 2024",
      organization: "Innovation in self-transformation coaching",
      icon: Award,
    },
    {
      title: "IE100 Elite International Global Awards 2025",
      organization: "Mentorship & Coaching Company of the Year",
      icon: Sparkles,
    },
    {
      title: "Shortlisted — The Hustle Awards 2025",
      organization: "Social Impact Hero(es) - Startup Magazine UK",
      icon: Heart,
    },
  ];

  const timeline = [
    {
      year: "2022",
      title: "The Beginning",
      subtitle: "PivotSimply Templates on Etsy",
      description: "What started as a small digital initiative — ready-made business and coaching templates — quickly gained momentum. These plug-and-play designs helped entrepreneurs, service providers, and creatives simplify their workflows, elevate their branding, and bring structure to their digital presence.",
    },
    {
      year: "2023",
      title: "The Expansion",
      subtitle: "Signature Courses & Memberships",
      description: "With growing demand, PivotSimply launched signature programs focused on Business Foundations & Scaling, Mindset & Emotional Mastery, and Self-Discovery & Energy Alignment. These programs empowered individuals to not only build businesses — but to create consciously aligned lives.",
    },
    {
      year: "2024–2025",
      title: "The Rise",
      subtitle: "Awards, Recognition & Global Reach",
      description: "From podcasts to global recognition, PivotSimply became a trusted name in conscious entrepreneurship.",
    },
  ];

  const values = [
    "Alignment is the key to all creation.",
    "Vulnerability is strength.",
    "Kindness begins within.",
    "Love your parents unconditionally.",
    "Learn and grow through your mistakes.",
    "Embrace diversity and culture.",
    "Stay grounded and be authentically you.",
    "Let education, empathy, and exploration be your compass.",
  ];

  return (
    <div className="min-h-screen bg-gradient-section">
      {/* Hero Section */}
      <section className="relative py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="max-w-5xl mx-auto relative z-10">
          <Badge variant="secondary" className="mb-6 text-base px-6 py-2">
            Our Story
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-hero animate-fade-in-up">
            About PivotSimply
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-semibold">
            Multi-Award-Winning Global Coaching & Mentorship Company | London
          </p>
          <blockquote className="text-lg md:text-xl text-foreground italic max-w-3xl mx-auto border-l-4 border-primary pl-6 mt-8">
            "You are the architect of your own reality; in alignment, you bring everything to life."
          </blockquote>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="border-0 shadow-strong bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-16">
              <div className="flex items-center justify-center mb-8">
                <Target className="w-12 h-12 text-primary mr-4" />
                <h2 className="text-4xl font-bold">Who We Are</h2>
              </div>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  PivotSimply is a premier global coaching and mentorship company dedicated to igniting personal transformation and sustainable business growth.
                </p>
                <p>
                  Our mission is to simplify the journey of life and business — helping individuals and organizations step into their authentic power, master their energy, and create consciously aligned success.
                </p>
                <p>
                  We integrate <strong className="text-foreground">science-backed psychology, emotional healing, and modern business strategy</strong> to help you overcome limitations, rewrite your story, and manifest a life that aligns with your deepest values.
                </p>
                <p>
                  Whether you're a coach, entrepreneur, or professional seeking purpose-driven success, PivotSimply equips you with the tools, templates, and mindset to <strong className="text-foreground">turn your potential into prosperity.</strong>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-16 px-4 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-6xl mx-auto">
          <Card className="border-0 shadow-strong bg-card/90 backdrop-blur-sm">
            <CardContent className="p-8 md:p-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">The Founder's Story</h2>
                <p className="text-xl text-muted-foreground">From Pain to Purpose</p>
              </div>

              <blockquote className="text-2xl font-semibold text-primary italic text-center border-l-4 border-r-4 border-primary px-8 py-6 mb-12 bg-primary/5 rounded-lg">
                "You are the source of your creation—whether it's your life, your business, or your content."
              </blockquote>

              <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Meet Mithlesh Singh</h3>
                  <p>
                    A visionary entrepreneur, speaker, and transformational mentor based in London.
                  </p>
                  <p className="mt-4">
                    Her story is not one of victimhood, but of empowerment, resilience, and rebirth.
                  </p>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg">
                  <p>
                    Growing up, Mithlesh spent much of her childhood in hospital environments, surrounded by people in pain. That experience awakened her empathy and sensitivity from a young age — a gift she didn't yet know how to harness. Throughout her life, people — friends, parents from her child's school, even strangers — would open up to her, sharing their pain, as if drawn to her healing energy.
                  </p>
                </div>

                <p>
                  During her maternity break, she volunteered with several non-profit organizations across London, supporting families and children under five. Her work brought meaning, but her confidence was often challenged. A senior colleague once told her, <em>"You have immense talent, but your weakness is language."</em>
                </p>

                <p>
                  At the same time, friends and social groups ridiculed her for being "too kind" or "too different." Comments like <em>"You were never sophisticated"</em> hit deep — until one day, she decided to draw boundaries for the first time in her life.
                </p>

                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                  <p>
                    When her health collapsed for six months, going from one doctor to another with no clear answers, a healer helped her see the truth — her energy was constantly being drained by others' pain. This realization sparked a new chapter.
                  </p>
                </div>

                <p>
                  Mithlesh immersed herself in understanding <strong className="text-foreground">energy dynamics, emotional psychology, attraction patterns, and the science of human behavior.</strong> She studied why kindness alone isn't enough to serve — and how empathy, when balanced with boundaries, becomes power.
                </p>

                <p>
                  She invested in her first coaching program, only to discover that the environment itself mirrored her old energy patterns. The group that was meant to empower her turned into another space of conflict — a woman constantly created trouble, and despite reporting the issue, the coach offered little support.
                </p>

                <p>
                  In her local mum's circle, similar patterns appeared — a culture of judgment and mockery. Women mocked others' dressing sense, choices, and parenting styles. When Mithlesh tried to distance herself, she became a target of gossip and bullying.
                </p>

                <div className="bg-secondary/10 p-6 rounded-lg">
                  <p className="font-semibold text-foreground">
                    That familiar tension — of being surrounded by noise but unable to express her truth — triggered something deep within her body. It mirrored the same silent suffering she had experienced as a child in hospital wards and as a student holding back her voice.
                  </p>
                  <p className="mt-4">
                    Yet, this silence was not weakness — it was a <strong className="text-foreground">preparation.</strong> A sacred period of observation that built her resilience, compassion, and emotional intelligence.
                  </p>
                </div>

                <p>
                  Through therapy, acupuncture, and deep self-inquiry, she began healing layer by layer. She recognized that life had been mirroring the same behavioral patterns to help her awaken to her true power — to break free from energy drains, emotional manipulation, and cycles of people-pleasing.
                </p>

                <p>
                  That awakening became the catalyst for her greatest transformation — <strong className="text-foreground">decoding the science of attraction, human behavior, and energy mastery.</strong>
                </p>

                <div className="text-center py-8">
                  <p className="text-2xl font-bold text-primary mb-4">
                    From that inner rebirth, PivotSimply was born
                  </p>
                  <p className="text-xl text-muted-foreground italic">
                    — not as a business, but as a mission.
                  </p>
                </div>

                <p>
                  A mission to help others rise from confusion to clarity, from burnout to balance, from silence to self-expression.
                </p>

                <p>
                  Her first viral content on <em>Kindness and Empowerment</em> resonated deeply, reaching thousands who shared similar journeys.
                </p>

                <p className="text-xl font-semibold text-foreground">
                  What began as a single story of healing has evolved into a global movement — helping people from every walk of life create boundaries, embrace authenticity, and lead consciously aligned lives.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Journey of PivotSimply</h2>
            <p className="text-lg text-muted-foreground">
              PivotSimply's roots trace back to a small home in London during the pandemic
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <Card key={index} className="border-0 shadow-medium bg-card/80 backdrop-blur-sm hover:shadow-strong transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-32 flex-shrink-0">
                      <Badge variant="default" className="text-2xl font-bold px-6 py-3 w-full justify-center">
                        {item.year}
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-lg font-semibold text-primary mb-3">{item.subtitle}</p>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Awards & Recognition</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each recognition fuels our mission to restore self-worth, rewire generational patterns, and bring healing where it's most needed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => {
              const Icon = award.icon;
              return (
                <Card key={index} className="border-0 shadow-medium bg-card/90 backdrop-blur-sm hover:shadow-strong hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                        <p className="text-muted-foreground">{award.organization}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Podcast */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="border-0 shadow-strong bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm">
            <CardContent className="p-8 md:p-16 text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-primary/20">
                  <Mic className="w-12 h-12 text-primary" />
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-6">The PivotSimply Podcast 🎙️</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Our Podcast Series features international voices sharing insights on entrepreneurship, leadership, AI, consciousness, and personal transformation. Season 1 explores foundational tools to help listeners design lives and businesses rooted in authenticity, clarity, and higher awareness.
              </p>
              <Button asChild size="lg" className="shadow-medium hover:shadow-strong">
                <a href="https://youtu.be/pRKppiQYSHM" target="_blank" rel="noopener noreferrer">
                  Listen to the Podcast
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 px-4 bg-gradient-section">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Mission */}
          <Card className="border-0 shadow-strong bg-card/90 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <Target className="w-10 h-10 text-primary" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To help you <strong className="text-foreground">tap into your true potential</strong> and make a quantum shift in your life. At PivotSimply, we simplify transformation — blending science, strategy, and spirituality — so you can create success from alignment, not exhaustion.
              </p>
              <blockquote className="text-xl font-semibold text-primary italic mt-6 pl-6 border-l-4 border-primary">
                You are just one decision away from rewriting your story.
              </blockquote>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="border-0 shadow-strong bg-card/90 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <Sparkles className="w-10 h-10 text-primary" />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <blockquote className="text-xl text-muted-foreground italic leading-relaxed">
                "Guiding millions to align with their source, embrace their authentic values, and create a conscious life and business."
              </blockquote>
              <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
                We empower individuals to cultivate essential skills, maintain harmony with their principles, and make meaningful impact through their aligned presence — personally and professionally.
              </p>
            </CardContent>
          </Card>

          {/* Values */}
          <Card className="border-0 shadow-strong bg-card/90 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <Heart className="w-10 h-10 text-primary" />
                <h2 className="text-3xl font-bold">Our Values</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">{value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Unbound Platform */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="border-0 shadow-strong bg-gradient-to-br from-secondary/20 to-primary/20 backdrop-blur-sm">
            <CardContent className="p-8 md:p-16 text-center">
              <Badge variant="secondary" className="mb-6 text-base px-6 py-2">
                Launching 2025
              </Badge>
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-primary/20">
                  <Users className="w-12 h-12 text-primary" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Unbound Platform 2025</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                In 2025, PivotSimply launched <strong className="text-foreground">Unbound</strong>, a membership-based platform for inner mastery and conscious business creation — offering a library of courses, live programs, and community support for those ready to break free from limitation and live in full alignment.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-background">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-strong bg-card/90 backdrop-blur-sm">
            <CardContent className="p-8 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Founder's Message</h2>
              <blockquote className="text-2xl font-semibold text-primary italic border-t-4 border-b-4 border-primary py-8 mb-8">
                "Every moment carries a hidden lesson. The choice is yours: extract the wisdom or remain stuck in the pain."
              </blockquote>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Through her story, Mithlesh reminds us that transformation is not about escaping pain — it's about alchemizing it into purpose.
              </p>
              <p className="text-xl font-semibold text-foreground">
                Today, she stands as one of the leading millennial voices in self-discovery and transformation, inspiring thousands across the world to step into their power and live consciously aligned lives.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Connect CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-strong bg-gradient-accent backdrop-blur-sm">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-6 text-primary-foreground">Connect With Us</h2>
              <p className="text-lg text-primary-foreground/90 mb-8">
                Follow us for daily inspiration, tips, and updates on our programs
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="secondary" size="lg">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-background/20 hover:bg-background/30 text-primary-foreground border-primary-foreground/20">
                  <Link to="/podcast">Listen to Podcast</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default OurJourney;
