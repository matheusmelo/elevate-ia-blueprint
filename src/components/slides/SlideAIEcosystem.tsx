import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Target, FileText, Calendar, TrendingUp, MessageSquare, Sparkles, Zap } from "lucide-react";

export const SlideAIEcosystem = () => {
  const solutions = [
    {
      area: "Captação",
      solution: "Agente SDR IA (WhatsApp + Site)",
      benefit: "Pré-seleção de leads 24/7 integrada ao funil da Sessão Estratégica",
      icon: MessageSquare,
      color: "primary"
    },
    {
      area: "Atendimento",
      solution: "AI Coach (Gêmeo Digital de Zaccari)",
      benefit: "Suporte 24/7 replicando sua metodologia para engenheiros",
      icon: Bot,
      color: "secondary"
    },
    {
      area: "Conteúdo",
      solution: "Agente de Conteúdo IA",
      benefit: "Reaproveita lives em cápsulas para atrair gestores de obra",
      icon: Sparkles,
      color: "accent"
    },
    {
      area: "Propostas",
      solution: "Automação de Propostas e Follow-up",
      benefit: "Envio inteligente e rastreamento de engajamento",
      icon: Zap,
      color: "primary"
    }
  ];

  return (
    <div className="h-full flex flex-col justify-center space-y-12 p-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
          <Bot className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Soluções Inteligentes</span>
        </div>
        
        <h1 className="text-display font-bold text-foreground">
          Agentes de IA para Engenharia
          <br />
          <span className="text-xl text-muted-foreground">Soluções Precisas para Cada Gap</span>
        </h1>
        
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Agentes de IA estrategicamente posicionados para resolver cada gap específico dos escritórios de engenharia
        </p>
      </div>

      {/* Solutions Table */}
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid gap-6">
          {/* Header Row */}
          <div className="grid grid-cols-4 gap-4 text-center font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">
            <div>Área</div>
            <div>Solução de IA</div>
            <div>Benefício Esperado</div>
            <div>Impacto</div>
          </div>
          
          {/* Solution Rows */}
          {solutions.map((solution, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-primary/10 hover-lift">
              <div className="grid grid-cols-4 gap-4 items-center">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-${solution.color}/20 rounded-lg flex items-center justify-center`}>
                    <solution.icon className={`w-5 h-5 text-${solution.color}`} />
                  </div>
                  <div className="font-semibold text-lg">{solution.area}</div>
                </div>
                
                <div className="text-muted-foreground">{solution.solution}</div>
                
                <div className="text-sm">{solution.benefit}</div>
                
                <div className="flex justify-center">
                  <Badge className={`bg-${solution.color}/20 text-${solution.color} border-${solution.color}/20`}>
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Alto Impacto
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Key Benefits */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <Card className="p-6 bg-gradient-card border-primary/20 text-center hover-lift">
          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Target className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Precisão Cirúrgica</h3>
          <p className="text-muted-foreground text-sm">
            Cada agente de IA resolve um problema específico com máxima eficiência
          </p>
        </Card>

        <Card className="p-6 bg-gradient-card border-secondary/20 text-center hover-lift">
          <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Bot className="w-6 h-6 text-secondary" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Escala Inteligente</h3>
          <p className="text-muted-foreground text-sm">
            Automação sem perder qualidade ou personalização
          </p>
        </Card>

        <Card className="p-6 bg-gradient-card border-accent/20 text-center hover-lift">
          <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="w-6 h-6 text-accent" />
          </div>
          <h3 className="font-semibold text-lg mb-2">ROI Mensurável</h3>
          <p className="text-muted-foreground text-sm">
            KPIs claros e mensuráveis para cada solução implementada
          </p>
        </Card>
      </div>

      {/* Bottom CTA */}
      <div className="text-center space-y-2">
        <div className="text-lg font-semibold bg-gradient-hero bg-clip-text text-transparent">
          Como escalar essa transformação para centenas de engenheiros?
        </div>
      </div>
    </div>
  );
};