import TestimonialCard from "@/components/TestimonialCard";
import bannerImage from "@assets/stock_images/sydney_city_skyline__331219b3.jpg";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Timothy Hawkes",
      company: "The King's School",
      role: "Headmaster",
      quote: "Lundy Building Group's attention to detail and respect for our heritage buildings has been exemplary. Their team consistently delivers quality workmanship while maintaining the school's operational needs. We've worked with them for over a decade and they remain our trusted construction partner.",
    },
    {
      name: "Jennifer Robertson",
      company: "Queenwood School for Girls",
      role: "Director of Operations",
      quote: "Working with LBG has been a pleasure from start to finish. Their project management expertise and commitment to safety made our major renovation seamless. The performing arts center they delivered has exceeded all expectations and was completed on time and within budget.",
    },
    {
      name: "Michael Chen",
      company: "St. Ignatius' College Riverview",
      role: "Facilities Manager",
      quote: "The professionalism and expertise Lundy Building Group brings to every project is outstanding. They understand the unique challenges of working in an active school environment and always minimize disruption to our students and staff. Their communication throughout projects is excellent.",
    },
    {
      name: "Father James Morrison",
      company: "St. Mary's Cathedral",
      role: "Parish Priest",
      quote: "The restoration of our historic chapel required sensitivity, skill, and deep respect for its heritage significance. Lundy Building Group demonstrated all of these qualities and more. The result is a beautiful restoration that honors the building's past while serving our community's future needs.",
    },
    {
      name: "Sarah Williams",
      company: "Knox Grammar School",
      role: "Business Manager",
      quote: "LBG has completed multiple projects for Knox over the years, from new builds to renovations. Their consistent quality, safety standards, and ability to deliver complex projects on schedule make them an invaluable partner. We highly recommend their services.",
    },
    {
      name: "David Thompson",
      company: "Strata Plan SP12345",
      role: "Strata Manager",
      quote: "The remedial works completed by Lundy Building Group resolved long-standing waterproofing issues in our complex. Their systematic approach, clear communication with owners, and warranty-backed work gave everyone confidence. The building is now protected for years to come.",
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
            Testimonials
          </h1>
          <div className="w-20 h-1 bg-accent mb-6" />
          <p className="text-white/90 text-lg md:text-xl max-w-2xl">
            Trusted relationships built on quality, reliability, and excellence
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              Client Satisfaction
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="font-serif font-bold text-5xl text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Repeat Clients</div>
            </div>
            <div>
              <div className="font-serif font-bold text-5xl text-primary mb-2">48+</div>
              <div className="text-muted-foreground">Years of Trust</div>
            </div>
            <div>
              <div className="font-serif font-bold text-5xl text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Commitment to Quality</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
