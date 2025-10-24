import { useRoute, Link } from "wouter";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import educationImage from "@assets/3992_1761128663379.jpg";
import religiousImage from "@assets/Screenshot_20251022-211454_1761128366873.png";
import commercialImage from "@assets/lundybuildinggroup-20251022-0008_1761126805294.jpg";
import remedialImage from "@assets/lundybuildinggroup-20251022-0007_1761126805350.jpg";
import educationInterior from "@assets/lundybuildinggroup-20251022-0015_1761126804987.jpg";
import apartmentImage from "@assets/lundybuildinggroup-20251022-0006_1761126805437.jpg";
import excavationImage from "@assets/IMG_20250903_154006700_1761126596066.jpg";

export default function ServiceDetail() {
  const [, params] = useRoute("/services/:slug");
  const slug = params?.slug || "";

  const services: Record<string, any> = {
    "educational-institutions": {
      title: "Educational Institutions",
      heroImage: educationImage,
      description: "For nearly five decades, Lundy Building Group has been the trusted construction partner for Sydney's leading educational institutions. We understand the unique challenges of working in active learning environments and deliver projects with minimal disruption to students, staff, and operations.",
      benefits: [
        "Minimal disruption to school operations with strategic scheduling",
        "Enhanced safety protocols for student and staff protection",
        "Experience with heritage and modern educational facilities",
        "Long-term maintenance and support programs",
        "Specialized acoustic and environmental considerations",
        "Fast-track delivery for vacation period projects",
      ],
      gallery: [educationImage, educationInterior, commercialImage],
    },
    "religious-precincts": {
      title: "Religious Precincts",
      heroImage: religiousImage,
      description: "Our work with religious buildings requires sensitivity, respect, and specialized expertise. We've successfully completed restorations and construction projects for churches, chapels, and religious facilities across Sydney, preserving their heritage while enhancing their functionality for modern congregations.",
      benefits: [
        "Heritage conservation and restoration expertise",
        "Respectful approach to sacred spaces and artifacts",
        "Experience with listed and significant buildings",
        "Liturgical and functional requirements understanding",
        "Consultation with heritage authorities and consultants",
        "Community-focused project delivery",
      ],
      gallery: [religiousImage, excavationImage, educationImage],
    },
    "commercial-projects": {
      title: "Commercial Projects",
      heroImage: commercialImage,
      description: "From concept to completion, we deliver commercial construction projects that meet modern business needs while maintaining the highest standards of quality and safety. Our project management expertise ensures on-time, on-budget delivery of office fit-outs, retail spaces, and mixed-use developments.",
      benefits: [
        "Comprehensive project management from design to handover",
        "Value engineering and cost optimization",
        "Experienced in commercial fit-outs and refurbishments",
        "Minimal disruption to ongoing business operations",
        "Quality assurance and defects management",
        "Long-term building maintenance solutions",
      ],
      gallery: [commercialImage, apartmentImage, educationImage],
    },
    "remedial-works": {
      title: "Remedial Works",
      heroImage: remedialImage,
      description: "Expert remediation services to protect and restore your property investment. Our remedial works division specializes in building defects, waterproofing, structural repairs, and facade restoration, using the latest techniques and materials to ensure lasting solutions.",
      benefits: [
        "Comprehensive building inspections and reporting",
        "Waterproofing and leak detection specialists",
        "Structural repairs and reinforcement",
        "Facade restoration and refurbishment",
        "Strata and body corporate experience",
        "Warranty-backed remediation solutions",
      ],
      gallery: [remedialImage, apartmentImage, excavationImage],
    },
  };

  const service = services[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif font-bold text-3xl mb-4">Service Not Found</h1>
          <Link href="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 to-foreground/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <Link href="/services">
            <Button 
              variant="outline" 
              className="mb-6 bg-white/10 border-white/30 text-white hover:bg-white/20"
              data-testid="button-back-to-services"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Button>
          </Link>
          <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 max-w-3xl">
            {service.title}
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl">
            Specialized expertise for exceptional results
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              {service.description}
            </p>

            <h2 className="font-serif font-bold text-3xl text-foreground mb-6">
              Key Benefits
            </h2>
            <div className="w-20 h-1 bg-accent mb-8" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.benefits.map((benefit: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif font-bold text-3xl text-foreground mb-6 text-center">
            Project Gallery
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {service.gallery.map((image: string, index: number) => (
              <div key={index} className="aspect-[4/3] rounded-md overflow-hidden">
                <img
                  src={image}
                  alt={`${service.title} project ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-6">
            Discuss Your {service.title} Project
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Get in touch to learn how we can deliver exceptional results for your next project.
          </p>
          <Link href="/contact">
            <Button 
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-primary-foreground hover:bg-white/20"
              data-testid="button-get-quote-service"
            >
              Get in touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
