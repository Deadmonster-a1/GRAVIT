import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative z-10 bg-transparent text-white overflow-hidden border-t border-white/5 pt-24 pb-8 mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top CTA Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-6">
              Got a project? <br />
              <span className="text-white/40">Let's build the future.</span>
            </h2>
            <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]">
              Initiate Sequence
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
          
          <div className="flex flex-col gap-8 md:text-right">
            <div>
              <span className="text-white/30 text-[10px] uppercase tracking-widest block mb-2 font-mono">Location</span>
              <p className="text-lg">Kurnool, AP [IN]<br />Remote Global</p>
            </div>
            <div>
              <span className="text-white/30 text-[10px] uppercase tracking-widest block mb-2 font-mono">Direct Line</span>
              <a href="mailto:hello@gravit.studio" className="text-lg hover:text-[#ff6a39] transition-colors relative group inline-block">
                hello@gravit.studio
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#ff6a39] scale-x-0 group-hover:scale-x-100 transition-transform origin-right md:origin-right"></span>
              </a>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 border-t border-white/10 pt-16">
          <div className="col-span-2 md:col-span-2 pr-8">
            <h4 className="text-white/30 text-[10px] uppercase tracking-widest mb-6 font-mono">Mission</h4>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              We are a digital engineering studio focused on building premium web experiences, interactive 3D environments, and robust scalable applications.
            </p>
          </div>
          <div>
            <h4 className="text-white/30 text-[10px] uppercase tracking-widest mb-6 font-mono">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" className="text-white/70 hover:text-[#ff6a39] transition-colors relative group inline-block">Home<span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#ff6a39] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></Link></li>
              <li><Link to="/work" className="text-white/70 hover:text-[#ff6a39] transition-colors relative group inline-block">Work<span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#ff6a39] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-[#ff6a39] transition-colors relative group inline-block">Services<span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#ff6a39] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></Link></li>
              <li><Link to="/pricing" className="text-white/70 hover:text-[#ff6a39] transition-colors relative group inline-block">Pricing<span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#ff6a39] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white/30 text-[10px] uppercase tracking-widest mb-6 font-mono">Socials</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="text-white/70 hover:text-[#ff6a39] transition-colors relative group inline-block">X / Twitter<span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#ff6a39] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></a></li>
              <li><a href="#" className="text-white/70 hover:text-[#ff6a39] transition-colors relative group inline-block">LinkedIn<span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#ff6a39] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></a></li>
              <li><a href="#" className="text-white/70 hover:text-[#ff6a39] transition-colors relative group inline-block">GitHub<span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#ff6a39] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></a></li>
              <li><a href="#" className="text-white/70 hover:text-[#ff6a39] transition-colors relative group inline-block">Dribbble<span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#ff6a39] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></a></li>
            </ul>
          </div>
        </div>

        {/* Massive Logo Typography */}
        <div className="w-full flex justify-center overflow-hidden mb-8">
          <div className="text-[clamp(4rem,15vw,15rem)] font-bold tracking-tighter leading-none text-white/5 uppercase select-none pointer-events-none">
            GRAVIT
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/10 pt-8 text-white/30 text-[10px] uppercase tracking-widest font-mono">
          <div>&copy; {new Date().getFullYear()} GRAVIT STUDIO. ALL SYSTEMS NOMINAL.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
