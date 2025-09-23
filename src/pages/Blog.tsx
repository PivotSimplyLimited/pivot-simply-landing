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
    { id: "self-development", label: "Self Development" },
    { id: "mindset", label: "Mindset & Success" }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Manifestation Mastery: The 369 Tesla Method Explained",
      excerpt: "Discover how Nikola Tesla's 369 method can transform your manifestation practice and accelerate your goal achievement through this powerful numerology technique.",
      category: "self-development",
      author: "Mithlesh Singh",
      date: "2024-08-15",
      readTime: "8 min read",
      image: "/placeholder.svg",
      tags: ["Manifestation", "Tesla Method", "Numerology"]
    },
    {
      id: 2,
      title: "Building Your Brand: From Vision to Reality",
      excerpt: "Essential strategies for entrepreneurs looking to create a powerful brand that resonates with their target audience and drives sustainable business growth.",
      category: "business",
      author: "Mithlesh Singh", 
      date: "2024-08-10",
      readTime: "6 min read",
      image: "/placeholder.svg",
      tags: ["Branding", "Business Strategy", "Marketing"]
    },
    {
      id: 3,
      title: "The Power of Self-Discovery in Personal Transformation",
      excerpt: "Learn how understanding your authentic self becomes the foundation for lasting personal and professional growth in this comprehensive guide to self-awareness.",
      category: "self-development",
      author: "Content Team",
      date: "2024-08-05", 
      readTime: "7 min read",
      image: "/placeholder.svg",
      tags: ["Self Discovery", "Personal Growth", "Transformation"]
    },
    {
      id: 4,
      title: "Digital Marketing Strategies for Coaches and Entrepreneurs",
      excerpt: "Practical tips and proven strategies to build your online presence and attract your ideal clients through effective digital marketing channels.",
      category: "business",
      author: "Mithlesh Singh",
      date: "2024-08-01",
      readTime: "9 min read", 
      image: "/placeholder.svg",
      tags: ["Digital Marketing", "SEO", "Content Creation"]
    },
    {
      id: 5,
      title: "Unleashing Your Inner Power: A Guide to Self-Mastery",
      excerpt: "Discover the tools and techniques needed to unlock your potential and step into your power as a conscious creator in both life and business.",
      category: "self-development",
      author: "Mithlesh Singh",
      date: "2024-07-28",
      readTime: "8 min read",
      image: "/placeholder.svg", 
      tags: ["Self Mastery", "Personal Power", "Consciousness"]
    },
    {
      id: 6,
      title: "Time Management & Productivity Hacks for Busy Entrepreneurs",
      excerpt: "Master the art of time management with proven productivity techniques that successful entrepreneurs use daily to maximize their effectiveness.",
      category: "business",
      author: "Content Team",
      date: "2024-07-25",
      readTime: "6 min read",
      image: "/placeholder.svg",
      tags: ["Time Management", "Productivity", "Entrepreneurship"]
    },
    {
      id: 7,
      title: "Building Self-Esteem: The Foundation of Success",
      excerpt: "Explore practical methods to build unshakeable self-confidence and develop a positive self-image that drives success in all areas of life.",
      category: "self-development",
      author: "Mithlesh Singh",
      date: "2024-07-20",
      readTime: "7 min read",
      image: "/placeholder.svg",
      tags: ["Self Esteem", "Confidence", "Success Mindset"]
    },
    {
      id: 8,
      title: "Content Creation Strategies That Drive Engagement",
      excerpt: "Learn how to create compelling content that connects with your audience and builds a loyal community around your brand and message.",
      category: "business",
      author: "Content Team", 
      date: "2024-07-15",
      readTime: "8 min read",
      image: "/placeholder.svg",
      tags: ["Content Creation", "Engagement", "Community Building"]
    },
    {
      id: 9,
      title: "The Entrepreneur's Guide to Business Coaching",
      excerpt: "Understand how business coaching can accelerate your growth and help you overcome the common challenges and obstacles of entrepreneurship.",
      category: "business",
      author: "Mithlesh Singh",
      date: "2024-07-10",
      readTime: "9 min read",
      image: "/placeholder.svg",
      tags: ["Business Coaching", "Entrepreneurship", "Growth"]
    },
    {
      id: 10,
      title: "Developing Life Skills for Personal Excellence",
      excerpt: "Essential life skills that every successful person masters, from emotional intelligence and effective communication to leadership abilities.",
      category: "self-development",
      author: "Content Team",
      date: "2024-07-05",
      readTime: "6 min read", 
      image: "/placeholder.svg",
      tags: ["Life Skills", "Emotional Intelligence", "Leadership"]
    },
    {
      id: 11,
      title: "SEO Fundamentals for Business Growth",
      excerpt: "Master the basics of search engine optimization to increase your online visibility and attract more qualified leads to your business.",
      category: "business",
      author: "Content Team",
      date: "2024-07-01",
      readTime: "8 min read",
      image: "/placeholder.svg", 
      tags: ["SEO", "Digital Marketing", "Online Visibility"]
    },
    {
      id: 12,
      title: "Global Transformation Through Conscious Leadership",
      excerpt: "How conscious leaders are creating positive change in the world and how you can join this transformative movement for global impact.",
      category: "self-development", 
      author: "Mithlesh Singh",
      date: "2024-06-25",
      readTime: "10 min read",
      image: "/placeholder.svg",
      tags: ["Conscious Leadership", "Global Impact", "Transformation"]
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