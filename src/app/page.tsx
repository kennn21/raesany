import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { InstagramSection } from '@/components/InstagramSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { StorySection } from '@/components/StorySection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* <VideosSection /> */}

      {/* <CollaborationSection /> */}

      <StorySection />

      <InstagramSection />

      <ContactSection />

      <Footer />
    </div>
  );
}
