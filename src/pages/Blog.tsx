
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const blogPosts = [
  {
    id: "1",
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps and serverless architecture.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Web Development"
  },
  {
    id: "2",
    title: "UI/UX Design Principles That Convert Visitors to Customers",
    excerpt: "Learn how strategic design decisions can significantly impact your conversion rates and user engagement through proven principles.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    date: "March 10, 2024",
    readTime: "4 min read",
    category: "Design"
  },
  {
    id: "3",
    title: "Professional Photography Tips for Your Business Brand",
    excerpt: "Discover essential photography techniques to elevate your brand's visual storytelling and create compelling market presence.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Photography"
  },
  {
    id: "4",
    title: "Video Marketing Strategies That Drive Engagement",
    excerpt: "Unlock the power of video marketing with proven strategies that capture attention and drive meaningful engagement with your audience.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
    date: "February 28, 2024",
    readTime: "7 min read",
    category: "Videography"
  },
  {
    id: "5",
    title: "Building Responsive Websites: A Complete Guide",
    excerpt: "Master the art of responsive web design with practical tips and techniques for creating websites that work perfectly on all devices.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    date: "February 20, 2024",
    readTime: "8 min read",
    category: "Web Development"
  },
  {
    id: "6",
    title: "Color Psychology in Web Design",
    excerpt: "Understand how colors influence user behavior and learn to choose the perfect color palette for your brand and website.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    date: "February 15, 2024",
    readTime: "5 min read",
    category: "Design"
  }
];

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-sea-light to-white dark:from-sea-dark dark:to-background">
          <div className="container relative z-10 pt-20">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                Our Blog
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                Latest Insights & Tips
              </h1>
              <p className="text-muted-foreground">
                Stay updated with the latest trends, tips, and insights from the world of web development, design, photography, and digital marketing.
              </p>
            </div>
          </div>
        </section>
        
        {/* Blog Posts */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card 
                  key={post.id} 
                  className="animate-fade-in hover:shadow-lg transition-all duration-300 overflow-hidden"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <CardHeader className="p-0">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button asChild variant="ghost" className="p-0 h-auto font-medium">
                      <Link to={`/blog/${post.id}`} className="flex items-center gap-2">
                        Learn More <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
