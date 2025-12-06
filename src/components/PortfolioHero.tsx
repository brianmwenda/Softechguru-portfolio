
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
      const yearsTarget = 5;
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

  const serviceIcons = [
    { icon: <Monitor className="h-6 w-6" />, label: "Website Design" },
    { icon: <PenTool className="h-6 w-6" />, label: "Architectural Design" },
    { icon: <Palette className="h-6 w-6" />, label: "Graphic Design" },
    { icon: <Wrench className="h-6 w-6" />, label: "Website Care" },
  ];

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

            {/* Service Icons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {serviceIcons.map((service, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                  <span className="text-primary">{service.icon}</span>
                  <span className="text-sm text-muted-foreground">{service.label}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium">
                <a href="https://wa.me/254701443181" target="_blank" rel="noopener noreferrer">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.028-.967-.271-.099-.468-.148-.666.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.666-1.611-.912-2.207-.242-.579-.487-.5-.666-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.075-.792.372-.271.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.377.711.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.271-.198-.568-.347z"
                      fill="white"
                    />
                    <path
                      d="M12.004 2.003c-5.523 0-9.997 4.474-9.997 9.997 0 1.762.463 3.484 1.342 4.995l-1.426 5.217a1.001 1.001 0 0 0 1.225 1.225l5.217-1.426a9.953 9.953 0 0 0 4.995 1.342c5.523 0 9.997-4.474 9.997-9.997s-4.474-9.997-9.997-9.997zm0 18.181c-1.624 0-3.211-.438-4.584-1.267a1 1 0 0 0-.764-.104l-4.646 1.27 1.27-4.646a1 1 0 0 0-.104-.764A8.184 8.184 0 0 1 3.823 12c0-4.522 3.659-8.181 8.181-8.181s8.181 3.659 8.181 8.181-3.659 8.181-8.181 8.181z"
                      fill="white"
                    />
                  </svg>
                  Get a Free Quote
                </a>
              </Button>
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
                    <div className="bg-primary h-2 md:h-3 rounded-full transition-all duration-1000" style={{ width: '98%' }}></div>
                  </div>
                  <div className="text-right text-sm text-primary font-medium">98%</div>
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
