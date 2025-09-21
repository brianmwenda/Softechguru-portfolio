
import { Code, Palette, Camera, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies like React, TypeScript, and responsive design principles.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile First"]
  },
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces that provide exceptional user experiences and drive conversions.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  }
];

export default function ServicesSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <span className="text-sm text-primary font-medium uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Complete Digital Solutions
          </h2>
          <p className="text-muted-foreground">
            From concept to launch, we provide comprehensive digital services to help your business thrive online.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-xl animate-fade-in hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="mb-6 p-3 rounded-full bg-primary/10 w-fit">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
