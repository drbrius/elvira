import { motion } from 'motion/react';
import { Target, ThumbsUp, Medal, Sparkles, AlertCircle, Quote } from 'lucide-react';

interface MarketAnalysisProps {
  colleagueName: string;
}

export default function SlideMarketAnalysis({ colleagueName }: MarketAnalysisProps) {
  // Let's create some funny data variables
  const marketKPIs = [
    { label: 'Attraktivitäts-Index', value: '110%', trend: 'Kontinuierlicher Höchststand' },
    { label: 'Humorbegeisterte Zielgruppe', value: '100% Core fit', trend: 'Garantiert lachbereit' },
    { label: 'Schwester-Befürwortung', value: 'AAA+', trend: 'Keine familiären Vetos' },
  ];

  return (
    <div id="slide-market-analysis" className="space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-xs font-mono tracking-widest text-rose-600 uppercase flex items-center gap-2 font-black">
          <Target className="w-4 h-4" /> SEKTOR-ANALYSE & LEAD-GENERIERUNG
        </h2>
        <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">
          Marktanalyse: Das exklusive <span className="text-rose-600 italic font-medium">„Elvira-Segment“</span>
        </h3>
      </div>

      {/* Main explanation text */}
      <p className="text-sm md:text-base text-slate-600 leading-relaxed font-sans">
        Die Marktforschung zeigt eindeutig: Das Elvira-Segment weist eine extrem hohe Synergie-Dichte mit dem angebotenen Date-Experten auf. Durch die strategische Platzierung der Lead-Vermittlerin <strong>{colleagueName}</strong> (In-House Expertin für Familien-Insights) wurde ein lückenloses Vertrauensverhältnis angebahnt.
      </p>

      {/* Market Indicators Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {marketKPIs.map((kpi, idx) => (
          <div
            key={idx}
            className="bg-slate-50 border border-slate-200 rounded-3xl p-5 flex flex-col justify-between hover:bg-slate-100/50 transition-colors"
          >
            <div>
              <p className="text-xs text-slate-500 font-mono tracking-wider uppercase font-bold">{kpi.label}</p>
              <h4 className="text-2xl md:text-3xl font-black text-slate-900 mt-1.5">{kpi.value}</h4>
            </div>
            <div className="text-xs text-rose-600 font-sans mt-3 flex items-center gap-1.5 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-rose-500 animate-pulse" /> {kpi.trend}
            </div>
          </div>
        ))}
      </div>

      {/* Colleague Testimonial / Sibling Endorsement */}
      <div className="bg-rose-50/50 rounded-3xl border border-rose-100 p-6 space-y-4">
        <div className="flex items-center gap-2 text-rose-700 font-bold italic text-sm">
          <Quote className="w-5 h-5 text-rose-550 shrink-0 transform -scale-x-100" />
          Kollaterales Empfehlungsschreiben von Senior-Matchmakerin {colleagueName}:
        </div>

        <blockquote className="text-slate-700 font-sans text-sm md:text-base italic leading-relaxed pl-4 border-l-2 border-rose-455">
          „Mein Kollege ist im Büro erstaunlich erträglich, trinkt Kaffee auf professionellem Niveau und hat mich noch nie grundlos mit ungetunten Excelsheets beworfen. Er besitzt erstaunlich viel Humor – genau das Richtige für dich, Elvira. Ich halte das Venture für risikofrei!“
        </blockquote>

        <div className="flex items-center gap-3 pt-1">
          <div className="w-10 h-10 rounded-full bg-white border border-rose-200 flex items-center justify-center text-rose-600 text-xs font-mono font-extrabold">
            {colleagueName.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="text-xs font-mono font-extrabold text-slate-900 uppercase">{colleagueName} (Die Kollegin)</div>
            <div className="text-[11px] text-slate-500">Chief Sibling Alignment Officer & Lead Matchmaker</div>
          </div>
        </div>
      </div>

      {/* Synergy Alert box */}
      <div className="bg-emerald-50 border border-emerald-100/90 rounded-3xl p-5 flex gap-3 text-xs text-slate-700">
        <ThumbsUp className="w-5 h-5 text-emerald-600 shrink-0" />
        <div>
          <strong className="text-emerald-800 block mb-0.5 uppercase tracking-wide">SYNERGIE-FAZIT:</strong>
          Eine Ablehnung dieses Angebots führt nachweislich zu vermindertem Spaßvorkommen am Wochenende. Dieses Erst-Date ist zu 100% compliance-konform und risikodiversifiziert.
        </div>
      </div>
    </div>
  );
}
