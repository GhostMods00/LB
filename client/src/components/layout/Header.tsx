import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImg from "@assets/Picsart_25-10-22_21-53-10-189_1761130410035.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/safety-and-compliance", label: "Safety & Compliance" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary/95 backdrop-blur-sm shadow-md" : "bg-primary"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-3 lg:gap-4 hover-elevate rounded-md px-2 lg:px-3 py-2 -ml-2 lg:-ml-3">
              <img 
                src={logoImg} 
                alt="Lundy Building Group Logo" 
                className="h-12 lg:h-14 w-auto"
              />
              <div className="font-serif font-bold text-base lg:text-lg xl:text-xl text-primary-foreground">
                LUNDY BUILDING GROUP
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <button
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover-elevate ${
                    location === link.href
                      ? "text-primary-foreground bg-white/10"
                      : "text-primary-foreground/90"
                  }`}
                  data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {link.label}
                </button>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:0417031847" className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground text-sm">
              <Phone className="w-4 h-4" />
              <span className="font-medium">0417 031 847</span>
            </a>
            <Link href="/contact">
              <Button 
                variant="outline" 
                className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20 backdrop-blur-sm"
                data-testid="button-get-quote-header"
              >
                Get in touch
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-primary-foreground hover-elevate rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu-toggle"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <button
                    className={`w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors hover-elevate ${
                      location === link.href
                        ? "text-primary-foreground bg-white/10"
                        : "text-primary-foreground/90"
                    }`}
                    data-testid={`link-mobile-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </button>
                </Link>
              ))}
              <div className="mt-4 px-4 space-y-3">
                <a 
                  href="tel:0417031847" 
                  className="flex items-center gap-2 text-primary-foreground text-sm py-2"
                  data-testid="link-phone-mobile"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">0417 031 847</span>
                </a>
                <Link href="/contact">
                  <Button 
                    variant="outline" 
                    className="w-full bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20"
                    data-testid="button-get-quote-mobile"
                  >
                    Get in touch
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
