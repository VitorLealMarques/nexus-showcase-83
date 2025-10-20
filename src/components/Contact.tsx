import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { SITE_CONFIG } from "@/config/constants";

/**
 * SEÇÃO DE CONTATO
 * 
 * Informações de contato configuradas em src/config/constants.ts
 * Este formulário apenas mostra uma mensagem de sucesso.
 * Para integrar com backend/API, adicione a lógica no handleSubmit
 */

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // ADICIONAR AQUI: Lógica para enviar o formulário
    // Exemplo: enviar para uma API, serviço de email, etc.
    
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });

    // Limpar formulário
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        {/* Título da seção */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
            Entre em Contato
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Estamos prontos para atendê-lo. Preencha o formulário ou use um dos canais abaixo
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Informações de contato */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <h3 className="mb-6 text-2xl font-bold text-foreground">
                Informações de Contato
              </h3>
              
              {/* Email */}
              <div className="mb-6 flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              {/* Telefone */}
              <div className="mb-6 flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Telefone</p>
                  <a
                    href={`tel:${SITE_CONFIG.phone.replace(/\D/g, '')}`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>

              {/* Endereço */}
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Endereço</p>
                  <p className="text-muted-foreground">
                    {SITE_CONFIG.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de contato */}
          <div className="animate-fade-in rounded-xl bg-card p-8 shadow-soft">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div>
                <label htmlFor="name" className="mb-2 block font-medium text-card-foreground">
                  Nome
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  required
                  className="w-full"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-2 block font-medium text-card-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  required
                  className="w-full"
                />
              </div>

              {/* Mensagem */}
              <div>
                <label htmlFor="message" className="mb-2 block font-medium text-card-foreground">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Como podemos ajudar?"
                  required
                  rows={5}
                  className="w-full resize-none"
                />
              </div>

              {/* Botão enviar */}
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
                size="lg"
              >
                <Send className="mr-2 h-5 w-5" />
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
