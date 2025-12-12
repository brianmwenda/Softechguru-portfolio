
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
    <section className="section bg-gradient-to-b from-background to-muted/20 relative overflow-hidden" id="services">
      {/* Floating visual elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient mesh background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent/5 via-transparent to-transparent" />
        
        {/* Floating shapes */}
        <div className="absolute top-20 right-[15%] w-24 h-24 border border-primary/15 rounded-2xl rotate-12 animate-float" />
        <div className="absolute bottom-32 left-[10%] w-16 h-16 border border-accent/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 right-[5%] w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-lg -rotate-12 animate-float" style={{ animationDelay: '2.5s' }} />
        
        {/* Pulsing circles */}
        <div className="absolute top-1/3 left-[8%] w-8 h-8 rounded-full bg-primary/20 animate-pulse" />
        <div className="absolute bottom-1/4 right-[12%] w-6 h-6 rounded-full bg-accent/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>
      
      <div className="container relative z-10">
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
