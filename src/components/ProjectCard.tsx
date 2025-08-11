import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ image, title, description, link }: ProjectCardProps) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
      <Card className="p-4 bg-card border-border h-full flex flex-col hover:shadow-glow transition-all duration-300 hover:border-purple-vibrant/30 hover:scale-105">
        <div className="relative overflow-hidden rounded-lg mb-4">
          <img 
            src={image} 
            alt={`Capa do projeto ${title}`} 
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-1 text-foreground">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">{description}</p>
          </div>
          <div className="mt-auto">
            <span className="inline-flex items-center text-purple-vibrant hover:text-purple-glow transition-colors font-medium">
              Ver Projeto
              <ArrowUpRight className="ml-1" size={16} />
            </span>
          </div>
        </div>
      </Card>
    </a>
  );
};

export default ProjectCard;