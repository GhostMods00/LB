import { Building2, Users, Award, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import teamImage from "@assets/IMG_20251016_134638885_1761126595833.jpg";
import craftsmanshipImage from "@assets/IMG_20251022_204758_1761126486338.jpg";

export default function About() {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Craftsmanship",
      description: "We take pride in every detail, delivering work that stands the test of time and exceeds expectations.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Lasting Relationships",
      description: "Our client relationships span decades, built on trust, transparency, and consistent delivery.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Safety First",
      description: "Unwavering commitment to workplace health and safety for our team, clients, and the community.",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Heritage Respect",
      description: "Specialized expertise in working with heritage buildings and sensitive environments.",
    },
  ];

  const team = [
    {
      name: "Stephen Lundy",
      role: "Managing Director",
      bio: "Leading the company into its second generation, Stephen continues the legacy of quality and client dedication established by his father Arthur.",
    },
    {
      name: "[Name]",
      role: "Project Manager",
      bio: "Experienced project leader specializing in educational institution projects with 15+ years of expertise.",
    },
    {
      name: "[Name]",
      role: "Construction Manager",
      bio: "Overseeing on-site operations with a focus on safety, quality, and timely project delivery.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-primary">
        <div className="absolute inset-0">
          <img
            src={craftsmanshipImage}
            alt="Our craftsmanship"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4">
            About Lundy Building Group
          </h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto">
            Excellence in construction since 1975
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-6">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-accent mb-8" />
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 1975 by Arthur Lundy, Lundy Building Group (LBG) has earned a strong reputation for delivering exceptional project management, specialized property management services, and quality remedial work to prominent property developers and private schools across Sydney.
                </p>
                <p>
                  Our enduring relationships with prestigious educational institutions such as The Kings School, St. Ignatius' Riverview, Queenwood, Knox Grammar School, Tara Anglican School for Girls, Christian Brothers Lewisham, Danebank Anglican School for Girls, Waverley College, and the University of Notre Dame are a testament to our commitment to quality and our ongoing dedication to exceeding clients' expectations.
                </p>
                <p>
                  Now led by Arthur's son Stephen, the team at LBG continues to display a high level of excellence in project delivery with superior standards of quality workmanship and an unwavering focus on safety compliance.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
              <div>
                <div className="font-serif font-bold text-4xl text-primary mb-2">48+</div>
                <div className="text-sm text-muted-foreground">Years in Business</div>
              </div>
              <div>
                <div className="font-serif font-bold text-4xl text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="font-serif font-bold text-4xl text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Major Institutions</div>
              </div>
              <div>
                <div className="font-serif font-bold text-4xl text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Safety Focused</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              Our Values
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-lg mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              Our Team
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="p-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-center mb-1 text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-primary text-center mb-3 font-medium">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  {member.bio}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Banner */}
      <section className="relative h-[400px]">
        <img
          src={teamImage}
          alt="Our team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-white mb-4">
              Building Excellence Together
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Join a team that values quality, safety, and lasting relationships
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
