import BrandGrid from "./components/BrandGrid";
import DealOfTheDay from "./components/DealOfTheDay";
import DownloadApp from "./components/DownloadApp";
import Footer from "./components/Footer";
import FooterBanner from "./components/FooterBanner";
import FooterBottom from "./components/FooterBottom";
import Hero from "./components/Hero";
import HotDeals from "./components/HotDeals";
import OurBranch from "./components/OurBranch";
import RecommendedProducts from "./components/RecommendedProducts";
import TrendingProducts from "./components/TrendingProducts";
import TrustedSection from "./components/TrustedSection";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <BrandGrid />
      <TrendingProducts />
      <DealOfTheDay />
      <FooterBanner />
      <HotDeals />
      <DownloadApp />
      <RecommendedProducts />
      <TrustedSection />
      <OurBranch />
      <Footer />
      <FooterBottom />
    </div>
  );
}
