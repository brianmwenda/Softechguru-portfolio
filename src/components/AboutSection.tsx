
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
    <section className="section bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <span className="text-sm text-primary font-medium uppercase tracking-wider">
              Why Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-white">
              Smart, reliable websites for Kenyan businesses.
            </h2>
            <p className="text-muted-foreground mb-6">
              Struggling with an outdated site? Losing sales because customers can't order online? From simple landing pages to full e-commerce stores, we build affordable, easy-to-use websites that help your business grow.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold mb-1 text-white">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <Button asChild className="bg-primary hover:bg-primary/90 text-white px-6">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
          
          <div className="relative animate-fade-in [animation-delay:300ms]">
            {/* Dashboard Mockup */}
            <div className="bg-card rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white">Mini Dashboard</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">Users</div>
                    <div className="text-2xl font-bold text-white">1,302</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">Sales (KES)</div>
                    <div className="text-2xl font-bold text-white">1,185,018</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">Growth</div>
                    <div className="text-2xl font-bold text-primary">44%</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Quarterly Goal</div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
