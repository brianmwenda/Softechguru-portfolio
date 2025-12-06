
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioHero from "@/components/PortfolioHero";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SEO from "@/components/SEO";
import Preloader from "@/components/Preloader";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, Mail, Clock, MapPin, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "What design services do you offer?",
    answer: "We offer Website Design, Architectural Design (3D renders & floor plans), Graphic Design (logos, posters, branding), and ongoing Website Care & Support services."
  },
  {
    question: "How long does a typical design project take?",
    answer: "Timelines vary by project: Simple logos take 3-5 days, website designs 1-3 weeks, architectural renders 1-2 weeks, and complete branding packages 2-4 weeks."
  },
  {
    question: "Do you provide revisions?",
    answer: "Yes! All our design packages include revision rounds. We work closely with you until you're completely satisfied with the final result."
  },
  {
    question: "What do I need to provide to get started?",
    answer: "We'll need your brand guidelines (if any), reference examples you like, project brief, and any specific requirements. We'll guide you through everything during our initial consultation."
  },
  {
    question: "Do you offer ongoing website maintenance?",
    answer: "Absolutely! Our Website Care & Support service includes regular updates, security monitoring, content changes, and technical support to keep your site running smoothly."
  }
];

export default function Index() {
  const { t } = useLanguage();
  const [showPreloader, setShowPreloader] = useState(true);
  
  useEffect(() => {
    window.scrollTo(0, 0);

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

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Softech Guru",
    "url": "https://softechguru.com",
    "logo": "https://softechguru.com/assets/images/logo.png",
    "description": "Professional graphic design, website design, architectural design, and creative services",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "KE",
      "addressLocality": "Nairobi"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+254701443181",
      "contactType": "customer service",
      "email": "softechguruservices@gmail.com"
    },
    "sameAs": [
      "https://linkedin.com/in/brian-mwenda-325524360"
    ],
    "offers": {
      "@type": "Service",
      "serviceType": ["Website Design", "Graphic Design", "Architectural Design", "Logo Design", "Website Maintenance"]
    }
  };

  const handleWhatsAppContact = () => {
    const message = "Hello! I'd like to discuss a design project with you.";
    window.open(`https://wa.me/254701443181?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      {showPreloader && <Preloader onComplete={() => setShowPreloader(false)} />}
      <SEO
        title="Softech Guru - Creative Design Services | Website, Graphic & Architectural Design"
        description="Professional graphic design, website design, architectural visualization, and creative services. Custom logos, branding, 3D renders, and website care & support."
        keywords="graphic design Kenya, website design Nairobi, architectural design, logo design, branding services, 3D visualization, website maintenance, creative agency"
        structuredData={homeStructuredData}
      />
      <Navbar />
      <div className="min-h-screen flex flex-col page-transition-enter page-transition-enter-active bg-background">
      <main className="flex-1" role="main">
        <div className="pt-20"></div>
        
        {/* Hero Section */}
        <PortfolioHero />
        
        {/* About Section */}
        <div className="scroll-animate">
          <AboutSection />
        </div>
        
        {/* Testimonials Section */}
        <div className="scroll-animate">
          <TestimonialsSection />
        </div>

        {/* Contact & FAQ Section */}
        <section id="contact" className="relative section scroll-animate" role="region" aria-labelledby="contact-heading">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-8 mb-16 animate-fade-in">
              <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold text-white">
                Let's Create Something Amazing
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ready to elevate your brand? Get in touch and let's discuss your creative project.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="animate-fade-in [animation-delay:100ms]">
                <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
                
                <div className="glass-card p-6 space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-white">Phone</h4>
                      <p className="text-muted-foreground">+(254) 701-443-181</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-white">Email</h4>
                      <p className="text-muted-foreground">softechguruservices@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-white">Location</h4>
                      <p className="text-muted-foreground">Nairobi, Kenya</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Clock className="h-5 w-5 text-primary" />
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

                {/* WhatsApp CTA */}
                <Button 
                  onClick={handleWhatsAppContact}
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </Button>
              </div>
              
              {/* FAQ Section */}
              <div className="animate-fade-in [animation-delay:300ms]">
                <h3 className="text-2xl font-bold mb-6 text-white">Frequently Asked Questions</h3>
                
                <div className="glass-card p-6">
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left text-white hover:text-primary">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
    </>
  );
}
