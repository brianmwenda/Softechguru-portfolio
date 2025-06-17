
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import Cart from "./Cart";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navLinks = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.services, path: "/services" },
    { name: t.nav.portfolio, path: "/gallery" },
    { name: t.nav.blog, path: "/blog" },
    { name: t.nav.faq, path: "/faq" },
    { name: t.nav.contact, path: "/contact" }
  ];

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
          ? "bg-white dark:bg-card backdrop-blur-lg py-3 shadow-md" 
          : "bg-white dark:bg-card backdrop-blur-lg py-5"
      )}>
        <nav className="container flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link to="/" className="text-xl font-bold">
              {/* <img src="/assets/images/logo.png" alt="" width="50px"/> */}
              SoftechGuru
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <li key={link.name} className="relative">
                <Link 
                  to={link.path} 
                  className="font-medium transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center space-x-2">
            {/* <Cart /> */}
            <ThemeToggle />
            <Button asChild className="btn-primary">
              <a href="https://wa.me/254701443181" target="_blank" rel="noopener noreferrer">
                {t.hero.talkToDeveloper}
              </a>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            {/* <Cart /> */}
            <ThemeToggle />
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
        "fixed top-0 left-0 right-0 z-40 md:hidden transition-all duration-300 ease-in-out bg-white dark:bg-card border-b border-primary/20 shadow-lg",
        mobileMenuOpen 
          ? "translate-y-[100px] opacity-100" 
          : "-translate-y-full opacity-0"
      )}>
        <div className="container py-6">
          <ul className="space-y-4">
            {navLinks.map(link => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className="block text-lg font-medium transition-colors hover:text-primary py-2" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-6 pt-6 border-t border-border">
            <Button asChild className="w-full btn-primary">
              <a 
                href="https://wa.me/254701443181" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.hero.talkToDeveloper}
              </a>
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
