import { Instagram, Facebook, Linkedin } from "lucide-react";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/config/constants";

/**
 * FOOTER / RODAPÉ
 * 
 * Informações configuradas em src/config/constants.ts
 * Para adicionar/remover redes sociais, edite SOCIAL_LINKS
 */

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-12 text-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Coluna 1 - Sobre */}
          <div>
            <h3 className="mb-4 text-xl font-bold">
              {SITE_CONFIG.businessName}
            </h3>
            <p className="text-background/80">
              {SITE_CONFIG.tagline}
            </p>
          </div>

          {/* Coluna 2 - Contato */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Contato</h3>
            <div className="space-y-2 text-background/80">
              <p>{SITE_CONFIG.phone}</p>
              <p>{SITE_CONFIG.email}</p>
              <p className="text-sm">{SITE_CONFIG.address}</p>
            </div>
          </div>

          {/* Coluna 3 - Redes Sociais */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Siga-nos</h3>
            <div className="flex gap-4">
              {/* Instagram */}
              {SOCIAL_LINKS.instagram && (
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-background/10 p-3 transition-colors hover:bg-background/20"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}

              {/* Facebook */}
              {SOCIAL_LINKS.facebook && (
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-background/10 p-3 transition-colors hover:bg-background/20"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}

              {/* LinkedIn */}
              {SOCIAL_LINKS.linkedin && (
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-background/10 p-3 transition-colors hover:bg-background/20"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>
            © {currentYear} {SITE_CONFIG.businessName}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
