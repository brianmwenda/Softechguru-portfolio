
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Code, Palette, Camera, Video, Globe, Smartphone, Search, Zap } from "lucide-react";

export default function Amenities() {
  const { t } = useLanguage();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  const serviceCategories = [
    {
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies",
      items: [
        { title: "Frontend Development", description: "React, Vue, Angular applications", icon: <Code /> },
        { title: "Backend Development", description: "Node.js, Python, database integration", icon: <Globe /> },
        { title: "Mobile Apps", description: "React Native, responsive design", icon: <Smartphone /> },
        { title: "Performance Optimization", description: "Fast loading, SEO optimized", icon: <Zap /> }
      ]
    },
    {
      title: "Design Services",
      description: "Beautiful and intuitive user experiences",
      items: [
        { title: "UI/UX Design", description: "User-centered design approaches", icon: <Palette /> },
        { title: "Brand Identity", description: "Logo and brand design", icon: <Palette /> },
        { title: "Wireframing", description: "Prototyping and user flows", icon: <Palette /> },
        { title: "Design Systems", description: "Consistent design components", icon: <Palette /> }
      ]
    },
    {
      title: "Visual Content",
      description: "Professional photography and videography services",
      items: [
        { title: "Product Photography", description: "High-quality product images", icon: <Camera /> },
        { title: "Corporate Videos", description: "Professional video content", icon: <Video /> },
        { title: "Brand Photography", description: "Lifestyle and brand imagery", icon: <Camera /> },
        { title: "Social Media Content", description: "Engaging visual content", icon: <Video /> }
      ]
    },
    {
      title: "Digital Marketing",
      description: "Grow your online presence and reach more customers",
      items: [
        { title: "SEO Optimization", description: "Improve search rankings", icon: <Search /> },
        { title: "Content Strategy", description: "Engaging content creation", icon: <Globe /> },
        { title: "Social Media", description: "Platform management and growth", icon: <Globe /> },
        { title: "Analytics", description: "Performance tracking and insights", icon: <Zap /> }
      ]
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-sea-light to-white dark:from-sea-dark dark:to-background">
          <div className="container relative z-10 pt-20">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                WebDev Studio
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                Our Services & Capabilities
              </h1>
              <p className="text-muted-foreground">
                Comprehensive digital solutions to help your business thrive online
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-sea-light blur-3xl" />
          </div>
        </section>
        
        {/* Description Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-muted-foreground">
                From concept to launch, we provide end-to-end digital solutions that drive results and help your business grow.
              </p>
            </div>
          </div>
        </section>
        
        {/* Service Categories Sections */}
        {serviceCategories.map((category, categoryIndex) => {
          const isEven = categoryIndex % 2 === 0;
          
          return (
            <section key={category.title} className={`py-16 ${isEven ? 'bg-card' : ''}`}>
              <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    {category.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {category.items.map((item, index) => (
                    <div 
                      key={index} 
                      className="glass-card p-6 rounded-xl flex flex-col items-center text-center animate-fade-in"
                      style={{ animationDelay: `${(index + 1) * 100}ms` }}
                    >
                      <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
        
        {/* Gallery Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">
                {t.gallery.title}
              </h2>
              <p className="text-muted-foreground">
                {t.gallery.subtitle}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div 
                  key={index} 
                  className="aspect-square rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105"
                >
                  <img 
                    src={`https://images.unsplash.com/photo-${1550000000000 + index * 100000}?w=400&h=400&fit=crop`}
                    alt={`Service ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
