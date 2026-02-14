import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Entendimento do cenário",
      description: "Conhecemos sua operação, desafios e objetivos em profundidade.",
    },
    {
      number: "02",
      title: "Diagnóstico e proposta",
      description: "Análise detalhada e apresentação de soluções claras e viáveis.",
    },
    {
      number: "03",
      title: "Execução e validação",
      description: "Implementação profissional com testes e validação de resultados.",
    },
    {
      number: "04",
      title: "Acompanhamento e prevenção",
      description: "Monitoramento contínuo e ações preventivas para evitar problemas.",
    },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B2D5B] mb-6">
            Como Funciona
          </h2>
          <p className="text-lg text-gray-600">
            Nosso processo estruturado garante resultados efetivos e transparentes
          </p>
        </div>

        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-2 border-gray-200 hover:border-[#1E6FD9] transition-all duration-300 h-full">
                <CardContent className="pt-8">
                  {/* Step number */}
                  <div className="text-5xl font-bold text-[#1E6FD9]/20 mb-4">
                    {step.number}
                  </div>

                  {/* Step title */}
                  <h3 className="text-xl font-bold text-[#0B2D5B] mb-3">
                    {step.title}
                  </h3>

                  {/* Step description */}
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                  <div className="bg-gradient-to-r from-[#1E6FD9] to-[#22C55E] p-2 rounded-full">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Timeline for mobile */}
        <div className="lg:hidden mt-12">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1E6FD9] to-[#22C55E] flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-1 h-12 bg-gradient-to-b from-[#1E6FD9] to-[#22C55E] mt-2"></div>
                  )}
                </div>
                <div className="pb-6">
                  <h3 className="text-lg font-bold text-[#0B2D5B] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
