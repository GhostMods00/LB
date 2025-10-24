import { useRoute, Link } from "wouter";
import { ArrowLeft, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import educationImage from "@assets/lundybuildinggroup-20251022-0021_1761126804815.jpg";
import religiousImage from "@assets/IMG_20250903_153536064_1761126596097.jpg";
import commercialImage from "@assets/lundybuildinggroup-20251022-0008_1761126805294.jpg";
import educationInterior from "@assets/lundybuildinggroup-20251022-0015_1761126804987.jpg";
import sportsImage from "@assets/lundybuildinggroup-20251022-0001_1761126805494.jpg";
import excavationImage from "@assets/IMG_20250903_154006700_1761126596066.jpg";

export default function ProjectDetail() {
  const [, params] = useRoute("/projects/:slug");
  const slug = params?.slug || "";

  const projects: Record<string, any> = {
    "kings-school-chapel": {
      title: "The Kings School Chapel Restoration",
      summary: "A heritage-sensitive restoration bringing new life to a historic place of worship",
      challenge: "The chapel required extensive restoration work while remaining operational for school services. The project involved delicate stonework repairs, structural reinforcement, and modern facility upgrades, all while preserving the building's heritage character and minimizing disruption to the school community.",
      approach: "We implemented a carefully phased approach, scheduling intensive work during school holidays. Our team collaborated closely with heritage consultants, the school, and local authorities. Specialized craftspeople were engaged for stonework and joinery restoration, ensuring authentic techniques and materials were used throughout.",
      outcome: "The chapel was successfully restored to its former glory while incorporating modern safety and accessibility features. The project was completed on time and within budget, earning commendation from Heritage NSW and deep appreciation from The Kings School community.",
      stats: {
        duration: "18 months",
        budgetRange: "$2M - $5M",
        location: "Parramatta, NSW",
      },
      images: [religiousImage, excavationImage, educationImage],
      serviceTags: ["Religious Precincts", "Heritage", "Educational Institutions"],
    },
    "st-ignatius-science": {
      title: "St. Ignatius' Riverview Science Block",
      summary: "Modern educational facility delivering world-class science learning environments",
      challenge: "The brief called for a state-of-the-art science facility that would inspire students while integrating with the school's historic campus. The building required specialized laboratory infrastructure, safety systems, and sustainable design features, all delivered within a tight construction timeline.",
      approach: "Our team coordinated closely with educators and science specialists to design laboratories that support modern teaching methods. We prioritized sustainable building practices, incorporating solar panels, rainwater harvesting, and natural ventilation. Construction was carefully scheduled to minimize impact on school operations.",
      outcome: "A cutting-edge science facility that has become a centerpiece of the campus, featuring 12 specialized laboratories, collaborative learning spaces, and an integrated sustainability showcase. The building achieved a 5-star energy rating and was completed ahead of schedule.",
      stats: {
        duration: "24 months",
        budgetRange: "$5M - $10M",
        location: "Lane Cove, NSW",
      },
      images: [educationImage, educationInterior, sportsImage],
      serviceTags: ["Educational Institutions", "New Build", "Sustainable"],
    },
    "queenwood-performing-arts": {
      title: "Queenwood School Performing Arts Centre",
      summary: "Creating an inspiring space for artistic excellence and creative expression",
      challenge: "Designing and building a world-class performing arts center that would meet professional acoustic standards while serving educational needs. The project required specialized theatrical systems, acoustic engineering, and integration with the existing school campus.",
      approach: "We engaged leading acoustic consultants and theatrical systems designers from the project's inception. The construction methodology prioritized precise acoustic isolation and specialized structural requirements for the suspended theatre ceiling. Close collaboration with the school's arts department ensured every performance space met their specific needs.",
      outcome: "An exceptional performing arts center featuring a 400-seat theatre, music rehearsal studios, drama workshops, and exhibition spaces. The facility has hosted professional performances and school productions to critical acclaim, significantly enhancing the school's arts program.",
      stats: {
        duration: "20 months",
        budgetRange: "$5M - $10M",
        location: "Mosman, NSW",
      },
      images: [sportsImage, educationImage, educationInterior],
      serviceTags: ["Educational Institutions", "Specialized", "New Build"],
    },
  };

  const project = projects[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif font-bold text-3xl mb-4">Project Not Found</h1>
          <Link href="/projects">
            <Button>Back to Projects</Button>
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
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 to-foreground/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <Link href="/projects">
            <Button 
              variant="outline" 
              className="mb-6 bg-white/10 border-white/30 text-white hover:bg-white/20"
              data-testid="button-back-to-projects"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.serviceTags.map((tag: string) => (
              <Badge key={tag} className="bg-accent/90 text-accent-foreground">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 max-w-3xl">
            {project.title}
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl">
            {project.summary}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <Card className="p-6 flex items-start gap-4 max-w-sm w-full">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="font-semibold text-lg">{project.stats.location}</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Challenge */}
            <div>
              <h2 className="font-serif font-bold text-3xl text-foreground mb-4">
                The Challenge
              </h2>
              <div className="w-20 h-1 bg-accent mb-6" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Approach */}
            <div>
              <h2 className="font-serif font-bold text-3xl text-foreground mb-4">
                Our Approach
              </h2>
              <div className="w-20 h-1 bg-accent mb-6" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.approach}
              </p>
            </div>

            {/* Outcome */}
            <div>
              <h2 className="font-serif font-bold text-3xl text-foreground mb-4">
                The Outcome
              </h2>
              <div className="w-20 h-1 bg-accent mb-6" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.outcome}
              </p>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {project.images.map((image: string, index: number) => (
              <div key={index} className="aspect-[4/3] rounded-md overflow-hidden">
                <img
                  src={image}
                  alt={`${project.title} image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
