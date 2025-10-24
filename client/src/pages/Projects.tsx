import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import educationImage from "@assets/lundybuildinggroup-20251022-0021_1761126804815.jpg";
import religiousImage from "@assets/IMG_20250903_153536064_1761126596097.jpg";
import commercialImage from "@assets/lundybuildinggroup-20251022-0008_1761126805294.jpg";
import remedialImage from "@assets/lundybuildinggroup-20251022-0007_1761126805350.jpg";
import constructionImage from "@assets/lundybuildinggroup-20251022-0015_1761126804987.jpg";
import sportsImage from "@assets/lundybuildinggroup-20251022-0001_1761126805494.jpg";
import apartmentImage from "@assets/lundybuildinggroup-20251022-0006_1761126805437.jpg";
import bannerImage from "@assets/stock_images/sydney_city_skyline__0858dfb2.jpg";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "The Kings School Chapel Restoration",
      summary: "Heritage-sensitive restoration of historic chapel including structural repairs, stonework restoration, and modernized facilities while preserving its architectural significance.",
      slug: "kings-school-chapel",
      image: religiousImage,
      serviceTags: ["Religious Precincts", "Heritage"],
    },
    {
      title: "St. Ignatius' Riverview Science Block",
      summary: "New state-of-the-art science facility with specialized laboratories, sustainable design features, and modern learning spaces.",
      slug: "st-ignatius-science",
      image: educationImage,
      serviceTags: ["Educational Institutions", "New Build"],
    },
    {
      title: "Queenwood School Performing Arts Centre",
      summary: "Modern performing arts facility with acoustically optimized theatre, rehearsal spaces, and music studios.",
      slug: "queenwood-performing-arts",
      image: sportsImage,
      serviceTags: ["Educational Institutions", "Specialized"],
    },
    {
      title: "Knox Grammar School Library Extension",
      summary: "Contemporary library extension blending with existing heritage architecture, featuring flexible learning spaces and digital integration.",
      slug: "knox-library",
      image: constructionImage,
      serviceTags: ["Educational Institutions", "Extension"],
    },
    {
      title: "Waverley College Sports Facility",
      summary: "Multi-purpose sports hall with modern amenities, change rooms, and community access features.",
      slug: "waverley-sports",
      image: sportsImage,
      serviceTags: ["Educational Institutions", "New Build"],
    },
    {
      title: "Strata Building Remediation Project",
      summary: "Comprehensive waterproofing and facade restoration for 120-unit residential complex, resolving long-standing defects.",
      slug: "strata-remediation",
      image: apartmentImage,
      serviceTags: ["Remedial Works", "Waterproofing"],
    },
  ];

  const filters = [
    "all",
    "Educational Institutions",
    "Religious Precincts",
    "Commercial Projects",
    "Remedial Works",
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.serviceTags.includes(activeFilter));

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
            Projects
          </h1>
          <div className="w-20 h-1 bg-accent mb-6" />
          <p className="text-white/90 text-lg md:text-xl max-w-2xl">
            A showcase of quality craftsmanship and successful partnerships
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className="capitalize"
                data-testid={`button-filter-${filter.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {filter === "all" ? "All Projects" : filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.slug} {...project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
