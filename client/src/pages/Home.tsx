import { Link } from "wouter";
import { Building2, Users, Shield, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import TestimonialCard from "@/components/TestimonialCard";
import heroImage from "@assets/IMG_20251016_134638885_1761126595833.jpg";
import truckImage from "@assets/IMG_20250114_154037700_1761032490823.jpg";
import educationImage from "@assets/3992_1761128663379.jpg";
import religiousImage from "@assets/Screenshot_20251022-211454_1761128366873.png";
import commercialImage from "@assets/lundybuildinggroup-20251022-0008_1761126805294.jpg";
import remedialImage from "@assets/lundybuildinggroup-20251022-0007_1761126805350.jpg";

export default function Home() {
  const services = [
    {
      title: "Educational Institutions",
      intro: "Specialized construction and maintenance services for schools and universities, delivered with minimal disruption to learning environments.",
      slug: "educational-institutions",
      icon: <Building2 className="w-6 h-6" />,
      image: educationImage,
    },
    {
      title: "Religious Precincts",
      intro: "Sensitive restoration and construction for churches, chapels, and religious facilities with respect for heritage and community values.",
      slug: "religious-precincts",
      icon: <Award className="w-6 h-6" />,
      image: religiousImage,
    },
    {
      title: "Commercial Projects",
      intro: "Full-service project management for commercial developments, from initial concept through to final handover.",
      slug: "commercial-projects",
      icon: <Users className="w-6 h-6" />,
      image: commercialImage,
    },
    {
      title: "Remedial Works",
      intro: "Expert building remediation, waterproofing, and structural repairs to restore and protect your property investment.",
      slug: "remedial-works",
      icon: <Shield className="w-6 h-6" />,
      image: remedialImage,
    },
  ];

  const featuredProjects = [
    {
      title: "The Kings School Chapel Restoration",
      summary: "Heritage-sensitive restoration of historic chapel including structural repairs, stonework restoration, and modernized facilities.",
      slug: "kings-school-chapel",
      image: religiousImage,
      serviceTags: ["Religious Precincts", "Heritage"],
    },
    {
      title: "St. Ignatius' Riverview Science Block",
      summary: "New state-of-the-art science facility with specialized laboratories and sustainable design features.",
      slug: "st-ignatius-science",
      image: educationImage,
      serviceTags: ["Educational Institutions", "New Build"],
    },
    {
      title: "Queenwood School Performing Arts Centre",
      summary: "Modern performing arts facility with acoustically optimized theatre, rehearsal spaces, and music studios.",
      slug: "queenwood-performing-arts",
      image: commercialImage,
      serviceTags: ["Educational Institutions", "Specialized"],
    },
  ];

  const testimonials = [
    {
      name: "Dr. Timothy Hawkes",
      company: "The King's School",
      role: "Headmaster",
      quote: "Lundy Building Group's attention to detail and respect for our heritage buildings has been exemplary. Their team consistently delivers quality workmanship while maintaining the school's operational needs.",
    },
    {
      name: "Jennifer Robertson",
      company: "Queenwood School for Girls",
      role: "Director of Operations",
      quote: "Working with LBG has been a pleasure. Their project management expertise and commitment to safety made our major renovation seamless, completed on time and within budget.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Lundy Building Group construction equipment and vehicles on site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 via-foreground/70 to-foreground/50" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-6 text-sm px-4 py-2 bg-accent/90 text-accent-foreground border-accent">
            Since 1975
          </Badge>
          <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-4xl mx-auto leading-tight">
            Excellence in Construction for Nearly 50 Years
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Trusted by Sydney's leading educational institutions and property developers for quality craftsmanship, expert project management, and unwavering dedication to safety.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="text-base px-8"
                data-testid="button-get-quote-hero"
              >
                Get in touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button 
                size="lg" 
                variant="outline"
                className="text-base px-8 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                data-testid="button-view-projects-hero"
              >
                View Our Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              What we do
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We employ our decades-long experience, bold thinking and expertise to shape Sydney's built environment, delivering innovative, sustainable buildings and infrastructure for educational institutions, religious communities, and commercial clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Showcasing our commitment to quality and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/projects">
              <Button variant="outline" size="lg" data-testid="button-view-all-projects">
                View All Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Safety & Compliance Strip */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-accent" />
              <div>
                <p className="font-semibold">WHS Certified</p>
                <p className="text-sm text-primary-foreground/80">Full Compliance</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-accent" />
              <div>
                <p className="font-semibold">Fully Insured</p>
                <p className="text-sm text-primary-foreground/80">Public Liability</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Building2 className="w-8 h-8 text-accent" />
              <div>
                <p className="font-semibold">Licensed Builders</p>
                <p className="text-sm text-primary-foreground/80">NSW Registered</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-accent" />
              <div>
                <p className="font-semibold">Since 1975</p>
                <p className="text-sm text-primary-foreground/80">48+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              What Our Clients Say
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Trusted relationships built on quality and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/testimonials">
              <Button variant="outline" data-testid="button-view-all-testimonials">
                View All Testimonials
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-6">
            Ready to Build Your Vision?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how Lundy Building Group can deliver exceptional results for your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 border-white/30 text-primary-foreground hover:bg-white/20"
                data-testid="button-contact-us-cta"
              >
                Contact Us Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href="tel:0417031847">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                data-testid="button-call-now-cta"
              >
                Call 0417 031 847
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
