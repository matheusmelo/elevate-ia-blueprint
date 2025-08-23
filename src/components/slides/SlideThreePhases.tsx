import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Rocket, Zap, Target, Calendar, DollarSign, TrendingUp, Bot, BarChart3 } from "lucide-react";

export const SlideThreePhases = () => {
  const phases = [
    {
      phase: "Fase 1",
      title: "Fundamentos e Bootcamp",
      duration: "0-3 meses",
      value: "R$ 25.000",
      icon: Rocket,
      color: "primary",
      deliverables: [
        "Bootcamp executivo de 3 dias",
        "Chatbot qualificador implementado", 
        "Integração com CRM existente",
        "Treinamento da equipe"
      ],
      outcome: "Base sólida para transformação digital"
    },
    {
      phase: "Fase 2", 
      title: "Escala Inteligente",
      duration: "4-9 meses",
      value: "Modelo de assinatura",
      icon: Zap,
      color: "secondary",
      deliverables: [
        "Ativação do AI Coach personalizado",
        "IA em marketing e conteúdo",
        "Automação de processos",
        "Sistema de assinaturas escalável"
      ],
      outcome: "Receita recorrente ativada"
    },
    {
      phase: "Fase 3",
      title: "Domínio Estratégico", 
      duration: "9-18 meses",
      value: "Otimização contínua",
      icon: Target,
      color: "accent",
      deliverables: [
        "Análise preditiva de clientes",
        "Otimização de processos com IA",
        "Personalização em escala",
        "Dashboard de inteligência"
      ],
      outcome: "Liderança de mercado estabelecida"
    }
  ];

  return (
    <div className="h-full flex flex-col justify-center space-y-12 p-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
          <BarChart3 className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-accent">Implementação Estratégica</span>
        </div>
        
        <h1 className="text-display font-bold text-foreground">
          Estrutura em 3 Fases
          <br />
          <span className="text-xl text-muted-foreground">Bootcamp como Alavanca Inicial</span>
        </h1>
      </div>

      {/* Timeline */}
      <div className="relative max-w-7xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-hero hidden md:block" />
        
        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <Card key={index} className={`p-6 bg-gradient-card border-${phase.color}/20 hover-lift relative`}>
              {/* Timeline Dot */}
              <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-${phase.color} rounded-full flex items-center justify-center shadow-glow hidden md:flex`}>
                <span className="text-sm font-bold text-primary-foreground">{index + 1}</span>
              </div>
              
              <div className="space-y-4">
                {/* Header */}
                <div className="text-center space-y-2">
                  <Badge className={`bg-${phase.color}/20 text-${phase.color} border-${phase.color}/20`}>
                    {phase.phase}
                  </Badge>
                  <div className={`w-12 h-12 bg-${phase.color}/20 rounded-lg flex items-center justify-center mx-auto`}>
                    <phase.icon className={`w-6 h-6 text-${phase.color}`} />
                  </div>
                  <h3 className="text-xl font-bold">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.duration}</p>
                </div>
                
                {/* Value */}
                <div className="text-center p-3 bg-background/50 rounded-lg">
                  <div className={`text-lg font-bold text-${phase.color}`}>{phase.value}</div>
                </div>
                
                {/* Deliverables */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Entregas:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {phase.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 bg-${phase.color} rounded-full mt-2 flex-shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Outcome */}
                <div className={`p-3 bg-${phase.color}/10 rounded-lg border border-${phase.color}/20`}>
                  <div className="text-xs font-semibold text-muted-foreground mb-1">RESULTADO:</div>
                  <div className="text-sm font-medium">{phase.outcome}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Bootcamp as Leverage */}
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 bg-gradient-premium border-primary/20 hover-lift">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Bootcamp: A Alavanca</h3>
              </div>
              
              <p className="text-muted-foreground">
                O bootcamp de R$ 25.000 não é apenas um produto - é a <strong>alavanca estratégica</strong> que 
                posiciona o consultor como autoridade em IA e abre as portas para receita recorrente.
              </p>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span>Posicionamento premium no mercado</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-primary" />
                  <span>ROI imediato com margem alta</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-primary" />
                  <span>Porta de entrada para serviços de IA</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="text-center p-6 bg-background/50 rounded-lg">
                <div className="text-3xl font-bold text-primary">18 meses</div>
                <div className="text-muted-foreground">Jornada completa de transformação</div>
              </div>
              
              <Button className="w-full bg-gradient-hero hover:shadow-glow" size="lg">
                <Calendar className="w-4 h-4 mr-2" />
                Iniciar Implementação
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Bottom CTA */}
      <div className="text-center space-y-2">
        <div className="text-lg font-semibold bg-gradient-hero bg-clip-text text-transparent">
          Qual o retorno financeiro dessa estratégia?
        </div>
      </div>
    </div>
  );
};