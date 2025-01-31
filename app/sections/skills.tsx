import { motion } from "framer-motion";
import ProgressBarComponent from "../components/progress-bar";

const SkillsSection = () => {
  return (
    <motion.div
      initial={{ x: 10, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      id="skills"
    >
      <p className="font-semibold text-gray-200 mb-12 text-lg md:mb-6">
        SKILLS
      </p>
      <div className="SKILLS grid grid-cols-2 gap-12 xs:grid-cols-1">
        <ProgressBarComponent
          percentage={95}
          icon={"/svgs/skills/html.svg"}
          label={"HTML"}
          delay={0.1}
        />
        <ProgressBarComponent
          percentage={90}
          icon={"/svgs/skills/css.svg"}
          label={"CSS"}
          delay={0.2}
        />
        <ProgressBarComponent
          percentage={87}
          icon={"/svgs/skills/tailwind.svg"}
          label={"Tailwind"}
          delay={0.3}
        />
        <ProgressBarComponent
          percentage={80}
          icon={"/svgs/skills/javascript.svg"}
          label={"Javascript"}
          delay={0.4}
        />
        <ProgressBarComponent
          percentage={60}
          icon={"/svgs/skills/typescript.svg"}
          label={"Typescript"}
          delay={0.5}
        />{" "}
        <ProgressBarComponent
          percentage={70}
          icon={"/svgs/skills/react.svg"}
          label={"React"}
          delay={0.7}
        />{" "}
        <ProgressBarComponent
          percentage={60}
          icon={"/svgs/skills/redux.svg"}
          label={"Redux"}
          delay={0.8}
        />
        <ProgressBarComponent
          percentage={80}
          icon={"/svgs/skills/figma.svg"}
          label={"Figma"}
          delay={0.8}
        />
      </div>
    </motion.div>
  );
};

export default SkillsSection;
