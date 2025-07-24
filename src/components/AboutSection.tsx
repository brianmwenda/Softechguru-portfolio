
import { Users, Award, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { icon: <Users className="h-6 w-6" />, number: "50+", label: "Happy Clients" },
  { icon: <Award className="h-6 w-6" />, number: "24+", label: "Projects Completed" },
  { icon: <Clock className="h-6 w-6" />, number: "3+", label: "Years Experience" },
  { icon: <Heart className="h-6 w-6" />, number: "99%", label: "Client Satisfaction" }
];

export default function AboutSection() {
  return (
    <section className="section bg-card">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <span className="text-sm text-primary font-medium uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Crafting Digital Excellence Since 2021
            </h2>
            <p className="text-muted-foreground mb-6">
             I work with a passionate team of developers, designers, and creatives dedicated to bringing your digital vision to life. Our expertise spans across web development, UI/UX design, photography, and videography.
            </p>
            <p className="text-muted-foreground mb-8">
              Every project we undertake is a journey of collaboration, innovation, and attention to detail. We believe in creating not just websites, but digital experiences that resonate with your audience and drive your business forward.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <Button asChild className="btn-primary">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
          
          <div className="relative animate-fade-in [animation-delay:300ms]">
             {/* <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=600&fit=crop"
                    alt="Seaside view" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-2/3 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1545579133-99bb5ab189bd?w=400&h=300&fit=crop"
                    alt="Luxury apartment interior" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-1/2 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&h=300&fit=crop"
                    alt="Pool view" 
                    className="w-full h-full object-cover"
                  />
            </div> */}
            <iframe width="100%" height="390" src="https://www.youtube.com/embed/DA_GjFDdOZA?si=aGXhMtjvD33JGnW1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
