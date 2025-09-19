
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowDown, Linkedin, Mail, Code, Palette, Camera, Video } from "lucide-react";

export default function PortfolioHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                Smart, reliable websites for Kenyan businesses.
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Struggling with an outdated site? Losing sales because customers can't order online? From simple landing pages to full e-commerce stores, we build affordable, easy-to-use websites that help your business grow.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium">
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
                  Chat on WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-lg">
                <Link to="/Pricing">
                  See Pricing
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Dashboard Mockup */}
          <div className="relative animate-fade-in [animation-delay:300ms]">
            <div className="bg-card rounded-2xl p-6 shadow-2xl border border-border">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white">Mini Dashboard</h3>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">Users</div>
                    <div className="text-3xl font-bold text-white">1,302</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">Sales (KES)</div>
                    <div className="text-3xl font-bold text-white">1,185,018</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">Growth</div>
                    <div className="text-3xl font-bold text-primary">44%</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="text-sm text-muted-foreground">Quarterly Goal</div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div className="bg-primary h-3 rounded-full" style={{ width: '75%' }}></div>
                  </div>
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
