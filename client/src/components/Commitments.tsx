import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, FileText, AlertCircle } from "lucide-react";
import { CONTACT_INFO, getWhatsAppUrl } from "@shared/contact";

export default function Commitments() {
  const commitments = [
    {
      icon: Clock,
      title: "Prazos e comunicação",
      description: "Cronogramas claros e atualizações constantes sobre o andamento de cada projeto.",
    },
    {
      icon: FileText,
      title: "Registro do atendimento",
      description: "Documentação completa de todas as ações, mudanças e recomendações realizadas.",
    },
    {
      icon: AlertCircle,
      title: "Recomendação técnica honesta",
      description: "Sugestões baseadas em necessidade real, não em venda agressiva de soluções.",
    },
    {
      icon: CheckCircle2,
      title: "Garantia de qualidade",
      description: "Compromisso com excelência em cada atendimento e satisfação do cliente.",
    },
  ];

  return (
    <section id="commitments" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B2D5B] mb-6">
            Nossos Compromissos
          </h2>
          <p className="text-lg text-gray-600">
            Princípios que guiam nosso trabalho todos os dias
          </p>
        </div>

        {/* Commitments grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {commitments.map((commitment, index) => {
            const Icon = commitment.icon;
            return (
              <Card
                key={index}
                className="border-l-4 border-l-[#22C55E] bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="pt-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-[#1E6FD9]/20 to-[#22C55E]/20">
                        <Icon className="h-6 w-6 text-[#1E6FD9]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#0B2D5B] mb-2">
                        {commitment.title}
                      </h3>
                      <p className="text-gray-600">
                        {commitment.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA section */}
        <div className="mt-16 bg-gradient-to-r from-[#0B2D5B] to-[#1E6FD9] rounded-lg p-8 sm:p-12 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Pronto para transformar sua infraestrutura de TI?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Deixe seus dados e retornamos com o melhor caminho para resolver seu cenário.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#22C55E] text-white font-semibold rounded-lg hover:bg-[#1ea34e] transition-all duration-300 hover:shadow-lg"
            >
              Falar no WhatsApp
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Preencher Formulario
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
