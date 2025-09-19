
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
import { Code, Palette, Camera, Video, Globe, Smartphone, ShoppingCart, Zap, FileText, Store, School } from "lucide-react";

// Service types data
const allServices = [
  {
    id: "1",
    name: "Starter",
    description: "Perfect for solo entrepreneurs who just need to get online.",
    category: "Web Development",
    price: 25000,
    features: ["1-3 page website","Mobile responsive design", "Contact form", "Basic SEO"],
    },
  {
    id: "2",
    name: "Business",
    description: "For growing SMEs ready to manage clients and scale.",
    category: "Web Development",
    price: 60000,
    popular: true,
    features: ["Everything in Starter", "Up to 10 pages", "CMS Integration", "Social Media integration"],
    },
  {
    id: "3",
    name: "Scale",
    description: "For established businesses needing online sales and payments.",
    category: "Web Development",
   price: 80000,
    features: ["Everything in Business", "E-commerce functionality", "M-Pesa integration", "Dedicated support"],
  },
 
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
                Simple, Transparent Pricing
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                Choose a plan that works for you.
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-10">
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute top-10 right-40 w-48 h-48 rounded-full bg-sea-light blur-3xl" />
          </div>
        </section>
        
        
        
        {/* Services Grid */}
        <section className="section">
          <div className="container">
            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <div key={service.id} className="glass-card rounded-xl overflow-hidden animate-fade-in hover:shadow-xl transition-all duration-300" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                    
                    <div className="p-6">
                      
                      <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <div className="flex justify-center items-center mb-4">
                        <span className="align-super text-xs mr-2 text-muted-foreground font-medium">from</span>
                        <span className="text-4xl font-bold text-white">{service.price.toLocaleString()}</span>
                      </div>
                      <div className="mb-6">
                        <ul className="list-none space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                              <span className="mr-2 text-green-500">
                                {/* Check mark icon */}
                                <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                                  <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 8.5l3 3 5-5"/>
                                </svg>
                              </span>
                              {feature}
                            </li>
                          ))}
                        </ul>  </div>
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
