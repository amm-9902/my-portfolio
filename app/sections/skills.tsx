import ProgressBarComponent from "../components/progress-bar";

const SkillsSection = () => {
  return (
    <div id="skills">
      <p className="font-semibold text-gray-200 mb-12 text-lg md:mb-6">
        SKILLS
      </p>
      <div className="SKILLS grid grid-cols-2 gap-12 xs:grid-cols-1">
        <ProgressBarComponent
          percentage={50}
          icon={"/svgs/skills/html.svg"}
          label={"HTML"}
          delay={0.1}
        />
        <ProgressBarComponent
          percentage={50}
          icon={"/svgs/skills/css.svg"}
          label={"CSS"}
          delay={0.15}
        />
        <ProgressBarComponent
          percentage={50}
          icon={"/svgs/skills/tailwind.svg"}
          label={"Tailwind"}
          delay={0.2}
        />
        <ProgressBarComponent
          percentage={50}
          icon={"/svgs/skills/javascript.svg"}
          label={"Javascript"}
          delay={0.25}
        />
        <ProgressBarComponent
          percentage={50}
          icon={"/svgs/skills/typescript.svg"}
          label={"Typescript"}
          delay={0.3}
        />{" "}
        <ProgressBarComponent
          percentage={50}
          icon={"/svgs/skills/typescript.svg"}
          label={"Typescript"}
          delay={0.35}
        />{" "}
        <ProgressBarComponent
          percentage={50}
          icon={"/svgs/skills/react.svg"}
          label={"React"}
          delay={0.4}
        />{" "}
        <ProgressBarComponent
          percentage={50}
          icon={"/svgs/skills/redux.svg"}
          label={"Redux"}
          delay={0.45}
        />
      </div>
    </div>
  );
};

export default SkillsSection;
