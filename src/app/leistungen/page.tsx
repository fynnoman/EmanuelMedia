'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Lenis from 'lenis';

const leistungen = [
  {
    category: 'TEXTILDRUCK',
    icon: '👕',
    items: ['T-Shirts', 'Poloshirts', 'Tassen', 'Teller', 'Tragetaschen', 'Arbeitskleidung'],
    desc: 'Individueller Druck auf Textilien – für Firmen, Vereine, Events und Privatpersonen.',
    color: '#E63329',
  },
  {
    category: 'VEREINSBEDARF',
    icon: '🏆',
    items: ['Trikots & Sporttextilien', 'Stempel', 'Aufkleber', 'Vereins-Flyer', 'Banner', 'Pokale beschriften'],
    desc: 'Alles was Vereine brauchen – von der Vereinsjacke bis zur Festschrift.',
    color: '#111111',
  },
  {
    category: 'PRINT',
    icon: '🖨️',
    items: ['Visitenkarten', 'Flyer', 'Broschüren', 'Plakate', 'Briefpapier', 'Briefumschläge'],
    desc: 'Professionelles Printmaterial für Ihren Unternehmensauftritt.',
    color: '#1A1A1A',
  },
  {
    category: 'BÜCHER & KALENDER',
    icon: '📚',
    items: ['Diplomarbeiten', 'Bachelorarbeiten', 'Bücher', 'Kalender', 'Festschriften', 'Magazine'],
    desc: 'Bindung und Druck von Büchern, Abschlussarbeiten und Sonderdrucken.',
    color: '#E63329',
  },
  {
    category: 'BESCHRIFTUNG',
    icon: '🚗',
    items: ['Fahrzeugbeschriftung', 'Schaufensterbeschriftung', 'Schilder', 'Magnetfolien', 'Aufkleber', 'Leuchtbuchstaben'],
    desc: 'Damit Ihr Unternehmen auffällt – auf der Straße und im Schaufenster.',
    color: '#111111',
  },
  {
    category: 'DESIGN & MEHR',
    icon: '✏️',
    items: ['Logoentwicklung', 'Datenaufbereitung', 'Scans bis DIN A3', 'Stempelherstellung', 'Startup-Pakete', 'Gestaltung'],
    desc: 'Von der ersten Idee bis zum fertigen Produkt – kreative Unterstützung aus einer Hand.',
    color: '#222222',
  },
];

function LeistungSection({ leistung, index }: { leistung: typeof leistungen[0]; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const x = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -80 : 80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-b border-[#222222]"
      style={{ x, opacity }}
    >
      {/* Color block */}
      <div
        className={`relative flex items-end p-12 h-[40vh] overflow-hidden ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
        style={{ backgroundColor: leistung.color }}
      >
        <div className="relative z-10">
          <p className="text-white/40 text-7xl font-black mb-4" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
            {String(index + 1).padStart(2, '0')}
          </p>
          <h2 className="text-white text-4xl lg:text-5xl font-black tracking-tighter" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
            {leistung.category}
          </h2>
          <p className="text-white/70 mt-3 text-sm leading-relaxed max-w-sm">{leistung.desc}</p>
        </div>
        <motion.div
          className="absolute top-0 right-0 w-2 h-full bg-white/10"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Items list */}
      <div className={`bg-white p-12 flex flex-col justify-center ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
        <ul className="space-y-4">
          {leistung.items.map((item, i) => (
            <motion.li
              key={item}
              className="flex items-center gap-4 text-[#111111] text-xl font-light border-b border-[#EEEEEE] pb-4 last:border-0"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-[#E63329] shrink-0" />
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function LeistungenPage() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 0.9, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => { lenis.destroy(); };
  }, []);

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '80%']);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-5 bg-[#111111]/90 backdrop-blur-md border-b border-white/10">
        <Link href="/" className="text-white font-black text-xl tracking-tight" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
          EMANUEL <span className="text-[#E63329]">MEDIA</span>
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          {[{ label: 'Leistungen', href: '/leistungen' }, { label: 'Über uns', href: '/ueber-uns' }, { label: 'Kontakt', href: '/kontakt' }].map(item => (
            <Link key={item.href} href={item.href} className="text-[#AAAAAA] hover:text-white text-sm tracking-wider transition-colors font-light">{item.label}</Link>
          ))}
          <a href="https://emanuel-media-shop.de" target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 bg-[#E63329] text-white text-xs font-bold tracking-widest hover:bg-white hover:text-[#E63329] transition-colors">
            ONLINE-SHOP
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section ref={heroRef} className="relative h-[70vh] bg-[#111111] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(#E63329 1px, transparent 1px), linear-gradient(90deg, #E63329 1px, transparent 1px)', backgroundSize: '80px 80px' }}
        />
        <motion.div className="absolute left-0 top-0 w-4 h-full bg-[#E63329]"
          initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1 }} />

        <motion.div className="text-center relative z-10" style={{ y: titleY, opacity: titleOpacity }}>
          <p className="text-[#E63329] text-xs tracking-[0.4em] font-bold mb-6">EMANUEL MEDIA</p>
          <h1 className="text-white font-black leading-none tracking-tighter"
            style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontSize: 'clamp(4rem, 12vw, 12rem)' }}>
            LEIS<span className="text-[#E63329]">TUNGEN</span>
          </h1>
          <p className="text-[#888888] text-lg mt-6">Druck & Textildruck aus einer Hand</p>
        </motion.div>
      </section>

      {/* Leistungen */}
      <div>
        {leistungen.map((l, i) => (
          <LeistungSection key={l.category} leistung={l} index={i} />
        ))}
      </div>

      {/* CTA */}
      <section className="bg-[#E63329] py-32">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.h2
            className="text-white font-black leading-none tracking-tighter mb-8"
            style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontSize: 'clamp(3rem, 8vw, 8rem)' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            FRAGEN?<br />WIR HELFEN.
          </motion.h2>
          <motion.div className="flex gap-4 justify-center flex-wrap mt-8"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
            <Link href="/kontakt" className="px-10 py-4 bg-white text-[#E63329] text-sm font-bold tracking-widest hover:bg-[#111111] hover:text-white transition-colors">
              KONTAKT AUFNEHMEN
            </Link>
            <a href="https://emanuel-media-shop.de" target="_blank" rel="noopener noreferrer"
              className="px-10 py-4 border-2 border-white text-white text-sm font-bold tracking-widest hover:bg-white hover:text-[#E63329] transition-colors">
              ONLINE-SHOP ↗
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] text-white py-12 border-t border-[#222222]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/" className="text-white font-black text-xl" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
            EMANUEL <span className="text-[#E63329]">MEDIA</span>
          </Link>
          <p className="text-xs font-light text-[#555555]">© 2026 Emanuel Media · Annette Emanuel-Decker</p>
          <div className="flex gap-6 text-xs font-light text-[#555555]">
            <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
