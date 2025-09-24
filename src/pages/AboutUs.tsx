import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Youtube, Linkedin, Instagram, Twitter, Facebook } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-emerald-500 bg-clip-text text-transparent">
            About PivotSimply
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-4">
            Multi Award Winning premier global coaching and mentorship company, London
          </p>
          <p className="text-lg text-muted-foreground italic">
            You are the architect of your own reality; in alignment, you bring everything to life.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* About PivotSimply */}
          <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Who We Are</h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  PivotSimply is a premier global coaching and mentorship company dedicated to igniting personal transformation and business growth. With a comprehensive suite of programs and services, PivotSimply empowers individuals and organizations to unlock their full potential and achieve remarkable success.
                </p>
                <p>
                  Offering high-impact technical business mentorship, PivotSimply guides coaches, consultants, and entrepreneurs in harnessing cutting-edge technologies like Artificial Intelligence to gain a competitive edge. Additionally, their tailored personal development programs foster confidence building, self-esteem enhancement, and inner work alignment, enabling high achievers to overcome limiting beliefs and embrace their authentic selves.
                </p>
                <p>
                  From self-discovery coaching to strategic business planning, PivotSimply's holistic approach combines personal growth, mindset shifts, technical training, and accountability measures. Their expertise lies in transforming knowledge and experiences into thriving digital businesses, helping clients manifest their destinies and monetize their expertise through digital products and services.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Mission, Vision, Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Mission */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-primary/10 to-purple-100/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Badge variant="secondary" className="text-lg px-4 py-2">Our Mission</Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We are on a mission to help you tap into your true potential. You are just one decision away from making a huge shift in your Life. It's time for you to rewrite your Story! At PivotSimply, we believe in simplifying life and Business by taking it back to its basics—the essence of what humans truly need.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-100/10 to-primary/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Badge variant="secondary" className="text-lg px-4 py-2">Our Vision</Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  "Empowering Individuals to Embrace Their Values, Cultivate Skills, Maintain Alignment with Core Principles, and Create Meaningful Impact with their presence"
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-100/10 to-emerald-100/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Badge variant="secondary" className="text-lg px-4 py-2">Our Values</Badge>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Alignment is the Key for your Creation and Success</li>
                  <li>• It's alright to accept your Vulnerability</li>
                  <li>• Be Kind to Yourself and Others</li>
                  <li>• Love Your Parents Unconditionally</li>
                  <li>• Learn & Grow with your Mistakes</li>
                  <li>• Embrace the Diversity & the Cultures</li>
                  <li>• Stay Grounded and Be "You"</li>
                  <li>• Education, Experiences, Exploration & Empathy can help you transform</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Founder's Story */}
          <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Founder's Story</h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                  <blockquote className="text-xl font-semibold text-primary italic border-l-4 border-primary pl-4">
                    "You are the source of your creation—whether it's your life, your business, or your content."
                  </blockquote>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    My mission is to help you step into your power, realize your self-worth, and align with your true self so you can transform both your personal and professional life with ease and minimal resistance.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-primary/5 to-emerald-100/5 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Mithlesh Singh</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A leading millennial voice in personal growth, self-discovery, life transformation, and creative thought leadership. She's not just a successful entrepreneur—she also has a background in Engineering, holds an MBA, and brings years of experience working with global organizations.
                  </p>
                </div>
              </div>

              <div className="mt-12 space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  <strong>Mithlesh</strong> is passionate about connecting with like-minded people—especially the youth—working to boost self-esteem, nurture resilient and positive mindsets, and promote conscious living. She also engages with thought leaders, entrepreneurs, executives, and parents, sharing insights that inspire action.
                </p>
                
                <p>
                  Through her impactful speeches and programs, Mithlesh encourages her audience to rediscover their true selves, unlock their full potential, clarify their values, and define their life's purpose. Her unique blend of introspection, science-backed techniques, and ancient wisdom enables individuals to overcome challenges and lead purposeful, conscious lives.
                </p>
                
                <p>
                  Mithlesh's journey is a testament to resilience. Once a quiet, bullied child with physical challenges and suppressed self-expression, she transformed her pain into purpose. Through healing her body and studying human behavior, emotions, psychology, manifestation, and transformational healing, she unlocked her inner strength.
                </p>
                
                <blockquote className="text-center text-xl font-semibold text-primary italic border border-primary/20 bg-primary/5 p-6 rounded-lg">
                  "Every moment carries a hidden lesson. The choice is yours: extract the wisdom or remain stuck in the pain."
                </blockquote>
                
                <p>
                  Today, her storytelling and transformative methods inspire millions worldwide. Her mission remains clear: to change lives through the powerful fusion of science-backed strategies, spirituality, and self-discovery.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Social Media Section */}
          <Card className="border-0 shadow-xl bg-gradient-to-r from-primary/10 via-purple-100/10 to-emerald-100/10 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-8">Connect With Us</h3>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://youtu.be/pRKppiQYSHM?si=CES4bfMVT3dWY9PV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-full bg-red-500/10 hover:bg-red-500/20 transition-all duration-300 hover:scale-110"
                  title="Watch Our Mission Statement"
                >
                  <Youtube className="w-8 h-8 text-red-500 group-hover:text-red-600" />
                </a>
                <a
                  href="https://www.linkedin.com/company/pivotsimply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-full bg-blue-500/10 hover:bg-blue-500/20 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-8 h-8 text-blue-500 group-hover:text-blue-600" />
                </a>
                <a
                  href="https://www.instagram.com/pivotsimply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-full bg-pink-500/10 hover:bg-pink-500/20 transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-8 h-8 text-pink-500 group-hover:text-pink-600" />
                </a>
                <a
                  href="https://twitter.com/pivotsimply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-full bg-sky-500/10 hover:bg-sky-500/20 transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="w-8 h-8 text-sky-500 group-hover:text-sky-600" />
                </a>
                <a
                  href="https://www.facebook.com/pivotsimply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-full bg-blue-600/10 hover:bg-blue-600/20 transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-8 h-8 text-blue-600 group-hover:text-blue-700" />
                </a>
              </div>
              <p className="mt-6 text-muted-foreground">
                Follow us on social media for daily inspiration, tips, and updates on our latest programs
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;