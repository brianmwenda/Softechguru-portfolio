
import { useState } from "react";
import {
  Monitor, 
  PenTool, 
  Palette, 
  Wrench,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const services = [
  {
    id: "website-design",
    icon: <Monitor className="h-8 w-8" />,
    title: "Website Design",
    description: "Beautiful, responsive websites that captivate visitors and convert them into customers. Modern UI/UX design principles.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop",
    popular: true
  },
  {
    id: "architectural-design",
    icon: <PenTool className="h-8 w-8" />,
    title: "Architectural Design",
    description: "3D visualizations, floor plans, and architectural renders that bring your building projects to life before construction.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop",
    popular: false
  },
  {
    id: "graphic-design",
    icon: <Palette className="h-8 w-8" />,
    title: "Graphic Design",
    description: "Logos, posters, branding materials, and visual content that tell your brand's story with impact and creativity.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
    popular: true
  },
  {
    id: "website-care",
    icon: <Wrench className="h-8 w-8" />,
    title: "Website Care & Support",
    description: "Ongoing maintenance, security updates, content changes, and technical support to keep your website running smoothly.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    popular: false
  }
];

export default function ModernServicesSection() {
  const { t } = useLanguage();
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const handleGetQuote = (service: typeof services[0]) => {
    const whatsappMessage = `Hello! I'm interested in your ${service.title} service.\n\nService Details:\n- ${service.description}\n\nPlease provide me with more information and a quote.`;
    const whatsappUrl = `https://wa.me/254701443181?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="section bg-gradient-to-b from-background to-muted/20" id="services">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Design Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Professional creative solutions to elevate your brand and bring your vision to life. 
            From digital to architectural, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <section className="section">
          <div className="container">
            {services.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                  <div 
                    key={service.id} 
                    className="glass-card rounded-xl overflow-hidden animate-fade-in hover:shadow-xl transition-all duration-300 group cursor-pointer" 
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
                    onClick={() => handleGetQuote(service)}
                  >
                    <div className="aspect-video rounded-t-xl overflow-hidden relative">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {service.popular && (
                        <div className="absolute top-3 right-3 bg-primary text-white text-xs px-3 py-1 rounded-full font-medium">
                          Popular
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary mr-3">
                          {service.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      
                      <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-2 transition-transform">
                        Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : null }
          </div>
        </section>

      </div>
    </section>
  );
}
