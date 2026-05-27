import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesBar from "@/components/FeaturesBar";
import Treatments from "@/components/Treatments";
import About from "@/components/About";
import Structure from "@/components/Structure";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream-100 overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturesBar />
      <Treatments />
      <About />
      <Structure />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
