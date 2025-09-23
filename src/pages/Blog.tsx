import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Calendar, ArrowRight, User, Tag } from "lucide-react";
import Footer from "@/components/Footer";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Posts" },
    { id: "business", label: "Business Growth" },
    { id: "manifestation", label: "Manifestation" },
    { id: "mindset", label: "Mindset & Success" },
    { id: "coaching", label: "Coaching" }
  ];

  const blogPosts = [
    {
      slug: "5-key-reasons-why-introverts-are-often-misunderstood-by-society",
      title: "5 Key Reasons Why Introverts Are Often Misunderstood by Society",
      excerpt: "Introverts are frequently mislabeled as shy or antisocial simply because they are quieter and prefer less social stimulation. However, introversion is not the same as shyness.",
      category: "mindset",
      author: "Mithlesh Singh",
      date: "July 11, 2024",
      readTime: "6 min read",
      image: "/placeholder.svg",
      tags: ["Introversion", "Society", "Personality"]
    },
    {
      slug: "5-hidden-success-saboteurs-you-need-to-overcome",
      title: "5 Hidden Success Saboteurs You Need to Overcome",
      excerpt: "Are you a goal-oriented professional feeling stuck on your path to success? You might be falling prey to hidden success saboteurs - sneaky mental blocks that can hold you back.",
      category: "mindset",
      author: "Mithlesh Singh",
      date: "July 10, 2024",
      readTime: "8 min read",
      image: "/placeholder.svg",
      tags: ["Success", "Saboteurs", "Mindset"]
    },
    {
      slug: "7-signs-that-shows-you-are-a-great-genuine-person-at-heart",
      title: "7 Signs That Show You Are a Great, Genuine Person at Heart",
      excerpt: "You embrace your imperfections. Genuine people are comfortable with their flaws and don't try to hide them from others.",
      category: "mindset",
      author: "Mithlesh Singh",
      date: "June 16, 2024",
      readTime: "5 min read",
      image: "/placeholder.svg",
      tags: ["Authenticity", "Character", "Self-Development"]
    },
    {
      slug: "15-life-skills-you-need-in-your-life",
      title: "15 Life Skills You Need in Your Life",
      excerpt: "Remember this: Your life skills are challenged as you face the world. School cannot wholly prepare you for the realities of adult life.",
      category: "mindset",
      author: "Mithlesh Singh",
      date: "April 12, 2024",
      readTime: "12 min read",
      image: "/placeholder.svg",
      tags: ["Life Skills", "Personal Development", "Growth"]
    },
    {
      slug: "energetic-alignment-manifestation-results",
      title: "Energetic Alignment: The Missing Link Between Manifestation and Results",
      excerpt: "Ever wondered why some people manifest effortlessly while others keep trying but see little progress? The secret lies in energetic alignment.",
      category: "manifestation",
      author: "Mithlesh Singh",
      date: "September 22, 2025",
      readTime: "10 min read",
      image: "/placeholder.svg",
      tags: ["Energy", "Alignment", "Manifestation"]
    },
    {
      slug: "quantum-manifestation-collapse-timelines",
      title: "Quantum Manifestation: How to Collapse Timelines and Attract Faster",
      excerpt: "Most people think manifestation is about waiting - waiting for the universe, waiting for signs, waiting for results. But what if you could collapse timelines?",
      category: "manifestation",
      author: "Mithlesh Singh",
      date: "September 21, 2025",
      readTime: "9 min read",
      image: "/placeholder.svg",
      tags: ["Quantum", "Manifestation", "Timelines"]
    },
    {
      slug: "manifestation-synchronicity-universe-signs",
      title: "Manifestation and Synchronicity: How to Recognize the Signs the Universe Sends You",
      excerpt: "When people think of manifestation, they often imagine vision boards, affirmations, or scripting. But what about the signs the universe sends back?",
      category: "manifestation",
      author: "Mithlesh Singh",
      date: "September 18, 2025",
      readTime: "8 min read",
      image: "/placeholder.svg",
      tags: ["Synchronicity", "Signs", "Universe"]
    },
    {
      slug: "identity-alchemy-manifestation-secret",
      title: "Identity Alchemy: Why Becoming Is the Real Secret to Manifestation",
      excerpt: "Most people approach manifestation as if it's a wish-list exercise: write down affirmations, visualize outcomes, hope for the best. But there's a deeper secret.",
      category: "manifestation",
      author: "Mithlesh Singh",
      date: "September 15, 2025",
      readTime: "11 min read",
      image: "/placeholder.svg",
      tags: ["Identity", "Alchemy", "Becoming"]
    },
    {
      slug: "power-of-pre-deciding",
      title: "The Power of Pre-Deciding: Why Most Manifestations Fail Before They Begin",
      excerpt: "We often talk about manifesting as if it starts when we decide what we want. But what if the real power lies in what happens before that moment?",
      category: "manifestation",
      author: "Mithlesh Singh",
      date: "September 14, 2025",
      readTime: "7 min read",
      image: "/placeholder.svg",
      tags: ["Pre-deciding", "Manifestation", "Success"]
    },
    {
      slug: "manifesting-from-your-mind",
      title: "Why You're Manifesting From Your Mind (Not Your Life) — And How to Shift It",
      excerpt: "Most people don't realize it, but they're not actually manifesting from their whole self. They're manifesting from their mind alone.",
      category: "manifestation",
      author: "Mithlesh Singh",
      date: "September 11, 2025",
      readTime: "9 min read",
      image: "/placeholder.svg",
      tags: ["Mind", "Embodiment", "Manifestation"]
    },
    {
      slug: "hire-a-manifestation-coach-online",
      title: "What to Know Before You Hire a Manifestation Coach Online",
      excerpt: "If you're considering working with a manifestation coach online, you're not alone and you're not crazy. Here's what you need to know first.",
      category: "coaching",
      author: "Mithlesh Singh",
      date: "September 8, 2025",
      readTime: "10 min read",
      image: "/placeholder.svg",
      tags: ["Coaching", "Online", "Manifestation"]
    },
    {
      slug: "mindset-traps-for-coaches",
      title: "Top 5 Mindset Traps That Keep Coaches Stuck (And How to Shift Them)",
      excerpt: "You've done the certifications. You've mapped out vision boards. You're journaling affirmations, grounding before every call. So why do you still feel stuck?",
      category: "coaching",
      author: "Mithlesh Singh",
      date: "August 17, 2025",
      readTime: "8 min read",
      image: "/placeholder.svg",
      tags: ["Mindset", "Coaching", "Traps"]
    },
    {
      slug: "5-common-business-problems-and-how-pivotsimply-solves-them",
      title: "5 Common Business Problems (and How PivotSimply Solves Them)",
      excerpt: "Running a coaching business shouldn't feel like you're barely keeping up. But for so many coaches and entrepreneurs, that's exactly how it feels.",
      category: "business",
      author: "Mithlesh Singh",
      date: "August 14, 2025",
      readTime: "9 min read",
      image: "/placeholder.svg",
      tags: ["Business", "Problems", "Solutions"]
    },
    {
      slug: "manifestation-isnt-landing",
      title: "5 Hidden Reasons Your Manifestation Isn't Landing (And What to Do Instead)",
      excerpt: "You're doing the work. You've made the vision boards. You've journaled affirmations. You're showing up with good vibes. So why isn't it working?",
      category: "manifestation",
      author: "Mithlesh Singh",
      date: "August 11, 2025",
      readTime: "10 min read",
      image: "/placeholder.svg",
      tags: ["Manifestation", "Blocks", "Results"]
    },
    {
      slug: "optimism-shapes-your-reality",
      title: "When Belief Becomes the Blueprint: How Optimism Shapes Your Reality",
      excerpt: "Two people. Same situation. A completely different experience. One feels stuck. The other sees a breakthrough waiting to happen.",
      category: "mindset",
      author: "Mithlesh Singh",
      date: "August 10, 2025",
      readTime: "8 min read",
      image: "/placeholder.svg",
      tags: ["Belief", "Optimism", "Reality"]
    },
    {
      slug: "fear-is-a-portal-not-a-problem",
      title: "Walk Through the Wobble: Why Fear Is a Portal, Not a Problem",
      excerpt: "Ever feel like fear means you're on the wrong path? What if it's actually the opposite? What if fear is a portal to your next level of growth?",
      category: "mindset",
      author: "Mithlesh Singh",
      date: "August 7, 2025",
      readTime: "7 min read",
      image: "/placeholder.svg",
      tags: ["Fear", "Growth", "Portal"]
    },
    {
      slug: "youre-not-broken-youre-processing",
      title: "When the Light Feels Dim You're Not Broken, You're Processing",
      excerpt: "Ever feel like you're moving through fog, even when life looks okay on paper? You're not broken. You're not behind. You're processing.",
      category: "mindset",
      author: "Mithlesh Singh",
      date: "August 4, 2025",
      readTime: "6 min read",
      image: "/placeholder.svg",
      tags: ["Processing", "Healing", "Growth"]
    },
    {
      slug: "permission-to-be-messy-because-progress-isnt-always-pretty",
      title: "Permission to Be Messy: Because Progress Isn't Always Pretty",
      excerpt: "Let's be honest. Not every day feels clear, productive, or Instagram-worthy. Some days you wake up and nothing feels aligned.",
      category: "mindset",
      author: "Mithlesh Singh",
      date: "August 3, 2025",
      readTime: "7 min read",
      image: "/placeholder.svg",
      tags: ["Progress", "Messy", "Growth"]
    },
    {
      slug: "no-normal-only-whats-aligned-for-you",
      title: "There Is No Normal, Only What's Aligned for You",
      excerpt: "Let's talk about the pressure to be 'normal.' To follow the script. Fit the mold. Do what everyone else is doing because it's safe.",
      category: "mindset",
      author: "Mithlesh Singh",
      date: "July 31, 2025",
      readTime: "6 min read",
      image: "/placeholder.svg",
      tags: ["Alignment", "Normal", "Authenticity"]
    },
    {
      slug: "when-fear-speaks-choose-to-move-anyway",
      title: "When Fear Speaks, Choose to Move Anyway",
      excerpt: "Fear doesn't always mean 'stop.' Sometimes, it means you're standing at the edge of something important. Something that could change everything.",
      category: "mindset",
      author: "Mithlesh Singh",
      date: "July 28, 2025",
      readTime: "8 min read",
      image: "/placeholder.svg",
      tags: ["Fear", "Action", "Courage"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 text-foreground">
              Insights & Wisdom
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
              Explore transformative insights on conscious living, business growth, and personal development
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                size="sm"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4">Featured Article</Badge>
            <h2 className="text-2xl font-playfair font-bold text-foreground">Latest Insight</h2>
          </div>
          
          <Card className="max-w-4xl mx-auto overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-video md:aspect-square bg-muted"></div>
              <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredPost.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <CardTitle className="text-2xl md:text-3xl font-playfair mb-4 text-foreground">
                  {featuredPost.title}
                </CardTitle>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                
                <Link to={`/blog/${featuredPost.slug}`}>
                  <Button className="self-start group">
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {filteredPosts.slice(1).map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                  <div className="aspect-video bg-muted"></div>
                  
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge 
                        variant="secondary" 
                        className={`text-xs ${
                          post.category === 'business' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-green-100 text-green-800'
                        }`}
                      >
                        {post.category === 'business' ? 'Business Growth' : 'Self Development'}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-xl font-playfair mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          <Tag className="w-2 h-2 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-playfair font-bold mb-4 text-foreground">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-muted-foreground mb-8">
              Get weekly insights on conscious living, business growth, and personal transformation delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input placeholder="Enter your email address" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;