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
      title: "The Power of Conscious Leadership in Business Growth",
      excerpt: "Discover how conscious leadership principles can transform your business approach and create sustainable growth while maintaining authentic values.",
      category: "business",
      author: "Mithlesh Singh",
      date: "2024-03-15",
      readTime: "8 min read",
      image: "/placeholder.svg",
      tags: ["Leadership", "Business Growth", "Consciousness"]
    },
    {
      id: 2,
      title: "Breaking Through Self-Sabotage: A Conscious Approach",
      excerpt: "Understand the root causes of self-sabotage and learn practical techniques to overcome limiting patterns that hold you back from your potential.",
      category: "self-development",
      author: "Mithlesh Singh",
      date: "2024-03-12",
      readTime: "6 min read",
      image: "/placeholder.svg",
      tags: ["Self-Sabotage", "Personal Growth", "Mindset"]
    },
    {
      id: 3,
      title: "Monetizing Your Genius: From Passion to Profit",
      excerpt: "Learn how to identify your unique gifts and transform them into profitable business ventures while staying aligned with your authentic self.",
      category: "business",
      author: "Mithlesh Singh",
      date: "2024-03-10",
      readTime: "10 min read",
      image: "/placeholder.svg",
      tags: ["Monetization", "Business Strategy", "Authentic Success"]
    },
    {
      id: 4,
      title: "The Art of Spiritual Alignment in Daily Life",
      excerpt: "Explore practical ways to maintain spiritual alignment in your daily routine and decision-making process for greater fulfillment and purpose.",
      category: "self-development",
      author: "Mithlesh Singh",
      date: "2024-03-08",
      readTime: "7 min read",
      image: "/placeholder.svg",
      tags: ["Spirituality", "Alignment", "Daily Practice"]
    },
    {
      id: 5,
      title: "Building Wealth with Conscious Money Mindset",
      excerpt: "Transform your relationship with money by addressing limiting beliefs and developing a conscious approach to wealth building that serves your highest good.",
      category: "business",
      author: "Mithlesh Singh",
      date: "2024-03-05",
      readTime: "9 min read",
      image: "/placeholder.svg",
      tags: ["Wealth Building", "Money Mindset", "Financial Freedom"]
    },
    {
      id: 6,
      title: "Shadow Work: Integrating Your Hidden Self",
      excerpt: "Dive deep into shadow work practices to integrate suppressed aspects of yourself and unlock greater authenticity and personal power.",
      category: "self-development",
      author: "Mithlesh Singh",
      date: "2024-03-03",
      readTime: "12 min read",
      image: "/placeholder.svg",
      tags: ["Shadow Work", "Integration", "Self-Discovery"]
    },
    {
      id: 7,
      title: "Scaling Your Business Without Losing Your Soul",
      excerpt: "Strategies for growing your business while maintaining your values, purpose, and authentic connection with your mission and customers.",
      category: "business",
      author: "Mithlesh Singh",
      date: "2024-03-01",
      readTime: "8 min read",
      image: "/placeholder.svg",
      tags: ["Business Scaling", "Authentic Growth", "Values-Based Business"]
    },
    {
      id: 8,
      title: "The Neuroscience of Transformation",
      excerpt: "Understanding how your brain creates change and how to work with neuroplasticity to create lasting personal and professional transformation.",
      category: "self-development",
      author: "Mithlesh Singh",
      date: "2024-02-28",
      readTime: "11 min read",
      image: "/placeholder.svg",
      tags: ["Neuroscience", "Transformation", "Brain Training"]
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