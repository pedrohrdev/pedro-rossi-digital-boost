import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5544991262009?text=Olá! Gostaria de solicitar um orçamento para meu site.", "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      variant="float"
      size="icon"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-glow hover:shadow-purple"
    >
      <MessageCircle size={24} />
    </Button>
  );
};

export default WhatsAppFloat;