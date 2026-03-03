'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Lenis from 'lenis';

export default function UeberUns() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 0.9, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => { lenis.destroy(); };
  }, []);

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '70%']);
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
          style={{ backgroundImage: 'linear-gradient(#E63329 1px, transparent 1px), linear-gradient(90deg, #E63329 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <motion.div className="absolute left-0 top-0 w-4 h-full bg-[#E63329]"
          initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1 }} />

        <motion.div className="text-center relative z-10" style={{ y: titleY, opacity: titleOpacity }}>
          <p className="text-[#E63329] text-xs tracking-[0.4em] font-bold mb-6">WER WIR SIND</p>
          <h1 className="text-white font-black leading-none tracking-tighter"
            style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontSize: 'clamp(3.5rem, 10vw, 11rem)' }}>
            ÜBER <span className="text-[#E63329]">UNS</span>
          </h1>
          <p className="text-[#888888] text-lg mt-6">Leidenschaft für Druck seit Jahren</p>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <p className="text-[#E63329] text-xs tracking-[0.4em] font-bold mb-6">UNSERE GESCHICHTE</p>
              <h2 className="text-[#111111] text-5xl lg:text-7xl font-black leading-none tracking-tighter mb-8"
                style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
                DRUCK<br />IST<br /><span className="text-[#E63329]">PASSION</span>
              </h2>
              <div className="w-16 h-1 bg-[#E63329] mb-8" />
              <p className="text-[#555555] text-lg leading-relaxed font-light mb-4">
                Emanuel Media ist eine inhabergeführte Druckerei in Saarlouis-Roden – mitten im Herzen des Saarlandes.
                Geleitet von <strong className="text-[#111111] font-bold">Annette Emanuel-Decker</strong> mit echter Leidenschaft für Druck und persönlichen Service.
              </p>
              <p className="text-[#555555] text-lg leading-relaxed font-light">
                Was uns auszeichnet: Wir sind keine anonyme Online-Druckerei. Wir beraten persönlich, denken mit und liefern – auch bei kleinen Auflagen und kurzfristigen Projekten.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              {[
                { title: 'PERSÖNLICH', desc: 'Direkte Beratung – kein Callcenter, keine Warteschleifen' },
                { title: 'SCHNELL', desc: 'Kurze Wege, kurze Lieferzeiten' },
                { title: 'KOMPETENT', desc: 'Druck & Design aus einer Hand' },
                { title: 'FAIR', desc: 'Transparente Preise ohne Überraschungen' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="bg-[#111111] p-8 border-b-4 border-[#E63329]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-[#E63329] font-black text-sm tracking-widest mb-3">{item.title}</h4>
                  <p className="text-[#888888] text-sm leading-relaxed font-light">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leistungsübersicht Banner */}
      <section className="bg-[#E63329] py-20 overflow-hidden">
        <motion.div
          className="whitespace-nowrap"
          animate={{ x: [0, '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {['TEXTILDRUCK', 'VISITENKARTEN', 'BÜCHER', 'FLYER', 'BESCHRIFTUNG', 'STEMPEL', 'KALENDER', 'DESIGN', 'TEXTILDRUCK', 'VISITENKARTEN', 'BÜCHER', 'FLYER', 'BESCHRIFTUNG', 'STEMPEL', 'KALENDER', 'DESIGN'].map((w, i) => (
            <span key={i} className="text-white font-black text-5xl lg:text-7xl tracking-tighter mr-12 inline-block"
              style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
              {w}&nbsp;·&nbsp;
            </span>
          ))}
        </motion.div>
      </section>

      {/* Zahlen */}
      <section className="py-32 bg-[#111111]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '6+', label: 'Leistungsbereiche' },
              { number: '100%', label: 'Persönliche Beratung' },
              { number: '1', label: 'Standort – direkt vor Ort' },
              { number: '∞', label: 'Auflagenflexibilität' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="text-center border border-[#222222] p-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-[#E63329] font-black mb-2" style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
                  {item.number}
                </p>
                <p className="text-[#888888] text-sm tracking-wider font-light">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Adresse */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <motion.p className="text-[#E63329] text-xs tracking-[0.4em] font-bold mb-6"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            BESUCHEN SIE UNS
          </motion.p>
          <motion.h2
            className="text-[#111111] font-black leading-none tracking-tighter mb-12"
            style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontSize: 'clamp(2.5rem, 7vw, 8rem)' }}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }} viewport={{ once: true }}>
            FINDEN SIE <span className="text-[#E63329]">UNS</span>
          </motion.h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-[#555555] text-lg font-light">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#E63329]" />
              <span>Schulstraße 54, 66740 Saarlouis-Roden</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#E63329]" />
              <a href="tel:+4968316456845" className="hover:text-[#E63329] transition-colors">06831 – 6456845</a>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#E63329]" />
              <a href="mailto:info@emanuel-media.de" className="hover:text-[#E63329] transition-colors">info@emanuel-media.de</a>
            </div>
          </div>
          <motion.div className="mt-12"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
            <Link href="/kontakt" className="inline-block px-10 py-4 bg-[#E63329] text-white font-bold tracking-widest text-sm hover:bg-[#111111] transition-colors">
              NACHRICHT SENDEN
            </Link>
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
