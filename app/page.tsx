"use client";

import React from "react";
import AboutSection from "./sections/about";
import ContactSection from "./sections/contact";
import ExperiencesSection from "./sections/experiences";
import HeadSection from "./sections/head";
import SkillsSection from "./sections/skills";

export default function Home() {
  return (
    <div className=" max-w-[1280px] h-screen mx-auto px-12  flex ">
      <HeadSection />
      <div className="w-full flex pt-24 flex-col gap-44 overflow-y-scroll overscroll-contain no-scrollbar scroll-smooth [&>*]:scroll-mt-10  ">
        <AboutSection />
        <SkillsSection />
        <ExperiencesSection />
        <ContactSection />
      </div>
    </div>
  );
}
