import Image from "next/image";

const ExperienceComponent = () => {
  return (
    <div className="EXPERIENCE-ITEM flex items-start gap-20">
      <div className="flex items-center gap-4  w-max mt-1">
        <Image
          width={20}
          height={20}
          src={"/svgs/bullet.svg"}
          alt="bullet"
          className="w-5 h-5"
        />
        <p className="text-gray-400 text-sm font-semibold text-nowrap w-max">
          2024-2024
        </p>
      </div>
      <p className="text-gray-400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, iusto!
      </p>
    </div>
  );
};

export default ExperienceComponent;
