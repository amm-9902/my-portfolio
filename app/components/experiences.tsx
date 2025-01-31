import Image from "next/image";

const ExperienceComponent = ({
  year,
  content,
}: {
  year: string;
  content: string;
}) => {
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
          {year}
        </p>
      </div>
      <p className="text-gray-400">{content}</p>
    </div>
  );
};

export default ExperienceComponent;
