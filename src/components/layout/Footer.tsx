import { Divider } from '@/components/common';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="pt-0 pb-6 px-0 font-mono font-thin text-xs tracking-widest w-full">
      <Divider />
      
      <div className="mt-4 flex items-center justify-between w-full">
        {/* Text Area (Left) */}
        <div className="flex flex-col items-start gap-1 opacity-60 text-left ">
          <p className=" tracking-widest font-thin">~ Developed with 🤍 by maxdev</p>
          <p className="font-thin uppercase">© 2026 malay </p>
        </div>
        
        {/* Clickable Email Logo (Right, Medium Size) */}
        <a 
          href="mailto:contact@example.com" 
          className="inline-block group shrink-0"
          title="Send me an email"
        >
          <motion.div
            animate={{
              y: [0, -5, 2, -3, 0],
              x: [0, 3, -1, 2, 0],
              rotate: [0, 4, -2, 2, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.75, 1]
            }}
            className="hover:opacity-80 transition-opacity"
          >
            <img 
              src="https://a-us.storyblok.com/f/567658451994139/63x63/5b2d81a393/group-11253.svg" 
              alt="Contact Email" 
              className="w-14 h-14 md:w-[63px] md:h-[63px] object-contain transition-transform duration-300 group-hover:scale-[1.15]"
            />
          </motion.div>
        </a>
      </div>
    </footer>
  );
}
