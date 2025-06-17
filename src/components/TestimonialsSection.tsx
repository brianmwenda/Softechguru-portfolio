import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "EscrowPay Africa",
    location: "Nairobi, Kenya",
    avatar: "/assets/images/escrowpayafricalinkedin_logo.jpeg",
    content: "Brian didn’t just build us a website, he created an online experience that perfectly reflects our brand. From smooth animations to mobile responsiveness, every detail was spot on. He listened carefully to what we needed, delivered ahead of schedule, and even offered valuable SEO advice. We've seen a 60% increase in traffic since launching!",
    rating: 5
  },
    {
    id: 2,
    name: "Kenya Virtual Workers",
    location: "Nairobi, Kenya",
    avatar: "/assets/images/kvw.jpeg",
    content: "Bringing Brian on as our senior web developer was one of the best decisions we've made. He not only overhauled our legacy codebase but also introduced scalable architecture and modern frameworks that drastically improved performance. His mentorship to junior devs and ability to translate complex needs into elegant solutions set a new standard for our team. Our entire backend runs smoother, faster, and more securely because of his expertise.",
    rating: 5
  },
  {
    id: 3,
    name: "Robert",
    location: "Nairobi, Kenya",
    avatar: "/assets/images/profileholder.jpg",
    content: "Brian captured our wedding like a dream. The footage was cinematic, the editing was flawless, and the final video brought everyone to tears — in the best way. He was professional, kind, and invisible in the best way during the event. We’ll treasure our wedding film for a lifetime!",
    rating: 5
  },
  {
    id: 4,
    name: "Duratek ICT & Circuits LTD",
    location: "Nairobi, Kenya",
    avatar: "/assets/images/profileholder.jpg",
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
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="section bg-muted py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-muted-foreground">
            {t.testimonials.description}
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto overflow-hidden">
        <div className="relative h-auto min-h-[300px] md:min-h-[250px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "absolute inset-0 glass-card p-6 md:p-10 transition-all duration-500 min-w-0",
                    activeIndex === index 
                      ? "opacity-100 translate-x-0 z-10"
                      : index < activeIndex 
                        ? "opacity-0 -translate-x-full z-0" 
                        : "opacity-0 translate-x-full z-0"
                )}
              >
                <div className="flex flex-col md:flex-row gap-6 h-full">
                  <div className="flex flex-col items-center md:items-start">
                    <div className="rounded-full overflow-hidden w-20 h-20 mb-4 border-2 border-primary">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < testimonial.rating ? "fill-primary text-primary" : "text-muted-foreground"}`} 
                        />
                      ))}
                    </div>
                    <h4 className="text-lg font-semibold text-center md:text-left">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground text-center md:text-left">{testimonial.location}</p>
                  </div>
                  
                  <div className="flex-1 flex items-center">
                    <blockquote className="italic text-muted-foreground">
                      "{testimonial.content}"
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-card hover:bg-muted border border-border transition-colors"
              disabled={isAnimating}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setActiveIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index 
                      ? "bg-primary w-6" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-card hover:bg-muted border border-border transition-colors"
              disabled={isAnimating}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
