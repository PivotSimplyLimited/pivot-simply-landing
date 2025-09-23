import { useState } from "react";
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
      id: 1,
      title: "5 Inner Success Saboteurs You Need to Overcome",
      excerpt: "Identify and eliminate the hidden internal obstacles that are sabotaging your success and learn how to transform them into stepping stones for achievement.",
      category: "mindset",
      author: "Mithlesh Singh",
      date: "2024-09-20",
      readTime: "8 min read",
      image: "/placeholder.svg",
      tags: ["Success", "Inner Work", "Saboteurs"]
    },
    {
      id: 2,
      title: "16 Life Skills You Need In Your Life",
      excerpt: "Master the essential life skills that successful people use daily to navigate challenges, build relationships, and create the life they desire.",
      category: "mindset",
      author: "Mithlesh Singh",
      date: "2024-09-18",
      readTime: "12 min read",
      image: "/placeholder.svg",
      tags: ["Life Skills", "Personal Development", "Success"]
    },
    {
      id: 3,
      title: "Energetic Alignment: The Healing Link Between Mind-Connection",
      excerpt: "Discover how to align your energy with your desires and create a powerful mind-body connection that accelerates healing and manifestation.",
      category: "manifestation",
      author: "Mithlesh Singh",
      date: "2024-09-15",
      readTime: "10 min read",
      image: "/placeholder.svg",
      tags: ["Energy", "Alignment", "Healing"]
    },
    {
      id: 4,
      title: "Quantum Manifestation: How to Collapse Timelines",
      excerpt: "Learn advanced manifestation techniques to collapse timelines and bring your desires into reality faster through quantum principles and conscious creation.",
      category: "manifestation",
      author: "Mithlesh Singh",
      date: "2024-09-12",
      readTime: "9 min read",
      image: "/placeholder.svg",
      tags: ["Quantum", "Manifestation", "Timeline"]
    },
    {
      id: 5,
      title: "Manifestation and Synchronicity - How to Recognize the Signs",
      excerpt: "Understand the language of the universe through synchronicities and learn how to recognize and interpret the signs that guide your manifestation journey.",
      category: "manifestation",
      author: "Mithlesh Singh",
      date: "2024-09-10",
      readTime: "7 min read",
      image: "/placeholder.svg",
      tags: ["Synchronicity", "Signs", "Universe"]
    },
    {
      id: 6,
      title: "Energy Alchemy: Why Becoming Is the New Doing",
      excerpt: "Transform your approach to success by focusing on becoming rather than doing. Learn how to alchemize your energy for effortless achievement.",
      category: "manifestation",
      author: "Mithlesh Singh",
      date: "2024-09-08",
      readTime: "8 min read",
      image: "/placeholder.svg",
      tags: ["Energy", "Alchemy", "Becoming"]
    },
    {
      id: 7,
      title: "The Power of Pre-Deciding: Why Most Transformations Fail",
      excerpt: "Discover the critical step most people miss in transformation and how pre-deciding your future self can guarantee lasting change and success.",
      category: "mindset",
      author: "Mithlesh Singh",
      date: "2024-09-05",
      readTime: "6 min read",
      image: "/placeholder.svg",
      tags: ["Pre-deciding", "Transformation", "Change"]
    },
    {
      id: 8,
      title: "Why You're Manifesting From Your Wound, Not Your Power",
      excerpt: "Uncover how unhealed wounds sabotage your manifestation efforts and learn to manifest from your authentic power instead of unconscious patterns.",
      category: "manifestation",
      author: "Mithlesh Singh",
      date: "2024-09-03",
      readTime: "9 min read",
      image: "/placeholder.svg",
      tags: ["Wounds", "Power", "Healing"]
    },
    {
      id: 9,
      title: "What to Know Before You Start as A Manifestation Coach",
      excerpt: "Essential insights for aspiring manifestation coaches including the skills, mindset, and business knowledge needed to help others create their reality.",
      category: "coaching",
      author: "Mithlesh Singh",
      date: "2024-09-01",
      readTime: "11 min read",
      image: "/placeholder.svg",
      tags: ["Coaching", "Business", "Manifestation"]
    },
    {
      id: 10,
      title: "Top 5 Mindset Traps That Keep You From Coaching Success",
      excerpt: "Identify and overcome the most common mindset blocks that prevent coaches from building successful practices and reaching their income goals.",
      category: "coaching",
      author: "Mithlesh Singh",
      date: "2024-08-28",
      readTime: "7 min read",
      image: "/placeholder.svg",
      tags: ["Mindset", "Coaching", "Success"]
    },
    {
      id: 11,
      title: "3 Common Business Problems (and How Manifestation Helps)",
      excerpt: "Learn how to solve typical business challenges using manifestation principles and conscious creation techniques for sustainable growth.",
      category: "business",
      author: "Mithlesh Singh",
      date: "2024-08-25",
      readTime: "8 min read",
      image: "/placeholder.svg",
      tags: ["Business", "Problems", "Solutions"]
    },
    {
      id: 12,
      title: "5 Hidden Reasons Your Manifestation Isn't Landing",
      excerpt: "Discover the subtle but powerful blocks that prevent your manifestations from coming to fruition and how to clear them for faster results.",
      category: "manifestation",
      author: "Mithlesh Singh",
      date: "2024-08-22",
      readTime: "9 min read",
      image: "/placeholder.svg",
      tags: ["Manifestation", "Blocks", "Results"]
    },
    {
      id: 13,
      title: "When Belief Becomes the Blueprint: New Approach to Success",
      excerpt: "Transform your relationship with belief and learn how to use your belief system as a blueprint for creating extraordinary success in all areas.",
      category: "mindset",
      author: "Mithlesh Singh",
      date: "2024-08-20",
      readTime: "10 min read",
      image: "/placeholder.svg",
      tags: ["Belief", "Blueprint", "Success"]
    },
    {
      id: 14,
      title: "Walk Through The Wobble: Why Fear Isn't Your Enemy",
      excerpt: "Reframe your relationship with fear and learn how to navigate uncertainty with grace while staying aligned with your highest vision.",
      category: "mindset",
      author: "Mithlesh Singh",
      date: "2024-08-18",
      readTime: "6 min read",
      image: "/placeholder.svg",
      tags: ["Fear", "Courage", "Growth"]
    },
    {
      id: 15,
      title: "When The Light Feels Dim You're Not Broken",
      excerpt: "Find hope and guidance during dark moments on your spiritual journey. Learn why these periods are essential for your growth and transformation.",
      category: "mindset",
      author: "Mithlesh Singh",
      date: "2024-08-15",
      readTime: "8 min read",
      image: "/placeholder.svg",
      tags: ["Hope", "Healing", "Journey"]
    },
    {
      id: 16,
      title: "Permission to be Messy: Because Progress Isn't Linear",
      excerpt: "Give yourself permission to embrace the messy middle of transformation and understand why non-linear progress is actually a sign of deep change.",
      category: "mindset",
      author: "Mithlesh Singh",
      date: "2024-08-12",
      readTime: "7 min read",
      image: "/placeholder.svg",
      tags: ["Progress", "Growth", "Transformation"]
    },
    {
      id: 17,
      title: "There is No Normal - Only What's Aligned",
      excerpt: "Release the pressure to be 'normal' and discover how living in alignment with your authentic self creates a more fulfilling and successful life.",
      category: "mindset",
      author: "Mithlesh Singh",
      date: "2024-08-10",
      readTime: "6 min read",
      image: "/placeholder.svg",
      tags: ["Alignment", "Authenticity", "Normal"]
    },
    {
      id: 18,
      title: "When Fear Speaks, Choose to Move Anyway",
      excerpt: "Master the art of taking action despite fear and learn practical strategies to move forward when your comfort zone tries to hold you back.",
      category: "mindset",
      author: "Mithlesh Singh",
      date: "2024-08-08",
      readTime: "8 min read",
      image: "/placeholder.svg",
      tags: ["Fear", "Action", "Courage"]
    },
    {
      id: 19,
      title: "Top 5 Mistakes New Digital Coaches Make",
      excerpt: "Avoid the most common pitfalls that new coaches face when building their online presence and learn how to set yourself up for success from day one.",
      category: "coaching",
      author: "Mithlesh Singh",
      date: "2024-08-05",
      readTime: "9 min read",
      image: "/placeholder.svg",
      tags: ["Digital", "Coaching", "Mistakes"]
    },
    {
      id: 20,
      title: "8 Rules to Create Unstoppable Hope",
      excerpt: "Build unshakeable hope and resilience with these powerful principles that will keep you moving forward no matter what challenges you face.",
      category: "mindset",
      author: "Mithlesh Singh",
      date: "2024-08-03",
      readTime: "7 min read",
      image: "/placeholder.svg",
      tags: ["Hope", "Resilience", "Rules"]
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
                
                <Button className="self-start group">
                  Read Full Article
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
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
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
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