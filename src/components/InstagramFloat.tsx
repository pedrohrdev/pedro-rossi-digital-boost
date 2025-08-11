import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const InstagramFloat = () => {
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/pedrorossiz/", "_blank");
  };

  return (
    <Button
      onClick={handleInstagramClick}
      variant="float"
      size="icon"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full shadow-glow hover:shadow-purple"
    >
      <Instagram size={24} />
    </Button>
  );
};

export default InstagramFloat;