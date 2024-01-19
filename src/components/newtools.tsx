import { motion } from "framer-motion";

const logos = [
  {
    name: "React",
    icon: "react.svg",
  },
  {
    name: "Three.js",
    icon: "threejs.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwindcss.svg",
  },
  {
    name: "Framer Motion",
    icon: "framermotion.svg",
  },
];

function Logo({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex w-[200px] justify-center items-center px-4">
      <img
        className="object-contain object-center"
        src={`/logos/${icon}`}
        alt={name}
        width={180}
        height={120}
      />
    </div>
  );
}

export default function NewTools() {
  let duration = 20;

  const animation1 = {
    x: ["0%", "-100%"],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
    },
  };
  const animation2 = {
    x: ["100%", "0%"],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
    },
  };

  return (
    <div className="flex flex-col items-center">
      {/* <h1 className='flex gap-1.5 text-xs items-center font-mono font-medium text-orange-500'>Tools & Frameworks</h1> */}
      <motion.div
        className="relative max-w-xs flex overflow-x-hidden mx-auto sm:max-w-sm md:max-w-lg"
        whileHover={{
          scale: 1.15,
          transition: { duration: 1 },
        }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="w-12 h-full absolute left-0 top-0 z-10 bg-gradient-to-r from-white to-white/0"></div>
        <motion.div animate={animation1} className="flex">
          {logos.map((logo, index) => {
            return <Logo key={index} name={logo.name} icon={logo.icon} />;
          })}
        </motion.div>
        <motion.div animate={animation2} className="flex absolute top-0">
          {logos.map((logo, index) => {
            return <Logo key={index} name={logo.name} icon={logo.icon} />;
          })}
        </motion.div>
        <div className="w-24 h-full absolute right-0 top-0 z-10 bg-gradient-to-l from-white to-white/0"></div>
      </motion.div>
    </div>
  );
}
