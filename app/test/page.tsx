"use client";

import HeaderComponent from "../components/header";
import AboutSection from "../temp/sections/about";
import ContactSection from "../temp/sections/contact";
import HeroSection from "../temp/sections/hero";
import ProjectsSection from "../temp/sections/projects";
import SkillsSection from "../temp/sections/skills";

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
