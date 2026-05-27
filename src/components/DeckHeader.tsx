import { Award, ShieldAlert, Sparkles, BookOpen } from 'lucide-react';

interface DeckHeaderProps {
  currentSlide: number;
  totalSlides: number;
  colleagueName: string;
}

export default function DeckHeader({ currentSlide, totalSlides, colleagueName }: DeckHeaderProps) {
  const percentage = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div id="deck-header" className="bg-white border border-slate-200 rounded-3xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
      {/* Brand Title */}
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <div className="bg-rose-500 p-3 rounded-2xl text-white shrink-0 shadow-sm">
          <BookOpen className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-sans font-black text-slate-900 text-lg leading-none tracking-tight uppercase">
              Investing In Roses
            </h1>
            <span className="bg-rose-100 text-rose-700 font-mono text-[9px] px-2.5 py-1 rounded-full uppercase font-extrabold tracking-widest leading-none">
              A+ APPROVED
            </span>
          </div>
          <p className="text-xs text-slate-500 font-sans mt-1">
            Exklusives Dossier für die Kandidat-Kundin <span className="text-rose-600 font-bold italic">Elvira</span>
          </p>
        </div>
      </div>

      {/* Slide Index Progress bar */}
      <div className="flex items-center gap-4 w-full sm:w-auto justify-end">
        <div className="space-y-1.5 w-full sm:w-40">
          <div className="flex justify-between text-[10px] font-mono tracking-wider text-slate-500 uppercase font-bold">
            <span>Folie {currentSlide + 1} von {totalSlides}</span>
            <span className="text-rose-600 font-bold">{Math.round(percentage)}%</span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden p-[1px] border border-slate-200">
            <div
              className="h-full bg-rose-500 rounded-full transition-all duration-300"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        {/* Audit Disclaimer stamp */}
        <div className="hidden md:flex items-center gap-1.5 bg-rose-50 px-3 py-1.5 rounded-xl border border-rose-100">
          <Sparkles className="w-3.5 h-3.5 text-rose-600 animate-pulse" />
          <span className="text-[10px] text-rose-800 font-mono tracking-wider uppercase font-bold">
            Sperrfrist aktiv
          </span>
        </div>
      </div>
    </div>
  );
}
