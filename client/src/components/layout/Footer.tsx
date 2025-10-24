import { Link } from "wouter";
import { Phone, Mail, MapPin, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="border-t-4 border-primary" />
      
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="font-serif font-bold text-xl mb-4 text-background">
              Lundy Building Group
            </h3>
            <p className="text-background/80 text-sm">
              Excellence in construction since 1975. Trusted by Sydney's leading educational institutions and property developers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about">
                  <button className="text-background/80 hover:text-background transition-colors" data-testid="link-footer-about">
                    About Us
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <button className="text-background/80 hover:text-background transition-colors" data-testid="link-footer-services">
                    Services
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <button className="text-background/80 hover:text-background transition-colors" data-testid="link-footer-projects">
                    Projects
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/careers">
                  <button className="text-background/80 hover:text-background transition-colors" data-testid="link-footer-careers">
                    Careers
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <button className="text-background/80 hover:text-background transition-colors" data-testid="link-footer-privacy">
                    Privacy Policy
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <button className="text-background/80 hover:text-background transition-colors" data-testid="link-footer-terms">
                    Terms of Service
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/educational-institutions">
                  <button className="text-background/80 hover:text-background transition-colors" data-testid="link-footer-service-education">
                    Educational Institutions
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/services/religious-precincts">
                  <button className="text-background/80 hover:text-background transition-colors" data-testid="link-footer-service-religious">
                    Religious Precincts
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/services/commercial-projects">
                  <button className="text-background/80 hover:text-background transition-colors" data-testid="link-footer-service-commercial">
                    Commercial Projects
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/services/remedial-works">
                  <button className="text-background/80 hover:text-background transition-colors" data-testid="link-footer-service-remedial">
                    Remedial Works
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                <span className="text-background/80">
                  Suite 108, 7-11 Clarke Street<br />
                  Crows Nest NSW 2065
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
                <a href="tel:0417031847" className="text-background/80 hover:text-background transition-colors" data-testid="link-footer-phone">
                  0417 031 847
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-accent" />
                <a href="mailto:info@lundybuilding.com.au" className="text-background/80 hover:text-background transition-colors" data-testid="link-footer-email">
                  info@lundybuilding.com.au
                </a>
              </li>
            </ul>
            
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.instagram.com/lundybuildinggroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-md bg-background/10 flex items-center justify-center hover-elevate transition-colors"
                data-testid="link-footer-instagram"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-background" />
              </a>
              <a
                href="https://www.linkedin.com/company/lundy-building-group-pty-ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-md bg-background/10 flex items-center justify-center hover-elevate transition-colors"
                data-testid="link-footer-linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-background" />
              </a>
            </div>

            <p className="text-background/70 text-xs mt-4">
              <strong>Hours:</strong> Mon-Fri 7:00 AM - 5:00 PM
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-background/60 text-sm">
            © {currentYear} Lundy Building Group. All rights reserved. Since 1975.
          </p>
        </div>
      </div>
    </footer>
  );
}
