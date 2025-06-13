
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, User, Clock } from "lucide-react";

// Sample blog post data - in a real app, this would come from a CMS or API
const blogPosts = {
  "1": {
    title: "The Future of Web Development: Trends to Watch in 2024",
    content: `
      <p>Web development is evolving at an unprecedented pace, and 2024 promises to bring exciting new trends that will reshape how we build and interact with websites. In this comprehensive guide, we'll explore the most significant trends that every developer and business owner should be aware of.</p>
      
      <h3>1. AI-Powered Development Tools</h3>
      <p>Artificial Intelligence is revolutionizing the development process. From code generation to automated testing, AI tools are making developers more productive than ever. Tools like GitHub Copilot and ChatGPT are already changing how we write code, and this trend will only accelerate in 2024.</p>
      
      <h3>2. Progressive Web Apps (PWAs)</h3>
      <p>PWAs continue to bridge the gap between web and native applications. With improved browser support and new capabilities, PWAs offer near-native performance while maintaining the reach and accessibility of web applications.</p>
      
      <h3>3. Serverless Architecture</h3>
      <p>Serverless computing is becoming the default choice for many applications. It offers better scalability, reduced costs, and faster deployment times. Edge computing is also gaining traction, bringing computation closer to users for improved performance.</p>
      
      <h3>4. Advanced CSS Features</h3>
      <p>CSS continues to evolve with new features like container queries, cascade layers, and improved grid layouts. These features give developers more control over responsive design and layout management.</p>
      
      <h3>5. Enhanced Security Measures</h3>
      <p>With increasing cyber threats, security is becoming a top priority. Zero-trust architecture, advanced authentication methods, and improved encryption standards are becoming standard practices.</p>
      
      <h3>Conclusion</h3>
      <p>The future of web development is bright and full of opportunities. By staying informed about these trends and continuously learning, developers can create better, more efficient, and more secure web applications.</p>
    `,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop",
    date: "March 15, 2024",
    readTime: "5 min read",
    author: "Development Team",
    category: "Web Development"
  },
  "2": {
    title: "UI/UX Design Principles That Convert Visitors to Customers",
    content: `
      <p>Great design is more than just aesthetics—it's about creating experiences that guide users toward taking action. In this article, we'll explore the fundamental UI/UX principles that can significantly improve your conversion rates.</p>
      
      <h3>1. Clear Value Proposition</h3>
      <p>Your visitors should understand what you offer within seconds of landing on your page. A clear, compelling value proposition placed prominently on your homepage is crucial for keeping visitors engaged.</p>
      
      <h3>2. Intuitive Navigation</h3>
      <p>Users should never feel lost on your website. Implement clear, logical navigation structures with descriptive labels. Breadcrumbs, search functionality, and a well-organized menu system all contribute to better user experience.</p>
      
      <h3>3. Responsive Design</h3>
      <p>With mobile traffic accounting for over 50% of web browsing, responsive design isn't optional—it's essential. Your website must provide an excellent experience across all devices and screen sizes.</p>
      
      <h3>4. Loading Speed Optimization</h3>
      <p>Page speed directly impacts both user experience and conversion rates. Optimize images, minimize HTTP requests, and use content delivery networks (CDNs) to ensure fast loading times.</p>
      
      <h3>5. Trust Signals</h3>
      <p>Build credibility with testimonials, reviews, security badges, and professional design. Trust signals help reduce friction in the conversion process and make users more comfortable taking action.</p>
      
      <h3>Best Practices for Conversion</h3>
      <p>Focus on creating a seamless user journey from awareness to action. Use A/B testing to optimize your designs and always prioritize user needs over business preferences.</p>
    `,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop",
    date: "March 10, 2024",
    readTime: "4 min read",
    author: "Design Team",
    category: "Design"
  },
  "3": {
    title: "Professional Photography Tips for Your Business Brand",
    content: `
      <p>Visual content is more important than ever in today's digital landscape. Professional photography can set your brand apart and create a lasting impression on your audience. Here are essential tips to elevate your brand photography.</p>
      
      <h3>1. Define Your Brand Aesthetic</h3>
      <p>Before picking up a camera, establish a clear visual identity for your brand. Consider your color palette, mood, and style. Consistency across all your visual content will strengthen brand recognition.</p>
      
      <h3>2. Invest in Quality Equipment</h3>
      <p>While smartphone cameras have improved dramatically, professional equipment still makes a difference. A good DSLR or mirrorless camera, quality lenses, and proper lighting equipment are worthwhile investments.</p>
      
      <h3>3. Master Lighting Techniques</h3>
      <p>Lighting can make or break a photograph. Learn to work with natural light and invest in artificial lighting setups. Soft, diffused light generally works best for business photography.</p>
      
      <h3>4. Focus on Composition</h3>
      <p>Apply fundamental composition rules like the rule of thirds, leading lines, and framing. These techniques will help create more visually appealing and professional-looking images.</p>
      
      <h3>5. Show Your Team and Culture</h3>
      <p>Authentic photos of your team and workplace help humanize your brand. Candid shots of your team working, collaborating, and celebrating create emotional connections with your audience.</p>
      
      <h3>6. Product Photography Excellence</h3>
      <p>If you sell products, high-quality product photography is crucial. Use clean backgrounds, multiple angles, and detail shots to showcase your products effectively.</p>
      
      <h3>Post-Processing Tips</h3>
      <p>Learn basic photo editing skills to enhance your images. Consistency in editing style helps maintain your brand aesthetic across all platforms.</p>
    `,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1200&h=600&fit=crop",
    date: "March 5, 2024",
    readTime: "6 min read",
    author: "Photography Team",
    category: "Photography"
  }
};

export default function BlogPost() {
  const { id } = useParams();
  const post = id ? blogPosts[id as keyof typeof blogPosts] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-sea-light to-white dark:from-sea-dark dark:to-background">
          <div className="container relative z-10 pt-20">
            <div className="max-w-4xl mx-auto">
              <Button asChild variant="ghost" className="mb-6">
                <Link to="/blog" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
              
              <div className="mb-6">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Image */}
        <section className="py-0">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-xl mb-12">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Content */}
        <section className="pb-20">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div 
                className="prose prose-lg max-w-none dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <div className="mt-12 pt-8 border-t">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Ready to get started?</h3>
                    <p className="text-muted-foreground">Let's discuss your project and bring your ideas to life.</p>
                  </div>
                  <Button asChild className="btn-primary">
                    <Link to="/contact">Get In Touch</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
