import { Building2, ShoppingCart, Calendar, Search, Zap, Headphones, Palette, Code, Users, Share2, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import DifferentialCard from "@/components/DifferentialCard";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import InstagramFloat from "@/components/InstagramFloat";

const Index = () => {
  const handleCTAClick = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento para meu site.", "_blank");
  };

  const services = [
    {
      icon: <Building2 className="text-white" size={24} />,
      title: "Site Institucional",
      description: "Apresente sua empresa de forma profissional e conquiste credibilidade.",
      deadline: "Prazo médio: 7 dias"
    },
    {
      icon: <ShoppingCart className="text-white" size={24} />,
      title: "Loja Virtual",
      description: "Venda seus produtos online com segurança e praticidade.",
      deadline: "Prazo médio: 10 dias"
    },
    {
      icon: <Calendar className="text-white" size={24} />,
      title: "Agendamento Online",
      description: "Permita que seus clientes reservem horários direto no site.",
      deadline: "Prazo médio: 5 dias"
    },
    {
      icon: <Search className="text-white" size={24} />,
      title: "Otimização para Google (SEO)",
      description: "Seja encontrado por mais pessoas e aumente sua visibilidade.",
      deadline: "Prazo médio: 4 dias"
    },
    {
      icon: <Zap className="text-white" size={24} />,
      title: "Site Rápido e Responsivo",
      description: "Perfeito em qualquer dispositivo, sem lentidão.",
      deadline: "Prazo médio: 3 dias"
    },
    {
      icon: <Headphones className="text-white" size={24} />,
      title: "Manutenção e Suporte",
      description: "Seu site sempre atualizado e funcionando sem problemas.",
      deadline: "Prazo sob demanda"
    }
  ];

  const differentials = [
    {
      icon: <Palette className="text-white" size={28} />,
      title: "Design Moderno",
      description: "Layouts exclusivos e atrativos para destacar seu negócio."
    },
    {
      icon: <Code className="text-white" size={28} />,
      title: "Código Otimizado",
      description: "Carregamento rápido e sem falhas."
    },
    {
      icon: <Users className="text-white" size={28} />,
      title: "Atendimento Personalizado",
      description: "Projetos adaptados às suas necessidades."
    },
    {
      icon: <Share2 className="text-white" size={28} />,
      title: "Integração com Redes Sociais",
      description: "Conecte seu site às plataformas que seu público usa."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transformo seu negócio em uma{" "}
            <span className="bg-gradient-purple bg-clip-text text-transparent">
              presença digital que vende
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Crio sites modernos e estratégicos que atraem clientes e aumentam suas vendas, 
            seja para empresas, lojas, restaurantes, barbearias ou qualquer outro negócio.
          </p>
          <Button 
            onClick={handleCTAClick}
            variant="cta"
            size="lg"
            className="text-lg px-8 py-6 h-auto"
          >
            Solicitar Orçamento Agora
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Serviços que <span className="text-purple-vibrant">impulsionam</span> seu negócio
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                deadline={service.deadline}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Por que escolher <span className="text-purple-vibrant">Pedro Rossi</span>?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((differential, index) => (
              <DifferentialCard
                key={index}
                icon={differential.icon}
                title={differential.title}
                description={differential.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="p-8 md:p-12 bg-card border-border">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Tecnologia de <span className="text-purple-vibrant">ponta</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Por trás do design, utilizo tecnologias modernas como HTML, CSS, JavaScript e Node.js 
              para criar sites rápidos, seguros e responsivos, prontos para crescer com seu negócio.
            </p>
            <Button 
              onClick={handleCTAClick}
              variant="cta"
              size="lg"
              className="text-lg px-8 py-6 h-auto"
            >
              Fale comigo agora
            </Button>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Sobre <span className="text-purple-vibrant">Pedro Rossi</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img 
                src="/lovable-uploads/b7965a6f-7a69-4f4e-a1c2-89ad391a198b.png" 
                alt="Pedro Rossi - Desenvolvedor Web" 
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-purple-vibrant/20"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
                Olá! Eu sou Pedro Rossi, tenho 15 anos e sou apaixonado por tecnologia. 
                Desde pequeno, sempre fui um garoto criativo que adora transformar ideias em realidade digital. 
                Minha jornada no desenvolvimento web começou cedo, e hoje dedico meu tempo a criar sites 
                que não apenas impressionam visualmente, mas também geram resultados reais para meus clientes.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Combino criatividade juvenil com conhecimento técnico sólido para entregar projetos únicos 
                e modernos. Cada site que desenvolvo é pensado estrategicamente para converter visitantes em clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-background border-t border-border">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <p className="text-muted-foreground mb-2">Contatos:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-vibrant hover:text-purple-glow transition-colors"
              >
                WhatsApp: (11) 99999-9999
              </a>
              <span className="hidden sm:block text-muted-foreground">|</span>
              <a 
                href="mailto:contato@pedrorossi.dev" 
                className="text-purple-vibrant hover:text-purple-glow transition-colors"
              >
                contato@pedrorossi.dev
              </a>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 Pedro Rossi. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <WhatsAppFloat />
      <InstagramFloat />
    </div>
  );
};

export default Index;