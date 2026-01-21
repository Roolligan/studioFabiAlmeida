import Header from "./components/Header";
import Hero from "./components/Hero";
import ServicesOverview from "./components/ServicesOverview";
import BridalSection from "./components/BridalSection";
import BridesmaidsSection from "./components/BridesmaidsSection";
import SocialMakeupSection from "./components/SocialMakeupSection";
import HairSection from "./components/HairSection";
import NailsSection from "./components/NailsSection";
import PortfolioSection from "./components/PortfolioSection";
import HowItWorks from "./components/HowItWorks";
import InfoSection from "./components/InfoSection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";

const WHATSAPP_URL =
  "https://wa.me/5511961770269?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20disponibilidade%20para%20maquiagem%20%F0%9F%92%84%E2%9C%A8";

function App() {
  return (
    <div className="app">
      <Header whatsappUrl={WHATSAPP_URL} />
      <main>
        <Hero whatsappUrl={WHATSAPP_URL} />
        <ServicesOverview />
        <BridalSection whatsappUrl={WHATSAPP_URL} />
        <BridesmaidsSection whatsappUrl={WHATSAPP_URL} />
        <SocialMakeupSection whatsappUrl={WHATSAPP_URL} />
        <HairSection whatsappUrl={WHATSAPP_URL} />
        <NailsSection whatsappUrl={WHATSAPP_URL} />
        <PortfolioSection />
        <HowItWorks whatsappUrl={WHATSAPP_URL} />
        <FAQ />
        <InfoSection whatsappUrl={WHATSAPP_URL} />
      </main>
      <Footer />
      <FloatingWhatsAppButton whatsappUrl={WHATSAPP_URL} />
    </div>
  );
}

export default App;
