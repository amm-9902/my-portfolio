import React from "react";
import {
  PiEnvelopeSimple,
  PiGithubLogo,
  PiLinkedinLogo,
  PiPhone,
} from "react-icons/pi";

const ContactSection = () => {
  return (
    <div
      id="contact"
      className="px-20 py-8 h-screen flex flex-col items-start gap-16 justify-center"
    >
      <p className="text-3xl font-bold mb-16 text-center w-full">Contacts</p>
      <p className="text-2xl text-gray-400 py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        cum, quaerat dignissimos quod nostrum amet blanditiis quam, aut ea
        deserunt sed nisi veniam et molestias consectetur! Maxime ad, ullam
        error modi ratione autem, amet saepe dolore sunt ut sed eius!
      </p>
      <div className="grid grid-cols-2 w-full gap-20">
        <div className="flex items-center gap-4">
          <PiPhone className="text-4xl text-primary" />
          <p className="text-gray-400">+95 9 970064713</p>
        </div>
        <div className="flex items-center gap-4">
          <PiEnvelopeSimple className="text-4xl text-primary" />
          <p className="text-gray-400">j99k9902@gmail.com</p>
        </div>
        <div className="flex items-center gap-4">
          <PiGithubLogo className="text-4xl text-primary" />
          <p className="text-gray-400">https://github.com/amm-9902</p>
        </div>
        <div className="flex items-center gap-4">
          <PiLinkedinLogo className="text-4xl text-primary" />
          <p className="text-gray-400">
            https://www.linkedin.com/in/aung-myat-072308347/
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
