import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { SITE_CONFIG } from "@/config/constants";

/**
 * HEADER / NAVEGAÇÃO
 * 
 * Para trocar a logo:
 * - Substitua o texto "SITE_CONFIG.businessName" por uma tag <img>
 * - Exemplo: <img src="/logo.png" alt="Logo" className="h-8" />
 */

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 shadow-soft backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-4 md:px-12">
        {/* Logo / Nome do negócio - TROCAR AQUI */}
        <button
          onClick={() => scrollToSection("home")}
          className="text-2xl font-bold text-foreground transition-colors hover:text-primary"
        >
          {SITE_CONFIG.businessName}
        </button>

        {/* Menu Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <button
            onClick={() => scrollToSection("home")}
            className="text-foreground transition-colors hover:text-primary"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-foreground transition-colors hover:text-primary"
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-foreground transition-colors hover:text-primary"
          >
            Contato
          </button>
        </div>

        {/* Botão Menu Mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-foreground md:hidden"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="animate-fade-in border-t border-border bg-background/98 backdrop-blur-md md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-6 py-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-left text-lg text-foreground transition-colors hover:text-primary"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-left text-lg text-foreground transition-colors hover:text-primary"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-lg text-foreground transition-colors hover:text-primary"
            >
              Contato
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
