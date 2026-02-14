import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: "🔍",
      title: "Diagnóstico antes de trocar",
      description: "Análise profunda para identificar a real causa dos problemas antes de qualquer ação.",
    },
    {
      icon: "🤝",
      title: "Transparência no atendimento",
      description: "Comunicação clara sobre o que fazemos, por que fazemos e quanto custa.",
    },
    {
      icon: "🛡️",
      title: "Prevenção e continuidade",
      description: "Foco em evitar problemas futuros e manter sua operação sempre estável.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B2D5B] mb-6">
            Quem Somos
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A Serf Tecnologia é uma consultoria de TI focada em suporte, prevenção de falhas e melhoria de performance. Atuamos com organização, documentação e transparência para que você tenha previsibilidade e segurança.
          </p>
        </div>

        {/* Values cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="border-2 border-gray-200 hover:border-[#1E6FD9] transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-8">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-[#0B2D5B] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 bg-gradient-to-r from-[#0B2D5B]/5 to-[#22C55E]/5 rounded-lg p-8 border border-[#1E6FD9]/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#1E6FD9] mb-2">100%</div>
              <p className="text-gray-700">Comprometimento com resultados</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#22C55E] mb-2">24/7</div>
              <p className="text-gray-700">Suporte disponível quando você precisa</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#1E6FD9] mb-2">⚙️</div>
              <p className="text-gray-700">Solução de ponta a ponta<br /><span className="text-sm text-gray-600">Do atendimento remoto à presença técnica, quando necessário.</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
