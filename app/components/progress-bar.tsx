import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type ProgressBarComponentpProps = {
  icon: string;
  label: string;
  percentage: number;
  delay?: number;
};
const ProgressBarComponent = ({
  icon,
  label,
  percentage,
  delay = 0,
}: ProgressBarComponentpProps) => {
  return (
    <div className="flex items-center gap-4 w-full">
      <Image
        width={24}
        height={24}
        alt={label}
        src={icon}
        className="w-12 h-12"
      />
      <div className="w-full">
        <p className="text-sm font-semibold mb-2 text-gray-400">{label}</p>
        <div className="bg-background_light rounded-full">
          <motion.div
            className="h-2 w-full bg-primary rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut", delay }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBarComponent;
