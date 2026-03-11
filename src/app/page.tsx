'use client';

// ============================================================
// PLATZHALTER-SEITE – alle Inhalte durch echte Daten ersetzen
// ============================================================

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Lenis from 'lenis';

// --- Navigationslinks anpassen ---
const NAV_LINKS = [
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Kontakt', href: '/kontakt' },
];

// --- Leistungen in der Services-Nav anpassen ---
const SERVICE_WORDS = [
  { text: 'GLASFASER', href: '/leistungen' },
  { text: 'SPLEISSEN', href: '/leistungen' },
  { text: 'TIEFBAU', href: '/leistungen' },
  { text: 'HAUSANSCHLÜSSE', href: '/leistungen' },
];

// --- Leistungen Grid anpassen ---
const LEISTUNGEN_ITEMS = [
  { title: 'GLASFASER', sub: 'Verlegung von Glasfaserkabeln', color: '#1D4ED8', img: '/Gemini_Generated_Image_s8jcjes8jcjes8jc.png' },
  { title: 'SPLEISSEN', sub: 'Präzises Spleißen der Lichtleitfasern', color: '#0F172A', img: '/Gemini_Generated_Image_6o6esl6o6esl6o6e.png' },
  { title: 'TIEFBAU', sub: 'Professionelle Tiefbauarbeiten', color: '#1E293B', img: '/Gemini_Generated_Image_50z0uv50z0uv50z0.png' },
  { title: 'HAUSANSCHLÜSSE', sub: 'Glasfaser bis in Ihr Gebäude', color: '#1D4ED8', img: '/D99C6DF0-600D-49E6-9FCE-31C38A04EC70.png' },
];

// --- USP-Karten anpassen ---
const USP_CARDS = [
  { number: '01', title: 'QUALITÄT', desc: 'Höchste Verarbeitungsqualität bei jedem Auftrag – zuverlässig und präzise.' },
  { number: '02', title: 'ERFAHRUNG', desc: 'Jahrelange Expertise in Glasfaser und Tiefbau in ganz Deutschland.' },
  { number: '03', title: 'SCHNELLIGKEIT', desc: 'Effiziente Abwicklung und termingerechte Fertigstellung Ihrer Projekte.' },
  { number: '04', title: 'KOMPETENZ', desc: 'Geschultes Fachpersonal für alle Bereiche der Glasfaser-Infrastruktur.' },
];

// --------------- Komponenten ---------------

function ServiceWord({ text, href, index }: { text: string; href: string; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] });
  const direction = index % 2 === 0 ? -1 : 1;
  const x = useTransform(scrollYProgress, [0, 1], [direction * 100 + 'vw', '0vw']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  return (
    <div ref={ref} className="w-full flex justify-center">
      <motion.a
        href={href}
        className="relative text-[#0F172A] text-5xl lg:text-7xl font-black hover:text-[#1D4ED8] transition-colors tracking-tight"
        style={{ fontFamily: 'Arial Black, Arial, sans-serif', x, opacity }}
      >
        {text}
        <motion.div className="absolute bottom-1 left-0 right-0 h-3 bg-[#1D4ED8] -z-10" style={{ opacity: 0.35 }} />
      </motion.a>
    </div>
  );
}

function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={heroRef} className="relative h-[180vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-[#0F172A] flex items-center justify-center">

        {/* Hintergrundbild – Pfad unten in img src eintragen und den Kommentar entfernen */}
        <motion.div className="absolute inset-0" style={{ scale: bgScale }}>
          <img src="/C336A6BB-5175-4C44-9221-F67482DC4CEF.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0F172A]/60" />
        </motion.div>

        <motion.div className="absolute left-0 top-0 w-4 h-full bg-[#1D4ED8]"
          initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.2, ease: 'easeOut' }} />
        <motion.div className="absolute right-0 top-0 w-4 h-full bg-[#1D4ED8]"
          initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }} />

        <motion.div className="relative z-10 text-center px-8" style={{ y: titleY, opacity: titleOpacity }}>
          {/* Claim-Zeile anpassen */}
          <motion.p className="text-[#1D4ED8] text-sm tracking-[0.4em] mb-6 font-bold"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            GLASFASER · TIEFBAU · DEUTSCHLAND
          </motion.p>

          {/* Firmenname anpassen */}
          <motion.h1
            className="text-white leading-none font-black tracking-tighter"
            style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontSize: 'clamp(3rem, 10vw, 12rem)' }}
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.5 }}>
            DEMIR<br />
            <span className="text-[#1D4ED8]">SPEED</span>CONNECT
          </motion.h1>

          {/* Untertitel anpassen */}
          <motion.p className="text-[#94A3B8] text-lg lg:text-2xl mt-8 font-light tracking-wide"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
            Ihr Spezialist für Glasfaser-Infrastruktur & Tiefbau
          </motion.p>

          <motion.div className="mt-12 flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }}>
            <Link href="/leistungen" className="px-8 py-4 bg-[#1D4ED8] text-white text-sm font-bold tracking-widest hover:bg-white hover:text-[#1D4ED8] transition-colors">
              LEISTUNGEN
            </Link>
            <Link href="/kontakt" className="px-8 py-4 border-2 border-white text-white text-sm font-bold tracking-widest hover:bg-white hover:text-[#0F172A] transition-colors">
              KONTAKT
            </Link>
          </motion.div>
        </motion.div>

        <motion.div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <span className="text-[#94A3B8] text-xs tracking-widest">SCROLLEN</span>
          <div className="w-px h-12 bg-[#1D4ED8]" />
        </motion.div>
      </div>
    </section>
  );
}

function ServicesNavSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <motion.p className="text-[#1D4ED8] text-xs tracking-[0.4em] font-bold mb-12 text-center"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          UNSERE LEISTUNGEN
        </motion.p>
        <div className="flex flex-col items-center gap-6">
          {SERVICE_WORDS.map(({ text, href }, index) => (
            <ServiceWord key={text} text={text} href={href} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const leftX = useTransform(scrollYProgress, [0, 0.5], [-60, 0]);
  const rightX = useTransform(scrollYProgress, [0, 0.5], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={ref} className="bg-[#0F172A] py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div style={{ x: leftX, opacity }}>
            <p className="text-[#1D4ED8] text-xs tracking-[0.4em] font-bold mb-6">ÜBER UNS</p>
            {/* Überschrift anpassen */}
            <h2 className="text-white text-6xl lg:text-8xl font-black leading-none tracking-tighter mb-8"
              style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
              DEMIR<br />
              <span className="text-[#1D4ED8]">SPEED</span><br />
              CONNECT
            </h2>
            <div className="w-20 h-1 bg-[#1D4ED8] mb-8" />
            <p className="text-[#94A3B8] text-lg leading-relaxed font-light">
              Demir SpeedConnect ist Ihr zuverlässiger Partner für den Ausbau der Glasfaser-Infrastruktur. Wir verlegen Glasfaserkabel, führen präzises Spleißen durch und realisieren Tiefbauarbeiten auf höchstem Niveau.
            </p>
            <p className="text-[#94A3B8] text-lg leading-relaxed font-light mt-4">
              Von der Planung bis zum Hausanschluss – wir liefern schnelle, saubere und nachhaltige Arbeit für Netzbetreiber, Kommunen und Privatkunden.
            </p>
            <Link href="/ueber-uns"
              className="inline-block mt-8 px-8 py-4 border-2 border-[#1D4ED8] text-[#1D4ED8] text-sm font-bold tracking-widest hover:bg-[#1D4ED8] hover:text-white transition-colors">
              MEHR ERFAHREN
            </Link>
          </motion.div>

          <motion.div className="grid grid-cols-2 gap-4" style={{ x: rightX, opacity }}>
            {USP_CARDS.map((item) => (
              <div key={item.number} className="bg-[#1E293B] p-6 border-l-4 border-[#1D4ED8]">
                <p className="text-[#1D4ED8] text-3xl font-black mb-2" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
                  {item.number}
                </p>
                <h4 className="text-white text-sm font-bold tracking-widest mb-2">{item.title}</h4>
                <p className="text-[#94A3B8] text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LeistungenGrid() {
  return (
    <section className="bg-white">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {LEISTUNGEN_ITEMS.map((item, index) => (
            <LeistungCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LeistungCard({ item, index }: { item: { title: string; sub: string; color: string; img: string }; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end center'] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <motion.div
      ref={ref}
      className="relative h-[60vh] flex items-end p-7 overflow-hidden cursor-pointer group border border-white/5"
      style={{ backgroundColor: item.color, y, opacity }}
    >
      <div className="absolute inset-0">
        {item.img ? (
          <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center opacity-20">
            <span className="text-white text-xs tracking-widest">BILD EINFÜGEN</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/50 group-hover:bg-[#1D4ED8]/80 transition-colors duration-500" />
      </div>
      <div className="relative z-10">
        <motion.div className="w-8 h-1 bg-white mb-4"
          initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: index * 0.1 }} viewport={{ once: true }}
          style={{ transformOrigin: 'left' }} />
        <h3 className="text-white text-2xl lg:text-3xl font-black leading-none tracking-tighter mb-2"
          style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
          {item.title}
        </h3>
        <p className="text-white/60 text-sm group-hover:text-white/90 transition-colors">{item.sub}</p>
      </div>
      <span className="absolute top-6 right-6 text-white/10 text-7xl font-black group-hover:text-white/20 transition-colors"
        style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
        {String(index + 1).padStart(2, '0')}
      </span>
    </motion.div>
  );
}

function StatementSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <section ref={ref} className="bg-[#1D4ED8] py-32 overflow-hidden">
      <motion.div className="whitespace-nowrap" style={{ x }}>
        {/* Statement-Text anpassen */}
        <h2 className="text-white font-black leading-none"
          style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontSize: 'clamp(4rem, 12vw, 14rem)' }}>
          GLASFASER&nbsp;&middot;&nbsp;TIEFBAU&nbsp;&middot;&nbsp;HAUSANSCHLÜSSE&nbsp;&middot;&nbsp;SPLEISSEN&nbsp;&middot;&nbsp;
        </h2>
      </motion.div>
    </section>
  );
}

function ContactSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.4], [60, 0]);

  return (
    <section ref={ref} className="bg-white py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start" style={{ opacity, y }}>
          <div>
            <p className="text-[#1D4ED8] text-xs tracking-[0.4em] font-bold mb-6">KONTAKT</p>
            <h2 className="text-[#0F172A] text-6xl lg:text-8xl font-black leading-none tracking-tighter mb-8"
              style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
              SO<br />ERREICHST<br />DU <span className="text-[#1D4ED8]">UNS</span>
            </h2>
            {/* Kontaktdaten anpassen */}
            <div className="space-y-5 text-[#475569]">
              {[
                { label: 'ADRESSE', lines: ['Talstraße 67', '66701 Beckingen'] },
                { label: 'E-MAIL', lines: ['info@demir-speedconnect.de'], href: 'mailto:info@demir-speedconnect.de' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-1 min-h-[20px] bg-[#1D4ED8] shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-[#0F172A] text-xs tracking-widest mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href}
                        className="font-light hover:text-[#1D4ED8] transition-colors">{item.lines[0]}</a>
                    ) : (
                      item.lines.map(l => <p key={l} className="font-light">{l}</p>)
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0F172A] p-12">
            <h3 className="text-white text-3xl font-black tracking-tighter mb-4"
              style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
              ANGEBOT ANFRAGEN
            </h3>
            <p className="text-[#94A3B8] mb-8 font-light text-sm">
              Schreiben Sie uns – wir melden uns schnellstmöglich bei Ihnen.
            </p>
            <div className="space-y-4">
              <input type="text" placeholder="Name"
                className="w-full px-4 py-4 bg-[#1E293B] border border-[#334155] text-white placeholder-[#475569] outline-none focus:border-[#1D4ED8] transition-colors" />
              <input type="email" placeholder="E-Mail"
                className="w-full px-4 py-4 bg-[#1E293B] border border-[#334155] text-white placeholder-[#475569] outline-none focus:border-[#1D4ED8] transition-colors" />
              <textarea placeholder="Ihre Anfrage" rows={4}
                className="w-full px-4 py-4 bg-[#1E293B] border border-[#334155] text-white placeholder-[#475569] outline-none focus:border-[#1D4ED8] transition-colors resize-none" />
              <button className="w-full py-4 bg-[#1D4ED8] text-white font-bold tracking-widest hover:bg-white hover:text-[#1D4ED8] transition-colors text-sm">
                ABSENDEN
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => { lenis.destroy(); };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigationslinks → NAV_LINKS oben anpassen */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-5 bg-[#0F172A]/90 backdrop-blur-md border-b border-white/10">
        {/* Logo-Text → anpassen */}
        <Link href="/" className="text-white font-black text-xl tracking-tight" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
          DEMIR <span className="text-[#1D4ED8]">SPEEDCONNECT</span>
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <Link key={item.href} href={item.href} className="text-[#94A3B8] hover:text-white text-sm tracking-wider transition-colors font-light">
              {item.label}
            </Link>
          ))}
          {/* CTA-Button → Link und Text anpassen */}
          <a href="/kontakt"
            className="px-6 py-3 bg-[#1D4ED8] text-white text-xs font-bold tracking-widest hover:bg-white hover:text-[#1D4ED8] transition-colors">
            ANGEBOT ANFRAGEN
          </a>
        </div>
      </nav>

      <HeroSection />
      <ServicesNavSection />
      <AboutSection />
      <LeistungenGrid />
      <StatementSection />
      <ContactSection />

      {/* Footer – Kontaktdaten anpassen */}
      <footer className="bg-[#0F172A] text-white py-16 border-t border-[#1E293B]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="text-white font-black text-2xl mb-4 tracking-tight" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
                DEMIR <span className="text-[#1D4ED8]">SPEEDCONNECT</span>
              </h4>
              <p className="text-[#94A3B8] text-sm font-light leading-relaxed">
                Ihr Spezialist für Glasfaser-Infrastruktur,<br />Tiefbau und Hausanschlüsse.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-[0.3em] text-[#1D4ED8] mb-4">LEISTUNGEN</h4>
              <ul className="space-y-2 text-sm font-light text-[#94A3B8]">
                {['Glasfaserverlegung', 'Spleißen', 'Tiefbauarbeiten', 'Hausanschlüsse'].map(l => (
                  <li key={l}><Link href="/leistungen" className="hover:text-white transition-colors">{l}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-[0.3em] text-[#1D4ED8] mb-4">KONTAKT</h4>
              <div className="space-y-1 text-sm font-light text-[#94A3B8]">
                <p className="text-white font-bold">Demir SpeedConnect</p>
                <p>Talstraße 67</p>
                <p>66701 Beckingen</p>
                <p className="mt-2"><a href="mailto:info@demir-speedconnect.de" className="hover:text-white transition-colors">info@demir-speedconnect.de</a></p>
              </div>
            </div>
          </div>
          <div className="border-t border-[#1E293B] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs font-light text-[#475569]">© 2026 Demir SpeedConnect</p>
            <div className="flex gap-6 text-xs font-light text-[#475569]">
              <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
              <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
