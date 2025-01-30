import { motion } from "framer-motion";

const ProgressCircleComponent = ({
  percentage = 50,
  size = 300,
  strokeWidth = 10,
  delay = 0,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (50 / 100) * circumference;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* Background Circle */}
      <svg
        className="transform rotate-[-90deg]"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#2B3443"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#68D6D3"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          whileInView={{
            strokeDashoffset:
              circumference - (percentage / 100) * circumference,
          }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut", delay }}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default ProgressCircleComponent;
