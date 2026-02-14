import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useMouseParallax } from "@/hooks/useMouseParallax";
import { useEffect, useRef, useState } from "react";

interface HeroProps {
  onContactClick: () => void;
  onServicesClick: () => void;
}

export default function Hero({ onContactClick, onServicesClick }: HeroProps) {
  const { containerRef, offset } = useMouseParallax(0.03);
  const glowRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current || prefersReducedMotion) return;

      const rect = glowRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setGlowPos({ x, y });
    };

    const handleMouseLeave = () => {
      setGlowPos({ x: -500, y: -500 });
    };

    const container = glowRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [prefersReducedMotion]);

  return (
    <section
      ref={glowRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        background: "linear-gradient(135deg, #0B2D5B 0%, #1E6FD9 50%, #22C55E 100%)",
      }}
    >
      {/* Wallpaper SVG Background */}
      <div className="absolute inset-0 opacity-100">
        <img
          src="/hero-wallpaper.svg"
          alt=""
          className="w-full h-full object-cover"
          style={{ pointerEvents: "none" }}
        />
      </div>

      {/* Glow effect overlay */}
      {!prefersReducedMotion && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle 400px at ${glowPos.x}px ${glowPos.y}px, rgba(255,255,255,0.08) 0%, transparent 80%)`,
            transition: "background 0.1s ease-out",
          }}
        />
      )}

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        {/* Badge */}
        <div className="mb-8 inline-block">
          <span className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm border border-white/30">
            ✓ Atendimento rápido • Transparência • Segurança
          </span>
        </div>

        {/* Main heading */}
        <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up">
          Suporte de TI e Consultoria para sua empresa funcionar sem parar
        </h1>

        {/* Subheading */}
        <p className="mb-12 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          Diagnóstico claro, soluções objetivas e acompanhamento de ponta a ponta.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up animation-delay-400">
          <Button
            onClick={onContactClick}
            className="px-8 py-6 text-lg font-semibold bg-white text-[#1E6FD9] hover:bg-gray-100 rounded-lg transition-all duration-300 hover:shadow-2xl"
          >
            Solicitar contato
          </Button>
          <Button
            onClick={onServicesClick}
            variant="outline"
            className="px-8 py-6 text-lg font-semibold border-2 border-white text-white hover:bg-white/10 rounded-lg transition-all duration-300"
          >
            Ver serviços
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </div>
    </section>
  );
}
