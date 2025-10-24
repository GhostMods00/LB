import { Shield, Award, FileCheck, Users, AlertTriangle, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import safetyImage from "@assets/IMG_20250903_154006700_1761126596066.jpg";

export default function SafetyCompliance() {
  const certifications = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "WHS Compliance",
      description: "Full compliance with NSW Work Health and Safety regulations and ongoing safety management systems.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Public Liability Insurance",
      description: "Comprehensive public liability coverage ensuring complete protection for clients and stakeholders.",
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Licensed Builder",
      description: "NSW registered builder with full compliance to building codes and industry standards.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Professional Indemnity",
      description: "Comprehensive professional indemnity insurance for complete client peace of mind.",
    },
  ];

  const safetyCommitments = [
    "Zero harm philosophy - safety is our top priority on every project",
    "Comprehensive induction programs for all site personnel and visitors",
    "Regular safety audits and continuous improvement processes",
    "Detailed risk assessments and safe work method statements",
    "Emergency response procedures and trained first aid officers",
    "Strict compliance with personal protective equipment requirements",
  ];

  const processSteps = [
    {
      number: "01",
      title: "Risk Assessment",
      description: "Comprehensive site evaluation and hazard identification before work begins.",
    },
    {
      number: "02",
      title: "Safety Planning",
      description: "Development of detailed safe work method statements and control measures.",
    },
    {
      number: "03",
      title: "Training & Induction",
      description: "All personnel complete site-specific safety inductions and ongoing training.",
    },
    {
      number: "04",
      title: "Monitoring & Review",
      description: "Continuous safety monitoring, audits, and incident reporting systems.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={safetyImage}
            alt="Safety and compliance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 to-foreground/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 max-w-3xl">
            Safety & Compliance
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl">
            Unwavering commitment to safety, quality, and regulatory excellence
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-6">
              Safety Is Our Foundation
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8" />
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At Lundy Building Group, safety isn't just a requirement—it's embedded in our culture. With nearly 50 years of operations, we've maintained an exemplary safety record through rigorous systems, ongoing training, and an unwavering commitment to protecting everyone on our sites.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              Certifications & Insurance
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                  {cert.icon}
                </div>
                <h3 className="font-semibold text-lg mb-3 text-foreground">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Commitments */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-6">
              Our Safety Commitments
            </h2>
            <div className="w-20 h-1 bg-accent mb-8" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {safetyCommitments.map((commitment, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{commitment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              Our Safety Process
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A systematic approach to ensuring safety on every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <Card key={index} className="p-6 relative">
                <div className="absolute -top-4 left-6">
                  <Badge className="text-lg px-4 py-2 bg-primary text-primary-foreground font-bold">
                    {step.number}
                  </Badge>
                </div>
                <div className="mt-6">
                  <h3 className="font-semibold text-lg mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Banner */}
      <section className="py-12 bg-primary/5 border-y border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-4 max-w-4xl mx-auto">
            <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">
                Safety is Everyone's Responsibility
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                All visitors to our construction sites must complete a site-specific safety induction and comply with all safety requirements including appropriate personal protective equipment. If you observe any unsafe practices, please report them immediately to the site supervisor.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
