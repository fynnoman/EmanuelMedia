'use client';

import { useState } from 'react';

export default function Datenschutz() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F0F4FF]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-md border-b border-[#BFDBFE]/30">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-6 flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.5 w-6 h-6 justify-center hover:opacity-70 transition-opacity"
            >
              <span className="w-full h-0.5 bg-[#475569]"></span>
              <span className="w-full h-0.5 bg-[#475569]"></span>
              <span className="w-full h-0.5 bg-[#475569]"></span>
            </button>
            <button className="hover:opacity-70 transition-opacity">
              <svg className="w-6 h-6 text-[#475569]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <a href="/">
              <h1 className="text-2xl lg:text-3xl tracking-tight text-[#0F172A] whitespace-nowrap" style={{ fontFamily: 'Didot, "Bodoni MT", "Noto Serif Display", "Playfair Display", Georgia, serif', fontWeight: '400', letterSpacing: '0.05em' }}>
                STOFFWECHSEL
              </h1>
            </a>
          </div>
          <div className="flex items-center gap-4 lg:gap-5">
            <button className="hover:opacity-70 transition-opacity">
              <svg className="w-6 h-6 text-[#475569]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Slide-out Menu */}
      <div 
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-xl tracking-wide text-[#1E293B]" style={{ fontFamily: 'Georgia, serif' }}>MENÜ</h2>
            <button 
              onClick={() => setMenuOpen(false)}
              className="text-[#475569] hover:text-[#1E293B] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="space-y-6">
            <a href="/" className="block text-lg font-light text-[#1E293B] hover:text-[#475569] transition-colors tracking-wide">NEUHEITEN</a>
            <a href="/" className="block text-lg font-light text-[#1E293B] hover:text-[#475569] transition-colors tracking-wide">SHOP</a>
            <a href="/" className="block text-lg font-light text-[#1E293B] hover:text-[#475569] transition-colors tracking-wide">SALE</a>
            <a href="/" className="block text-lg font-light text-[#1E293B] hover:text-[#475569] transition-colors tracking-wide">INSPIRATION</a>
            <a href="/" className="block text-lg font-light text-[#1E293B] hover:text-[#475569] transition-colors tracking-wide">LIEBLINGSLOOKS</a>
            <a href="/labels" className="block text-lg font-light text-[#1E293B] hover:text-[#475569] transition-colors tracking-wide">LABELS</a>
          </nav>
          <div className="absolute bottom-8 left-8 right-8 pt-8 border-t border-[#BFDBFE]">
            <div className="space-y-3 text-sm text-[#475569]">
              <a href="/ueber-uns" className="block hover:text-[#1E293B] transition-colors">Über uns</a>
              <a href="/impressum" className="block hover:text-[#1E293B] transition-colors">Impressum</a>
              <a href="/datenschutz" className="block hover:text-[#1E293B] transition-colors">Datenschutz</a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 pt-36 pb-20">
        <h1 className="text-4xl font-light tracking-widest text-[#1E293B] mb-12" style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.15em' }}>
          DATENSCHUTZERKLÄRUNG
        </h1>

        <div className="prose prose-gray max-w-none text-[#475569] space-y-8">
          <section>
            <h2 className="text-2xl font-light text-[#1E293B] mb-4" style={{ fontFamily: 'Georgia, serif' }}>1. Verantwortliche Stelle</h2>
            <div className="text-sm space-y-1">
              <p className="text-[#1E293B] font-normal">Stoffwechsel Patrick Kühle GmbH</p>
              <p>Fürstenstraße 15</p>
              <p>66111 Saarbrücken</p>
              <p className="mt-2">Telefon: +49 (0)681 9386388</p>
              <p>E-Mail: <a href="mailto:mail@stoffwechselpk.de" className="text-[#1E293B] hover:underline">mail@stoffwechselpk.de</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-light text-[#1E293B] mb-4" style={{ fontFamily: 'Georgia, serif' }}>2. Erhebung und Speicherung personenbezogener Daten</h2>
            <p className="text-sm leading-relaxed">
              Beim Aufrufen unserer Website www.stoffwechselpk.de werden durch den Webserver automatisch folgende Daten erfasst und in Server-Logfiles gespeichert:
            </p>
            <ul className="text-sm list-disc list-inside space-y-1 mt-2">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
              <li>Verwendeter Browser und ggf. das Betriebssystem</li>
            </ul>
            <p className="text-sm leading-relaxed mt-3">
              Diese Daten sind technisch erforderlich, um die Website korrekt anzuzeigen und die Systemsicherheit zu gewährleisten (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-[#1E293B] mb-4" style={{ fontFamily: 'Georgia, serif' }}>3. Social Media Links</h2>
            <p className="text-sm leading-relaxed">
              Unsere Website enthält Links zu unseren Profilen bei Instagram und Facebook. Durch das Anklicken dieser Links verlassen Sie unsere Website und gelangen auf die Plattformen der Anbieter Instagram und Facebook (beide betrieben von Meta Platforms Ireland Limited). Bitte beachten Sie, dass dort eigene Datenschutzbestimmungen gelten, auf die wir keinen Einfluss haben.
            </p>
            <div className="text-sm mt-3 space-y-1">
              <p><strong className="text-[#1E293B]">Informationen zum Datenschutz bei:</strong></p>
              <p>Instagram: <a href="https://privacycenter.instagram.com/policy/" className="text-[#1E293B] hover:underline" target="_blank" rel="noopener noreferrer">https://privacycenter.instagram.com/policy/</a></p>
              <p>Facebook: <a href="https://www.facebook.com/privacy/policy/" className="text-[#1E293B] hover:underline" target="_blank" rel="noopener noreferrer">https://www.facebook.com/privacy/policy/</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-light text-[#1E293B] mb-4" style={{ fontFamily: 'Georgia, serif' }}>4. Cookies</h2>
            <p className="text-sm leading-relaxed">
              Wir verwenden keine Tracking- oder Analyse-Cookies. Unsere Website setzt nur technisch notwendige Cookies, um grundlegende Funktionen bereitzustellen. Die Verarbeitung erfolgt auf Basis unseres berechtigten Interesses an der sicheren und funktionalen Bereitstellung der Website (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-[#1E293B] mb-4" style={{ fontFamily: 'Georgia, serif' }}>5. Ihre Rechte</h2>
            <p className="text-sm leading-relaxed mb-2">Sie haben das Recht auf:</p>
            <ul className="text-sm space-y-2">
              <li>• Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
              <li>• Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>• Löschung oder Einschränkung der Verarbeitung (Art. 17 und 18 DSGVO)</li>
              <li>• Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>• Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            <p className="text-sm leading-relaxed mt-3">
              Zur Wahrnehmung Ihrer Rechte wenden Sie sich bitte an die oben genannte verantwortliche Stelle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-[#1E293B] mb-4" style={{ fontFamily: 'Georgia, serif' }}>6. Beschwerderecht</h2>
            <p className="text-sm leading-relaxed">
              Ihnen steht ein Beschwerderecht bei der zuständigen Datenschutzaufsichtsbehörde zu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-[#1E293B] mb-4" style={{ fontFamily: 'Georgia, serif' }}>7. Aktualität</h2>
            <p className="text-sm leading-relaxed">
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Januar 2026. Wir behalten uns vor, sie bei Bedarf anzupassen.
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#475569] text-white py-16">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="text-sm font-light mb-4">SHOP</h4>
              <ul className="space-y-2 text-xs font-light text-[#BFDBFE]">
                <li><a href="/" className="hover:text-white transition-colors">Neue Kollektion</a></li>
                <li><a href="/" className="hover:text-white transition-colors">Damen</a></li>
                <li><a href="/" className="hover:text-white transition-colors">Sale</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-light mb-4">UNTERNEHMEN</h4>
              <ul className="space-y-2 text-xs font-light text-[#BFDBFE]">
                <li><a href="/ueber-uns" className="hover:text-white transition-colors">Über uns</a></li>
                <li><a href="/labels" className="hover:text-white transition-colors">Labels</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-light mb-4">KONTAKT</h4>
              <div className="space-y-2 text-xs font-light text-[#BFDBFE]">
                <p className="font-normal text-white">Stoffwechsel Patrick Kühle GmbH</p>
                <p>Fürstenstraße 15</p>
                <p>66111 Saarbrücken</p>
                <p className="mt-3">Tel. 0681-9386388</p>
                <p>
                  <a href="mailto:mail@stoffwechselpk.de" className="hover:text-white transition-colors">
                    mail@stoffwechselpk.de
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-light mb-4">FOLLOW US</h4>
              <ul className="space-y-2 text-xs font-light text-[#BFDBFE]">
                <li>
                  <a href="#" className="hover:text-white transition-colors">Instagram</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">Facebook</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#CBD5E1] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs font-light text-[#BFDBFE]">© 2026 Stoffwechsel Patrick Kühle GmbH</p>
            <div className="flex gap-4 text-xs font-light text-[#BFDBFE]">
              <a href="/impressum" className="hover:text-white transition-colors">Impressum</a>
              <a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
