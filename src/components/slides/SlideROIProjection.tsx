import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, DollarSign, Calculator, Target, Zap } from "lucide-react";

export const SlideROIProjection = () => {
  const costBreakdown = {
    bootcamp: { value: 25000, label: "Bootcamp IA (3 dias)" },
    automation: { value: 10000, label: "SDR IA + Integração WhatsApp" },
    total: { value: 35000, label: "Investimento Total Inicial" }
  };

  const gains = [
    {
      category: "Economia com Equipe IA",
      calculation: "SDR IA substitui contratação (sem férias, 13º, folgas)",
      value: 100000,
      icon: Clock,
      color: "secondary"
    },
    {
      category: "Receita com AI Coach Escalável",
      calculation: "25% de conversão aumentada + 30% mais atendimentos",
      value: 180000,
      icon: TrendingUp,
      color: "primary"
    },
    {
      category: "Expansão de Mercado",
      calculation: "Alcance de centenas de engenheiros simultaneamente",
      value: 150000,
      icon: Target,
      color: "accent"
    }
  ];

  const totalGains = gains.reduce((sum, gain) => sum + gain.value, 0);
  const roi = ((totalGains - costBreakdown.total.value) / costBreakdown.total.value * 100).toFixed(0);
  const paybackMonths = Math.ceil((costBreakdown.total.value / (totalGains / 12)));

  return (
    <div className="h-full flex flex-col justify-center space-y-12 p-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
          <Calculator className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Análise Financeira</span>
        </div>
        
        <h1 className="text-display font-bold text-foreground">
          Projeção de ROI
          <br />
          <span className="text-xl text-muted-foreground">Exemplo Anual Conservador</span>
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Investment Side */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-destructive mb-2">Investimento Inicial</h2>
            <p className="text-muted-foreground">Custos para implementação completa</p>
          </div>
          
          <div className="space-y-4">
            <Card className="p-6 bg-gradient-card border-destructive/10">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{costBreakdown.bootcamp.label}</h3>
                  <p className="text-sm text-muted-foreground">Programa executivo premium</p>
                </div>
                <div className="text-2xl font-bold text-destructive">
                  R$ {costBreakdown.bootcamp.value.toLocaleString('pt-BR')}
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-card border-destructive/10">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{costBreakdown.automation.label}</h3>
                  <p className="text-sm text-muted-foreground">IA, integração e treinamento</p>
                </div>
                <div className="text-2xl font-bold text-destructive">
                  R$ {costBreakdown.automation.value.toLocaleString('pt-BR')}
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-card border-destructive/20 shadow-premium">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg">{costBreakdown.total.label}</h3>
                  <p className="text-sm text-muted-foreground">Custo total do projeto</p>
                </div>
                <div className="text-3xl font-bold text-destructive">
                  R$ {costBreakdown.total.value.toLocaleString('pt-BR')}
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Returns Side */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-primary mb-2">Retornos Anuais</h2>
            <p className="text-muted-foreground">Ganhos projetados (conservador)</p>
          </div>
          
          <div className="space-y-4">
            {gains.map((gain, index) => (
              <Card key={index} className={`p-6 bg-gradient-card border-${gain.color}/10`}>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 bg-${gain.color}/20 rounded-lg flex items-center justify-center`}>
                      <gain.icon className={`w-5 h-5 text-${gain.color}`} />
                    </div>
                    <h3 className="font-semibold">{gain.category}</h3>
                  </div>
                  
                  <div className="text-sm text-muted-foreground">{gain.calculation}</div>
                  
                  <div className={`text-2xl font-bold text-${gain.color}`}>
                    R$ {gain.value.toLocaleString('pt-BR')}/ano
                  </div>
                </div>
              </Card>
            ))}
            
            <Card className="p-6 bg-gradient-hero border-primary/20 shadow-premium">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg text-primary-foreground">Total de Ganhos</h3>
                  <p className="text-sm text-primary-foreground/70">Benefícios anuais totais</p>
                </div>
                <div className="text-3xl font-bold text-primary-foreground">
                  R$ {totalGains.toLocaleString('pt-BR')}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* ROI Summary */}
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 bg-gray-900 border-accent/20 hover-lift">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-accent">Resumo do ROI</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <div className="text-4xl font-bold text-accent">{roi}%</div>
                <div className="text-muted-foreground">ROI Anual</div>
              </div>
              
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <div className="text-4xl font-bold text-accent">{paybackMonths}</div>
                <div className="text-muted-foreground">Meses para Payback</div>
              </div>
              
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <div className="text-4xl font-bold text-accent">
                  R$ 1M+
                </div>
                <div className="text-muted-foreground">Potencial Anual Extra</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-accent">
                <Target className="w-5 h-5" />
                <span className="font-semibold">Alto Impacto em Menos de 6 Meses</span>
              </div>
              
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Concorrentes no mesmo nicho já aplicando IA têm <strong className="text-accent">25% mais conversão</strong> e 
                <strong className="text-accent"> ROI em 3-6 meses</strong> apenas com SDR IA. Ozare pode triplicar capacidade.
              </p>
              
              <Button className="bg-gradient-hero hover:shadow-glow" size="lg">
                <Zap className="w-4 h-4 mr-2" />
                Começar Implementação
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};