// абсолютный путь
import { About, Contacts, Hero, Masters, Testimonials } from "widgets";

// относительный путь
// import { Hero } from "../../widgets/HeroSection/HeroSection";
// import { About } from "../../widgets/AboutSection/AboutSection";
// import { Contacts } from "../../widgets/ContactsSection/ContactsSection";
// import { Masters } from "../../widgets/MastersSection/MastersSection";
// import { Testimonials } from "../../widgets/TestimonialsSection/TestiomonialsSection";

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Masters />
      <Testimonials />
      <Contacts />
    </>
  );
}
