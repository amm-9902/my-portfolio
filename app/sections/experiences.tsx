import Image from "next/image";
import ExperienceComponent from "../components/experiences";

const ExperiencesSection = () => {
  return (
    <div id="experiences">
      <p className="font-semibold text-gray-200 mb-12 text-lg md:mb-6">
        EXPERIENCES
      </p>
      <div className="EXPERIENCE flex flex-col gap-12">
        <ExperienceComponent />
        <ExperienceComponent />
        <ExperienceComponent />
        <ExperienceComponent />
        <div className="RECENT">
          <p className="text-gray-200 font-semibold mb-4 text-xl">
            Recent Project
          </p>
          <div className="flex gap-4">
            <Image
              src={"/pics/test.jpeg"}
              width={160}
              height={90}
              alt="cover"
              className="w-48 h-24 object-cover mt-2 rounded-md"
            />
            <div className=" flex flex-col gap-4 w-full">
              <p className="font-semibold text-gray-200 text-lg">
                Lorem ipsum dolor sit amet.{" "}
              </p>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                nulla dolore magnam sint nihil mollitia aut quas? Nisi,
                nesciunt. Quos?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencesSection;
