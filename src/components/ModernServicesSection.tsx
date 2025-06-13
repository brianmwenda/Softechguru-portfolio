
import { useState } from "react";
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
  Check
} from "lucide-react";

const services = [
  {
    id: "web-dev",
    icon: <Code2 className="h-8 w-8" />,
    title: "Web Development",
    description: "Full-stack applications with modern frameworks",
    features: ["React/Next.js", "Node.js/Python", "Database Design", "API Integration"],
    price: "From $2,500",
    popular: true
  },
  {
    id: "ui-ux",
    icon: <Palette className="h-8 w-8" />,
    title: "UI/UX Design",
    description: "User-centered design that converts",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    price: "From $1,500",
    popular: false
  },
  {
    id: "mobile",
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile Apps",
    description: "Native and cross-platform solutions",
    features: ["React Native", "iOS/Android", "App Store Deployment", "Push Notifications"],
    price: "From $3,500",
    popular: false
  },
  {
    id: "photography",
    icon: <Camera className="h-8 w-8" />,
    title: "Photography",
    description: "Professional product and lifestyle photography",
    features: ["Product Photos", "Lifestyle Shoots", "Photo Editing", "Commercial Rights"],
    price: "From $500",
    popular: false
  },
  {
    id: "videography",
    icon: <Video className="h-8 w-8" />,
    title: "Videography",
    description: "Engaging video content for your brand",
    features: ["Promotional Videos", "Product Demos", "Social Content", "Post-Production"],
    price: "From $1,200",
    popular: false
  },
  {
    id: "hosting",
    icon: <Globe className="h-8 w-8" />,
    title: "Domain & Hosting",
    description: "Complete hosting and domain management",
    features: ["Domain Registration", "Cloud Hosting", "SSL Certificates", "Performance Optimization"],
    price: "From $200/year",
    popular: false
  }
];

export default function ModernServicesSection() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.id}
              className={`relative overflow-hidden transition-all duration-700 hover:shadow-2xl hover:-translate-y-4 group cursor-pointer animate-scale-in animate-stagger-${index % 6 + 1} ${
                service.popular ? 'ring-2 ring-primary' : ''
              }`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Popular
                </div>
              )}
              
              <CardContent className="p-8 space-y-6 relative z-10">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl transition-all duration-500 ${
                  hoveredService === service.id 
                    ? 'bg-primary text-primary-foreground scale-110' 
                    : 'bg-primary/10 text-primary'
                }`}>
                  {service.icon}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-2xl font-bold gradient-text">{service.price}</span>
                  <Button 
                    size="sm" 
                    className={`transition-all duration-300 ${
                      hoveredService === service.id ? 'scale-110' : ''
                    }`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>

              {/* Hover Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 transition-opacity duration-700 ${
                hoveredService === service.id ? 'opacity-100' : 'opacity-0'
              }`} />
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in animate-stagger-5">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button className="btn-primary">
              Request Custom Quote
            </Button>
            <Button variant="outline" className="btn-secondary">
              View All Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
