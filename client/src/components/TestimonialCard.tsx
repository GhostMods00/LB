import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  company: string;
  role?: string;
  quote: string;
}

export default function TestimonialCard({ name, company, role, quote }: TestimonialCardProps) {
  return (
    <Card className="p-6 lg:p-8 h-full flex flex-col">
      <Quote className="w-10 h-10 text-accent mb-4" />
      <blockquote className="text-muted-foreground leading-relaxed mb-6 flex-grow italic">
        "{quote}"
      </blockquote>
      <div className="border-t border-border pt-4">
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">
          {role && `${role}, `}{company}
        </p>
      </div>
    </Card>
  );
}
