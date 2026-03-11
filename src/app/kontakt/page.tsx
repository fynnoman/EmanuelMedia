'use client';

// ============================================================
// PLATZHALTER – Kontakt-Seite
// ============================================================

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Lenis from 'lenis';

export default function KontaktPage() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 0.9, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => { lenis.destroy(); };
  }, []);

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '70%']);
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
      <section ref={heroRef} className="relative h-[60vh] bg-[#0F172A] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(#1D4ED8 1px, transparent 1px), linear-gradient(90deg, #1D4ED8 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <motion.div className="absolute left-0 top-0 w-4 h-full bg-[#1D4ED8]"
          initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1 }} />
        <motion.div className="text-center relative z-10" style={{ y: titleY, opacity: titleOpacity }}>
          <p className="text-[#1D4ED8] text-xs tracking-[0.4em] font-bold mb-6">WIR SIND FÜR SIE DA</p>
          <h1 className="text-white font-black leading-none tracking-tighter"
            style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontSize: 'clamp(4rem, 12vw, 12rem)' }}>
            KON<span className="text-[#1D4ED8]">TAKT</span>
          </h1>
        </motion.div>
      </section>

      {/* Contact Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Info – Kontaktdaten anpassen */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <p className="text-[#1D4ED8] text-xs tracking-[0.4em] font-bold mb-8">KONTAKTINFORMATIONEN</p>
              <div className="space-y-8">
                {[
                  {
                    label: 'ADRESSE',
                    content: <><p>Talstraße 67</p><p>66701 Beckingen</p></>,
                  },
                  {
                    label: 'E-MAIL',
                    content: <a href="mailto:info@demir-speedconnect.de" className="hover:text-[#1D4ED8] transition-colors">info@demir-speedconnect.de</a>,
                  },
                  {
                    label: 'LEISTUNGEN',
                    content: <p>Glasfaserverlegung · Spleißen · Tiefbau · Hausanschlüsse</p>,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-6 border-b border-[#EEEEEE] pb-6">
                    <div className="w-1 bg-[#1D4ED8] shrink-0" />
                    <div>
                      <p className="text-[#0F172A] text-xs font-bold tracking-[0.3em] mb-2">{item.label}</p>
                      <div className="text-[#475569] font-light">{item.content}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Links – anpassen */}
              <div className="mt-12 p-8 bg-[#0F172A]">
                <h3 className="text-white font-black text-lg tracking-tight mb-4" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
                  SCHNELL-LINKS
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Glasfaserverlegung', href: '/leistungen' },
                    { label: 'Spleißen', href: '/leistungen' },
                    { label: 'Tiefbauarbeiten', href: '/leistungen' },
                    { label: 'Hausanschlüsse', href: '/leistungen' },
                  ].map((link) => (
                    <a key={link.label} href={link.href}
                      className="text-[#94A3B8] hover:text-[#1D4ED8] text-sm font-light transition-colors py-1 flex items-center gap-2">
                      <div className="w-1 h-1 bg-[#1D4ED8]" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              className="bg-[#0F172A] p-12"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <p className="text-[#1D4ED8] text-xs tracking-[0.4em] font-bold mb-3">ANFRAGE SENDEN</p>
              <h3 className="text-white text-4xl font-black tracking-tighter mb-2" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
                ANGEBOT<br />ANFRAGEN
              </h3>
              <p className="text-[#94A3B8] text-sm mb-8 font-light">
                Beschreiben Sie uns Ihr Projekt – wir melden uns schnellstmöglich.
              </p>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Vorname"
                    className="px-4 py-4 bg-[#1E293B] border border-[#334155] text-white placeholder-[#475569] outline-none focus:border-[#1D4ED8] transition-colors text-sm" />
                  <input type="text" placeholder="Nachname"
                    className="px-4 py-4 bg-[#1E293B] border border-[#334155] text-white placeholder-[#475569] outline-none focus:border-[#1D4ED8] transition-colors text-sm" />
                </div>
                <input type="email" placeholder="E-Mail-Adresse"
                  className="w-full px-4 py-4 bg-[#1E293B] border border-[#334155] text-white placeholder-[#475569] outline-none focus:border-[#1D4ED8] transition-colors text-sm" />
                <input type="tel" placeholder="Telefon (optional)"
                  className="w-full px-4 py-4 bg-[#1E293B] border border-[#334155] text-white placeholder-[#475569] outline-none focus:border-[#1D4ED8] transition-colors text-sm" />
                {/* Dropdown-Optionen anpassen */}
                <select className="w-full px-4 py-4 bg-[#1E293B] border border-[#334155] text-[#475569] outline-none focus:border-[#1D4ED8] transition-colors text-sm appearance-none">
                  <option value="">Leistung auswählen</option>
                  <option>Glasfaserverlegung</option>
                  <option>Spleißen</option>
                  <option>Tiefbauarbeiten</option>
                  <option>Hausanschlüsse</option>
                  <option>Sonstiges</option>
                </select>
                <textarea placeholder="Ihre Anfrage"
                  rows={5}
                  className="w-full px-4 py-4 bg-[#1E293B] border border-[#334155] text-white placeholder-[#475569] outline-none focus:border-[#1D4ED8] transition-colors resize-none text-sm" />
                <button className="w-full py-4 bg-[#1D4ED8] text-white font-bold tracking-widest hover:bg-white hover:text-[#1D4ED8] transition-colors text-sm">
                  ANFRAGE ABSENDEN
                </button>
              </div>
            </motion.div>
          </div>
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
