import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import HolidayBanner from "@/components/HolidayBanner";
import { useHolidayMode } from "@/hooks/useHolidayMode";
import { FileText, Palette, Building2, Globe, CreditCard, Clock, Scale, AlertTriangle, Mail, Megaphone } from "lucide-react";

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: FileText,
      title: "Agreement to Terms",
      content: [
        "By engaging Softech Guru for digital marketing, graphic design, architectural design, or web design services, you accept and agree to be bound by these terms and conditions.",
        "These terms apply to all marketing campaigns, design projects, consultations, and creative services provided by Softech Guru."
      ]
    },
    {
      icon: Megaphone,
      title: "Digital Marketing Services",
      subsections: [
        {
          subtitle: "Social Media Marketing",
          items: ["Social media strategy and management", "Content creation and scheduling", "Community engagement and growth", "Influencer marketing campaigns"]
        },
        {
          subtitle: "SEO & Online Advertising",
          items: ["Search engine optimization (SEO)", "Google Ads and PPC campaigns", "Facebook and Instagram advertising", "Analytics and performance reporting"]
        }
      ]
    },
    {
      icon: Palette,
      title: "Design Services Offered",
      subsections: [
        {
          subtitle: "Graphic Design",
          items: ["Logo design and brand identity", "Marketing materials and print collateral", "Social media graphics and digital assets", "Packaging and merchandise design"]
        },
        {
          subtitle: "Architectural Design",
          items: ["3D visualization and rendering", "Floor plans and elevations", "Interior design concepts", "Architectural presentations"]
        },
        {
          subtitle: "Web Design",
          items: ["Website design and development", "UI/UX design", "E-commerce solutions", "Website maintenance and updates"]
        }
      ]
    },
    {
      icon: CreditCard,
      title: "Payment Terms",
      items: [
        "A 50% deposit is required before project commencement",
        "Balance payment is due upon project completion and before final file delivery",
        "For large projects, milestone payments may be arranged",
        "Late payments may incur a 5% monthly fee",
        "All prices are in KES unless otherwise specified",
        "Prices are exclusive of any applicable taxes"
      ]
    },
    {
      icon: Scale,
      title: "Intellectual Property & Ownership",
      content: [
        "Upon full payment, you receive full ownership and rights to the final approved designs.",
        "Preliminary concepts, drafts, and rejected designs remain the property of Softech Guru.",
        "We reserve the right to showcase completed work in our portfolio unless a non-disclosure agreement is signed.",
        "You warrant that all materials provided (text, images, logos) are owned by you or properly licensed."
      ]
    },
    {
      icon: Building2,
      title: "Revisions & Modifications",
      items: [
        "Each project includes a specified number of revision rounds (typically 2-3)",
        "Additional revisions beyond the agreed scope will be billed separately",
        "Major changes to project scope after approval may require a new quote",
        "Revision requests must be submitted in writing within 14 days of receiving drafts"
      ]
    },
    {
      icon: Clock,
      title: "Project Timelines",
      content: [
        "Project timelines are estimated based on scope and complexity. Actual delivery may vary based on:",
        "Timely provision of content, materials, and feedback from the client",
        "Prompt approval of concepts and drafts",
        "Scope changes or additional requests during the project"
      ],
      note: "Delays caused by late client feedback will extend the project deadline accordingly."
    },
    {
      icon: AlertTriangle,
      title: "Cancellation & Refunds",
      items: [
        "Deposits are non-refundable once work has commenced",
        "Cancellation after project start will be billed for work completed",
        "Refunds for incomplete work are at Softech Guru's discretion",
        "Rush fees for expedited timelines are non-refundable"
      ]
    },
    {
      icon: Scale,
      title: "Limitation of Liability",
      content: [
        "Softech Guru's liability is limited to the total amount paid for the specific project.",
        "We are not liable for any indirect, incidental, or consequential damages arising from the use of our designs.",
        "We are not responsible for printing errors, color variations, or issues caused by third-party vendors.",
        "For architectural designs, we provide visualizations only—structural engineering and construction compliance are the client's responsibility."
      ]
    },
    {
      icon: Globe,
      title: "Governing Law",
      content: [
        "These terms are governed by the laws of Kenya.",
        "Any disputes will be resolved through mediation before legal proceedings.",
        "Both parties agree to negotiate in good faith to resolve any issues."
      ]
    },
    {
      icon: Mail,
      title: "Contact Information",
      content: [
        "For questions about these Terms of Service, contact us:",
        "Email: softechguruservices@gmail.com",
        "Phone: +(254) 701-443-181",
        "WhatsApp: +254 701 443 181"
      ]
    }
  ];

  const holidayMode = useHolidayMode();

  return (
    <>
      <SEO
        title="Terms of Service - Softech Guru Digital Marketing & Design Services"
        description="Terms and conditions for digital marketing, graphic design, architectural design, and web design services by Softech Guru. Understand our policies, payment terms, and project guidelines."
        keywords="terms of service, digital marketing terms, design terms, graphic design terms, architectural design terms, web design contract, SEO services terms"
      />
      <div className="min-h-screen flex flex-col bg-background">
        {holidayMode !== "none" && <HolidayBanner mode={holidayMode} />}
        <Navbar />
        
        <main className="flex-1 pt-20">
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
            <div className="container relative z-10">
              <div className="max-w-4xl mx-auto text-center animate-fade-in">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 text-sm mb-6">
                  <FileText className="w-4 h-4 text-primary" />
                  <span className="text-primary font-medium">Service Agreement</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
                  Terms of <span className="text-primary">Service</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Please read these terms carefully before engaging our digital marketing, graphic design, architectural design, or web design services.
                </p>
                <p className="text-muted-foreground/70 text-sm mt-4">
                  Last updated: December 30, 2025
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            </div>
          </section>

          {/* Content Sections */}
          <section className="py-16">
            <div className="container">
              <div className="max-w-4xl mx-auto space-y-8">
                {sections.map((section, index) => (
                  <div 
                    key={index}
                    className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <section.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl font-bold text-foreground mb-4">{section.title}</h2>
                        
                        {section.content && (
                          <div className="space-y-3 mb-4">
                            {section.content.map((paragraph, pIndex) => (
                              <p key={pIndex} className="text-muted-foreground leading-relaxed">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        )}
                        
                        {section.items && (
                          <ul className="space-y-2 mb-4">
                            {section.items.map((item, iIndex) => (
                              <li key={iIndex} className="flex items-start gap-3 text-muted-foreground">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        
                        {section.subsections && (
                          <div className="space-y-6">
                            {section.subsections.map((sub, sIndex) => (
                              <div key={sIndex} className="pl-4 border-l-2 border-primary/30">
                                <h3 className="text-lg font-semibold text-foreground mb-3">{sub.subtitle}</h3>
                                <ul className="space-y-2">
                                  {sub.items.map((item, iIndex) => (
                                    <li key={iIndex} className="flex items-start gap-3 text-muted-foreground">
                                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0"></div>
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {section.note && (
                          <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                            <p className="text-sm text-muted-foreground italic">{section.note}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
