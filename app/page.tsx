import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import ResultsGrid from "../components/ResultsGrid";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import VideoSection from "../components/VideoSection";
import WaitlistCTA from "../components/WaitlistCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <ResultsGrid />
      <Features />
      <Pricing />
      <VideoSection />
      <WaitlistCTA />
      <Footer />
    </main>
  );
}


