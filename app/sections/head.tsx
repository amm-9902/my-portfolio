import {
  PiEnvelopeSimpleFill,
  PiGithubLogoFill,
  PiLinkedinLogoFill,
} from "react-icons/pi";
import NavItemComponent from "../components/nav-item";

const HeadSection = () => {
  return (
    <div className="w-[90%] py-24 max-w-[400] relative flex flex-col justify-between h-full md:justify-start md:gap-5 md:py-0 ">
      <div>
        <h1 className="text-5xl font-bold text-gray-200 xs:text-4xl">
          John Does
        </h1>
        <p className="mt-4 text-xl font-semibold text-gray-200 xs:text-lg">
          Dveloper
        </p>
        <p className="mt-6 text-gray-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto,
          impedit.
        </p>
      </div>
      {/*  */}
      <div className="flex flex-col gap-4 md:hidden">
        <NavItemComponent id="about" label="ABOUT" />
        <NavItemComponent id="skills" label="SKILLS" />
        <NavItemComponent id="experiences" label="EXPERIENCES" />
        <NavItemComponent id="contact" label="CONTACT " />
      </div>
      {/*  */}
      <div className="flex items-center gap-8">
        <a href={"mailto:j99k9902@gmail.com"}>
          <PiEnvelopeSimpleFill className="text-3xl text-primary" />
        </a>
        <a href={"https://github.com/amm-9902"}>
          <PiGithubLogoFill className="text-3xl text-primary" />
        </a>
        <a href={""}>
          <PiLinkedinLogoFill className="text-3xl text-primary" />
        </a>
      </div>
    </div>
  );
};

export default HeadSection;
