import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Award } from "lucide-react";
import heroBackground from "@/assets/hero-background-emerald.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-white/20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-foreground">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-8 mb-8 opacity-80">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-current text-primary" />
              <span className="text-sm">5-Star Transformations</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="text-sm">1000+ Lives Changed</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span className="text-sm">Certified Coaches</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
            You Are Just One Decision Away From
            <span className="block text-gradient-hero">
              Embracing Your Full Potential
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-80 max-w-3xl mx-auto leading-relaxed">
            Master Your Mind, Monetize Your Genius, Lead With Power, Nurture Healthy Relationships, and Thrive in Harmony.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="group">
              Start Your Transformation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="heroSecondary" size="lg">
              Discover Our Offerings
            </Button>
          </div>

          {/* Value proposition */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto shadow-soft">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Holistic Transformation Includes:</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm text-muted-foreground">
              <div>Physical Health</div>
              <div>Emotional Intelligence</div>
              <div>Personal Mastery</div>
              <div>Wealth Building</div>
              <div>Personal Relationships</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating animation elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};

export default Hero;