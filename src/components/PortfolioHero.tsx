
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
                  <Mail className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-lg">
                <Link to="/contact">
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
