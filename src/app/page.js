import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import BackgroundAnimation from "./components/BackgroundAnimation";
import ProductSpotlight from "./components/ProductSpotlight";
import HowItWorks from "./components/HowItWorks";
import WhyDifferent from "./components/WhyDifferent";
import Performance from "./components/Performance";
import AboutUs from "./components/AboutUs";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import ClientInsights from "./components/ClientInsights";
import Features from "./components/Features";
import Footer from "./components/Footer";
//test
export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <BackgroundAnimation />

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      <section id="product-spotlight">
        <ProductSpotlight />
      </section>

      <section id="how-it-works">
        <HowItWorks />
      </section>

      <section id="why-different">
        <WhyDifferent />
      </section>

      <section id="features">
        <Features />
      </section>

      {/* <section id="performance">
        <Performance />
      </section> */}

      <section id="about-us">
        <AboutUs />
      </section>

      {/* <section id="client-insights">
        <ClientInsights />
      </section> */}

      {/* <section id="pricing">
        <Pricing />
      </section> */}

      <section id="faq">
        <FAQ />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}
