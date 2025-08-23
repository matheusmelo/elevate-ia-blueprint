import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Clock, Users, TrendingDown, User, Scale } from "lucide-react";

export const SlidePainPoints = () => {
  const pmeProblems = [
    {
      icon: Clock,
      title: "Sobrecarga Operacional",
      description: "Gestores perdidos em tarefas administrativas, sem tempo para estratégia",
      impact: "Crescimento estagnado"
    },
    {
      icon: Users,
      title: "Dependência de Indicações",
      description: "Vendas dependem apenas do networking, sem sistema previsível",
      impact: "Receita instável"
    },
    {
      icon: TrendingDown,
      title: "Lacuna de Gestão Estratégica",
      description: "Falta visão sistêmica para otimizar processos e resultados",
      impact: "Oportunidades perdidas"
    }
  ];

  const consultorProblems = [
    {
      icon: User,
      title: "Paradoxo da Expertise",
      description: "Conhecimento valioso limitado pela capacidade pessoal",
      impact: "Receita limitada"
    },
    {
      icon: Scale,
      title: "Impossibilidade de Escala",
      description: "Crescimento significa mais horas trabalhadas, não mais eficiência",
      impact: "Burnout inevitável"
    }
  ];

  return (
    <div className="h-full flex flex-col justify-center space-y-12 p-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 rounded-full border border-destructive/20">
          <AlertTriangle className="w-4 h-4 text-destructive" />
          <span className="text-sm font-medium text-destructive">Problemas Críticos</span>
        </div>
        
        <h1 className="text-display font-bold text-foreground">
          Dores Crônicas das PMEs
          <br />
          <span className="text-xl text-muted-foreground">+ Obstáculos do Consultor</span>
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto w-full">
        {/* PME Problems */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-primary mb-2">Dores das PMEs</h2>
            <p className="text-muted-foreground">Problemas que impedem o crescimento</p>
          </div>
          
          <div className="space-y-4">
            {pmeProblems.map((problem, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-destructive/10 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-destructive/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <problem.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{problem.title}</h3>
                    <p className="text-muted-foreground text-sm">{problem.description}</p>
                    <Badge variant="destructive" className="text-xs">
                      {problem.impact}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Consultant Problems */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-secondary mb-2">Obstáculos do Consultor</h2>
            <p className="text-muted-foreground">Limitações que impedem a escala</p>
          </div>
          
          <div className="space-y-4">
            {consultorProblems.map((problem, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-secondary/10 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <problem.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{problem.title}</h3>
                    <p className="text-muted-foreground text-sm">{problem.description}</p>
                    <Badge className="text-xs bg-secondary/20 text-secondary">
                      {problem.impact}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
            
            {/* The Paradox Highlight */}
            <Card className="p-6 bg-gradient-premium border-accent/20 hover-lift">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <AlertTriangle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-accent">O Paradoxo</h3>
                <p className="text-muted-foreground">
                  A <strong>expertise que gera valor</strong> também <strong>limita a escala</strong>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center space-y-4">
        <div className="text-lg font-semibold text-accent">
          Como a IA resolve esses problemas sistêmicos?
        </div>
        <div className="text-muted-foreground">
          A solução está na próxima etapa →
        </div>
      </div>
    </div>
  );
};