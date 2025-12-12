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
    <section className="py-16 bg-gradient-to-b from-background to-muted overflow-hidden relative">
      {/* Floating 3D-like elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-[10%] w-20 h-20 border border-primary/20 rounded-lg rotate-12 animate-float" />
        <div className="absolute top-1/3 right-[5%] w-16 h-16 border border-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-[15%] w-24 h-24 border border-primary/10 rounded-2xl -rotate-12 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-[15%] w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg rotate-45 animate-float" style={{ animationDelay: '0.5s' }} />
        
        {/* Gradient orbs */}
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t.testimonials.subtitle}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.testimonials.description}
          </p>
        </div>
        
        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[380px] md:min-h-[320px]">
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
    </section>
  );
}
