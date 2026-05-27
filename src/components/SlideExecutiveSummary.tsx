import { motion } from 'motion/react';
import { Briefcase, Calendar, ShieldCheck, Heart, Award, Sparkles } from 'lucide-react';

interface ExecutiveSummaryProps {
  candidateName: string;
  colleagueName: string;
}

export default function SlideExecutiveSummary({
  candidateName,
  colleagueName,
}: ExecutiveSummaryProps) {
  return (
    <div id="slide-executive-summary" className="space-y-6 md:space-y-8">
      {/* Upper Badge & Classification */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <span className="bg-rose-100 text-rose-700 text-xs font-mono tracking-widest px-3.5 py-1.5 rounded-full border-none uppercase font-extrabold">
          STRENG GEHEIM // PROJEKT "ROSE"
        </span>
        <span className="text-rose-600 text-xs font-mono flex items-center gap-1.5 font-extrabold uppercase">
          <Award className="w-4 h-4" /> SUCCESS RATE: 100%
        </span>
      </div>

      {/* Main Title Block */}
      <div className="space-y-3">
        <h2 className="text-sm font-mono tracking-[0.2em] text-rose-500 uppercase flex items-center gap-2 font-black">
          <Sparkles className="w-4 h-4" /> EXKLUSIVES INVESTMENT-PORTFOLIO
        </h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight uppercase">
          Das ultimative <span className="text-rose-600 italic font-medium">Bewerbungsdossier</span> für Elvira
        </h1>
        <p className="text-base md:text-lg text-slate-600 font-sans max-w-2xl leading-relaxed">
          Strukturierte Akquisitions-Präsentation zur Etablierung einer strategischen Partnerschaft (Erst-Date) – initiiert unter direkter Fürsprache der Senior-Inhouse-Vermittlerin <span className="text-rose-600 font-bold">{colleagueName}</span>.
        </p>
      </div>

      {/* Modern Meta-Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
        {/* Deal Parameters */}
        <div className="bg-slate-50 p-5 rounded-3xl border border-slate-200 space-y-3 hover:bg-slate-100/50 transition-colors">
          <div className="text-slate-500 font-mono text-xs uppercase tracking-wider flex items-center gap-2 font-bold">
            <Briefcase className="w-4 h-4 text-rose-500" /> Transaktions-Typ
          </div>
          <div className="space-y-1">
            <h4 className="text-lg font-black text-slate-900 leading-none">Exklusiv-Dossier</h4>
            <p className="text-xs text-slate-500 leading-normal">
              Kein Massenmarkt. Limitiertes Private-Placement-Date mit maßgeschneidertem Service.
            </p>
          </div>
        </div>

        {/* Candidate Rating */}
        <div className="bg-slate-50 p-5 rounded-3xl border border-slate-200 space-y-3 hover:bg-slate-100/50 transition-colors">
          <div className="text-slate-500 font-mono text-xs uppercase tracking-wider flex items-center gap-2 font-bold">
            <Heart className="w-4 h-4 text-rose-500" /> Kandidat-Qualität
          </div>
          <div className="space-y-1">
            <h4 className="text-lg font-black text-slate-900 leading-none">AAA+ Prime Rating</h4>
            <p className="text-xs text-slate-500 leading-normal">
              Zertifiziert durch Humor, Charme, Kochfertigkeiten und 100% Bügelfreiheit.
            </p>
          </div>
        </div>

        {/* Strategic Alignment */}
        <div className="bg-slate-50 p-5 rounded-3xl border border-slate-200 space-y-3 sm:col-span-2 lg:col-span-1 hover:bg-slate-100/50 transition-colors">
          <div className="text-slate-500 font-mono text-xs uppercase tracking-wider flex items-center gap-2 font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-600" /> Compliance-Garantie
          </div>
          <div className="space-y-1">
            <h4 className="text-lg font-black text-slate-900 leading-none">Schwester-Zulassung</h4>
            <p className="text-xs text-slate-500 leading-normal">
              Freigegeben von Arbeitskollegin <span className="text-rose-600 font-bold">{colleagueName}</span> für maximalen Familienfrieden.
            </p>
          </div>
        </div>
      </div>

      {/* The Agenda Checklist as an official prospectus layout */}
      <div className="bg-rose-50/55 border border-rose-100 rounded-3xl p-5 md:p-6 mt-4 space-y-3">
        <h3 className="text-xs font-mono text-rose-700 tracking-wider uppercase font-extrabold flex items-center gap-2">
          Dossier-Agenda (Inhaltsverzeichnis für den Entscheidungsausschuss):
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 font-medium">
          <div className="flex items-center gap-2.5">
            <span className="text-rose-600 font-mono text-xs font-black">[01]</span>
            <span className="font-sans">Zielgruppen-Fit (Das Elvira-Segment)</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-rose-600 font-mono text-xs font-black">[02]</span>
            <span className="font-sans">Kandidaten-Profil & USP ({candidateName})</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-rose-600 font-mono text-xs font-black">[03]</span>
            <span className="font-sans">Unternehmens-Risikoanalyse</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-rose-600 font-mono text-xs font-black">[04]</span>
            <span className="font-sans">Produktkonfigurator (Date-Pakete)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
