import { Card } from "@/components/ui/card";

interface DifferentialCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const DifferentialCard = ({ icon, title, description }: DifferentialCardProps) => {
  return (
    <Card className="p-6 bg-card border-border text-center hover:shadow-glow transition-all duration-300 hover:border-purple-vibrant/30 hover:scale-105">
      <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-4 shadow-purple">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  );
};

export default DifferentialCard;