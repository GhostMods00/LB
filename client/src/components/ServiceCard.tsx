import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  intro: string;
  slug: string;
  icon?: React.ReactNode;
  image?: string;
}

export default function ServiceCard({ title, intro, slug, icon, image }: ServiceCardProps) {
  return (
    <Link href={`/services/${slug}`}>
      <Card className="h-full overflow-hidden hover-elevate active-elevate-2 cursor-pointer transition-all group border-t-4 border-t-primary">
        {image && (
          <div className="w-full h-48 overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="flex flex-col h-full p-6">
          {icon && (
            <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4 text-primary">
              {icon}
            </div>
          )}
          <h3 className="font-serif font-semibold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
            {intro}
          </p>
          <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
            Learn More
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Card>
    </Link>
  );
}
