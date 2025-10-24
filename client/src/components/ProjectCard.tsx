import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  summary: string;
  slug: string;
  image: string;
  serviceTags: string[];
}

export default function ProjectCard({ title, summary, slug, image, serviceTags }: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`}>
      <div className="group cursor-pointer h-full" data-testid={`card-project-${slug}`}>
        <div className="relative overflow-hidden rounded-md aspect-[4/3] mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="font-serif font-semibold text-xl text-white mb-2 group-hover:text-accent transition-colors">
              {title}
            </h3>
          </div>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2">
          {summary}
        </p>
        <div className="flex flex-wrap gap-2">
          {serviceTags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs bg-accent/20 text-accent-foreground border-accent/30">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}
