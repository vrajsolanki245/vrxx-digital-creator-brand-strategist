
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Instagram, 
  Mail, 
  MessageSquare, 
  ArrowRight, 
  Menu, 
  X, 
  Camera, 
  Layout, 
  Zap, 
  Send, 
  Sparkles,
  ChevronDown,
  PlayCircle,
  ExternalLink
} from 'lucide-react';
import { SERVICES, PORTFOLIO, TESTIMONIALS } from './constants';
import { getCreativeIdea } from './services/geminiService';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-black/60 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          href="#" 
          className="text-2xl font-black tracking-tighter flex items-center gap-1"
        >
          VRXX<span className="text-white/20">.</span>
        </motion.a>
        
        <div className="hidden md:flex gap-12 items-center">
          {navLinks.map((link, i) => (
            <motion.a 
              key={link.name} 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              href={link.href} 
              className="text-[10px] font-bold hover:text-white/40 transition-colors uppercase tracking-[0.3em]"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            href="#contact" 
            className="bg-white text-black px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:invert transition-all active:scale-95"
          >
            Work With Me
          </motion.a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="md:hidden fixed inset-0 bg-black z-[101] flex flex-col justify-center items-center gap-10 p-10"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-8 right-6">
              <X size={32} />
            </button>
            {navLinks.map((link, i) => (
              <motion.a 
                key={link.name} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
                href={link.href} 
                onClick={() => setIsOpen(false)} 
                className="text-4xl font-black uppercase tracking-tighter"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              href="#contact" 
              onClick={() => setIsOpen(false)} 
              className="mt-10 bg-white text-black w-full text-center py-5 rounded-full font-black uppercase tracking-widest"
            >
              Work With Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <motion.div style={{ y: y1, opacity }} className="absolute inset-0 z-0">
         <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] animate-pulse"></div>
         <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px] animation-delay-2000"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/5 border border-white/10 rounded-full"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">Available for Q1 Collaborations</span>
        </motion.div>

        <h1 className="text-[clamp(3rem,12vw,10rem)] font-black leading-[0.85] tracking-tighter mb-12">
          <motion.span 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="block"
          >
            AESTHETIC
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/10"
          >
            REVOLUTION
          </motion.span>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto mb-16 font-medium leading-relaxed font-mono"
        >
          Digital architecture for brands that demand attention. <br className="hidden md:block" />
          Crafted for the next generation of culture-shifters.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a href="#work" className="group bg-white text-black px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:scale-105 transition-all flex items-center justify-center gap-3">
            The Archive <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="border border-white/20 hover:border-white/60 px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs transition-all backdrop-blur-sm">
            Contact
          </a>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-40 bg-[#080808] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-white/5 rounded-3xl blur-2xl group-hover:bg-white/10 transition-all duration-700"></div>
          <motion.div 
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#111]"
          >
            <img 
              src="https://picsum.photos/seed/vrxx_dark_mode/1200/1500" 
              alt="VRXX Persona" 
              className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
          </motion.div>
          <div className="absolute -bottom-8 -right-8 bg-black border border-white/10 p-8 rounded-2xl hidden md:block">
            <p className="text-5xl font-black italic tracking-tighter mb-1">00:01</p>
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">Time for change</p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <motion.span 
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="text-white/30 uppercase tracking-[0.5em] text-[10px] font-bold mb-8 block"
          >
            Background
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter">
            WHERE CULTURE <br /> MEETS DATA.
          </h2>
          <div className="space-y-6 text-white/50 text-lg leading-relaxed">
            <p>
              VRXX is a digital-first studio founded on the principle that aesthetics are a currency. We don't just "create content"—we architect visual ecosystems that resonate with the modern, hyper-fast digital consumer.
            </p>
            <p>
              By blending high-end fashion aesthetics with rapid-deployment social strategies, we help brands bypass the noise and speak directly to their audience's subconscious.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-2 gap-12 border-t border-white/10 pt-12">
            <div>
              <p className="text-4xl font-black mb-2 tabular-nums">1.2M+</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">Community Reach</p>
            </div>
            <div>
              <p className="text-4xl font-black mb-2 tabular-nums">150%</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">Avg. Growth Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <section id="work" className="py-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <div>
            <span className="text-white/30 uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">Case Studies</span>
            <h3 className="text-5xl md:text-8xl font-black tracking-tighter">CURATED <br /> IMPACT.</h3>
          </div>
          <div className="md:text-right max-w-xs">
            <p className="text-white/40 text-sm font-mono leading-relaxed mb-6">
              // Selected works focusing on visual storytelling and brand identity.
            </p>
            <a href="https://instagram.com" target="_blank" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest border-b border-white/20 pb-2 hover:border-white transition-all">
              Live Feed <ExternalLink size={14} />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PORTFOLIO.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-[#111]">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:rotate-1 group-hover:brightness-50"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                   <PlayCircle size={64} strokeWidth={1} className="text-white mb-4" />
                   <span className="text-[10px] font-black uppercase tracking-[0.3em]">View Project</span>
                </div>
              </div>
              <div className="mt-8 flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-black tracking-tight mb-2 uppercase">{item.title}</h4>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">{item.category}</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AICreativeMuse = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInspire = async () => {
    if (!input) return;
    setLoading(true);
    const idea = await getCreativeIdea(input);
    setResult(idea);
    setLoading(false);
  };

  return (
    <section className="py-40 bg-white text-black rounded-[4rem] mx-4 md:mx-10 my-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-black/5 rounded-full">
           <Sparkles size={16} className="text-black" />
           <span className="text-[10px] font-black uppercase tracking-[0.3em]">VRXX.AI Creative Lab</span>
        </div>
        <h3 className="text-5xl md:text-8xl font-black tracking-tighter mb-10">THE CREATIVE <br /> MUSE.</h3>
        <p className="text-black/60 mb-16 max-w-xl mx-auto font-medium text-lg leading-relaxed">
          Stuck on content? Let VRXX's digital double generate a premium, high-impact creative concept for you.
        </p>
        
        <div className="relative max-w-2xl mx-auto shadow-2xl rounded-full overflow-hidden">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe your brand goal..."
            className="w-full bg-[#f5f5f5] py-8 px-12 focus:outline-none text-lg font-medium pr-40"
          />
          <button 
            onClick={handleInspire}
            disabled={loading}
            className="absolute right-3 top-3 bottom-3 bg-black text-white font-black uppercase text-xs px-10 rounded-full hover:bg-black/80 transition-all disabled:opacity-50"
          >
            {loading ? 'Thinking...' : 'Inspire Me'}
          </button>
        </div>

        <AnimatePresence mode="wait">
          {result && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-16 text-left bg-[#f5f5f5] p-10 md:p-16 rounded-[3rem] relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Sparkles size={80} />
              </div>
              <div className="relative z-10 prose prose-lg max-w-none whitespace-pre-wrap font-bold tracking-tight text-2xl md:text-3xl leading-tight text-black">
                {result}
              </div>
              <div className="mt-12 flex gap-4">
                <button onClick={() => setResult('')} className="text-[10px] font-black uppercase tracking-widest text-black/30 hover:text-black transition-colors">Clear Result</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-40 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-32">
          <div>
            <span className="text-white/30 uppercase tracking-[0.5em] text-[10px] font-bold mb-8 block">Connect</span>
            <h3 className="text-6xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.85]">READY TO <br /> SCALE?</h3>
            <p className="text-white/40 text-xl mb-16 max-w-md font-medium leading-relaxed">
              We only take on 3 major brand transformations per quarter to ensure peak quality. Secured your slot?
            </p>
            
            <div className="grid gap-10">
              {[
                { label: 'Direct Line', value: 'hello@vrxx.studio', icon: Mail, href: 'mailto:hello@vrxx.studio' },
                { label: 'Socials', value: '@__vrxx', icon: Instagram, href: '#' },
                { label: 'WhatsApp', value: '+1 (VRXX) EST-2024', icon: MessageSquare, href: '#' }
              ].map((item, i) => (
                <motion.a 
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-8 group"
                >
                  <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-black mb-1">{item.label}</p>
                    <p className="text-xl font-bold tracking-tight">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-white/5 rounded-full blur-[100px] -z-10"></div>
            <form className="bg-white/5 p-12 md:p-20 rounded-[4rem] border border-white/10 backdrop-blur-xl" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-12">
                <div className="group">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 group-focus-within:text-white transition-colors">Digital Identity</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 py-6 focus:outline-none focus:border-white transition-all text-xl font-bold" placeholder="Full Name / Brand" />
                </div>
                <div className="group">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 group-focus-within:text-white transition-colors">Mission Protocol</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/10 py-6 focus:outline-none focus:border-white transition-all text-xl font-bold" placeholder="Your Email" />
                </div>
                <div className="group">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 group-focus-within:text-white transition-colors">The Brief</label>
                  <textarea rows={3} className="w-full bg-transparent border-b border-white/10 py-6 focus:outline-none focus:border-white transition-all text-xl font-bold resize-none" placeholder="What are we building?"></textarea>
                </div>
              </div>
              <button className="w-full mt-20 bg-white text-black py-8 rounded-full font-black uppercase tracking-[0.3em] text-xs hover:invert transition-all active:scale-[0.98] flex items-center justify-center gap-4">
                Initiate Project <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-[#030303]">
      <div className="max-w-7xl mx-auto px-6">
         <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
            <div className="text-center md:text-left">
              <p className="text-4xl font-black mb-4 tracking-tighter">VRXX<span className="text-white/20">_</span></p>
              <p className="text-white/20 text-[10px] uppercase tracking-[0.5em] font-bold">Establishing the status quo since 2024</p>
            </div>
            <div className="flex gap-12">
               {['IG', 'TW', 'LI', 'BE'].map(social => (
                 <a key={social} href="#" className="text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-white transition-all">{social}</a>
               ))}
            </div>
         </div>
         <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-12">
            <p className="text-[9px] uppercase tracking-[0.4em] text-white/20">© 2024 VRXX STUDIOS GLOBAL. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8 text-[9px] uppercase tracking-[0.4em] text-white/20 font-bold">
               <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-white transition-colors">Cookie Data</a>
            </div>
         </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <AICreativeMuse />
      <Contact />
      <Footer />
    </div>
  );
}
