import { motion } from "framer-motion";
import {
  PiEnvelopeSimpleFill,
  PiGithubLogoFill,
  PiLinkedinLogoFill,
} from "react-icons/pi";
import NavItemComponent from "../components/nav-item";

const parentVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }, // Delay between child animations
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HeadSection = () => {
  return (
    <div className="w-[90%] py-24 max-w-[400] relative flex flex-col justify-between h-full md:justify-start md:gap-5 md:py-0 ">
      <div>
        <motion.h1
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="text-4xl font-bold text-gray-200 xs:text-3xl"
        >
          Aung Myint Myat
        </motion.h1>
        <motion.p
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeInOut", delay: 0.1 }}
          className="mt-4 text-xl font-semibold text-gray-200 xs:text-lg"
        >
          Full Stack Web Developer
        </motion.p>
        <motion.p
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeInOut", delay: 0.2 }}
          className="mt-6 text-gray-400"
        >
          Blending design and code to create seamless digital experiences — one
          pixel at a time.
        </motion.p>
      </div>
      {/*  */}
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-4 md:hidden"
      >
        <NavItemComponent
          motionVaiants={childVariants}
          id="about"
          label="ABOUT"
        />
        <NavItemComponent
          motionVaiants={childVariants}
          id="skills"
          label="SKILLS"
        />
        <NavItemComponent
          motionVaiants={childVariants}
          id="experiences"
          label="EXPERIENCES"
        />
        <NavItemComponent
          motionVaiants={childVariants}
          id="contact"
          label="CONTACT "
        />
      </motion.div>
      {/*  */}
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate="show"
        className="flex items-center gap-8"
      >
        <motion.a href={"mailto:j99k9902@gmail.com"}>
          <PiEnvelopeSimpleFill className="text-3xl text-primary" />
        </motion.a>
        <motion.a variants={childVariants} href={"https://github.com/amm-9902"}>
          <PiGithubLogoFill className="text-3xl text-primary" />
        </motion.a>
        <motion.a
          variants={childVariants}
          href={"https://www.linkedin.com/in/aung-myint-myat-072308347/"}
        >
          <PiLinkedinLogoFill className="text-3xl text-primary" />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default HeadSection;
