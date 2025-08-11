import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Header = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento para meu site.", "_blank");
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-xl">
          Pedro Rossi
        </div>
        
        <Button 
          onClick={handleWhatsAppClick}
          variant="cta"
          size="sm"
          className="flex items-center gap-2"
        >
          <MessageCircle size={18} />
          Falar no WhatsApp
        </Button>
      </div>
    </header>
  );
};

export default Header;