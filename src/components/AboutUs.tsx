import { Button } from "@/components/ui/button";
import { ABOUT_US, SOCIAL_LINKS } from "@/config/constants";

/**
 * SEÇÃO SOBRE NÓS
 * 
 * Componente totalmente configurável através do arquivo src/config/constants.ts
 * Para personalizar: edite o objeto ABOUT_US no arquivo de constantes
 */

export const AboutUs = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          
          {/* Coluna de Imagem */}
          <div className="order-2 md:order-1 animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl shadow-soft">
              <img
                src={ABOUT_US.imageUrl}
                alt={ABOUT_US.imageAlt}
                className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Coluna de Conteúdo */}
          <div className="order-1 md:order-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Título da seção */}
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-5xl">
              {ABOUT_US.title}
            </h2>

            {/* Texto principal */}
            <div className="mb-8 space-y-4 text-lg text-muted-foreground">
              {ABOUT_US.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Instagram e Botão de Ação */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              {/* Botão de Ação Principal */}
              <Button
                size="lg"
                onClick={() => {
                  // Rola suavemente para a seção de contato
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover-scale"
              >
                {ABOUT_US.buttonText}
              </Button>

              {/* Link do Instagram */}
              {ABOUT_US.instagramHandle && (
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-primary transition-colors hover:text-primary/80"
                >
                  {ABOUT_US.instagramHandle}
                </a>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
