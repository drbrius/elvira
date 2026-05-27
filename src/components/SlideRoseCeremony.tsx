import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { datePackages } from '../data';
import { Sparkles, Heart, FileCheck2, Printer, CheckCircle, Flame, ShieldAlert, Award } from 'lucide-react';

interface RoseCeremonyProps {
  candidateName: string;
  colleagueName: string;
  selectedPackageId: string;
  addOns: string[];
}

export default function SlideRoseCeremony({
  candidateName,
  colleagueName,
  selectedPackageId,
  addOns,
}: RoseCeremonyProps) {
  const [roseAccepted, setRoseAccepted] = React.useState(false);
  const [typedSignature, setTypedSignature] = React.useState('');
  const [showCertificate, setShowCertificate] = React.useState(false);
  const selectedPackage = datePackages.find((p) => p.id === selectedPackageId) || datePackages[0];

  // Particle list for animation
  const [particles, setParticles] = React.useState<{ id: number; left: number; delay: number; scale: number }[]>([]);

  const handleRoseInbound = () => {
    setRoseAccepted(true);
    // Generate lovely rose particles
    const generated = Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      scale: Math.random() * 0.8 + 0.4,
    }));
    setParticles(generated);

    // Timeout to show formal contract after the emotional drama of the rose
    setTimeout(() => {
      setShowCertificate(true);
    }, 1200);
  };

  return (
    <div id="slide-rose-ceremony" className="space-y-6 flex flex-col items-center justify-center text-center">
      <AnimatePresence mode="wait">
        {!roseAccepted ? (
          <motion.div
            key="ask-rose"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="space-y-6 max-w-xl"
          >
            {/* Upper Badge */}
            <div className="flex justify-center">
              <span className="bg-rose-100 text-rose-700 text-xs font-mono tracking-widest px-3.5 py-1.5 rounded-full border-none uppercase font-extrabold">
                FINALE DER SENDEZEIT-ENTSCHEIDUNG
              </span>
            </div>

            {/* Giant iconic question */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono tracking-[0.25em] text-rose-600 uppercase font-black">
                DIE ABSCHLIESSENDE ENTSCHEIDUNGS-VORLAGE
              </h3>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
                „Elvira, nimmst du diese Rose an?“
              </h2>
              <p className="text-sm md:text-base text-slate-600 font-sans leading-relaxed max-w-lg mx-auto">
                Dies ist kein trivialer Beziehungs-Entscheid. Es ist der Zusammenschluss zweier humoristischer Großkonzerne. Werden Sie Teilhaber dieses traumhaften Joint-Ventures?
              </p>
            </div>

            {/* The beautiful animated glowing rose box */}
            <div className="relative inline-block my-4">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-slate-50 rounded-full border border-slate-200 flex items-center justify-center animate-rose-glow text-rose-500 mx-auto transition-transform hover:scale-110 duration-300 shadow-md">
                {/* Visual flower rose using unicode icon and nice design */}
                <div className="text-5xl md:text-6xl select-none leading-none">🌹</div>
              </div>
              <div className="absolute top-0 right-0 bg-rose-100 p-1.5 rounded-full text-rose-700 border border-rose-200 animate-bounce">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>

            {/* Accept Button / Rose Ceremony action */}
            <div className="pt-2">
              <button
                id="accept-rose-button"
                onClick={handleRoseInbound}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-rose-600 to-rose-550 text-white font-sans font-black tracking-wide text-base md:text-lg rounded-2xl shadow-md hover:from-rose-500 hover:to-rose-600 transition-all duration-300 transform active:scale-95 cursor-pointer"
              >
                JA, ICH NEHME DIE ROSE AN! 👍
              </button>
              <p className="text-xs text-slate-500 font-mono mt-3">
                Zertifizierter Klick. Durch die Annahme wird {colleagueName} zur Zeugen-Kollegin ernannt.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="accepted-rose"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-2xl relative"
          >
            {/* Floating red rose particles animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden h-[400px]">
              {particles.map((p) => (
                <div
                  key={p.id}
                  className="absolute text-xl animate-fade-out"
                  style={{
                    left: `${p.left}%`,
                    top: '-50px',
                    animation: `fall 4s linear infinite`,
                    animationDelay: `${p.delay}s`,
                    transform: `scale(${p.scale})`,
                    opacity: 0.8,
                  }}
                >
                  🌹
                </div>
              ))}
            </div>

            {/* Show contractual details or final success screen */}
            {showCertificate && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white border border-slate-200 rounded-3xl p-5 md:p-8 space-y-6 text-left shadow-sm relative text-slate-800"
              >
                {/* Stamp overlay */}
                <div className="absolute right-4 top-4 md:right-8 md:top-8 rotate-12 border-4 border-emerald-600 text-emerald-600 font-mono px-3.5 py-1 font-black text-xs uppercase rounded-full tracking-wider bg-emerald-50 select-none">
                  ✔ COMPLIANCE FREIGEGEBEN
                </div>

                {/* Cover label */}
                <div className="flex items-center gap-2">
                  <span className="bg-rose-600 text-white px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest">
                    LETZTES STATEMENT
                  </span>
                  <span className="text-slate-500 font-mono text-xs font-bold">Vertragsnummer: LOI-ELVIRA-01</span>
                </div>

                {/* Subtitle */}
                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                    Letter Of Intent (Absichtserklärung)
                  </h3>
                  <p className="text-slate-500 font-sans text-xs md:text-sm">
                    Vereinbart am heutigen Tag für das anstehende Rekrutierungsverfahren.
                  </p>
                </div>

                {/* Paragraph clauses */}
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3.5 text-xs text-slate-700 font-semibold leading-relaxed">
                  <p>
                    <strong>§ 1 Geltungsbereich:</strong> Elvira akzeptiert hiermit die Rose des Bewerbers <strong>{candidateName}</strong> und signalisiert die Absicht, ein Kennenlern-Meeting im Format: <em>{selectedPackage.title}</em> zu vereinbaren.
                  </p>
                  <p>
                    <strong>§ 2 Begleitende Services (SLAs):</strong> Folgende exklusive Upgrades wurden dem Portfolio beigefügt:{' '}
                    <span className="text-rose-600 font-extrabold font-mono">
                      {addOns.length > 0 ? addOns.length + ' Upgrade(s)' : 'Kernpaket ohne Ballast'}
                    </span>.
                  </p>
                  <p>
                    <strong>§ 3 Ausschluss von Betriebsspionage:</strong> Die anbahnende Arbeitskollegin <strong>{colleagueName}</strong> wird zu absolutem Stillschweigen verdammt. Jeder Verzugbericht am Kaffeeautomaten wird mit einer Kuchen-Strafe belegt.
                  </p>
                  <p>
                    <strong>§ 4 Gültigkeitsdauer:</strong> Diese Urkunde gilt bis zum Einlauf der ersten Vorspeise und kann jederzeit mit Lachkrämpfen widerrufen werden.
                  </p>
                </div>

                {/* Dynamic Signatures block */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                  <div className="space-y-2">
                    <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block font-bold">Unterschrift Bewerber</span>
                    <div className="h-10 border-b border-rose-300 font-serif text-rose-600 text-center italic text-lg select-none flex items-end justify-center pb-1 font-bold">
                      {candidateName}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block font-bold">Ihre digitale Signatur</span>
                    <input
                      id="signature-input-field"
                      type="text"
                      value={typedSignature}
                      onChange={(e) => setTypedSignature(e.target.value)}
                      placeholder="Hier Namen eingeben..."
                      className="w-full bg-slate-50 border-b border-rose-300 focus:border-rose-500 outline-none text-slate-900 text-sm font-serif italic text-center py-2 mt-1 placeholder:text-slate-400 focus:ring-0 rounded-t-xl"
                    />
                  </div>
                </div>

                {/* Thank-you block and action share button */}
                <div className="space-y-3 pt-2 text-center">
                  <div className="flex justify-center items-center gap-2 text-rose-700 font-bold italic text-sm">
                    <Heart className="w-4 h-4 text-rose-600 fill-current animate-pulse shrink-0" />
                    Glückwunsch! Das Date wurde erfolgreich projektiert.
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      id="screenshot-btn"
                      onClick={() => window.print()}
                      className="px-4 py-2 bg-slate-900 text-white text-xs font-mono rounded-2xl hover:bg-slate-800 transition-all font-bold flex items-center gap-2"
                    >
                      <Printer className="w-3.5 h-3.5" /> DOKUMENT DRUCKEN / SCREENSHOT
                    </button>
                    <a
                      href={`mailto:${colleagueName.toLowerCase()}@firma.com?subject=Ich%20habe%20die%20Rose%20angenommen!&body=Hallo%20${colleagueName},%20ich%20habe%20gerade%20die%20Rose%20von%20${candidateName}%20angenommen.%20Bitte%20plane%2520keine%2520Spionage-Missionen.%2520Liebe%2520Gr%25C3%25BC%25C3%259Fe!`}
                      className="px-4 py-2 bg-rose-100 text-rose-700 text-xs font-mono rounded-2xl hover:bg-rose-200 transition-all font-bold border border-rose-200 flex items-center gap-2"
                    >
                      <FileCheck2 className="w-3.5 h-3.5" /> KOLLEGIN {colleagueName.toUpperCase()} INFORMIEREN
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Embedded CSS for custom fall animations */}
      <style>{`
        @keyframes fall {
          0% {
            top: -20px;
            transform: translateX(0) rotate(0deg);
          }
          50% {
            transform: translateX(50px) rotate(180deg);
          }
          100% {
            top: 400px;
            transform: translateX(-50px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
