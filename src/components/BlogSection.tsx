
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const blogPosts = [
  {
    id: "1",
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.",
    image: "/assets/images/website.jpg",
    date: "June 09, 2025",
    readTime: "5 min read",
    category: "Web Development"
  },
  {
    id: "2",
    title: "UI/UX Design Principles That Convert Visitors to Customers",
    excerpt: "Learn how strategic design decisions can significantly impact your conversion rates and user engagement.",
    image: "/assets/images/principles.jpg",
    date: "June 12, 2025",
    readTime: "4 min read",
    category: "Design"
  },
  {
    id: "3",
    title: "Professional Photography Tips for Your Business Brand",
    excerpt: "Discover essential photography techniques to elevate your brand's visual storytelling and market presence.",
    image: "/assets/images/photo.jpg",
    date: "June 14, 2025",
    readTime: "6 min read",
    category: "Photography"
  }
];

export default function BlogSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <span className="text-sm text-primary font-medium uppercase tracking-wider">
            Our Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Latest Insights & Tips
          </h2>
          <p className="text-muted-foreground">
            Stay updated with the latest trends, tips, and insights from the world of web development, design, and digital marketing.
          </p>
        </div>
        
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
        
        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link to="/blog">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
