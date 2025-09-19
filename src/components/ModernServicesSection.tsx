
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  Palette, 
  Camera, 
  Video, 
  Globe, 
  Smartphone,
  ArrowRight,
  Check,
  ShoppingCart,
  MessageCircle,
  Store,
  FileText
} from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { School } from "lucide-react";

const services = [
  {
    id: "web-dev",
    icon: <School className="h-8 w-8" />,
    title: "Business Websites",
    description: "Clean, fast, mobile-first websites that make your brand stand out.",
    image: "https://images.unsplash.com/photo-1647973035166-2abf410c68b0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
    // price: 200,
    popular: true
  },
  {
    id: "ecommerce",
    icon: <Store className="h-8 w-8" />,
    title: "E-commerce Stores",
    description: "Online shops with secure payments (M-Pesa & cards) so you can sell 24/7.",
    image: "https://images.unsplash.com/photo-1657812159075-7f0abd98f7b8?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   
    // price: 200,
    popular: false
  },
  {
    id: "custom-web-apps",
    icon: <FileText className="h-8 w-8" />,
    title: "Custom Web Apps",
    description: "Tailored solutions for bookings, portals, and unique business workflows.",
    image: "https://images.unsplash.com/photo-1642132652798-ae887edb9e9d?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    // price: 200,
    popular: false
  },
  {
    id: "hosting",
    icon: <Globe className="h-8 w-8" />,
    title: "Website Care & Support",
    description: "Ongoing updates, security, and improvements after your project is launched.",
    image: "https://images.unsplash.com/photo-1642132652860-471b4228023e?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    // price: 40,
    popular: false
  }
];

export default function ModernServicesSection() {
  const { t } = useLanguage();
  const { addItem } = useCart();
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const handleGetQuote = (service: typeof services[0]) => {
    const whatsappMessage = `Hello! I'm interested in getting a quote for ${service.title}.\n\nService Details:\n- ${service.description}\n\nPlease provide me with a detailed quote for this service.`;
    const whatsappUrl = `https://wa.me/254701443181?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="section bg-gradient-to-b from-background to-muted/20">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Services & Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From concept to deployment, I provide end-to-end digital solutions 
            that help your business thrive in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <section className="section">
          <div className="container">
            {services.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                  <div key={service.id} className="glass-card rounded-xl overflow-hidden animate-fade-in hover:shadow-xl transition-all duration-300" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                    <div className="aspect-video rounded-t-xl overflow-hidden">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary mr-3">
                          {service.icon}
                        </div>
                        {/* <span className="text-sm text-muted-foreground">{service.category}</span> */}
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      
                   
                    </div>
                  </div>
                ))}
              </div>
            ) : null }
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in animate-stagger-5">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            
            <Link to="/pricing"><Button variant="outline" className="btn-secondary">
              View Pricing
            </Button></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
