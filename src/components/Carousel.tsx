import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CAROUSEL_SLIDES, CAROUSEL_CONFIG } from "@/config/constants";

/**
 * IMAGENS DO CARROSSEL
 * 
 * Para trocar as imagens:
 * 1. Substitua os arquivos hero-1.jpg, hero-2.jpg, hero-3.jpg na pasta src/assets/
 * 2. Ou adicione novas imagens e atualize os imports abaixo
 */
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

// Array de imagens - ADICIONE ou REMOVA imagens aqui
const CAROUSEL_IMAGES = [hero1, hero2, hero3];

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(CAROUSEL_CONFIG.autoPlay);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false); // Para o autoplay ao clicar manualmente
  };

  // Autoplay do carrossel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, CAROUSEL_CONFIG.autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      <div className="relative h-full w-full">
        {CAROUSEL_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Imagem de fundo */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${CAROUSEL_IMAGES[index]})` }}
            >
              {/* Overlay escuro para melhor legibilidade do texto */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
            </div>

            {/* Conteúdo do slide */}
            <div className="relative z-10 flex h-full items-center">
              <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-2xl animate-fade-in">
                  <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
                    {slide.title}
                  </h1>
                  <p className="mb-8 text-lg text-white/90 md:text-xl lg:text-2xl">
                    {slide.subtitle}
                  </p>
                  <Button
                    onClick={scrollToContact}
                    size="lg"
                    className="bg-primary hover:bg-primary-hover text-white shadow-medium transition-all hover:scale-105"
                  >
                    {slide.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botões de navegação */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/30 md:left-8 md:p-3"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/30 md:right-8 md:p-3"
        aria-label="Próximo slide"
      >
        <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
      </button>

      {/* Indicadores (bolinhas) */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {CAROUSEL_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              index === currentSlide
                ? "w-8 bg-white"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
