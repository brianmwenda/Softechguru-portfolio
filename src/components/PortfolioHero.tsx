
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Palette, PenTool, Monitor, Wrench } from "lucide-react";

export default function PortfolioHero() {
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [years, setYears] = useState(0);

  useEffect(() => {
    const animateNumbers = () => {
      // Projects counter
      let projectStart = 0;
      const projectTarget = 150;
      const projectIncrement = projectTarget / 50;
      const projectTimer = setInterval(() => {
        projectStart += projectIncrement;
        if (projectStart >= projectTarget) {
          setProjects(projectTarget);
          clearInterval(projectTimer);
        } else {
          setProjects(Math.floor(projectStart));
        }
      }, 30);

      // Clients counter
      let clientStart = 0;
      const clientTarget = 80;
      const clientIncrement = clientTarget / 50;
      const clientTimer = setInterval(() => {
        clientStart += clientIncrement;
        if (clientStart >= clientTarget) {
          setClients(clientTarget);
          clearInterval(clientTimer);
        } else {
          setClients(Math.floor(clientStart));
        }
      }, 30);

      // Years counter
      let yearsStart = 0;
      const yearsTarget = 3;
      const yearsIncrement = yearsTarget / 50;
      const yearsTimer = setInterval(() => {
        yearsStart += yearsIncrement;
        if (yearsStart >= yearsTarget) {
          setYears(yearsTarget);
          clearInterval(yearsTimer);
        } else {
          setYears(Math.floor(yearsStart));
        }
      }, 30);
    };

    animateNumbers();

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setProjects(0);
        setClients(0);
        setYears(0);
        setTimeout(animateNumbers, 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in px-4">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Creative Design Solutions That Make an Impact
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                From stunning website designs to architectural visualizations and brand identity, we bring your creative vision to life with precision and artistry.
              </p>
            </div>

            
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
             
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-lg">
                <Link to="/Portfolio">
                  View Portfolio
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Stats Card */}
          <div className="relative animate-fade-in [animation-delay:300ms] px-4">
            <div className="bg-card rounded-2xl p-4 md:p-6 shadow-2xl border border-border">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white">Creative Stats</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center p-2">
                    <div className="text-xs md:text-sm text-muted-foreground">Projects</div>
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white">{projects}+</div>
                  </div>
                  <div className="text-center p-2">
                    <div className="text-xs md:text-sm text-muted-foreground">Happy Clients</div>
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white">{clients}+</div>
                  </div>
                  <div className="text-center p-2">
                    <div className="text-xs md:text-sm text-muted-foreground">Years</div>
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">{years}+</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-xs md:text-sm text-muted-foreground">Client Satisfaction</div>
                  <div className="w-full bg-muted rounded-full h-2 md:h-3">
                    <div className="bg-primary h-2 md:h-3 rounded-full transition-all duration-1000" style={{ width: '99%' }}></div>
                  </div>
                  <div className="text-right text-sm text-primary font-medium">99%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
