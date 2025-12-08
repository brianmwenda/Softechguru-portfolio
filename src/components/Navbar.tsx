
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navLinks = [
    { name: t.nav.home, path: "/" },
    { name: "Services", path: "/#services" },
    { name: "About Us", path: "/#why-us" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Pricing", path: "/pricing" }
  ];

  const handleNavClick = (path: string) => {
    if (path.startsWith('/#')) {
      const section = path.substring(2);
      
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);
  
  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg py-2" 
          : "bg-background/80 backdrop-blur-sm py-4"
      )}>
        <nav className="container flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <a className="text-xl font-bold" href="/">Softech Guru</a>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <li key={link.name} className="relative">
                {link.path.startsWith('/#') ? (
                  <button
                    onClick={() => handleNavClick(link.path)}
                    className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary relative group"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </button>
                ) : (
                  <Link 
                    to={link.path} 
                    className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary relative group"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center space-x-2">
            <Button 
              onClick={() => handleNavClick('/#contact')}
              className="bg-primary hover:bg-primary/90 text-white px-6"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="rounded-full"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Dropdown */}
      <div className={cn(
        "fixed top-0 left-0 right-0 z-40 md:hidden transition-all duration-300 ease-in-out bg-background border-b border-border shadow-lg",
        mobileMenuOpen 
          ? "translate-y-[100px] opacity-100" 
          : "-translate-y-full opacity-0"
      )}>
        <div className="container py-6">
          <ul className="space-y-4">
            {navLinks.map(link => (
              <li key={link.name}>
                {link.path.startsWith('/#') ? (
                  <button
                    onClick={() => handleNavClick(link.path)}
                    className="block text-lg font-medium transition-colors hover:text-primary py-2 text-muted-foreground text-left w-full"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link 
                    to={link.path} 
                    className="block text-lg font-medium transition-colors hover:text-primary py-2 text-muted-foreground" 
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          
          <div className="mt-6 pt-6 border-t border-border">
            <Button 
              onClick={() => handleNavClick('/#contact')}
              className="w-full bg-primary hover:bg-primary/90 text-white"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Push down spacer for mobile menu */}
      <div className={cn(
        "md:hidden transition-all duration-300 ease-in-out",
        mobileMenuOpen ? "h-64" : "h-0"
      )} />
    </>
  );
}
