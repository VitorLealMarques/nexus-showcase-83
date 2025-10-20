import { Mail, Phone, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/config/constants";

/**
 * SEÇÃO DE CONTATO
 * 
 * Informações de contato configuradas em src/config/constants.ts
 */

export const Contact = () => {

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        {/* Título da seção */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
            Entre em Contato
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Estamos prontos para atendê-lo. Entre em contato através de um dos canais abaixo
          </p>
        </div>

        {/* Informações de contato - Centralizado */}
        <div className="mx-auto max-w-3xl">
          <div className="animate-fade-in space-y-8">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Email */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-lg bg-primary/10 p-4 text-primary">
                  <Mail className="h-8 w-8" />
                </div>
                <p className="mb-2 font-semibold text-foreground">Email</p>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>

              {/* Telefone */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-lg bg-primary/10 p-4 text-primary">
                  <Phone className="h-8 w-8" />
                </div>
                <p className="mb-2 font-semibold text-foreground">Telefone</p>
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\D/g, '')}`}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {SITE_CONFIG.phone}
                </a>
              </div>

              {/* Endereço */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-lg bg-primary/10 p-4 text-primary">
                  <MapPin className="h-8 w-8" />
                </div>
                <p className="mb-2 font-semibold text-foreground">Endereço</p>
                <p className="text-muted-foreground">
                  {SITE_CONFIG.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
