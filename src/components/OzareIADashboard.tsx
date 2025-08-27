import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Calculator, 
  Target, 
  Zap,
  AlertTriangle,
  Users,
  Bot,
  MessageSquare,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Rocket,
  Shield,
  Star
} from "lucide-react";

export const OzareIADashboard = () => {
  const marketData = [
    {
      stat: "91%",
      description: "dos clientes iniciam busca online",
      impact: "Mas >60% dos leads esfriam sem resposta rápida"
    },
    {
      stat: "<4%",
      description: "taxa média de conversão no setor",
      impact: "Muito abaixo do potencial com IA"
    },
    {
      stat: "70%",
      description: "dos escritórios dependem só de indicações",
      impact: "Zero previsibilidade comercial"
    }
  ];

  const painPoints = [
    {
      icon: Clock,
      title: "Leads Não Respondidos",
      description: "Oportunidades perdidas por falta de resposta imediata",
      impact: "Perda de 60%+ dos leads qualificados"
    },
    {
      icon: Users,
      title: "Gargalo do Fundador",
      description: "Zaccari atolado no operacional, limitando crescimento",
      impact: "Impossibilidade de escalar"
    },
    {
      icon: TrendingUp,
      title: "Baixa Previsibilidade",
      description: "Faturamento instável, dependente do tempo disponível",
      impact: "Crescimento limitado e estressante"
    }
  ];

  const solutions = [
    {
      icon: MessageSquare,
      title: "Agente SDR 24/7",
      description: "WhatsApp + Site com pré-qualificação automática",
      benefits: ["Agendamento automático", "Integração CRM", "Resposta imediata"],
      color: "primary"
    },
    {
      icon: Bot,
      title: "AI Coach (Gêmeo Digital)",
      description: "Treinado com metodologia do Zaccari",
      benefits: ["Disponível 24/7", "Produto de assinatura", "Escalabilidade infinita"],
      color: "secondary"
    },
    {
      icon: BarChart3,
      title: "Dashboard de Inteligência",
      description: "Lead scoring preditivo + métricas em tempo real",
      benefits: ["ROI visível", "Leads mais quentes", "Otimização contínua"],
      color: "accent"
    }
  ];

  const phases = [
    {
      phase: "Fase 1",
      title: "Fundação",
      duration: "0-3 meses",
      description: "Setup, Agente SDR, API WhatsApp",
      results: "30% dos leads perdidos recuperados",
      color: "primary"
    },
    {
      phase: "Fase 2", 
      title: "Escala",
      duration: "4-6 meses",
      description: "AI Coach + Agente de Suporte",
      results: "Aumento de recorrência e fidelização",
      color: "secondary"
    },
    {
      phase: "Fase 3",
      title: "Domínio",
      duration: "7-12 meses", 
      description: "Dashboard IA + Tráfego otimizado",
      results: "Crescimento acelerado e previsível",
      color: "accent"
    }
  ];

  const pricing = {
    setup: {
      value: 15000,
      label: "Setup Inicial",
      duration: "15 dias",
      includes: ["Configuração completa", "Treinamento de agentes", "API WhatsApp", "3 meses de acompanhamento"]
    },
    monthly: {
      perAgent: 1500,
      trafficAI: 3000,
      label: "Mensalidade após 3 meses"
    }
  };

  const roiMetrics = [
    { label: "Aumento na Receita", value: "20-30%", timeframe: "6 meses" },
    { label: "Redução Tempo Operacional", value: "50-65%", timeframe: "imediato" },
    { label: "Melhoria na Conversão", value: "25%", timeframe: "3 meses" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-6 text-center">
          <Badge className="mb-4 bg-primary-foreground/20 text-primary-foreground">
            Estratégia Ozare x Orion Agência Web
          </Badge>
          <h1 className="text-display font-bold mb-4">
            Agentes de IA para Escritórios de Engenharia
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Transforme leads perdidos em crescimento previsível com Inteligência Artificial 24/7
          </p>
          <div className="flex items-center justify-center gap-2 text-primary-foreground/80">
            <Target className="w-5 h-5" />
            <span>Proposta Comercial Estratégica</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 space-y-20">
        {/* Market Scenario */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 rounded-full border border-destructive/20">
              <AlertTriangle className="w-4 h-4 text-destructive" />
              <span className="text-sm font-medium text-destructive">Cenário Atual</span>
            </div>
            <h2 className="text-3xl font-bold">Engenheiros e Escritórios de Engenharia</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Um mercado em transformação, com enormes gaps de competitividade
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {marketData.map((data, index) => (
              <Card key={index} className="p-6 bg-gradient-card hover-lift">
                <div className="text-center space-y-3">
                  <div className="text-4xl font-bold text-primary">{data.stat}</div>
                  <div className="font-semibold">{data.description}</div>
                  <div className="text-sm text-muted-foreground">{data.impact}</div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Pain Points */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-destructive">As Dores do Funil da Ozare</h2>
            <p className="text-muted-foreground">Problemas que limitam o crescimento atual</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {painPoints.map((problem, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-destructive/10 hover-lift">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-destructive/20 rounded-lg flex items-center justify-center">
                    <problem.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{problem.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{problem.description}</p>
                    <Badge variant="destructive" className="text-xs">
                      {problem.impact}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Solutions */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Lightbulb className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Soluções Estratégicas</span>
            </div>
            <h2 className="text-3xl font-bold">Agentes de IA Orion Agência Web</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tecnologia de ponta para automatizar, escalar e otimizar seu funil comercial
            </p>
          </div>

          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <Card key={index} className={`p-8 bg-gradient-card border-${solution.color}/10 hover-lift`}>
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="space-y-4">
                    <div className={`w-16 h-16 bg-${solution.color}/20 rounded-lg flex items-center justify-center`}>
                      <solution.icon className={`w-8 h-8 text-${solution.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold">{solution.title}</h3>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="grid md:grid-cols-3 gap-4">
                      {solution.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className={`w-4 h-4 text-${solution.color}`} />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Setup & Pricing */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20">
              <Calculator className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Estrutura de Implementação</span>
            </div>
            <h2 className="text-3xl font-bold">Setup e Investimento</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Setup */}
            <Card className="p-8 bg-gradient-card border-primary/10">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{pricing.setup.label}</h3>
                    <p className="text-muted-foreground">{pricing.setup.duration}</p>
                  </div>
                </div>
                
                <div className="text-3xl font-bold text-primary">
                  R$ {pricing.setup.value.toLocaleString('pt-BR')}
                </div>
                
                <div className="space-y-2">
                  {pricing.setup.includes.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Monthly */}
            <Card className="p-8 bg-gradient-card border-secondary/10">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold">{pricing.monthly.label}</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-2xl font-bold text-secondary">
                      R$ {pricing.monthly.perAgent.toLocaleString('pt-BR')}/mês
                    </div>
                    <div className="text-sm text-muted-foreground">por agente de IA ativo</div>
                  </div>
                  
                  <div>
                    <div className="text-2xl font-bold text-accent">
                      R$ {pricing.monthly.trafficAI.toLocaleString('pt-BR')}/mês
                    </div>
                    <div className="text-sm text-muted-foreground">gestão de tráfego com IA</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* ROI Projection */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-primary">Projeção de ROI</h2>
            <p className="text-muted-foreground">Benchmarks de consultorias que já usam IA</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {roiMetrics.map((metric, index) => (
              <Card key={index} className="p-6 bg-gradient-card hover-lift text-center">
                <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="font-semibold mb-1">{metric.label}</div>
                <div className="text-sm text-muted-foreground">em {metric.timeframe}</div>
              </Card>
            ))}
          </div>
        </section>

        {/* Three Phases */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Estrutura em 3 Fases</h2>
            <p className="text-muted-foreground">Crescimento progressivo e sustentável</p>
          </div>

          <div className="space-y-6">
            {phases.map((phase, index) => (
              <Card key={index} className={`p-8 bg-gradient-card border-${phase.color}/10 hover-lift`}>
                <div className="grid lg:grid-cols-4 gap-6 items-center">
                  <div className="text-center lg:text-left">
                    <div className={`inline-flex w-16 h-16 bg-${phase.color}/20 rounded-full items-center justify-center mb-3`}>
                      <span className={`text-2xl font-bold text-${phase.color}`}>{index + 1}</span>
                    </div>
                    <div className={`text-lg font-bold text-${phase.color}`}>{phase.phase}</div>
                    <div className="font-semibold">{phase.title}</div>
                    <div className="text-sm text-muted-foreground">{phase.duration}</div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <p className="text-muted-foreground">{phase.description}</p>
                  </div>
                  
                  <div className="text-center lg:text-right">
                    <div className={`font-semibold text-${phase.color}`}>{phase.results}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Win-Win Partnership */}
        <section className="space-y-12">
          <Card className="p-12 bg-gray-900 border-accent/20 hover-lift">
            <div className="text-center space-y-8">
              <div className="flex items-center justify-center gap-3">
                <Star className="w-8 h-8 text-accent" />
                <h2 className="text-3xl font-bold text-accent">O Jogo de Ganha-Ganha</h2>
                <Star className="w-8 h-8 text-accent" />
              </div>
              
              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-lg text-muted-foreground">
                  <strong className="text-accent">Orion Agência Web</strong> não é apenas um fornecedor de tecnologia. 
                  Somos uma parceria estratégica para o movimento <strong className="text-accent">"IA com Alma"</strong>.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-accent">Para a Ozare</h3>
                    <ul className="space-y-2 text-left">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        <span>Crescimento previsível e escalável</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        <span>Mais tempo para criatividade e estratégia</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        <span>Liderança no mercado de engenharia</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-accent">Para a Orion</h3>
                    <ul className="space-y-2 text-left">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        <span>Case de sucesso premium</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        <span>Parceria estratégica de longo prazo</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        <span>Referência no mercado de consultoria</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="pt-8">
                  <Button className="bg-gradient-hero hover:shadow-glow text-lg px-8 py-3" size="lg">
                    <Zap className="w-5 h-5 mr-2" />
                    Começar Implementação Agora
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};