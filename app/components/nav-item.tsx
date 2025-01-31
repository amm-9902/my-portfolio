import React, { useState } from "react";
import { motion } from "framer-motion";

type NavItemComponentProps = { id: string; label: string; motionVaiants?: any };
const NavItemComponent = ({
  id,
  label,
  motionVaiants,
}: NavItemComponentProps) => {
  const [hover, setHover] = useState(false);
  return (
    <motion.a variants={motionVaiants} href={`#${id}`} className="w-max">
      <motion.div
        initial={{ paddingLeft: "0" }}
        whileHover={{ paddingLeft: "50px" }}
        transition={{ duration: 0.3 }}
        className="cursor-pointer w-max"
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
      >
        <motion.p
          initial={{ color: "#9ca3af" }}
          animate={{ color: hover ? "#e5e7eb" : "#9ca3af" }}
          className=" font-semibold text-lg w-max"
        >
          {label}
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: hover ? "100%" : "0%" }}
        transition={{ duration: 0.2 }}
        className="h-1 bg-primary rounded-full"
      />
    </motion.a>
  );
};

export default NavItemComponent;
