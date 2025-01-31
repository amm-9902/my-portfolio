import { motion } from "framer-motion";
import Image from "next/image";
import ExperienceComponent from "../components/experiences";

const ExperiencesSection = () => {
  return (
    <div id="experiences">
      <motion.div
        initial={{ x: 10, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="font-semibold text-gray-200 mb-12 text-lg md:mb-6">
          EDUCATION
        </p>
        <div className="EXPERIENCE flex flex-col gap-12">
          <ExperienceComponent
            year="2007-2018"
            content="Graduated high school from Shwe Khant Kaw"
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 10, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        id="experiences"
      >
        <p className="font-semibold text-gray-200 mb-10 text-lg md:mb-6">
          EXPERIENCES
        </p>
        <div className="EXPERIENCE flex flex-col gap-12">
          <ExperienceComponent
            year={"2021-2022"}
            content={
              "Internship at Anaget Company as fronend dev and designer."
            }
          />{" "}
          <ExperienceComponent
            year={"2022-2023"}
            content={"Worked as fronend dev and designer at Anaget Company."}
          />
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores nulla dolore magnam sint nihil mollitia aut quas?
                  Nisi, nesciunt. Quos?
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExperiencesSection;
