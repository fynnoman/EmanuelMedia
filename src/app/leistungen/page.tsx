'use client';

// ============================================================
// PLATZHALTER – Leistungen-Seite
// ============================================================

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Lenis from 'lenis';

// --- Leistungen hier eintragen ---
const leistungen = [
  {
    category: 'GLASFASER­VERLEGUNG',
    icon: '�',
    items: [
      'Verlegung von Glasfaserkabeln im Innen- und Außenbereich',
      'LWL-Kabelverlegung in Leerrohren',
      'Erdverlegung nach DVGW-Standard',
      'Verlegung in Gebäuden (FTTH)',
      'Kabeltrassen und Schutzrohrverlegung',
      'Dokumentation und Aufmaß',
    ],
    desc: 'Professionelle Verlegung von Glasfaserkabeln für eine schnelle und zukunftssichere Internetversorgung.',
    color: '#1D4ED8',
  },
  {
    category: 'SPLEISSEN',
    icon: '⚡',
    items: [
      'Thermisches Spleißen von Lichtwellenleitern',
      'Spleißen nach Industrie-Standard',
      'Messungen mit OTDR-Gerät',
      'Spleißprotokolle und Dokumentation',
      'Reparatur von LWL-Strecken',
      'Spleißen in Muffen und Verteilern',
    ],
    desc: 'Präzises Spleißen der Lichtleitfasern mit modernsten Geräten für minimale Dämpfungswerte.',
    color: '#0F172A',
  },
  {
    category: 'TIEFBAU­ARBEITEN',
    icon: '🔧',
    items: [
      'Grabenlose Verlegung (Spülbohrung)',
      'Offene Tiefbauarbeiten',
      'Kernbohrungen und Durchörterungen',
      'Asphalt- und Pflasterarbeiten',
      'Wiederherstellung des Straßenbelags',
      'Koordination mit Behörden und Netzbetreibern',
    ],
    desc: 'Professionelle Tiefbauarbeiten für die Verlegung von Leerrohren und Glasfaserkabeln im Erdreich.',
    color: '#1E293B',
  },
  {
    category: 'HAUS­ANSCHLÜSSE',
    icon: '🏠',
    items: [
      'Hauseinführung und Kabelzug',
      'Installation des Hausübergabepunkts (HÜP)',
      'Verlegung innerhalb des Gebäudes',
      'Abschluss am Netzabschlusspunkt (NTP)',
      'Koordination mit Hauseigentümern',
      'Dokumentation und Übergabe',
    ],
    desc: 'Glasfaser direkt bis in Ihr Gebäude – schnell, sauber und fachgerecht ausgeführt.',
    color: '#1D4ED8',
  },
];

function LeistungSection({ leistung, index }: { leistung: typeof leistungen[0]; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] });
  const x = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -80 : 80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-b border-[#1E293B]"
      style={{ x, opacity }}
    >
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

      <div className={`bg-white p-12 flex flex-col justify-center ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
        <ul className="space-y-4">
          {leistung.items.map((item, i) => (
            <motion.li
              key={item}
              className="flex items-center gap-4 text-[#0F172A] text-xl font-light border-b border-[#EEEEEE] pb-4 last:border-0"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-[#1D4ED8] shrink-0" />
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
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '80%']);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="min-h-screen bg-white">
      {/* Nav – Logo & Links anpassen */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-5 bg-[#0F172A]/90 backdrop-blur-md border-b border-white/10">
        <Link href="/" className="text-white font-black text-xl tracking-tight" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
          DEMIR <span className="text-[#1D4ED8]">SPEEDCONNECT</span>
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          {[{ label: 'Leistungen', href: '/leistungen' }, { label: 'Über uns', href: '/ueber-uns' }, { label: 'Kontakt', href: '/kontakt' }].map(item => (
            <Link key={item.href} href={item.href} className="text-[#94A3B8] hover:text-white text-sm tracking-wider transition-colors font-light">{item.label}</Link>
          ))}
          <a href="/kontakt"
            className="px-6 py-3 bg-[#1D4ED8] text-white text-xs font-bold tracking-widest hover:bg-white hover:text-[#1D4ED8] transition-colors">
            ANGEBOT ANFRAGEN
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section ref={heroRef} className="relative h-[70vh] bg-[#0F172A] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(#1D4ED8 1px, transparent 1px), linear-gradient(90deg, #1D4ED8 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <motion.div className="absolute left-0 top-0 w-4 h-full bg-[#1D4ED8]"
          initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1 }} />
        <motion.div className="text-center relative z-10" style={{ y: titleY, opacity: titleOpacity }}>
          <p className="text-[#1D4ED8] text-xs tracking-[0.4em] font-bold mb-6">DEMIR SPEEDCONNECT</p>
          <h1 className="text-white font-black leading-none tracking-tighter"
            style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontSize: 'clamp(4rem, 12vw, 12rem)' }}>
            LEIS<span className="text-[#1D4ED8]">TUNGEN</span>
          </h1>
          <p className="text-[#94A3B8] text-lg mt-6">Glasfaser · Spleißen · Tiefbau · Hausanschlüsse</p>
        </motion.div>
      </section>

      {/* Leistungen */}
      <div>
        {leistungen.map((l, i) => (
          <LeistungSection key={l.category} leistung={l} index={i} />
        ))}
      </div>

      {/* CTA – Texte anpassen */}
      <section className="bg-[#1D4ED8] py-32">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.h2
            className="text-white font-black leading-none tracking-tighter mb-8"
            style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontSize: 'clamp(3rem, 8vw, 8rem)' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            PROJEKT?<br />WIR BAUEN.
          </motion.h2>
          <motion.div className="flex gap-4 justify-center flex-wrap mt-8"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
            <Link href="/kontakt" className="px-10 py-4 bg-white text-[#1D4ED8] text-sm font-bold tracking-widest hover:bg-[#0F172A] hover:text-white transition-colors">
              KONTAKT AUFNEHMEN
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F172A] text-white py-12 border-t border-[#1E293B]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/" className="text-white font-black text-xl" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
            DEMIR <span className="text-[#1D4ED8]">SPEEDCONNECT</span>
          </Link>
          <p className="text-xs font-light text-[#475569]">© 2026 Demir SpeedConnect</p>
          <div className="flex gap-6 text-xs font-light text-[#475569]">
            <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
