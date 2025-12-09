import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Shield, Eye, Lock, Users, FileText, Mail } from "lucide-react";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        "We collect information you provide when requesting design services, including your name, email address, phone number, business details, and project requirements.",
        "For graphic design projects, we may collect brand assets, logos, images, and content you provide for design work.",
        "For architectural design, we collect property details, site plans, specifications, and visual references.",
        "For web design, we gather content, images, branding materials, and any existing website information."
      ]
    },
    {
      icon: FileText,
      title: "How We Use Your Information",
      items: [
        "Deliver graphic design, architectural design, and web design services",
        "Communicate project updates, revisions, and deliverables",
        "Process payments and maintain business records",
        "Improve our design services and client experience",
        "Send portfolio updates and service offerings (with your consent)",
        "Comply with legal and professional obligations"
      ]
    },
    {
      icon: Users,
      title: "Information Sharing",
      content: [
        "We do not sell, trade, or share your personal information or design assets with third parties without your explicit consent.",
        "Your brand materials, design files, and project details remain confidential.",
        "We may share information only with trusted partners directly involved in your project (e.g., printers, contractors) with your approval.",
        "We may disclose information when required by law or to protect our legal rights."
      ]
    },
    {
      icon: Lock,
      title: "Data Security & Confidentiality",
      content: [
        "All design files, brand assets, and project materials are stored securely and protected against unauthorized access.",
        "We implement industry-standard security measures for digital file storage and transfer.",
        "Client work remains confidential unless you provide written permission for portfolio use.",
        "Architectural plans and proprietary designs are treated with strict confidentiality."
      ]
    },
    {
      icon: Shield,
      title: "Your Rights",
      items: [
        "Access copies of your design files and project materials",
        "Request corrections to your personal information",
        "Withdraw consent for marketing communications",
        "Request deletion of your personal data (subject to legal retention requirements)",
        "Opt-out of portfolio inclusion at any time"
      ]
    },
    {
      icon: Mail,
      title: "Contact Us",
      content: [
        "If you have questions about this Privacy Policy or how we handle your information, please contact us:",
        "Email: softechguruservices@gmail.com",
        "Phone: +(254) 701-443-181",
        "WhatsApp: +254 701 443 181"
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Privacy Policy - Softech Guru Design Services"
        description="Learn how Softech Guru protects your personal information and design assets. Our privacy policy covers graphic design, architectural design, and web design services."
        keywords="privacy policy, design services privacy, graphic design confidentiality, architectural design privacy"
      />
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        
        <main className="flex-1 pt-20">
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
            <div className="container relative z-10">
              <div className="max-w-4xl mx-auto text-center animate-fade-in">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 text-sm mb-6">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-primary font-medium">Your Privacy Matters</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
                  Privacy <span className="text-primary">Policy</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  How we collect, use, and protect your information when you work with us on graphic design, architectural design, and web design projects.
                </p>
                <p className="text-muted-foreground/70 text-sm mt-4">
                  Last updated: December 9, 2025
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
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
                          <div className="space-y-3">
                            {section.content.map((paragraph, pIndex) => (
                              <p key={pIndex} className="text-muted-foreground leading-relaxed">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        )}
                        
                        {section.items && (
                          <ul className="space-y-2">
                            {section.items.map((item, iIndex) => (
                              <li key={iIndex} className="flex items-start gap-3 text-muted-foreground">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
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
