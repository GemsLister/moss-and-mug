import { Header } from "./components/layouts/Header";
import { Footer } from "./components/layouts/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { MenuSection } from "./components/sections/MenuSection";
import { StorySection } from "./components/sections/StorySection";
import { CtaSection } from "./components/sections/CtaSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MenuSection />
        <StorySection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
