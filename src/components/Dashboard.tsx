import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { SlideIntroduction } from "./slides/SlideIntroduction";
import { SlidePainPoints } from "./slides/SlidePainPoints";
import { SlideAIEcosystem } from "./slides/SlideAIEcosystem";
import { SlideMonetization } from "./slides/SlideMonetization";
import { SlideBootcampBenchmark } from "./slides/SlideBootcampBenchmark";
import { SlideThreePhases } from "./slides/SlideThreePhases";
import { SlideROIProjection } from "./slides/SlideROIProjection";
import { SlideWinWin } from "./slides/SlideWinWin";

const slides = [
  { id: 1, title: "O Efeito Ozare + Potência da IA", component: SlideIntroduction },
  { id: 2, title: "Dores Crônicas das PMEs", component: SlidePainPoints },
  { id: 3, title: "O Ecossistema IA", component: SlideAIEcosystem },
  { id: 4, title: "Modelos de Monetização", component: SlideMonetization },
  { id: 5, title: "Benchmark de Bootcamps", component: SlideBootcampBenchmark },
  { id: 6, title: "Estrutura em 3 Fases", component: SlideThreePhases },
  { id: 7, title: "Projeção de ROI", component: SlideROIProjection },
  { id: 8, title: "O Jogo de Ganha-Ganha", component: SlideWinWin },
];

export const Dashboard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPresenting, setIsPresenting] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-gradient-subtle relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,hsl(45_93%_62%/0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,hsl(217_91%_60%/0.1)_0%,transparent_50%)]" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6">
        <div className="flex items-center gap-4">
          <div className="w-2 h-8 bg-gradient-hero rounded-full shadow-glow" />
          <h1 className="text-2xl font-bold text-primary">Consultoria de Elite IA</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-sm text-muted-foreground">
            {currentSlide + 1} / {slides.length}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsPresenting(!isPresenting)}
            className="border-primary/20 hover:border-primary/40 hover:bg-primary/10"
          >
            <Play className="w-4 h-4 mr-2" />
            {isPresenting ? "Sair" : "Apresentar"}
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 px-6 pb-6">
        {/* Slide Navigation Dots */}
        {!isPresenting && (
          <div className="flex justify-center mb-8">
            <div className="flex gap-2 p-2 bg-card/50 backdrop-blur-sm rounded-full border border-border/50">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-primary shadow-glow scale-125"
                      : "bg-muted hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Slide Content */}
        <div className={`${isPresenting ? "fixed inset-0 z-50 bg-background" : ""}`}>
          <div 
            className={`${
              isPresenting 
                ? "h-screen flex items-center justify-center p-8" 
                : "max-w-7xl mx-auto"
            }`}
          >
            <div className="w-full animate-fade-in">
              <CurrentSlideComponent />
            </div>
          </div>
        </div>
      </main>

      {/* Navigation Controls */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-4 p-3 bg-card/80 backdrop-blur-sm rounded-full border border-border/50 shadow-card">
          <Button
            variant="ghost"
            size="sm"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="rounded-full w-10 h-10 p-0 hover:bg-primary/10 disabled:opacity-30"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <div className="text-sm font-medium px-4 py-1 bg-primary/10 rounded-full text-primary">
            {slides[currentSlide].title}
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="rounded-full w-10 h-10 p-0 hover:bg-primary/10 disabled:opacity-30"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Presentation Mode Controls */}
      {isPresenting && (
        <div className="fixed top-6 right-6 z-60">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsPresenting(false)}
            className="border-primary/20 hover:border-primary/40 hover:bg-primary/10"
          >
            Fechar Apresentação
          </Button>
        </div>
      )}
    </div>
  );
};