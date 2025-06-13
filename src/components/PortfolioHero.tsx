
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Code, Palette, Camera, Video } from "lucide-react";

export default function PortfolioHero() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    "Full-Stack Developer",
    "UI/UX Designer", 
    "Part-time Photographer",
    "Graphic Designer",
    "Part-time Videographer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    { icon: <Code className="h-6 w-6" />, name: "Development", count: "50+ Projects" },
    { icon: <Palette className="h-6 w-6" />, name: "Design", count: "30+ Designs" },
    { icon: <Camera className="h-6 w-6" />, name: "Photography", count: "100+ Shots" },
    { icon: <Video className="h-6 w-6" />, name: "Videography", count: "25+ Videos" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      
      
      <div className="container relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <div className="text-lg text-muted-foreground animate-fade-in">
                👋 Hello, I'm
              </div>
              <h1 className="text-5xl md:text-7xl font-bold gradient-text animate-slide-up">
                Brian M. Ndumba
              </h1>
              <div className="text-2xl md:text-3xl text-foreground h-12 animate-slide-up animate-stagger-1">
                <span className="typewriter">
                  {titles[currentTitle]}
                </span>
              </div>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed animate-fade-in animate-stagger-2">
                Crafting digital experiences that blend beautiful design with powerful functionality. 
                I turn ideas into reality through code, creativity, and collaboration.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in animate-stagger-3">
              <Link to="/gallery"><Button className="btn-primary group">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button></Link>
              <Link to="/contact"><Button variant="outline" className="btn-secondary">
                Get In Touch 
              </Button></Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 animate-fade-in animate-stagger-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Content - Profile & Stats */}
          <div className="relative animate-slide-in-right">
            {/* Profile Image */}
            <div className="relative mx-auto w-80 h-80 mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 rounded-full animate-pulse-glow"></div>
              <div className="absolute inset-2 bg-background rounded-full overflow-hidden">
                <img 
                  src="/assets/images/profile.png"
                  alt="Brian"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Skills Cards */}
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className={`animated-card p-4 text-center animate-scale-in animate-stagger-${index + 1}`}
                >
                  <div className="text-primary mb-2 flex justify-center">
                    {skill.icon}
                  </div>
                  <div className="font-semibold text-sm">{skill.name}</div>
                  <div className="text-xs text-muted-foreground">{skill.count}</div>
                </div>
              ))}
              <br /><br /><br /><br />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
