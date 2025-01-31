import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <motion.div
      initial={{ x: 10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      id="about"
      className="text-gray-400"
    >
      <p className="font-semibold text-gray-200 mb-12 text-lg md:mb-6">ABOUT</p>
      <p className="text-gray-400">
        I&apos;m a passionate web designer and frontend developer with a keen
        eye for aesthetics and user experience. With over a year of experience,
        I specialize in creating visually appealing and responsive websites that
        bring ideas to life. My goal is to craft seamless digital experiences
        that balance creativity and functionality. <br />
        <br />
        While my primary focus is frontend development, I also work on backend
        technologies and continuously expand my knowledge in full-stack
        development. I enjoy problem-solving and learning new frameworks, always
        striving to improve my skills and build efficient, scalable solutions.{" "}
        <br />
        <br />
        I take pride in delivering high-quality projects, whether it&apos;s
        designing sleek interfaces or coding interactive web applications. My
        approach is detail-oriented, ensuring that every project meets modern
        design standards and user expectations. <br />
        <br />
        In my free time, I love to mess with animation, song designing and audio
        mastering, and draw some weird app designs.
      </p>
    </motion.div>
  );
};

export default AboutSection;
