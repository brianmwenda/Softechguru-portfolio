import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

interface Testimonial {
  id: number;
  clientName: string;
  location: string;
  clientAvatar: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    clientName: "EscrowPay Africa",
    location: "Nairobi, Kenya",
    clientAvatar: "/assets/images/escrowpayafricalinkedin_logo.jpeg",
    content: "Brian didn't just build us a website, he created an online experience that perfectly reflects our brand. From smooth animations to mobile responsiveness, every detail was spot on. He listened carefully to what we needed, delivered ahead of schedule, and even offered valuable SEO advice. We've seen a 60% increase in traffic since launching!",
    rating: 5
  },
  {
    id: 2,
    clientName: "Cimak Trading Limited",
    location: "Nairobi, Kenya",
    clientAvatar: "/assets/images/profileholder.jpg",
    content: "Bringing Brian on as our senior web developer was one of the best decisions we've made. He not only overhauled our legacy codebase but also introduced scalable architecture and modern frameworks that drastically improved performance. His mentorship to junior devs and ability to translate complex needs into elegant solutions set a new standard for our team.",
    rating: 5
  },
  {
    id: 3,
    clientName: "Samson Gitonga",
    location: "Nairobi, Kenya",
    clientAvatar: "/assets/images/profileholder.jpg",
    content: "Brian captured our wedding like a dream. The footage was cinematic, the editing was flawless, and the final video brought everyone to tears — in the best way. He was professional, kind, and invisible in the best way during the event. We'll treasure our wedding film for a lifetime!",
    rating: 5
  },
  {
    id: 4,
    clientName: "Duratek ICT & Circuits LTD",
    location: "Nairobi, Kenya",
    clientAvatar: "/assets/images/profileholder.jpg",
    content: "Working with Brian on our rebranding campaign was a game changer. His design work was fresh, strategic, and deeply aligned with our message. From logos to social media kits, everything looked polished and professional. Our audience now recognizes us instantly, and engagement on our platforms has doubled!",
    rating: 5
  },
];

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="section bg-gradient-to-b from-background to-muted py-16 md:py-24 overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {t.testimonials.title}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t.testimonials.subtitle}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.testimonials.description}
          </p>
        </div>
        
        {/* Founder Card + Testimonials */}
        <div className="grid lg:grid-cols-5 gap-8 items-center max-w-6xl mx-auto">
          {/* Founder Card */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary/30 via-primary/10 to-transparent blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative glass-card p-6 md:p-8 rounded-2xl text-center max-w-xs">
                {/* Profile Image */}
                <div className="relative mx-auto mb-6 w-32 h-32 md:w-40 md:h-40">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-primary/50 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-background">
                      <img 
                        src="/assets/images/founder-profile.png" 
                        alt="Brian Mwenda - Founder" 
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Founder Info */}
                <h3 className="text-xl md:text-2xl font-bold mb-1">Brian Mwenda</h3>
                <p className="text-primary font-medium mb-3">Founder & Designer</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Passionate about creating digital experiences that transform businesses and delight users.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mt-6 pt-6 border-t border-border/50">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Projects</p>
                    <p className="text-2xl font-bold text-foreground">150+</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Happy Clients</p>
                    <p className="text-2xl font-bold text-foreground">80+</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Years</p>
                    <p className="text-2xl font-bold text-primary">3+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonials Carousel */}
          <div className="lg:col-span-3 relative">
            <div className="relative min-h-[520px] md:min-h-[400px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={cn(
                    "absolute inset-0 transition-all duration-500",
                    activeIndex === index 
                      ? "opacity-100 translate-x-0 z-10"
                      : index < activeIndex 
                        ? "opacity-0 -translate-x-8 z-0" 
                        : "opacity-0 translate-x-8 z-0"
                  )}
                >
                  <div className="glass-card p-6 md:p-8 rounded-2xl h-full flex flex-col">
                    {/* Quote Icon */}
                    <Quote className="w-10 h-10 text-primary/30 mb-4 flex-shrink-0" />
                    
                    {/* Content */}
                    <blockquote className="text-foreground/90 text-sm md:text-base leading-relaxed flex-1 mb-6">
                      "{testimonial.content}"
                    </blockquote>
                    
                    {/* Client Info */}
                    <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/50 flex-shrink-0">
                        <img 
                          src={testimonial.clientAvatar} 
                          alt={testimonial.clientName} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold truncate">{testimonial.clientName}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                      <div className="flex gap-0.5 flex-shrink-0">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < testimonial.rating ? "fill-primary text-primary" : "text-muted-foreground/30"}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-card hover:bg-primary/10 border border-border hover:border-primary/50 transition-all duration-300"
                disabled={isAnimating}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (isAnimating) return;
                      setIsAnimating(true);
                      setActiveIndex(index);
                      setTimeout(() => setIsAnimating(false), 500);
                    }}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      activeIndex === index 
                        ? "bg-primary w-8" 
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2"
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-card hover:bg-primary/10 border border-border hover:border-primary/50 transition-all duration-300"
                disabled={isAnimating}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
