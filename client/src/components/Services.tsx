import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Cpu,
  Shield,
  Wifi,
  Wrench,
  BarChart3,
  Users,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: BarChart3,
      title: "Consultoria de TI",
      description: "Planejamento estratégico, melhorias de infraestrutura e padronização de processos.",
    },
    {
      icon: Wrench,
      title: "Suporte Técnico",
      description: "Atendimento presencial e remoto para resolver problemas com rapidez e eficiência.",
    },
    {
      icon: Cpu,
      title: "Manutenção Preventiva",
      description: "Limpeza lógica, atualizações de segurança e rotinas de otimização contínua.",
    },
    {
      icon: Wifi,
      title: "Redes e Wi-Fi",
      description: "Otimização, estabilidade e configuração profissional de sua infraestrutura de rede.",
    },
    {
      icon: Shield,
      title: "Segurança Básica",
      description: "Boas práticas, backup automático e proteção contra incidentes de segurança.",
    },
    {
      icon: Users,
      title: "Suporte Remoto / Presencial",
      description: "Atendimento remoto para resolução rápida e, quando necessário, suporte presencial para intervenções técnicas pontuais.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B2D5B] mb-6">
            O Que Fazemos
          </h2>
          <p className="text-lg text-gray-600">
            Serviços completos de TI para empresas de todos os tamanhos
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border border-gray-200 hover:border-[#1E6FD9] hover:shadow-xl transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="mb-4 p-3 bg-gradient-to-br from-[#1E6FD9]/10 to-[#22C55E]/10 rounded-lg w-fit group-hover:from-[#1E6FD9]/20 group-hover:to-[#22C55E]/20 transition-all">
                    <Icon className="w-6 h-6 text-[#1E6FD9]" />
                  </div>
                  <CardTitle className="text-[#0B2D5B]">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
