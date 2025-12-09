
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
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
  
  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "Softech Guru"
    },
    "offers": allServices.map(service => ({
      "@type": "Offer",
      "name": service.name,
      "description": service.description,
      "price": service.price,
      "priceCurrency": "KES"
    }))
  };

  return (
    <>
      <SEO
        title="Pricing Plans - Affordable Web Development Services | Softech Guru"
        description="Transparent pricing for web development, website design, and digital services in Kenya. Starting from KES 25,000. No hidden fees, quality guaranteed."
        keywords="web development pricing Kenya, website design cost, affordable web development, pricing plans Nairobi, custom website pricing"
        structuredData={pricingStructuredData}
      />
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="relative py-16 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Simple, Transparent <span className="text-primary">Pricing</span>
              </h1>
              <p className="text-muted-foreground text-xl mb-4 max-w-2xl mx-auto">
                Choose the perfect plan for your business needs. No hidden fees, no surprises.
              </p>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 text-sm">
                <span className="text-primary font-medium">Website Design Pricing</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">For Graphic & Architectural Design, <a href="https://wa.me/254701443181" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">request our rate card</a></span>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>
        </section>
        
        
        
        {/* Services Grid */}
        <section className="py-16 relative">
          <div className="container relative z-10">
            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {filteredServices.map((service, index) => (
                  <div key={service.id} className={`relative group animate-fade-in ${service.popular ? 'lg:scale-105 lg:-mt-4' : ''}`} style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                    {service.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                        <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className={`relative bg-card/50 backdrop-blur-sm border rounded-2xl p-6 h-full transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 group-hover:-translate-y-2 ${service.popular ? 'border-primary/50 bg-primary/5' : 'border-border/50'}`}>
                      {/* Gradient overlay for popular plan */}
                      {service.popular && (
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl"></div>
                      )}
                      
                      <div className="relative">
                        <div className="text-center mb-6">
                          <h3 className="text-2xl font-bold mb-2 text-white">{service.name}</h3>
                          <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                          
                          <div className="flex items-baseline justify-center mb-1">
                            <span className="text-sm text-muted-foreground mr-1">KES</span>
                            <span className="text-5xl font-bold text-white">{(service.price / 1000).toFixed(0)}k</span>
                          </div>
                          <p className="text-xs text-muted-foreground">Starting from KES {service.price.toLocaleString()}</p>
                          <p className="text-xs text-muted-foreground/70 mt-2 italic">*Exclusive of hosting fees. Hosting fees vary by provider.</p>
                        </div>

                        <div className="space-y-3 mb-8">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm">
                              <div className="w-5 h-5 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mr-3 flex-shrink-0">
                                <svg width="12" height="12" fill="none" viewBox="0 0 12 12" className="text-primary">
                                  <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M2.5 6.5l2 2 5-5"/>
                                </svg>
                              </div>
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <Button asChild className={`w-full rounded-xl font-medium transition-all duration-300 ${service.popular ? 'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30' : 'bg-card/80 hover:bg-card text-foreground border border-border hover:border-primary/50'}`}>
                          <a href="https://wa.me/254701443181" target="_blank" rel="noopener noreferrer">
                            Get Started
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 animate-fade-in">
                <h3 className="text-xl font-semibold mb-2 text-white">No services match your filter</h3>
                <p className="text-muted-foreground mb-6">Try adjusting your filter criteria to see more options.</p>
                <Button 
                  variant="outline" 
                  onClick={() => setCategoryFilter("all")}
                >
                  Reset Filters
                </Button>
              </div>
            )}
            
            {/* Trust indicators */}
            <div className="mt-16 text-center">
              <p className="text-muted-foreground mb-6">Trusted by businesses across the world</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="text-sm font-medium">🏆 50+ Happy Clients</div>
                <div className="text-sm font-medium">⚡ 24h Response Time</div>
                <div className="text-sm font-medium">🔒 100% Secure</div>
                <div className="text-sm font-medium">💯 Quality Guaranteed</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
    </>
  );
}
