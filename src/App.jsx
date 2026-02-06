import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroImage from "@/components/HeroImage";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import About from "@/components/About";
import Programs from "@/components/Programs";
import WelcomeMessage from "@/components/WelcomeMessage";
import CallToAction from "@/components/CallToAction";
import Galeri from "./components/Galeri";
import VideoGallery from "./components/VideoGallery";
import FlyerGallery from "./components/FlyerGallery";

function App() {
  return (
    <>
      <Helmet>
        <title>
          Learnova Consultant Indonesia - Training of Trainer Provider
        </title>
        <meta
          name="description"
          content="Learnova Consultant Indonesia adalah penyedia Training of Trainer profesional dengan berbagai program pelatihan berkualitas untuk meningkatkan kompetensi trainer dan organisasi Anda."
        />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Navbar />
        <HeroImage />
        <Hero />
        <About />
        <Programs />
        <Galeri />
        <VideoGallery />
        <FlyerGallery />
        <WelcomeMessage />
        <RegistrationForm />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
