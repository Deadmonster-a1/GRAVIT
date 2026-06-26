import { motion } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import { Link } from 'react-router-dom';
import TextType from './TextType';
import RotatingText from './RotatingText';
import FloatingPrism from './FloatingPrism';

export default function Hero() {
  const spring = { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const };

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden flex items-center pt-24 pb-24">
      {/* 3D Asset Background Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50 hidden md:block">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <FloatingPrism />
        </Canvas>
      </div>

      {/* Ghost Text Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-[0.03] blur-[4px] text-[20vw] font-bold uppercase tracking-[0.1em] pointer-events-none z-0 select-none whitespace-nowrap">
        GRAVIT
      </div>

      {/* UI Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center pointer-events-auto max-w-5xl mx-auto mt-20">
        
        {/* Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.1 }}
          className="flex gap-3 justify-center mb-10"
        >
          <div className="rounded-full border border-white/15 px-4 py-1.5 text-xs text-white/70 bg-white/5 backdrop-blur-md">
            ✦ Based in Kurnool
          </div>
          <div className="rounded-full border border-white/15 px-4 py-1.5 text-xs text-[#A1A1AA] bg-[#A1A1AA]/10 backdrop-blur-md">
            Accepting New Clients
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.2 }}
          className="w-full flex flex-col items-center"
        >
          <div className="text-[clamp(3rem,8vw,6rem)] leading-[1.1] font-bold tracking-tighter mb-8 text-white mix-blend-difference flex flex-col items-center justify-center">
            <TextType 
              text="We make the web"
              typingSpeed={50}
              showCursor={false}
              className="block"
            />
            <div className="flex items-center justify-center mt-2">
              <RotatingText
                texts={['feel like physics.', 'come to life.', 'earn attention.', 'stand out.']}
                mainClassName="text-[#A1A1AA] font-serif-italic font-normal tracking-normal"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3000}
              />
            </div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.3 }}
            className="text-lg md:text-xl text-[#F8F8F0]/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          >
            GRAVIT is a digital studio blending rigorous engineering with cinematic motion design. We build digital experiences that refuse to be ignored.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact" className="px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:opacity-90 transition-opacity w-full sm:w-auto relative z-20 inline-block">
              Start a Project
            </Link>
            <Link to="/work" className="px-8 py-3.5 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-colors liquid-glass w-full sm:w-auto relative z-20 inline-block">
              View Our Work
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Floating Taglines */}
      <div className="hidden md:block absolute bottom-[8%] left-[4%] text-xs text-white/50 leading-loose">
        // DESIGN THAT<br/>SPEAKS YOUR BRAND
      </div>
      <div className="hidden md:block absolute bottom-[8%] right-[4%] text-xs text-white/50 text-right leading-loose">
        // DEVELOPED WITH<br/>REACT & THREE.JS
      </div>
    </section>
  );
}
