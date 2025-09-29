import { Button } from "@/components/ui/button";
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube, Award, Mic } from "lucide-react";

const Footer = () => {
  const quickLinks = [];

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
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
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
              <a href="https://www.facebook.com/Pivotsimply-102728118717286/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-background/80 hover:text-secondary">
                  <Facebook className="w-4 h-4" />
                </Button>
              </a>
              <a href="https://www.instagram.com/pivotsimplyofficial" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-background/80 hover:text-secondary">
                  <Instagram className="w-4 h-4" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/mithleshsingh/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-background/80 hover:text-secondary">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </a>
              <a href="https://www.youtube.com/@pivotsimply" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-background/80 hover:text-secondary">
                  <Youtube className="w-4 h-4" />
                </Button>
              </a>
              <a href="https://www.tiktok.com/@pivotsimply" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-background/80 hover:text-secondary">
                  <span className="w-4 h-4 text-xs font-bold">T</span>
                </Button>
              </a>
            </div>
            
            <div className="mt-4">
              <a href="https://youtu.be/pRKppiQYSHM?si=o8ROgVFIPXP4sKCB" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline text-sm">
                🎥 Watch Our Mission Statement
              </a>
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
            
            <div className="mt-6 pt-4 border-t border-background/20">
              <h5 className="text-sm font-semibold mb-4 text-secondary">PivotSimply Services & Platforms</h5>
              <div className="space-y-4 text-sm">
                <div>
                  <a href="https://unboundpivot.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-background mb-1 hover:text-secondary transition-colors block">UnboundPivot – Holistic Wellness Platform</a>
                  <p className="text-background/70 text-xs italic">Your all-in-one platform for emotional healing, self-mastery, and personal growth resources.</p>
                </div>
                
                <div>
                  <a href="https://preview--pivot-simply-landing.lovable.app/conscious-creator-circle" target="_blank" rel="noopener noreferrer" className="font-medium text-background mb-1 hover:text-secondary transition-colors block">Aligned Conscious Creators – Radical Life Transformation</a>
                  <p className="text-background/70 text-xs italic">A powerful group coaching experience designed to help you identify and release success saboteurs and inner blocks. Align your life with ease and flow using science-backed techniques, practical tools, and the power of synchronicity.</p>
                </div>
                
                <div>
                  <a href="https://preview--pivot-simply-landing.lovable.app/business-wealth-building" target="_blank" rel="noopener noreferrer" className="font-medium text-background mb-1 hover:text-secondary transition-colors block">Business & Wealth Building – Live Weekly Coaching</a>
                  <p className="text-background/70 text-xs italic">Grow your business with step-by-step strategies, technical guidance, and wealth-building tools.</p>
                </div>
                
                <div>
                  <a href="https://pivotsimplydigital.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-background mb-1 hover:text-secondary transition-colors block">PivotSimply Digital – AI Automation Agency</a>
                  <p className="text-background/70 text-xs italic">Done-for-you automation, AI workflows, and digital growth systems for entrepreneurs.</p>
                </div>
                
                <div>
                  <a href="https://www.etsy.com/uk/shop/PivotSimply" target="_blank" rel="noopener noreferrer" className="font-medium text-background mb-1 hover:text-secondary transition-colors block">PivotSimply Merch & Templates (Etsy Shop)</a>
                  <p className="text-background/70 text-xs italic">Editable templates, workbooks, planners, and digital products to simplify your business and life.</p>
                </div>
              </div>
            </div>
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

          {/* Awards & Recognition */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Award className="w-4 h-4" />
              Awards & Recognition
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://smallbusiness.co.uk/british-business-awards-2024-final-shortlist-revealed-2591088/" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-secondary transition-colors">
                  British Business Awards Finalist
                </a>
              </li>
              <li>
                <a href="https://thehustleawards.co.uk/shortlist-2025/" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-secondary transition-colors">
                  Social Impact Heroes Finalist
                </a>
              </li>
              <li>
                <a href="https://www.retrainexpo.co.uk/speakers/mithlesh-singh" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-secondary transition-colors">
                  Business Show Keynote Speaker
                </a>
              </li>
              <li>
                <a href="https://londontechweek.com/exhibitor-list/pivotsimply" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-secondary transition-colors">
                  London Tech Week
                </a>
              </li>
            </ul>
          </div>

          {/* Podcasts */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Mic className="w-4 h-4" />
              The PivotSimply Podcast
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://open.spotify.com/show/4hohCO69KurVGBn9j3TiWZ?si=79c765a96b664562" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-secondary transition-colors">
                  Listen on Spotify
                </a>
              </li>
              <li>
                <a href="https://podcasts.apple.com/gb/podcast/thepivotsimplypodcast/id1828634193" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-secondary transition-colors">
                  Listen on Apple Podcasts
                </a>
              </li>
              <li>
                <a href="https://music.amazon.co.uk/podcasts/d11589e1-8995-4333-84bd-94577d1de1e0/thepivotsimplypodcast" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-secondary transition-colors">
                  Listen on Amazon Music
                </a>
              </li>
              <li>
                <a href="https://music.youtube.com/playlist?list=PL1A95QHNyCgZKG3Vu9VQLs8xEWyKemsx_&si=G16lryUznrPkIxZi" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-secondary transition-colors">
                  Listen on YouTube Music
                </a>
              </li>
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
              © 2025 PivotSimply. All rights reserved.
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