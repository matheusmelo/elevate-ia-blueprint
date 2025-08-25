import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, Crown, TrendingUp, Rocket, Bot } from "lucide-react";

export const SlideMonetization = () => {
  const growthData = [
    {
      metric: "Receita com IA",
      description: "Empresas de consultoria aumentam entre 20% e 30% após implementar IA",
      source: "Webmotors/AWS",
      icon: TrendingUp,
      color: "primary"
    },
    {
      metric: "Redução Operacional",
      description: "40% a 65% menos tempo operacional para consultores com agentes IA",
      source: "Estudos de mercado",
      icon: Clock,
      color: "secondary"
    },
    {
      metric: "Capacidade Triplicada",
      description: "Potencial de triplicar atendimento sem ampliar equipe",
      source: "Benchmark consultoria",
      icon: Users,
      color: "accent"
    }
  ];

  const ozarePotential = [
    {
      title: "Mais Leads Qualificados",
      description: "SDR IA trabalha 24/7 capturando e qualificando engenheiros",
      icon: Bot,
      color: "primary"
    },
    {
      title: "Escalar Consultoria",
      description: "AI Coach replica metodologia Zaccari para centenas simultaneamente",
      icon: Crown,
      color: "secondary"
    },
    {
      title: "Faturamento Sem Sobrecarga",
      description: "Aumentar receita mantendo qualidade e sem aumentar carga de trabalho",
      icon: TrendingUp,
      color: "accent"
    }
  ];

  return (
    <div className="h-full flex flex-col justify-center space-y-12 p-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
          <TrendingUp className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Escalabilidade</span>
        </div>
        
        <h1 className="text-display font-bold text-foreground">
          Perspectivas de Crescimento com IA
          <br />
          <span className="text-xl text-muted-foreground">Potencial de Escala para Ozare</span>
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Growth Data */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-primary mb-2">Dados de Mercado</h2>
            <p className="text-muted-foreground">Empresas já aplicando IA</p>
          </div>
          
          <div className="space-y-4">
            {growthData.map((data, index) => (
              <Card key={index} className={`p-6 bg-gradient-card border-${data.color}/10 hover-lift`}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-${data.color}/20 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <data.icon className={`w-6 h-6 text-${data.color}`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{data.metric}</h3>
                    <p className="text-muted-foreground text-sm">{data.description}</p>
                    <Badge className={`text-xs bg-${data.color}/20 text-${data.color}`}>
                      {data.source}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Ozare Potential */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-secondary mb-2">Potencial da Ozare</h2>
            <p className="text-muted-foreground">Como a IA pode transformar o negócio</p>
          </div>
          
          <div className="space-y-4">
            {ozarePotential.map((potential, index) => (
              <Card key={index} className={`p-6 bg-gradient-card border-${potential.color}/10 hover-lift`}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-${potential.color}/20 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <potential.icon className={`w-6 h-6 text-${potential.color}`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{potential.title}</h3>
                    <p className="text-muted-foreground text-sm">{potential.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 bg-gradient-premium border-accent/20 hover-lift">
          <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-accent">Transformação Escalável</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            <strong className="text-accent">Ozare pode triplicar</strong> sua capacidade de atendimento e 
            <strong className="text-accent"> alcançar faturamento de R$ 1M+ anual extra</strong> com agentes IA
          </p>
          <Button className="bg-gradient-hero hover:shadow-glow" size="lg">
            <Rocket className="w-4 h-4 mr-2" />
            Começar Implementação
          </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};