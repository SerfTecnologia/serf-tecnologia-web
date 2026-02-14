import { useRef } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Commitments from "@/components/Commitments";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const handleContactClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleServicesClick = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero onContactClick={handleContactClick} onServicesClick={handleServicesClick} />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <div ref={servicesRef}>
        <Services />
      </div>

      {/* Process Section */}
      <Process />

      {/* Commitments Section */}
      <Commitments />

      {/* Lead Form Section */}
      <div ref={contactRef}>
        <LeadForm />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
