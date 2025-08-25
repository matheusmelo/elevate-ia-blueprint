import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Globe, Building, TrendingUp, Star, ExternalLink } from "lucide-react";

export const SlideBootcampBenchmark = () => {
  const marketData = [
    {
      metric: "Setor de Engenharia",
      value: "R$ 350 bilhões/ano",
      description: "Movimentação anual no Brasil",
      color: "primary"
    },
    {
      metric: "Dependência de Indicações",
      value: "70% dos escritórios",
      description: "Ainda operam sem automação comercial",
      color: "secondary" 
    },
    {
      metric: "Adoção de IA",
      value: "< 10% do mercado",
      description: "Enorme gap de competitividade",
      color: "accent"
    }
  ];

  const ozareGaps = [
    {
      current: "Triagem Manual",
      problem: "Limita escala de atendimento",
      solution: "SDR IA 24/7"
    },
    {
      current: "Sessões Estratégicas",
      problem: "Altamente eficazes, mas pouco automatizadas",
      solution: "AI Coach escalável"
    },
    {
      current: "Mentoria Individual",
      problem: "Limitada pela disponibilidade pessoal",
      solution: "Produtos digitais recorrentes"
    }
  ];

  const ourProposal = {
    title: "Bootcamp IA In-Company",
    duration: "3 dias",
    price: "R$ 25.000",
    positioning: "Programa Premium para Consultoria"
  };

  return (
    <div className="h-full flex flex-col justify-center space-y-12 p-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20">
          <GraduationCap className="w-4 h-4 text-secondary" />
          <span className="text-sm font-medium text-secondary">Análise de Mercado</span>
        </div>
        
        <h1 className="text-display font-bold text-foreground">
          Mercado Inexplorado
          <br />
          <span className="text-xl text-muted-foreground">Engenharia + IA no Brasil</span>
        </h1>
      </div>

      {/* Market Benchmarks */}
      <div className="space-y-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {benchmarks.map((benchmark, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-secondary/10 hover-lift">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                    {index === 0 ? <Globe className="w-5 h-5 text-secondary" /> : <Building className="w-5 h-5 text-secondary" />}
                  </div>
                  <h3 className="font-bold text-lg">{benchmark.category}</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="text-center p-4 bg-background/50 rounded-lg">
                    <div className="text-2xl font-bold text-secondary">{benchmark.range}</div>
                    <div className="text-sm text-muted-foreground">({benchmark.originalRange})</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-semibold text-muted-foreground">Duração</div>
                      <div>{benchmark.duration}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-muted-foreground">Formato</div>
                      <div>{benchmark.format}</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {benchmark.providers.map((provider, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {provider}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Our Strategic Proposal */}
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 bg-gradient-hero border-primary/20 hover-lift relative overflow-hidden">
          <div className="absolute top-4 right-4">
            <Badge className="bg-primary/20 text-primary border-primary/20">
              <Star className="w-3 h-3 mr-1" />
              Nossa Proposta
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-primary-foreground">{ourProposal.title}</h2>
                <p className="text-primary-foreground/80">{ourProposal.positioning}</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary-foreground">{ourProposal.duration}</div>
                    <div className="text-sm text-primary-foreground/70">Intensivo & Prático</div>
                  </div>
                </div>
                
                <div className="text-center p-6 bg-primary-foreground/10 rounded-lg border border-primary-foreground/20">
                  <div className="text-4xl font-bold text-primary-foreground">{ourProposal.price}</div>
                  <div className="text-primary-foreground/80">Investimento Total</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary-foreground">Posicionamento Estratégico</h3>
                <ul className="space-y-3 text-primary-foreground/90">
                  <li className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>Premium vs concorrência nacional</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>Altamente lucrativo para consultoria</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>Formato exclusivo in-company</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>ROI imediato para o cliente</span>
                  </li>
                </ul>
              </div>
              
              <Button 
                className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                size="lg"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Ver Estrutura Completa
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Market Position */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h3 className="text-xl font-bold text-accent">Posição no Mercado</h3>
        <p className="text-muted-foreground">
          Nosso bootcamp de <strong className="text-primary">R$ 25.000</strong> está posicionado como premium 
          no mercado brasileiro, oferecendo <strong className="text-secondary">valor concentrado</strong> em formato exclusivo.
        </p>
        <div className="text-lg font-semibold bg-gradient-premium bg-clip-text text-transparent">
          Margem alta + Entrega de valor = Fórmula de sucesso
        </div>
      </div>
    </div>
  );
};