import { useEffect, useRef, useState } from "react";

export function useMouseParallax(intensity: number = 0.02) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * intensity;
      const y = (e.clientY - rect.top - rect.height / 2) * intensity;

      setOffset({ x, y });
    };

    const handleMouseLeave = () => {
      setOffset({ x: 0, y: 0 });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [intensity]);

  return { containerRef, offset };
}
