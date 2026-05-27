import React from 'react';
import { Settings, Sparkles, User, Users, Download } from 'lucide-react';

interface ConfigurationPanelProps {
  candidateName: string;
  setCandidateName: (name: string) => void;
  colleagueName: string;
  setColleagueName: (name: string) => void;
}

export default function ConfigurationPanel({
  candidateName,
  setCandidateName,
  colleagueName,
  setColleagueName,
}: ConfigurationPanelProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden transition-all duration-300 shadow-sm">
      {/* Header Button */}
      <button
        id="config-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-3.5">
          <div className="bg-rose-50 p-2.5 rounded-2xl border border-rose-100 text-rose-600">
            <Settings className="w-5 h-5 animate-spin-slow" />
          </div>
          <div>
            <h3 className="font-extrabold text-sm text-slate-900 font-sans tracking-tight uppercase">
              Pitch-Personalisierung (Steuerzentrale)
            </h3>
            <p className="text-xs text-slate-500 font-sans">
              Passen Sie die Variablen für Ihren perfekten Scherz-Auftritt an
            </p>
          </div>
        </div>
        <span className="text-xs bg-slate-900 px-3 py-1.5 rounded-full text-white font-mono font-bold tracking-wider">
          {isOpen ? 'SCHLIESSEN' : 'AKTIVIEREN'}
        </span>
      </button>

      {/* Inputs block */}
      {isOpen && (
        <div className="p-5 border-t border-slate-150 space-y-4 bg-slate-50/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Candidate Name Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono font-bold tracking-wider text-slate-500 flex items-center gap-1.5 uppercase">
                <User className="w-3.5 h-3.5 text-rose-500" />
                Ihr Name (Kandidat)
              </label>
              <div className="relative">
                <input
                  id="candidate-name-input"
                  type="text"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value || 'Maximilian')}
                  className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-rose-500 transition-colors font-sans shadow-inner"
                  placeholder="Dein Name"
                />
              </div>
            </div>

            {/* Colleague Name Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono font-bold tracking-wider text-slate-500 flex items-center gap-1.5 uppercase">
                <Users className="w-3.5 h-3.5 text-rose-500" />
                Schwester / Kollegin (Spion)
              </label>
              <div className="relative">
                <input
                  id="colleague-name-input"
                  type="text"
                  value={colleagueName}
                  onChange={(e) => setColleagueName(e.target.value || 'Sara')}
                  className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-rose-500 transition-colors font-sans shadow-inner"
                  placeholder="Name deines Kollegen"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="bg-rose-50/60 p-4 rounded-2xl border border-rose-100 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <p className="text-xs text-rose-900 leading-relaxed font-sans text-left">
                <strong>Echtzeit-Anpassung:</strong> Die Präsentations-Folien, Risiko-Graphen sowie die offizielle Abschlussvereinbarung aktualisieren sich sofort. Gedruckt auf bestem, virtuell laminiertem Papier!
              </p>
            </div>

            <div className="bg-slate-900 p-4 rounded-2xl text-white flex flex-col justify-between space-y-2.5 shadow-md">
              <div className="space-y-1 text-left">
                <span className="text-[9px] font-mono uppercase bg-slate-800 text-rose-400 px-2.5 py-1 rounded-full font-black tracking-wide w-max block">
                  STANDALONE PORTFOLIO EXPORT
                </span>
                <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
                  Exportieren Sie das interaktive Date-Pitch Dossier als voll funktionsfähige, responsive HTML-Datei für den Offline-Einsatz oder Versand.
                </p>
              </div>

              <a
                href="/index_standalone.html"
                download="Date-Pitch_Dossier_Elvira.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-rose-600 text-center font-sans font-black text-xs uppercase tracking-wider rounded-xl hover:bg-rose-500 transition-all active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer text-white hover:text-white"
              >
                <Download className="w-3.5 h-3.5" /> STANDALONE HTML EXPORTIEREN 📥
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
