"use client";

import HeaderComponent from "./components/header";
import AboutSection from "./sections/about";
import ContactSection from "./sections/contact";
import HeroSection from "./sections/hero";
import ProjectsSection from "./sections/projects";
import SkillsSection from "./sections/skills";

export default function Home() {
  return (
    <div>
      <HeaderComponent />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
