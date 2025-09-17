import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TransformationProcess from "@/components/TransformationProcess";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <TransformationProcess />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
