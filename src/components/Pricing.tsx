import { motion } from 'motion/react';
import BorderGlow from './BorderGlow';
import { Link } from 'react-router-dom';

const pricingTiers = [
  {
    name: "Standard",
    price: "$15k",
    description: "For startups needing a premium digital footprint.",
    features: [
      "Custom 5-Page Website",
      "Responsive Fluid Design",
      "Basic Micro-interactions",
      "CMS Integration",
      "1 Month Post-Launch Support"
    ],
    buttonText: "Initiate Standard",
    isPopular: false
  },
  {
    name: "Pro",
    price: "$30k",
    description: "For scale-ups ready to dominate their industry.",
    features: [
      "Up to 15 Pages",
      "Custom WebGL / 3D Elements",
      "Advanced Kinetic Typography",
      "Complex Backend Integration",
      "Performance & SEO Optimization",
      "3 Months Post-Launch Support"
    ],
    buttonText: "Initiate Pro",
    isPopular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For global brands requiring bespoke digital platforms.",
    features: [
      "Unlimited Pages",
      "Full Application Architecture",
      "Role-Based Access Systems",
      "Custom Physics & Data Viz",
      "Dedicated Engineering Team",
      "24/7 SLA Support"
    ],
    buttonText: "Contact Us",
    isPopular: false
  }
];

export default function Pricing() {
  return (
    <div className="w-full min-h-screen pt-32 pb-24 relative z-10 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block text-[#ff6a39] uppercase tracking-widest text-xs font-mono mb-4 px-3 py-1 border border-[#ff6a39]/30 rounded-full bg-[#ff6a39]/10"
          >
            Engagement Models
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 uppercase"
          >
            Clear <span className="text-gradient-accent">Parameters.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto font-light"
          >
            No hidden clauses. We operate with absolute transparency to deliver unparalleled digital excellence.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {pricingTiers.map((tier, index) => {
            const CardWrapper = tier.isPopular ? BorderGlow : 'div';
            const wrapperProps = tier.isPopular 
              ? { glowColor: "240 80 60", glowIntensity: 0.5, animated: true, borderRadius: 24, className: "lg:-mt-8 lg:mb-8 relative z-20" } 
              : { className: "relative z-10" };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              >
                <CardWrapper {...wrapperProps}>
                  <div className={`liquid-glass rounded-3xl p-8 md:p-12 h-full flex flex-col border ${tier.isPopular ? 'border-white/20' : 'border-white/5'}`}>
                    
                    {tier.isPopular && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#ff6a39] text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-[0_0_20px_-5px_#ff6a39]">
                        Recommended
                      </div>
                    )}

                    <div className="mb-8 border-b border-white/10 pb-8">
                      <h2 className="text-2xl font-bold text-white mb-2">{tier.name}</h2>
                      <p className="text-white/50 text-sm h-10">{tier.description}</p>
                      <div className="mt-6 flex items-baseline gap-2">
                        <span className="text-5xl font-bold tracking-tighter text-white">{tier.price}</span>
                        {tier.price !== "Custom" && <span className="text-white/40 text-sm uppercase tracking-widest">/ Project</span>}
                      </div>
                    </div>

                    <ul className="flex-1 space-y-4 mb-12">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/70">
                          <svg className="w-5 h-5 text-[#ff6a39] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link 
                      to="/contact" 
                      className={`w-full py-4 rounded-full text-center font-medium transition-all duration-300 ${
                        tier.isPopular 
                        ? 'bg-white text-black hover:scale-105 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]' 
                        : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                      }`}
                    >
                      {tier.buttonText}
                    </Link>
                  </div>
                </CardWrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
