
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioHero from "@/components/PortfolioHero";
import ModernServicesSection from "@/components/ModernServicesSection";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";
import Map from "@/components/Map";
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
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col page-transition-enter page-transition-enter-active bg-background">
      <main className="flex-1">
        {/* Add proper spacing for fixed navbar */}
        <div className="pt-20">
        </div>
        
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
        {/* Contact Section */}
        <section id="contact" className="relative section scroll-animate">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-8 mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Let's collaborate to bring your vision to life. From initial concept 
                to final deployment, we'll guide you through every step.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="animate-fade-in [animation-delay:100ms]">
                <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
                
                <div className="glass-card p-6 space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-white">Phone</h4>
                      <p className="text-muted-foreground">+(254) 701-443-181</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-white">Email</h4>
                      <p className="text-muted-foreground">softechguruservices@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-white">Business Hours</h4>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9AM - 6PM<br />
                        Weekend: 10AM - 4PM
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Map Section */}
                <div className="animate-fade-in [animation-delay:200ms]">
                  <h4 className="text-lg font-semibold mb-4 text-white">Find Us</h4>
                  <Map />
                </div>
              </div>
              
              {/* Contact Form */}
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
    </>
  );
}
