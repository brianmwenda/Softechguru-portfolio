
import { useState, useEffect } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity. Simple websites take 1-2 weeks, while complex applications can take 2-3 months. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer ongoing maintenance and support packages to keep your website updated, secure, and running smoothly. This includes regular updates, security monitoring, and technical support."
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern technologies like React, Node.js, TypeScript, and cloud services for optimal performance. We stay up-to-date with the latest industry standards and best practices."
  },
  {
    question: "Can you help with hosting and domains?",
    answer: "Absolutely! We provide complete hosting solutions and can help you register and manage your domain. We also offer SSL certificates and performance optimization."
  },
  {
    question: "Do you work with clients internationally?",
    answer: "Yes, we work with clients worldwide. We use modern communication tools and project management systems to ensure smooth collaboration regardless of location."
  },
  {
    question: "What's included in your web development service?",
    answer: "Our web development service includes responsive design, SEO optimization, performance optimization, security implementation, content management system integration, and basic training on how to use your new website."
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Yes, we can redesign and modernize your existing website while preserving your content and improving user experience, performance, and mobile responsiveness."
  },
  {
    question: "Do you offer e-commerce solutions?",
    answer: "Yes, we build custom e-commerce solutions with features like product catalogs, shopping carts, payment processing, inventory management, and order tracking."
  }
];

export default function FAQ() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [filteredFaqs, setFilteredFaqs] = useState(faqs);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const filtered = faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFaqs(filtered);
  }, [searchTerm]);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="relative py-16 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="text-primary text-sm font-medium">❓ FAQ</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Frequently Asked <span className="text-primary">Questions</span>
              </h1>
              <p className="text-muted-foreground text-xl mb-8 max-w-2xl mx-auto">
                Find answers to common questions about our services, process, and how we can help your business grow.
              </p>
              
              {/* Decorative elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
              </div>
              
              {/* Search Bar */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder={t.faq.search}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-purple-500/50 blur-3xl" />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-4">
              {filteredFaqs.length === 0 ? (
                <Card className="p-8 text-center">
                  <p className="text-muted-foreground">No questions found matching your search.</p>
                </Card>
              ) : (
                filteredFaqs.map((faq, index) => (
                  <Card key={index} className="overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <Button
                      variant="ghost"
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left justify-between hover:bg-muted/50"
                    >
                      <span className="font-semibold text-lg">{faq.question}</span>
                      {openIndex === index ? (
                        <ChevronUp className="h-5 w-5 text-primary" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-primary" />
                      )}
                    </Button>
                    
                    {openIndex === index && (
                      <CardContent className="px-6 pb-6 animate-accordion-down">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </CardContent>
                    )}
                  </Card>
                ))
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
