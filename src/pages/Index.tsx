
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioHero from "@/components/PortfolioHero";
import ModernServicesSection from "@/components/ModernServicesSection";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Index() {
  const { t } = useLanguage();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Add scroll animation observer
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all scroll-animate elements
    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col page-transition-enter page-transition-enter-active">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <PortfolioHero />
        
        {/* Services Section */}
        <div className="scroll-animate">
          <ModernServicesSection />
        </div>
        
        {/* About Section */}
        <div className="scroll-animate">
          <AboutSection />
        </div>
        
        {/* Testimonials Section */}
        <div className="scroll-animate">
          <TestimonialsSection />
        </div>
        
        {/* Blog Section */}
        <div className="scroll-animate">
          <BlogSection />
        </div>
        
        {/* CTA Section */}
        <section className="relative section bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 scroll-animate">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Let's collaborate to bring your vision to life. From initial concept 
                to final deployment, I'll guide you through every step.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="btn-primary animate-pulse-glow">
                  <Link to="/contact">Start Your Project</Link>
                </Button>
                <Button asChild variant="outline" className="btn-secondary">
                  <Link to="/gallery">View Portfolio</Link>
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border/50">
                {[
                  { number: "50+", label: "Projects Completed" },
                  { number: "30+", label: "Happy Clients" },
                  { number: "5", label: "Years Experience" },
                  { number: "24/7", label: "Support Available" }
                ].map((stat, index) => (
                  <div key={index} className={`text-center animate-scale-in animate-stagger-${index + 1}`}>
                    <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
