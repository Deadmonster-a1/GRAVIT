import { motion } from 'motion/react';
import { TechStackReveal } from './TechStackReveal';
import { cn } from '../lib/utils';
import RotatingText from './RotatingText';
import TextType from './TextType';
import CardSwap, { Card } from './CardSwap';
import StarBorder from './StarBorder';
import { Link } from 'react-router-dom';

const services = [
  {
    id: '01',
    title: 'Web Engineering',
    desc: 'We architect and build scalable, high-performance web applications using the modern React ecosystem. From complex SaaS dashboards to high-conversion e-commerce storefronts, we ensure rigorous code quality and robust performance.',
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js']
  },
  {
    id: '02',
    title: 'Creative Development',
    desc: 'We turn flat designs into living, breathing experiences. Utilizing WebGL and advanced CSS/JS animations, we create immersive 3D environments, scroll-linked storytelling, and physics-based interactions.',
    tags: ['Three.js', 'WebGL', 'Framer Motion', 'GSAP']
  },
  {
    id: '03',
    title: 'Brand & UI/UX Design',
    desc: 'Before writing a single line of code, we craft a cinematic visual identity. We design comprehensive design systems, high-fidelity prototypes, and user interfaces that prioritize both aesthetics and usability.',
    tags: ['Figma', 'Design Systems', 'Prototyping', 'User Research']
  },
  {
    id: '04',
    title: 'Digital Strategy',
    desc: 'We analyze your market, audit your existing UX, and develop a comprehensive digital strategy. We focus on conversion architecture, SEO fundamentals, and performance metrics to ensure your product succeeds.',
    tags: ['UX Audit', 'SEO', 'Performance', 'Analytics']
  },
];

export default function Services() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const } }
  };

  return (
    <div className="w-full bg-transparent">
      <section className="py-32 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto relative z-10 border-b border-white/5">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.div variants={item} className="mb-24 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6 flex flex-wrap gap-4 items-center justify-center md:justify-start">
                We Engineer
                <RotatingText 
                  texts={['Cinematic', 'Scalable', 'Robust', 'Premium']} 
                  mainClassName="text-[#ff6a39] bg-white/5 px-4 py-2 rounded-xl"
                  rotationInterval={3000}
                  staggerDuration={0.03}
                />
              </h2>
              <div className="text-white/60 text-xl leading-relaxed h-[80px]">
                <TextType 
                  text="We specialize in the intersection of rigorous engineering and cinematic design. Discover how we can elevate your digital presence." 
                  speed={20}
                  className="inline-block"
                />
              </div>
            </div>
            
            <Link to="/contact" className="hidden md:block">
               <StarBorder color="#ff6a39" speed="4s" className="text-sm font-bold tracking-widest uppercase">
                 Start a Project
               </StarBorder>
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
            {services.map((s, i) => (
              <motion.div 
                key={s.id} 
                variants={item} 
                className={cn(
                  "liquid-glass p-8 md:p-12 flex flex-col justify-between hover:-translate-y-2 cursor-default transition-all duration-500 relative overflow-hidden group",
                  i === 0 || i === 3 ? "md:col-span-7" : "md:col-span-5"
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#ff6a39] rounded-full blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-[#ff6a39] font-mono text-sm tracking-wider font-bold">{s.id}</span>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-[#ff6a39]/50 to-transparent" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">{s.title}</h3>
                  <p className="text-white/50 leading-relaxed text-lg mb-12 max-w-lg">
                    {s.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 relative z-10 mt-auto">
                  {s.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 bg-black/40 border border-white/5 rounded-full text-xs font-medium text-white/70 group-hover:border-white/10 group-hover:text-white transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* The GRAVIT Difference Section */}
      <section className="py-32 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto relative z-10 border-b border-white/5 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="w-full lg:w-1/2">
             <h2 className="text-sm tracking-widest text-white/50 uppercase mb-6">The GRAVIT Difference</h2>
             <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">Why generic templates don't work.</h3>
             <p className="text-white/60 text-lg leading-relaxed mb-8">
               Most agencies assemble pre-built blocks and call it a day. We engineer custom architectures from the ground up to ensure your product stands out in a saturated market.
             </p>
             <ul className="space-y-4 text-white/80">
               <li className="flex items-center gap-3">
                 <span className="text-[#ff6a39]">✦</span> Performance-first React apps
               </li>
               <li className="flex items-center gap-3">
                 <span className="text-[#ff6a39]">✦</span> WebGL & Three.js 3D environments
               </li>
               <li className="flex items-center gap-3">
                 <span className="text-[#ff6a39]">✦</span> Unapologetic, premium branding
               </li>
             </ul>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end h-[400px]">
             <CardSwap pauseOnHover={true} delay={4000} cardDistance={40} verticalDistance={50} easing="elastic">
                <Card className="liquid-glass rounded-3xl p-8 flex flex-col justify-between">
                   <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white/50 mb-6">01</div>
                   <h4 className="text-2xl font-bold text-white mb-2">The Problem</h4>
                   <p className="text-white/50">Your current digital presence blends in with competitors. It's safe, predictable, and forgettable.</p>
                </Card>
                <Card className="liquid-glass rounded-3xl p-8 flex flex-col justify-between border-t border-[#6e7bff]/30">
                   <div className="w-12 h-12 bg-[#6e7bff]/20 rounded-full flex items-center justify-center text-[#6e7bff] mb-6">02</div>
                   <h4 className="text-2xl font-bold text-white mb-2">The Strategy</h4>
                   <p className="text-white/50">We tear down the safe approach and reconstruct your identity around high-contrast, cinematic motion.</p>
                </Card>
                <Card className="liquid-glass rounded-3xl p-8 flex flex-col justify-between border-t border-[#ff6a39]/30">
                   <div className="w-12 h-12 bg-[#ff6a39]/20 rounded-full flex items-center justify-center text-[#ff6a39] mb-6">03</div>
                   <h4 className="text-2xl font-bold text-white mb-2">The Result</h4>
                   <p className="text-white/50">A premium web experience that commands authority, captivates users, and drives enterprise conversions.</p>
                </Card>
             </CardSwap>
          </div>
        </div>
        
        <div className="mt-16 text-center md:hidden">
            <Link to="/contact">
               <StarBorder color="#ff6a39" speed="4s" className="text-sm font-bold tracking-widest uppercase inline-block">
                 Start a Project
               </StarBorder>
            </Link>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStackReveal />
    </div>
  );
}
