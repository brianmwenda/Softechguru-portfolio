
import { useState } from "react";
import { Link } from "react-router-dom";
import { Users, Maximize, MapPin, Bath, Coffee, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export interface ServiceProps {
  id: string;
  name: string;
  description: string;
  price?: number;
  category: string;
  image: string;
  features: string[];
}

export default function ServiceCard({ service }: { service: ServiceProps }) {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl bg-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-64">
        <img 
          src={service.image} 
          alt={service.name}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end p-6">
          <div>
            <h3 className="text-white text-xl font-bold mb-1">{service.name}</h3>
            <div className="flex items-center text-white/80 text-sm mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{service.category}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <p className="text-muted-foreground line-clamp-2">{service.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {service.features.slice(0, 3).map((feature, index) => (
            <div 
              key={index} 
              className="flex items-center text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full"
            >
              <span>{feature}</span>
            </div>
          ))}
          {service.features.length > 3 && (
            <div className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
              +{service.features.length - 3} more
            </div>
          )}
        </div>
        
        <div className="flex items-end justify-between pt-2">
          <div>
            {service.price && (
              <>
                <span className="text-xl font-bold">${service.price}</span>
                <span className="text-muted-foreground text-sm"> / project</span>
              </>
            )}
          </div>
          <Button asChild className="btn-primary">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              Get Quote
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
