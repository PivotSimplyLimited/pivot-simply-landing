import { Button } from "@/components/ui/button";
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    "Inner Mastery Coaching",
    "Holistic Wellness Programs", 
    "Transformation Journey",
    "Business Coaching",
    "Creative Breakthrough",
    "Impact Expansion"
  ];

  const resources = [
    "Free Resources",
    "Blog & Insights",
    "Success Stories",
    "Transformation Tools",
    "Community Support",
    "FAQ"
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-playfair font-bold mb-4">
                Pivot<span className="text-secondary">Simply</span>
              </h3>
              <p className="text-background/80 leading-relaxed max-w-md">
                Empowering individuals to master their inner world and transform their lives through 
                science-backed coaching, holistic wellness, and spiritual growth practices.
              </p>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-background/80">
                <Mail className="w-4 h-4" />
                <span>hello@pivotsimply.com</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <MapPin className="w-4 h-4" />
                <span>Serving clients worldwide</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="text-background/80 hover:text-secondary">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background/80 hover:text-secondary">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background/80 hover:text-secondary">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background/80 hover:text-secondary">
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-background/80 hover:text-secondary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a href="#" className="text-background/80 hover:text-secondary transition-colors">
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-background/5 rounded-2xl p-8 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-xl font-playfair font-semibold mb-4">
              Join Our Transformation Community
            </h4>
            <p className="text-background/80 mb-6">
              Get weekly insights, transformation tips, and exclusive resources delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <Button variant="secondary" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-background/60 text-sm text-center lg:text-left">
              © 2024 PivotSimply. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-2 text-background/60 text-sm">
              <a href="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="/terms-of-service" className="hover:text-secondary transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="/copyrights" className="hover:text-secondary transition-colors">Copyrights</a>
              <span>•</span>
              <a href="/refunds-policy" className="hover:text-secondary transition-colors">Refunds Policy</a>
              <span>•</span>
              <a href="/disclaimer" className="hover:text-secondary transition-colors">Disclaimer</a>
            </div>
            <div className="flex items-center gap-2 text-background/60 text-sm">
              Made with <Heart className="w-4 h-4 text-secondary fill-current" /> for transformation
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;