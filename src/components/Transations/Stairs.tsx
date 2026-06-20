import { motion } from "framer-motion";

// 1. عَدلي الأنيميشن هنا عشان يشتغل بالـ y (تراسنوفورم) بدل الـ top
const stairAnimation = {
  initial: {
    y: "0%",
  },
  animate: {
    y: "100%", 
  },
  exit: {
    y: ["100%", "0%"],
  },
};

const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1, 
          }}
          // 2. شيلي كلاس relative وحطي fixed أو ابقيه كما هو، بس الـ y الجديد هيقضي على الـ CLS تماماً
          className="h-full w-full bg-[#001F3F] relative"
        />
      ))}
    </>
  );
};

export default Stairs;