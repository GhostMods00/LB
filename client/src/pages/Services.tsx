import { Building2, Users, Award, Shield } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import bannerImage from "@assets/stock_images/sydney_city_skyline__bd9d58e9.jpg";

export default function Services() {
  const services = [
    {
      title: "Educational Institutions",
      intro: "Specialized construction and maintenance services for schools and universities, delivered with minimal disruption to learning environments.",
      slug: "educational-institutions",
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      title: "Religious Precincts",
      intro: "Sensitive restoration and construction for churches, chapels, and religious facilities with respect for heritage and community values.",
      slug: "religious-precincts",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Commercial Projects",
      intro: "Full-service project management for commercial developments, from initial concept through to final handover.",
      slug: "commercial-projects",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Remedial Works",
      intro: "Expert building remediation, waterproofing, and structural repairs to restore and protect your property investment.",
      slug: "remedial-works",
      icon: <Shield className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerImage})` }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
            Services
          </h1>
          <div className="w-20 h-1 bg-accent mb-6" />
          <p className="text-white/90 text-lg md:text-xl max-w-2xl">
            Comprehensive construction solutions backed by nearly 50 years of excellence
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {services.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-6 text-center">
              Our Capabilities
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-12" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4 text-foreground">Construction Services</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>New builds and extensions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Heritage restoration and conservation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Fit-outs and refurbishments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Structural modifications</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4 text-foreground">Specialized Services</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Project management and coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Property maintenance programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Waterproofing and remediation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Emergency repairs and response</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
