/**
 * PÁGINA PRINCIPAL
 * 
 * Esta é a estrutura principal do site.
 * Os componentes são organizados na ordem de exibição:
 * 1. Header (navegação fixa no topo)
 * 2. Carousel (carrossel hero na página inicial)
 * 3. Services (seção de serviços)
 * 4. Contact (seção de contato)
 * 5. Footer (rodapé)
 * 6. FloatingWhatsApp (botão fixo flutuante)
 * 
 * Para personalizar o conteúdo, edite o arquivo src/config/constants.ts
 */

import { Header } from "@/components/Header";
import { Carousel } from "@/components/Carousel";
import { AboutUs } from "@/components/AboutUs";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navegação fixa no topo */}
      <Header />
      
      {/* Seção Hero com Carrossel */}
      <div id="home">
        <Carousel />
      </div>
      
      {/* Seção Sobre Nós */}
      <AboutUs />
      
      {/* Seção de Serviços/Destaques */}
      <Services />
      
      {/* Seção de Contato */}
      <Contact />
      
      {/* Rodapé */}
      <Footer />
      
      {/* Botão flutuante do WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
