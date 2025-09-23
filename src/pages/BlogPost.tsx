import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, User, Tag, Share2 } from "lucide-react";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { id } = useParams();

  // Blog posts data (in a real app, this would come from an API)
  const blogPosts = [
    {
      id: 1,
      title: "5 Inner Success Saboteurs You Need to Overcome",
      excerpt: "Identify and eliminate the hidden internal obstacles that are sabotaging your success and learn how to transform them into stepping stones for achievement.",
      content: `
        <p>Success isn't just about external strategies and tactics—it's also about overcoming the internal obstacles that can sabotage your progress. These "inner success saboteurs" are often unconscious patterns that keep you stuck despite your best efforts.</p>
        
        <h2>1. The Perfectionist Trap</h2>
        <p>Perfectionism masquerades as a high standard, but it's actually fear in disguise. When you're paralyzed by the need to get everything perfect before taking action, you're letting this saboteur control your success.</p>
        
        <h2>2. Imposter Syndrome</h2>
        <p>That voice telling you "you don't belong here" or "you're not qualified enough" is one of the most common success saboteurs. It keeps you playing small and avoiding opportunities that could transform your life.</p>
        
        <h2>3. The Comparison Trap</h2>
        <p>When you constantly measure your progress against others, you lose sight of your own unique journey. This saboteur convinces you that everyone else has it figured out while you're struggling.</p>
        
        <h2>4. Fear of Failure</h2>
        <p>This saboteur keeps you in your comfort zone by making failure seem catastrophic. But failure is actually one of your greatest teachers and a necessary step on the path to success.</p>
        
        <h2>5. The Need for External Validation</h2>
        <p>When your sense of worth depends on what others think, you give away your power. This saboteur makes you chase approval instead of pursuing what truly matters to you.</p>
        
        <h2>Transforming Saboteurs into Stepping Stones</h2>
        <p>The key isn't to eliminate these patterns—it's to transform them. Each saboteur contains a gift when you learn to work with it rather than against it. Perfectionism can become excellence, imposter syndrome can become humility, and fear can become intuitive guidance.</p>
        
        <p>Remember, awareness is the first step to transformation. By recognizing these patterns, you've already begun the journey of turning your inner obstacles into your greatest strengths.</p>
      `,
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
      content: `
        <p>Success in life isn't just about what you know—it's about the skills you've developed to navigate challenges, build meaningful relationships, and create the life you desire. Here are 16 essential life skills that can transform your personal and professional journey.</p>
        
        <h2>Communication & Relationship Skills</h2>
        
        <h3>1. Active Listening</h3>
        <p>The ability to truly hear and understand others is the foundation of all meaningful relationships. Active listening involves being fully present and engaged in conversations.</p>
        
        <h3>2. Emotional Intelligence</h3>
        <p>Understanding and managing your emotions while being aware of others' emotional states is crucial for personal and professional success.</p>
        
        <h3>3. Conflict Resolution</h3>
        <p>Learning to navigate disagreements and find win-win solutions strengthens relationships and prevents small issues from becoming major problems.</p>
        
        <h3>4. Boundary Setting</h3>
        <p>Knowing how to say no and protect your energy is essential for maintaining healthy relationships and avoiding burnout.</p>
        
        <h2>Personal Development Skills</h2>
        
        <h3>5. Self-Reflection</h3>
        <p>Regular self-assessment helps you understand your patterns, motivations, and areas for growth.</p>
        
        <h3>6. Adaptability</h3>
        <p>The ability to adjust to changing circumstances with grace and resilience is invaluable in our rapidly evolving world.</p>
        
        <h3>7. Critical Thinking</h3>
        <p>Developing the ability to analyze information objectively and make sound decisions protects you from manipulation and poor choices.</p>
        
        <h3>8. Goal Setting & Achievement</h3>
        <p>Creating clear, actionable goals and developing systems to achieve them is the bridge between dreams and reality.</p>
        
        <h2>Practical Life Skills</h2>
        
        <h3>9. Financial Literacy</h3>
        <p>Understanding how to manage, save, and invest money is fundamental to creating security and freedom.</p>
        
        <h3>10. Time Management</h3>
        <p>Learning to prioritize tasks and manage your schedule effectively multiplies your productivity and reduces stress.</p>
        
        <h3>11. Problem-Solving</h3>
        <p>Developing a systematic approach to challenges helps you overcome obstacles with confidence.</p>
        
        <h3>12. Decision-Making</h3>
        <p>The ability to make clear, timely decisions, even with incomplete information, accelerates your progress in all areas of life.</p>
        
        <h2>Leadership & Influence Skills</h2>
        
        <h3>13. Persuasion & Influence</h3>
        <p>Learning to communicate your ideas effectively and inspire others to action is valuable in every aspect of life.</p>
        
        <h3>14. Team Collaboration</h3>
        <p>The ability to work effectively with others toward common goals amplifies what you can achieve alone.</p>
        
        <h3>15. Mentoring & Teaching</h3>
        <p>Sharing your knowledge and helping others grow not only benefits them but reinforces your own learning.</p>
        
        <h3>16. Resilience & Recovery</h3>
        <p>Developing the ability to bounce back from setbacks and maintain perspective during difficult times is perhaps the most important skill of all.</p>
        
        <h2>Starting Your Skills Development Journey</h2>
        <p>You don't need to master all these skills at once. Choose 2-3 that resonate most with your current challenges or goals. Focus on consistent practice rather than perfection, and remember that these skills compound over time.</p>
        
        <p>The investment you make in developing these life skills will pay dividends in every area of your life, from your relationships to your career to your personal fulfillment.</p>
      `,
      category: "mindset",
      author: "Mithlesh Singh",
      date: "2024-09-18",
      readTime: "12 min read",
      image: "/placeholder.svg",
      tags: ["Life Skills", "Personal Development", "Success"]
    },
    // Add more blog posts as needed with similar structure
  ];

  const post = blogPosts.find(p => p.id === parseInt(id || "1"));

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/blog">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
            <Button variant="ghost" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </header>

      {/* Article */}
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Article Header */}
          <header className="mb-12 text-center">
            <div className="flex justify-center mb-4">
              <Badge variant="secondary">{post.category}</Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-foreground leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="flex justify-center gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          {/* Featured Image */}
          <div className="aspect-video bg-muted rounded-lg mb-12"></div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:font-playfair prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{post.author}</p>
                  <p className="text-sm text-muted-foreground">Transformation Coach & Mentor</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share Article
              </Button>
            </div>
          </footer>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">
              Related Articles
            </h2>
            <p className="text-muted-foreground">
              Continue your journey with these related insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map((relatedPost) => (
              <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                  <div className="aspect-video bg-muted"></div>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="text-xs mb-3">
                      {relatedPost.category}
                    </Badge>
                    <h3 className="text-lg font-playfair mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;