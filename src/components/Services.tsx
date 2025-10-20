import { Star, Target, Heart, Sparkles, Users, TrendingUp } from "lucide-react";
import { SERVICES } from "@/config/constants";

/**
 * SEÇÃO DE SERVIÇOS
 * 
 * Os serviços são configurados no arquivo src/config/constants.ts
 * Para adicionar/remover serviços, edite o array SERVICES
 */

// Mapeamento de ícones disponíveis
const iconMap: { [key: string]: any } = {
  Star,
  Target,
  Heart,
  Sparkles,
  Users,
  TrendingUp,
};

export const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        {/* Título da seção - PERSONALIZÁVEL */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
            Nossos Serviços
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Conheça as soluções que oferecemos para transformar sua experiência
          </p>
        </div>

        {/* Grid de serviços */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Star;
            
            return (
              <div
                key={index}
                className="group animate-fade-in rounded-xl bg-card p-8 shadow-soft transition-all hover:-translate-y-2 hover:shadow-medium"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Ícone do serviço */}
                <div className="mb-6 inline-flex rounded-lg bg-primary/10 p-4 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-8 w-8" />
                </div>

                {/* Título do serviço */}
                <h3 className="mb-3 text-xl font-bold text-card-foreground">
                  {service.title}
                </h3>

                {/* Descrição do serviço */}
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
