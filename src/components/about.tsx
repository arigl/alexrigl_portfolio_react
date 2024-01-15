import { motion } from "framer-motion";

function About(){
  // Destructure props here if needed
  // Example: const { propName } = props;
  const about =
    "I am a creative and forward thinking developer that aims to create beautiful and scalable web and mobile experiences.";

  return (
    <div className='p-6 max-w-m mx-auto rounded-xl shadow-sm border flex flex-col items-center space-x-4 mb-4 mt-4'>
        <h1 className='flex gap-1.5 text-xs items-center font-mono font-medium text-orange-500'>about_me.md</h1>
        {/* <p className='mt-2 text-slate-800 font-mono'>I am a creative and forward thinking developer that aims to create beautiful and scalable web and mobile experiences.</p> */}
        <p className="mt-2 text-slate-800 font-mono">
                {about.split("").map((char, index) => {
                  return (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.05,
                        delay: (index * 0.025) + 1,
                        type: "spring",
                      }}
                    >
                      {char}
                    </motion.span>
                  );
                })}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  transition={{
                    duration: 0.15,
                    delay: 4,
                    type: "ease",
                    repeat: Infinity,
                    repeatDelay: 0.5,
                    repeatType: "reverse",
                  }}
                  className="h-5 w-1 -mb-0.5 bg-orange-500 inline-block"
                ></motion.span>
              </p>
    </div>

  );
};

export default About;
