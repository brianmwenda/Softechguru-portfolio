
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card text-card-foreground pt-12 pb-6 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="animate-fade-in [animation-delay:100ms]">
            <h4 className="text-lg font-bold mb-4">WebDev Studio</h4>
            <p className="text-muted-foreground text-sm mb-4">
              {t.footer.description}
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 bg-muted/50 rounded-full">
                <Facebook size={16} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 bg-muted/50 rounded-full">
                <Instagram size={16} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 bg-muted/50 rounded-full">
                <Twitter size={16} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="animate-fade-in [animation-delay:200ms]">
            <h4 className="text-lg font-bold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: t.nav.home, path: "/" },
                { name: t.nav.services, path: "/services" },
                { name: t.nav.gallery, path: "/gallery" },
                { name: t.nav.blog, path: "/blog" },
                { name: t.nav.faq, path: "/faq" },
                { name: t.nav.contact, path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="animate-fade-in [animation-delay:300ms]">
            <h4 className="text-lg font-bold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-primary" />
                <span className="text-muted-foreground">info@webdevstudio.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-primary" />
                <span className="text-muted-foreground">123 Tech Street, Digital City</span>
              </li>
              <li className="flex items-center">
                <Globe className="w-4 h-4 mr-2 text-primary" />
                <span className="text-muted-foreground">www.webdevstudio.com</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="animate-fade-in [animation-delay:400ms]">
            <h4 className="text-lg font-bold mb-4">Business Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-primary" />
                <div>
                  <div className="text-muted-foreground">Mon - Fri</div>
                  <div className="text-foreground font-medium">9:00 AM - 6:00 PM</div>
                </div>
              </li>
              <li className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-primary" />
                <div>
                  <div className="text-muted-foreground">Weekend</div>
                  <div className="text-foreground font-medium">10:00 AM - 4:00 PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} WebDev Studio. {t.footer.allRights}</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">
              {t.footer.privacyPolicy}
            </Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">
              {t.footer.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
