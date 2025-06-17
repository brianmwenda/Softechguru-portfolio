
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { Code, Palette, Camera, Video, Globe, Smartphone, ShoppingCart, Zap } from "lucide-react";

// Service types data
const allServices = [
  {
    id: "1",
    name: "Custom Website Development",
    description: "Professional websites built with modern technologies like React, TypeScript, and responsive design.",
    category: "Web Development",
    icon: <Code className="h-8 w-8" />,
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern Tech Stack"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop"
  },
  {
    id: "2",
    name: "E-commerce Solutions", 
    description: "Complete online stores with payment integration, inventory management, and customer accounts.",
    category: "Web Development",
    icon: <ShoppingCart className="h-8 w-8" />,
    features: ["Payment Integration", "Inventory Management", "Customer Accounts", "Analytics"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
  },
  {
    id: "3",
    name: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces that provide exceptional user experiences.",
    category: "Design",
    icon: <Palette className="h-8 w-8" />,
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop"
  },
  {
    id: "4",
    name: "Mobile-First Development",
    description: "Websites optimized for mobile devices with progressive web app capabilities.",
    category: "Web Development", 
    icon: <Smartphone className="h-8 w-8" />,
    features: ["Mobile Responsive", "PWA Ready", "Touch Optimized", "App-like Experience"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop"
  },
  {
    id: "5",
    name: "Brand Photography",
    description: "Professional photography for your business, products, and marketing materials.",
    category: "Photography",
    icon: <Camera className="h-8 w-8" />,
    features: ["Product Photos", "Corporate Headshots", "Brand Content", "Event Coverage"],
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=600&fit=crop"
  },
  {
    id: "6",
    name: "Video Production",
    description: "High-quality video content for marketing, training, and promotional purposes.",
    category: "Videography",
    icon: <Video className="h-8 w-8" />,
    features: ["Promotional Videos", "Corporate Content", "Social Media", "Live Streaming"],
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop"
  }
];

export default function Apartments() {
  const { t } = useLanguage();
  const [filteredServices, setFilteredServices] = useState(allServices);
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  // Apply filters
  useEffect(() => {
    let result = allServices;
    
    // Filter by category
    if (categoryFilter !== "all") {
      result = result.filter(service => service.category === categoryFilter);
    }
    
    setFilteredServices(result);
  }, [categoryFilter]);
  
  // Get unique categories for filter
  const categories = ["all", ...new Set(allServices.map(service => service.category))];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="relative py-20 bg-gradient-to-r from-sea-light to-white dark:from-sea-dark dark:to-background overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {t.services.title}
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                {t.services.subtitle}
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-10">
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute top-10 right-40 w-48 h-48 rounded-full bg-sea-light blur-3xl" />
          </div>
        </section>
        
        {/* Filter Section */}
        <section className="py-8 border-b">
          <div className="container">
            <div className="flex justify-between items-center animate-fade-in">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Filter by Category
                </label>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-64">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Services</SelectItem>
                    {categories.filter(cat => cat !== "all").map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="text-muted-foreground">
                Showing {filteredServices.length} of {allServices.length} services
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Grid */}
        <section className="section">
          <div className="container">
            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <div key={service.id} className="glass-card rounded-xl overflow-hidden animate-fade-in hover:shadow-xl transition-all duration-300" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                    <div className="aspect-video rounded-t-xl overflow-hidden">
                      <img 
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary mr-3">
                          {service.icon}
                        </div>
                        <span className="text-sm text-muted-foreground">{service.category}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {service.features.slice(0, 3).map((feature, featureIndex) => (
                            <span key={featureIndex} className="text-xs bg-card px-2 py-1 rounded-md">
                              {feature}
                            </span>
                          ))}
                          {service.features.length > 3 && (
                            <span className="text-xs text-muted-foreground">
                              +{service.features.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                      <Button asChild className="w-full">
                        <a href="https://wa.me/254701443181" target="_blank" rel="noopener noreferrer">
                          Get Quote
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 animate-fade-in">
                <h3 className="text-xl font-semibold mb-2">No services match your filter</h3>
                <p className="text-muted-foreground mb-6">Try adjusting your filter criteria to see more options.</p>
                <Button 
                  variant="outline" 
                  onClick={() => setCategoryFilter("all")}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
