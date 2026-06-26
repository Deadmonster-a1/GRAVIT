import { motion } from 'motion/react';
import ScrollReveal from './ScrollReveal';
import { MorphingText } from './MorphingText';
import FloatingPrism from './FloatingPrism';
import BorderGlow from './BorderGlow';
import { StaggeredMenu } from './StaggeredMenu';
import Magnetic from './Magnetic';
import { Canvas } from '@react-three/fiber';
import Ballpit from './Ballpit';

const projects = [
  {
    title: 'RUCE Campus',
    desc: 'Student & faculty platform — role-based architecture',
    tags: ['Flutter', 'Firebase'],
    year: '2024'
  },
  {
    title: 'AstroShield',
    desc: 'Satellite debris risk platform — data viz, mission-critical UI',
    tags: ['Next.js', 'WebGL'],
    year: '2025'
  },
  {
    title: 'Tattvashi',
    desc: 'Brand identity — indigenous art meets contemporary digital',
    tags: ['Design', 'Identity'],
    year: '2025'
  },
  {
    title: 'SIGNAL',
    desc: 'Stock prediction app — Flask ML backend, terminal-style frontend',
    tags: ['React', 'Python'],
    year: '2025'
  },
  {
    title: 'School Pitch',
    desc: 'Ed-tech pitch deck & landing page — educational institution targeting',
    tags: ['Framer', 'Copywriting'],
    year: '2026'
  },
  {
    title: 'Little Stars Academy',
    desc: 'Preschool web presence — warm, accessible, parent-facing',
    tags: ['Webflow', 'UI/UX'],
    year: '2026'
  }
];

const morphTexts = [
  "Selected Work",
  "Proof of Craft",
  "Real Projects",
  "Built Different",
  "Demand Attention",
];

const staggeredMenuItems = projects.map(p => ({
  label: p.title,
  link: '#',
  ariaLabel: `View project ${p.title}`
}));

export default function Work() {
  return (
    <div className="w-full bg-transparent relative selection:bg-[#ff6a39] selection:text-white">
      <StaggeredMenu 
        position="right"
        items={staggeredMenuItems}
        colors={['#1a1a24', '#ff6a39', '#6e7bff']}
        accentColor="#ff6a39"
        isFixed={true}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#000000"
      />

      {/* Radical Centered Hero */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden border-b border-white/5">
        {/* Architectural Plus Markers */}
        <div className="corner-plus tl" />
        <div className="corner-plus tr" />
        <div className="corner-plus bl" />
        <div className="corner-plus br" />

        <div className="absolute inset-0 z-0 opacity-60 mix-blend-screen pointer-events-none flex items-center justify-center">
           <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
              <FloatingPrism />
           </Canvas>
        </div>
        
        <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24 pointer-events-none flex flex-col justify-center items-start">
           <MorphingText texts={morphTexts} className="justify-start mb-6 md:mb-8 scale-100 md:scale-125 lg:scale-150 transform origin-left" />
           <ScrollReveal
             baseOpacity={0}
             enableBlur={true}
             baseRotation={2}
             blurStrength={4}
             textClassName="text-white/50 text-lg md:text-2xl max-w-2xl leading-relaxed mt-4 text-left"
           >
             The projects that define our standards. From complex machine learning interfaces to stark brand identities.
           </ScrollReveal>
        </div>
        
        <div className="absolute bottom-12 left-6 lg:left-12 text-white/30 text-sm tracking-widest uppercase animate-bounce flex items-center gap-2">
           <span className="text-[#ff6a39]">↓</span> SCROLL TO EXPLORE
        </div>

        {/* Floating Interactive Physics Pane */}
        <div className="absolute bottom-12 right-12 w-[400px] h-[350px] liquid-glass rounded-3xl border border-white/10 overflow-hidden hidden lg:block z-20 pointer-events-auto shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 z-0">
            <Ballpit
              count={30}
              gravity={0.8}
              friction={0.99}
              wallBounce={0.95}
              maxVelocity={0.5}
              followCursor={true}
              colors={[0xff6a39, 0x6e7bff, 0x111111, 0xffffff]}
            />
          </div>
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none z-10">
            <div className="flex items-center gap-2 text-xs font-mono text-white/50 tracking-widest">
              <div className="w-1.5 h-1.5 bg-[#ff6a39] rounded-full animate-pulse" />
              INTERACTIVE_PHYSICS
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Full-Bleed Featured Projects */}
      <section className="py-0 relative z-10">
        
        {/* Project 01: Image Left, Text Right */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid grid-cols-1 lg:grid-cols-2 min-h-screen border-b border-white/5"
        >
           <div className="p-8 md:p-16 lg:p-24 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/5">
              <BorderGlow glowColor="240 80 60" glowIntensity={0.6} animated={true} borderRadius={16} className="w-full aspect-square md:aspect-[4/3] relative">
                 <img src={`https://picsum.photos/seed/AURA/1200/900?grayscale`} alt="AURA" className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-60 mix-blend-luminosity hover:opacity-100 hover:mix-blend-normal transition-all duration-700" />
                 <div className="absolute inset-0 bg-[#6e7bff]/10 pointer-events-none rounded-2xl"></div>
              </BorderGlow>
           </div>
           <div className="p-8 md:p-16 lg:p-32 flex flex-col justify-center bg-gradient-to-r from-transparent to-[#6e7bff]/5">
              <h4 className="text-[#6e7bff] text-sm font-bold tracking-widest uppercase mb-4">01 / E-Commerce</h4>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8">AURA</h2>
              <p className="text-white/60 text-xl leading-relaxed mb-12 max-w-xl">
                 A high-performance luxury platform built with Next.js and WebGL product configurators. We engineered a seamless 3D purchasing journey that increased conversion by 40%.
              </p>
              <div className="flex gap-4 flex-wrap mb-12">
                 {['Next.js', 'WebGL', 'Tailwind', 'Stripe'].map(tag => (
                   <span key={tag} className="px-4 py-2 border border-white/10 rounded-full text-white/50 text-sm">{tag}</span>
                 ))}
              </div>
              <Magnetic>
                 <button className="self-start text-white border-b border-white/30 hover:border-white pb-1 transition-colors uppercase tracking-widest text-sm font-bold">
                    View Case Study &rarr;
                 </button>
              </Magnetic>
           </div>
        </motion.div>

        {/* Project 02: Text Left, Image Right */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid grid-cols-1 lg:grid-cols-2 min-h-screen border-b border-white/5"
        >
           <div className="order-2 lg:order-1 p-8 md:p-16 lg:p-32 flex flex-col justify-center bg-gradient-to-l from-transparent to-[#ff6a39]/5 border-t lg:border-t-0 lg:border-r border-white/5">
              <h4 className="text-[#ff6a39] text-sm font-bold tracking-widest uppercase mb-4">02 / Enterprise</h4>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8">NEXUS</h2>
              <p className="text-white/60 text-xl leading-relaxed mb-12 max-w-xl">
                 A real-time analytics dashboard handling millions of concurrent data points. We designed a dark-mode first interface focusing on mission-critical clarity and zero-latency interactions.
              </p>
              <div className="flex gap-4 flex-wrap mb-12">
                 {['React', 'WebSockets', 'D3.js', 'Node'].map(tag => (
                   <span key={tag} className="px-4 py-2 border border-white/10 rounded-full text-white/50 text-sm">{tag}</span>
                 ))}
              </div>
              <Magnetic>
                 <button className="self-start text-white border-b border-white/30 hover:border-white pb-1 transition-colors uppercase tracking-widest text-sm font-bold">
                    View Case Study &rarr;
                 </button>
              </Magnetic>
           </div>
           <div className="order-1 lg:order-2 p-8 md:p-16 lg:p-24 flex items-center justify-center">
              <BorderGlow glowColor="15 90 60" glowIntensity={0.6} animated={true} borderRadius={16} className="w-full aspect-square md:aspect-[4/3] relative">
                 <img src={`https://picsum.photos/seed/NEXUS/1200/900?grayscale`} alt="NEXUS" className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-60 mix-blend-luminosity hover:opacity-100 hover:mix-blend-normal transition-all duration-700" />
                 <div className="absolute inset-0 bg-[#ff6a39]/10 pointer-events-none rounded-2xl"></div>
              </BorderGlow>
           </div>
        </motion.div>

      </section>

      {/* Sleek Text-Based Archive List */}
      <section className="py-32 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto relative z-10 border-b border-white/5">
         <h3 className="text-3xl font-bold text-white mb-16 pb-8 border-b border-white/10">Archive</h3>
         <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }} 
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }} 
            className="flex flex-col"
         >
            {projects.map((p, i) => (
               <motion.a 
                  key={i} 
                  href="#" 
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-white/5 hover:border-white/20 transition-colors"
               >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 mb-4 md:mb-0">
                     <span className="text-white/20 text-sm font-mono w-8">0{i+1}</span>
                     <h4 className="text-2xl md:text-4xl font-bold text-white group-hover:text-[#6e7bff] transition-colors">{p.title}</h4>
                  </div>
                  <div className="flex items-center gap-8">
                     <span className="text-white/40">{p.tags.join(', ')}</span>
                     <span className="text-white/20 font-mono hidden md:inline-block">{p.year}</span>
                     <span className="text-[#6e7bff] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        &rarr;
                     </span>
                  </div>
               </motion.a>
            ))}
         </motion.div>
      </section>

      {/* CTA Footer */}
      <section className="py-32 px-6 flex items-center justify-center bg-transparent z-10 relative">
         <div className="absolute inset-0 pointer-events-none z-0">
           <div className="ambient-glow bg-[#6e7bff] w-[500px] h-[500px] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 opacity-10"></div>
         </div>
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center max-w-3xl liquid-glass p-12 md:p-24 relative z-10"
         >
           <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
             Ready to <span className="text-gradient-accent">Ship?</span>
           </h2>
           <p className="text-white/60 mb-10 text-lg">
             The timeline starts when you initialize the sequence.
           </p>
           <Magnetic>
             <button className="px-10 py-4 bg-white text-black font-medium hover:scale-105 transition-transform inline-block text-lg rounded-full pointer-events-auto shadow-[0_0_30px_-10px_rgba(255,255,255,0.4)]">
               START PROJECT
             </button>
           </Magnetic>
         </motion.div>
      </section>
    </div>
  );
}
