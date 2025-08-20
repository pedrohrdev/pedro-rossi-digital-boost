import { Building2, ShoppingCart, Calendar, Search, Zap, Headphones, Palette, Code, Users, Share2, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import DifferentialCard from "@/components/DifferentialCard";
import ProjectCard from "@/components/ProjectCard"; // Importação do novo componente
import WhatsAppFloat from "@/components/WhatsAppFloat";
import InstagramFloat from "@/components/InstagramFloat";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.whatsapp) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('newsletter_signups')
        .insert([formData]);

      if (error) {
        throw error;
      }

      toast({
        title: "Sucesso!",
        description: "Obrigado por se cadastrar! Você receberá nossas atualizações em breve.",
      });

      // Limpar o formulário
      setFormData({
        name: '',
        email: '',
        whatsapp: ''
      });

    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      toast({
        title: "Erro",
        description: "Erro ao realizar cadastro. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCTAClick = () => {
    window.open("https://wa.me/5544991262009?text=Olá! Gostaria de solicitar um orçamento para meu site.", "_blank");
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
      title: "Página de Vendas",
      description: "Tenha uma página de vendas otimizada, com foco em converter os seus leads em compradores no Whatsapp.",
      deadline: "Prazo médio: 10 dias"
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
  
  // Array de projetos para a nova seção
  const projects = [
    {
      image: "/flow.png", // Mude o caminho da imagem aqui
      title: "Flow",
      description: "Pagina de vendas para um app de organização e produtividade, ajudando a gerenciar tarefas de forma simples e intuitiva",
      link: "https://pedrohrdev.github.io/flow/" // Mude o link aqui
    },
    {
      image: "/bellanapoli.png", // Mude o caminho da imagem aqui
      title: "Bella Napoli",
      description: "Site institucional para uma pizzaria, com foco em design proffisional e praticidade!",
      link: "https://pedrohrdev.github.io/bella-napoli/" // Mude o link aqui
    },

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
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
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
            Por que me escolher?
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

      {/* Projects Section - Nova Seção */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Meus <span className="text-purple-vibrant">Projetos</span> Recentes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Section */}
      <section className="py-20 px-4">
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
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Sobre <span className="text-purple-vibrant">mim</span>
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
                Desde pequeno, sempre fui um garoto criativo. Minha jornada no desenvolvimento web
                começou cedo, e hoje dedico meu tempo a criar sites que não apenas impressionam visualmente,
                mas também geram resultados reais para meus clientes.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Combino criatividade com conhecimento técnico sólido para entregar projetos únicos 
                e modernos. Cada site que desenvolvo é pensado estrategicamente para converter visitantes em clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-background border-t border-border">
        <div className="container mx-auto max-w-2xl">
          {/* Newsletter Form */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              Cadastre-se para receber <span className="text-purple-vibrant">novas atualizações</span>
            </h3>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-left">
                  <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                    Nome
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome"
                    className="w-full"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="text-left">
                  <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="text-left">
                  <Label htmlFor="whatsapp" className="text-sm font-medium mb-2 block">
                    WhatsApp
                  </Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    placeholder="(00) 99999-9999"
                    className="w-full"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <Button 
                type="submit"
                variant="cta"
                size="lg"
                className="text-lg px-8 py-6 h-auto mt-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Se você se cadastrar ganha <span className="text-purple-vibrant font-semibold">10% de desconto</span> no primeiro projeto
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="text-center border-t border-border pt-8">
            <div className="mb-6">
              <p className="text-muted-foreground mb-2">Contatos:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="https://wa.me/5544991262009" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-vibrant hover:text-purple-glow transition-colors"
                >
                  WhatsApp: (44) 99126-2009
                </a>
                <span className="hidden sm:block text-muted-foreground">|</span>
                <a 
                  href="mailto:pedrohrdev@gmail.com" 
                  className="text-purple-vibrant hover:text-purple-glow transition-colors"
                >
                  pedrohrdev@gmail.com
                </a>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Pedro Rossi. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppFloat />
      <InstagramFloat />
    </div>
  );
};

export default Index;