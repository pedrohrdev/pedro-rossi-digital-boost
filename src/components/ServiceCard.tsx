import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  deadline: string;
}

const ServiceCard = ({ icon, title, description, deadline }: ServiceCardProps) => {
  return (
    <Card className="p-6 bg-card border-border hover:shadow-purple transition-all duration-300 hover:border-purple-vibrant/30">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-purple rounded-full flex items-center justify-center shadow-purple">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground mb-3 leading-relaxed">{description}</p>
          <p className="text-sm text-purple-vibrant font-medium">{deadline}</p>
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;