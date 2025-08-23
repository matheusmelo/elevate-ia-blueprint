import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Zap, Target } from "lucide-react";

export const SlideIntroduction = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center space-y-12 p-8">
      {/* Hero Section */}
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Consultoria de Elite</span>
        </div>
        
        <h1 className="text-hero font-bold bg-gradient-hero bg-clip-text text-transparent leading-tight">
          O Efeito Ozare
          <br />
          <span className="text-display">+ Potência da IA</span>
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Apresentamos o modelo que permite <strong className="text-primary">dobrar o lucro em 90 dias</strong> com mentoria personalizada, 
          agora escalável através da Inteligência Artificial.
        </p>
      </div>

      {/* Key Benefits Cards */}
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl">
        <Card className="p-6 bg-gradient-card border-primary/20 hover-lift">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">Modelo Ozare</h3>
          </div>
          <p className="text-muted-foreground">
            Metodologia comprovada para dobrar lucros com mentoria estratégica personalizada.
          </p>
        </Card>

        <Card className="p-6 bg-gradient-card border-secondary/20 hover-lift">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-secondary" />
            </div>
            <h3 className="font-semibold text-lg">Escala com IA</h3>
          </div>
          <p className="text-muted-foreground">
            Inteligência Artificial permite manter qualidade enquanto escala exponencialmente.
          </p>
        </Card>

        <Card className="p-6 bg-gradient-card border-accent/20 hover-lift">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-semibold text-lg">Consistência</h3>
          </div>
          <p className="text-muted-foreground">
            Alcance e impacto consistentes sem comprometer a qualidade da entrega.
          </p>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="space-y-4">
        <div className="text-2xl font-bold bg-gradient-premium bg-clip-text text-transparent">
          "Transforme expertise em impacto escalável."
        </div>
        
        <Button 
          size="lg" 
          className="bg-gradient-hero hover:shadow-glow transition-all duration-300 text-lg px-8 py-3 rounded-full font-semibold"
        >
          Descubra Como Escalar
        </Button>
      </div>
    </div>
  );
};