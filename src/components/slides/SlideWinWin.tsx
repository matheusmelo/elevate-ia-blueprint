import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Building, Trophy, TrendingUp, Repeat, Zap, Heart, Star, CheckCircle } from "lucide-react";

export const SlideWinWin = () => {
  const stakeholders = [
    {
      title: "Para o Consultor",
      icon: Users,
      color: "primary",
      benefits: [
        "Escala sem limite físico",
        "Receita recorrente previsível", 
        "Expertise amplificada pela IA",
        "Qualidade mantida em escala",
        "Posicionamento como autoridade"
      ]
    },
    {
      title: "Para Sua Empresa",
      icon: Building,
      color: "secondary", 
      benefits: [
        "Margem alta no bootcamp (R$ 25k)",
        "Serviço contínuo (AI Coach)",
        "Diferenciação competitiva",
        "Múltiplas fontes de receita",
        "Escalabilidade comprovada"
      ]
    },
    {
      title: "Para o Cliente",
      icon: Trophy,
      color: "accent",
      benefits: [
        "Transformação empresarial real",
        "ROI financeiro mensurável",
        "Liberdade operacional",
        "Competitividade aumentada",
        "Crescimento sustentável"
      ]
    }
  ];

  const successMetrics = [
    { metric: "94%", label: "Taxa de Satisfação", icon: Heart },
    { metric: "340%", label: "ROI Médio Cliente", icon: TrendingUp },
    { metric: "87%", label: "Renovação AI Coach", icon: Repeat },
    { metric: "2.3x", label: "Crescimento Médio", icon: Zap }
  ];

  return (
    <div className="h-full flex flex-col justify-center space-y-12 p-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
          <Heart className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-accent">Win-Win-Win</span>
        </div>
        
        <h1 className="text-display font-bold text-foreground">
          O Jogo de Ganha-Ganha
          <br />
          <span className="text-xl text-muted-foreground">Valor para Todos os Stakeholders</span>
        </h1>
        
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Uma proposta que cria valor genuíno para consultor, empresa e cliente simultaneamente
        </p>
      </div>

      {/* Stakeholder Benefits */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {stakeholders.map((stakeholder, index) => (
          <Card key={index} className={`p-6 bg-gradient-card border-${stakeholder.color}/20 hover-lift`}>
            <div className="space-y-4">
              <div className="text-center space-y-3">
                <div className={`w-16 h-16 bg-${stakeholder.color}/20 rounded-full flex items-center justify-center mx-auto`}>
                  <stakeholder.icon className={`w-8 h-8 text-${stakeholder.color}`} />
                </div>
                <h3 className="text-xl font-bold">{stakeholder.title}</h3>
              </div>
              
              <div className="space-y-3">
                {stakeholder.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className={`w-4 h-4 text-${stakeholder.color} flex-shrink-0`} />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className={`p-3 bg-${stakeholder.color}/10 rounded-lg border border-${stakeholder.color}/20 text-center`}>
                <Badge className={`bg-${stakeholder.color}/20 text-${stakeholder.color} border-${stakeholder.color}/20`}>
                  <Star className="w-3 h-3 mr-1" />
                  Valor Maximizado
                </Badge>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Success Metrics */}
      <div className="max-w-5xl mx-auto">
        <Card className="p-8 bg-gradient-premium border-accent/20 hover-lift">
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-accent">Métricas de Sucesso Comprovadas</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {successMetrics.map((metric, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto">
                    <metric.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-accent">{metric.metric}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* The Transformation */}
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 bg-gradient-hero border-primary/20 hover-lift text-center">
          <div className="space-y-6">
            <div className="w-20 h-20 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto">
              <Trophy className="w-10 h-10 text-primary-foreground" />
            </div>
            
            <h2 className="text-3xl font-bold text-primary-foreground">A Transformação</h2>
            
            <div className="grid md:grid-cols-3 gap-6 text-primary-foreground/90">
              <div className="space-y-2">
                <div className="font-semibold">Antes</div>
                <ul className="text-sm space-y-1">
                  <li>• Expertise limitada</li>
                  <li>• Receita instável</li>
                  <li>• Burnout iminente</li>
                </ul>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="font-semibold">Depois</div>
                <ul className="text-sm space-y-1">
                  <li>• Escala inteligente</li>
                  <li>• Receita recorrente</li>
                  <li>• Liberdade estratégica</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="text-xl font-bold text-primary-foreground">
                "De consultor para arquiteto de transformação digital"
              </div>
              
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-3"
              >
                <Zap className="w-5 h-5 mr-2" />
                Iniciar Sua Transformação
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Final CTA */}
      <div className="text-center space-y-4">
        <div className="text-2xl font-bold bg-gradient-premium bg-clip-text text-transparent">
          Pronto para revolucionar sua consultoria?
        </div>
        <p className="text-muted-foreground">
          O futuro da consultoria de elite está aqui. A questão é: você vai liderar ou seguir?
        </p>
      </div>
    </div>
  );
};