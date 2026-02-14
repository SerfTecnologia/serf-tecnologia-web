import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { CONTACT_INFO, getWhatsAppUrl } from "@shared/contact";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const createLeadMutation = trpc.leads.create.useMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação básica
    if (!formData.name.trim()) {
      toast.error("Por favor, insira seu nome");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Por favor, insira seu email");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Por favor, insira um email válido");
      return;
    }

    if (!formData.phone.trim()) {
      toast.error("Por favor, insira seu telefone");
      return;
    }

    if (formData.phone.replace(/\D/g, "").length < 10) {
      toast.error("Por favor, insira um telefone válido com pelo menos 10 dígitos");
      return;
    }

    try {
      await createLeadMutation.mutateAsync({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      toast.success("Lead enviado com sucesso! Retornaremos em breve.");

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Erro ao enviar formulário. Tente novamente.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B2D5B] mb-6">
              Quer que a SERF entre em contato?
            </h2>
            <p className="text-lg text-gray-600">
              Deixe seus dados e retornamos com o melhor caminho para resolver seu cenário.
            </p>
          </div>

          {/* Form Card */}
          <Card className="border-2 border-gray-200">
            <CardHeader className="bg-gradient-to-r from-[#0B2D5B]/5 to-[#22C55E]/5">
              <CardTitle className="text-[#0B2D5B]">Formulário de Contato</CardTitle>
              <CardDescription>
                Preencha os campos abaixo e nossa equipe entrará em contato em breve.
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="mb-4 flex justify-center">
                    <CheckCircle2 className="w-16 h-16 text-[#22C55E]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B2D5B] mb-2">
                    Obrigado!
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Seu lead foi enviado com sucesso para <strong>{CONTACT_INFO.email}</strong>.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Nossa equipe da {CONTACT_INFO.companyName} retornará em breve via WhatsApp ou e-mail.
                  </p>
                  <div className="flex gap-3 justify-center">
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-2 bg-[#22C55E] text-white font-semibold rounded-lg hover:bg-[#1ea34e] transition-colors"
                    >
                      Falar no WhatsApp
                    </a>
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      className="border-[#1E6FD9] text-[#1E6FD9]"
                    >
                      Enviar outro contato
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-gray-300 focus:border-[#1E6FD9] focus:ring-[#1E6FD9]"
                      required
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="border-gray-300 focus:border-[#1E6FD9] focus:ring-[#1E6FD9]"
                      required
                    />
                  </div>

                  {/* Phone field */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone / WhatsApp *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-gray-300 focus:border-[#1E6FD9] focus:ring-[#1E6FD9]"
                      required
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem (opcional)
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Descreva brevemente sua situação ou dúvida..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="border-gray-300 focus:border-[#1E6FD9] focus:ring-[#1E6FD9]"
                    />
                  </div>

                  {/* Privacy notice */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-blue-800">
                      Seus dados serão enviados para {CONTACT_INFO.email} e usados apenas para contato. Respeitamos sua privacidade.
                    </p>
                  </div>

                  {/* Submit button */}
                  <Button
                    type="submit"
                    disabled={createLeadMutation.isPending}
                    className="w-full bg-gradient-to-r from-[#1E6FD9] to-[#22C55E] text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    {createLeadMutation.isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      "Quero contato"
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
