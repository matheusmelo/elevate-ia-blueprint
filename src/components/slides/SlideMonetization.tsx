import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Layers, Users, Crown, Gift, DollarSign, Repeat, Zap } from "lucide-react";

export const SlideMonetization = () => {
  const models = [
    {
      title: "AI Coach",
      subtitle: "Assinatura Low-Ticket",
      price: "< R$ 300/mês",
      description: "Clone digital do consultor para entrada no funil",
      features: ["Automação básica", "Conteúdo sob demanda", "Suporte por chat"],
      icon: Gift,
      color: "accent",
      tier: "Entrada"
    },
    {
      title: "Híbrido",
      subtitle: "AI + Mentor de Grupo",
      price: "R$ 800-1.500/mês",
      description: "Combina IA com mentoria em grupo",
      features: ["AI Coach completo", "Sessões em grupo", "Análises personalizadas"],
      icon: Users,
      color: "secondary",
      tier: "Medium-Ticket"
    },
    {
      title: "Mentoria Premium",
      subtitle: "AI Coach + Sessões 1-a-1",
      price: "R$ 3.000+/mês",
      description: "Máximo valor com IA + atendimento exclusivo",
      features: ["Tudo do híbrido", "Sessões 1-a-1", "Análise preditiva avançada"],
      icon: Crown,
      color: "primary",
      tier: "Alto Valor"
    }
  ];

  const freemiumModel = {
    title: "Freemium com Upsell",
    description: "AI Coach grátis até certo nível → conversão natural",
    conversionRate: "12-18%",
    avgTicket: "R$ 650/mês"
  };

  return (
    <div className="h-full flex flex-col justify-center space-y-12 p-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
          <DollarSign className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Receita Recorrente</span>
        </div>
        
        <h1 className="text-display font-bold text-foreground">
          Modelos de Monetização
          <br />
          <span className="text-xl text-muted-foreground">Lucrativos e Escaláveis</span>
        </h1>
      </div>

      {/* Tiered Pricing Models */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary mb-2">Tiered Pricing (Escalonado)</h2>
          <p className="text-muted-foreground">Diferentes níveis para máxima captura de valor</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {models.map((model, index) => (
            <Card key={index} className={`p-6 bg-gradient-card border-${model.color}/20 hover-lift relative overflow-hidden`}>
              <div className="absolute top-4 right-4">
                <Badge className={`bg-${model.color}/20 text-${model.color} border-${model.color}/20`}>
                  {model.tier}
                </Badge>
              </div>
              
              <div className="space-y-4">
                <div className={`w-12 h-12 bg-${model.color}/20 rounded-lg flex items-center justify-center`}>
                  <model.icon className={`w-6 h-6 text-${model.color}`} />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold">{model.title}</h3>
                  <p className="text-sm text-muted-foreground">{model.subtitle}</p>
                </div>
                
                <div className={`text-2xl font-bold text-${model.color}`}>
                  {model.price}
                </div>
                
                <p className="text-muted-foreground text-sm">{model.description}</p>
                
                <div className="space-y-2">
                  {model.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <div className={`w-1.5 h-1.5 bg-${model.color} rounded-full`} />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Freemium Strategy */}
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 bg-gradient-premium border-accent/20 hover-lift">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Layers className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-accent">{freemiumModel.title}</h3>
              </div>
              
              <p className="text-muted-foreground">{freemiumModel.description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-background/50 rounded-lg">
                  <div className="text-2xl font-bold text-accent">{freemiumModel.conversionRate}</div>
                  <div className="text-sm text-muted-foreground">Taxa de Conversão</div>
                </div>
                <div className="text-center p-3 bg-background/50 rounded-lg">
                  <div className="text-2xl font-bold text-accent">{freemiumModel.avgTicket}</div>
                  <div className="text-sm text-muted-foreground">Ticket Médio</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-accent">
                <Repeat className="w-5 h-5" />
                <span className="font-semibold">Novo Motor de Receita</span>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Receita recorrente previsível</li>
                <li>• Baixo custo marginal de entrega</li>
                <li>• Escala sem limite físico</li>
                <li>• Conversão natural e orgânica</li>
              </ul>
              
              <Button className="w-full bg-gradient-hero hover:shadow-glow">
                <Zap className="w-4 h-4 mr-2" />
                Implementar Modelo
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Bottom CTA */}
      <div className="text-center space-y-2">
        <div className="text-lg font-semibold bg-gradient-hero bg-clip-text text-transparent">
          Qual o valor de mercado para essas soluções?
        </div>
      </div>
    </div>
  );
};