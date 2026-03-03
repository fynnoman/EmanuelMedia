'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Lenis from 'lenis';

function ServiceWord({ text, href, index }: { text: string; href: string; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const direction = index % 2 === 0 ? -1 : 1;
  const x = useTransform(scrollYProgress, [0, 1], [`${direction * 100}vw`, '0vw']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  return (
    <div ref={ref} className="w-full flex justify-center">
      <motion.a
        href={href}
        className="relative text-[#111111] text-5xl lg:text-7xl font-black hover:text-[#E63329] transition-colors tracking-tight"
        style={{ fontFamily: 'Arial Black, Arial, sans-serif', x, opacity }}
      >
        {text}
        <motion.div
          className="absolute bottom-1 left-0 right-0 h-3 bg-[#E63329] -z-10"
          style={{ opacity: 0.35 }}
        />
      </motion.a>
    </div>
  );
}

function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={heroRef} className="relative h-[180vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-[#111111] flex items-center justify-center">
        {/* Background image */}
        <motion.div className="absolute inset-0" style={{ scale: bgScale }}>
          <img
            src="/D6C69D06-B386-4386-9CA0-5C80AD993F9D.png"
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Dark overlay so text stays readable */}
          <div className="absolute inset-0 bg-[#111111]/60" />
        </motion.div>

        <motion.div className="absolute left-0 top-0 w-4 h-full bg-[#E63329]"
          initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <motion.div className="absolute right-0 top-0 w-4 h-full bg-[#E63329]"
          initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
        />

        <motion.div className="relative z-10 text-center px-8" style={{ y: titleY, opacity: titleOpacity }}>
          <motion.p className="text-[#E63329] text-sm tracking-[0.4em] mb-6 font-bold"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}>
            DRUCKEREI · TEXTILDRUCK · SAARLOUIS
          </motion.p>

          <motion.h1
            className="text-white leading-none font-black tracking-tighter"
            style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontSize: 'clamp(4rem, 14vw, 16rem)' }}
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}>
            EMANUEL<br />
            <span className="text-[#E63329]">MEDIA</span>
          </motion.h1>

          <motion.p className="text-[#888888] text-lg lg:text-2xl mt-8 font-light tracking-wide"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}>
            Ihr Druck-Partner in Saarlouis-Roden
          </motion.p>

          <motion.div className="mt-12 flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}>
            <Link href="/leistungen" className="px-8 py-4 bg-[#E63329] text-white text-sm font-bold tracking-widest hover:bg-white hover:text-[#E63329] transition-colors">
              LEISTUNGEN
            </Link>
            <Link href="/kontakt" className="px-8 py-4 border-2 border-white text-white text-sm font-bold tracking-widest hover:bg-white hover:text-[#111111] transition-colors">
              KONTAKT
            </Link>
          </motion.div>
        </motion.div>

        <motion.div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <span className="text-[#888888] text-xs tracking-widest">SCROLLEN</span>
          <div className="w-px h-12 bg-[#E63329]" />
        </motion.div>
      </div>
    </section>
  );
}

function ServicesNavSection() {
  const services = [
    { text: 'TEXTILDRUCK', href: '/leistungen' },
    { text: 'VISITENKARTEN', href: '/leistungen' },
    { text: 'FLYER & BROSCHÜREN', href: '/leistungen' },
    { text: 'BÜCHER & DIPLOMARBEITEN', href: '/leistungen' },
    { text: 'BESCHRIFTUNGEN', href: '/leistungen' },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <motion.p className="text-[#E63329] text-xs tracking-[0.4em] font-bold mb-12 text-center"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }} viewport={{ once: true }}>
          UNSERE LEISTUNGEN
        </motion.p>
        <div className="flex flex-col items-center gap-6">
          {services.map(({ text, href }, index) => (
            <ServiceWord key={text} text={text} href={href} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const leftX = useTransform(scrollYProgress, [0, 0.5], [-60, 0]);
  const rightX = useTransform(scrollYProgress, [0, 0.5], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={ref} className="bg-[#111111] py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div style={{ x: leftX, opacity }}>
            <p className="text-[#E63329] text-xs tracking-[0.4em] font-bold mb-6">ÜBER UNS</p>
            <h2 className="text-white text-6xl lg:text-8xl font-black leading-none tracking-tighter mb-8"
              style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
              DRUCK<br />
              <span className="text-[#E63329]">MIT</span><br />
              HERZ
            </h2>
            <div className="w-20 h-1 bg-[#E63329] mb-8" />
            <p className="text-[#AAAAAA] text-lg leading-relaxed font-light">
              Emanuel Media ist Ihre Druckerei in Saarlouis-Roden – geführt von Annette Emanuel-Decker mit Leidenschaft für Druck und persönlichen Service.
            </p>
            <p className="text-[#AAAAAA] text-lg leading-relaxed font-light mt-4">
              Von der Visitenkarte bis zum Buch, vom T-Shirt bis zur Schaufensterbeschriftung – schnell, zuverlässig und zu fairen Preisen. Auch bei kleinen Auflagen.
            </p>
            <Link href="/ueber-uns"
              className="inline-block mt-8 px-8 py-4 border-2 border-[#E63329] text-[#E63329] text-sm font-bold tracking-widest hover:bg-[#E63329] hover:text-white transition-colors">
              MEHR ERFAHREN
            </Link>
          </motion.div>

          <motion.div className="grid grid-cols-2 gap-4" style={{ x: rightX, opacity }}>
            {[
              { number: '01', title: 'SCHNELL', desc: 'Kurze Lieferzeiten auch bei kleinen Auflagen' },
              { number: '02', title: 'FAIR', desc: 'Transparente Preise ohne versteckte Kosten' },
              { number: '03', title: 'KREATIV', desc: 'Logoentwicklung und Gestaltung aus einer Hand' },
              { number: '04', title: 'LOKAL', desc: 'Ihr Partner vor Ort in Saarlouis-Roden' },
            ].map((item) => (
              <div key={item.number} className="bg-[#1A1A1A] p-6 border-l-4 border-[#E63329]">
                <p className="text-[#E63329] text-3xl font-black mb-2" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
                  {item.number}
                </p>
                <h4 className="text-white text-sm font-bold tracking-widest mb-2">{item.title}</h4>
                <p className="text-[#888888] text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LeistungenGrid() {
  const items = [
    { title: 'TEXTILDRUCK', sub: 'T-Shirts, Tassen, Teller & mehr', color: '#E63329', img: '/9E93C480-D3B0-4C55-96FA-99C1B2F34418_1_201_a.jpeg' },
    { title: 'VEREINSBEDARF', sub: 'Trikots, Aufkleber, Stempel', color: '#111111', img: '/F8A6ABF9-9D6F-4150-A8F1-E80170B5DF2A_1_201_a.jpeg' },
    { title: 'PRINT', sub: 'Visitenkarten, Flyer, Broschüren', color: '#1A1A1A', img: '/EAC86193-0AB0-4328-9DF4-BC826B5E4101_1_201_a.jpeg' },
    { title: 'BÜCHER', sub: 'Diplomarbeiten, Kalender, Festschriften', color: '#E63329', img: '/BC54E0F5-CBC5-4ECE-9570-E77310ED7126_1_201_a.jpeg' },
    { title: 'BESCHRIFTUNG', sub: 'Auto- & Schaufensterbeschriftung', color: '#111111', img: '/692540E2-AFBE-43AD-89BA-3A8947C84BC4_1_201_a.jpeg' },
    { title: 'STARTUP-PAKET', sub: 'Alles für Existenzgründer', color: '#222222', img: '/CE587E3B-37EE-451E-9B27-1D8068D4580C_1_201_a.jpeg' },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <LeistungCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LeistungCard({ item, index }: { item: { title: string; sub: string; color: string; img: string }; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end center"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <motion.div
      ref={ref}
      className="relative h-[50vh] flex items-end p-10 overflow-hidden cursor-pointer group border border-white/5"
      style={{ backgroundColor: item.color, y, opacity }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-[#E63329]/80 transition-colors duration-500" />
      </div>
      <div className="relative z-10">
        <motion.div className="w-8 h-1 bg-white mb-6"
          initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: index * 0.1 }} viewport={{ once: true }}
          style={{ transformOrigin: 'left' }}
        />
        <h3 className="text-white text-4xl lg:text-5xl font-black leading-none tracking-tighter mb-2"
          style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
          {item.title}
        </h3>
        <p className="text-white/60 text-sm group-hover:text-white/90 transition-colors">{item.sub}</p>
      </div>
      <span className="absolute top-8 right-10 text-white/10 text-8xl font-black group-hover:text-white/20 transition-colors"
        style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
        {String(index + 1).padStart(2, '0')}
      </span>
    </motion.div>
  );
}

function StatementSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <section ref={ref} className="bg-[#E63329] py-32 overflow-hidden">
      <motion.div className="whitespace-nowrap" style={{ x }}>
        <h2 className="text-white font-black leading-none"
          style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontSize: 'clamp(4rem, 12vw, 14rem)' }}>
          DRUCK&nbsp;·&nbsp;DESIGN&nbsp;·&nbsp;QUALITÄT&nbsp;·&nbsp;
        </h2>
      </motion.div>
    </section>
  );
}

function ContactSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.4], [60, 0]);

  return (
    <section ref={ref} className="bg-white py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start" style={{ opacity, y }}>
          <div>
            <p className="text-[#E63329] text-xs tracking-[0.4em] font-bold mb-6">KONTAKT</p>
            <h2 className="text-[#111111] text-6xl lg:text-8xl font-black leading-none tracking-tighter mb-8"
              style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
              SO<br />ERREICHST<br />DU <span className="text-[#E63329]">UNS</span>
            </h2>
            <div className="space-y-5 text-[#555555]">
              {[
                { label: 'ADRESSE', lines: ['Schulstraße 54', '66740 Saarlouis-Roden'] },
                { label: 'TELEFON', lines: ['06831 – 6456845'], href: 'tel:+4968316456845' },
                { label: 'E-MAIL', lines: ['info@emanuel-media.de'], href: 'mailto:info@emanuel-media.de' },
                { label: 'ONLINE-SHOP', lines: ['emanuel-media-shop.de'], href: 'https://emanuel-media-shop.de', external: true },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-1 min-h-[20px] bg-[#E63329] shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-[#111111] text-xs tracking-widest mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noopener noreferrer' : undefined}
                        className="font-light hover:text-[#E63329] transition-colors">{item.lines[0]}</a>
                    ) : (
                      item.lines.map(l => <p key={l} className="font-light">{l}</p>)
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#111111] p-12">
            <h3 className="text-white text-3xl font-black tracking-tighter mb-4"
              style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
              ANGEBOT ANFRAGEN
            </h3>
            <p className="text-[#888888] mb-8 font-light text-sm">
              Wir melden uns schnell zurück – auch bei kleinen Auflagen und kurzfristigen Projekten.
            </p>
            <div className="space-y-4">
              <input type="text" placeholder="Name"
                className="w-full px-4 py-4 bg-[#1A1A1A] border border-[#333333] text-white placeholder-[#555555] outline-none focus:border-[#E63329] transition-colors" />
              <input type="email" placeholder="E-Mail"
                className="w-full px-4 py-4 bg-[#1A1A1A] border border-[#333333] text-white placeholder-[#555555] outline-none focus:border-[#E63329] transition-colors" />
              <textarea placeholder="Ihre Anfrage" rows={4}
                className="w-full px-4 py-4 bg-[#1A1A1A] border border-[#333333] text-white placeholder-[#555555] outline-none focus:border-[#E63329] transition-colors resize-none" />
              <button className="w-full py-4 bg-[#E63329] text-white font-bold tracking-widest hover:bg-white hover:text-[#E63329] transition-colors text-sm">
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
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-5 bg-[#111111]/90 backdrop-blur-md border-b border-white/10">
        <Link href="/" className="text-white font-black text-xl tracking-tight" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
          EMANUEL <span className="text-[#E63329]">MEDIA</span>
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          {[
            { label: 'Leistungen', href: '/leistungen' },
            { label: 'Über uns', href: '/ueber-uns' },
            { label: 'Kontakt', href: '/kontakt' },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="text-[#AAAAAA] hover:text-white text-sm tracking-wider transition-colors font-light">
              {item.label}
            </Link>
          ))}
          <a href="https://emanuel-media-shop.de" target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 bg-[#E63329] text-white text-xs font-bold tracking-widest hover:bg-white hover:text-[#E63329] transition-colors">
            ONLINE-SHOP
          </a>
        </div>
      </nav>

      <HeroSection />
      <ServicesNavSection />
      <AboutSection />
      <LeistungenGrid />
      <StatementSection />
      <ContactSection />

      <footer className="bg-[#111111] text-white py-16 border-t border-[#222222]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="text-white font-black text-2xl mb-4 tracking-tight" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
                EMANUEL <span className="text-[#E63329]">MEDIA</span>
              </h4>
              <p className="text-[#888888] text-sm font-light leading-relaxed">
                Ihre Druckerei in Saarlouis-Roden.<br />Druck & Textildruck für Privat und Gewerbe.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-[0.3em] text-[#E63329] mb-4">LEISTUNGEN</h4>
              <ul className="space-y-2 text-sm font-light text-[#888888]">
                {['Textildruck', 'Visitenkarten & Flyer', 'Bücher & Diplomarbeiten', 'Auto- & Schaufensterbeschriftung', 'Startup-Pakete'].map(l => (
                  <li key={l}><Link href="/leistungen" className="hover:text-white transition-colors">{l}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-[0.3em] text-[#E63329] mb-4">KONTAKT</h4>
              <div className="space-y-1 text-sm font-light text-[#888888]">
                <p className="text-white font-bold">Emanuel Media</p>
                <p>Schulstraße 54, 66740 Saarlouis-Roden</p>
                <p><a href="tel:+4968316456845" className="hover:text-white transition-colors">06831 – 6456845</a></p>
                <p><a href="mailto:info@emanuel-media.de" className="hover:text-white transition-colors">info@emanuel-media.de</a></p>
                <p className="mt-2"><a href="https://emanuel-media-shop.de" target="_blank" rel="noopener noreferrer" className="text-[#E63329] hover:text-white transition-colors">emanuel-media-shop.de ↗</a></p>
              </div>
            </div>
          </div>
          <div className="border-t border-[#222222] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs font-light text-[#555555]">© 2026 Emanuel Media · Annette Emanuel-Decker</p>
            <div className="flex gap-6 text-xs font-light text-[#555555]">
              <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
              <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
