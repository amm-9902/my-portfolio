import { motion } from "framer-motion";

import {
  PiPhone,
  PiEnvelopeSimple,
  PiGithubLogo,
  PiLinkedinLogo,
} from "react-icons/pi";

const ContactSection = () => {
  return (
    <motion.div
      initial={{ x: 10, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      id="contact"
    >
      <p className="font-semibold  text-gray-200 text-lg mb-12 md:mb-6">
        CONTACT
      </p>
      <div className="CONTACT flex flex-col gap-12">
        <div className="flex items-center gap-4">
          <PiPhone className="text-4xl text-primary" />
          <p className="text-gray-400">+95 9 970064713</p>
        </div>
        <a href="mailto:j99k9902@gmail.com" className="flex items-center gap-4">
          <PiEnvelopeSimple className="text-4xl text-primary" />
          <p className="text-gray-400">j99k9902@gmail.com</p>
        </a>
        <a
          href={"https://github.com/amm-9902"}
          className="flex items-center gap-4"
        >
          <PiGithubLogo className="text-4xl text-primary" />
          <p className="text-gray-400">https://github.com/amm-9902</p>
        </a>
        <a
          href="https://www.linkedin.com/in/aung-myint-myat-072308347/"
          className="flex items-center gap-4"
        >
          <PiLinkedinLogo className="text-4xl text-primary" />
          <p className="text-gray-400">
            https://www.linkedin.com/in/aung-myint-myat-072308347/
          </p>
        </a>
      </div>
      <div className="h-24" />
    </motion.div>
  );
};

export default ContactSection;
