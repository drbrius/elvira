import React from 'react';
import { motion } from 'motion/react';
import { KPIProfile } from '../types';
import { Sparkles, Trophy, Award, Heart, CheckCircle2 } from 'lucide-react';

interface CandidateProfileProps {
  candidateName: string;
}

export default function SlideCandidateProfile({ candidateName }: CandidateProfileProps) {
  // We can track the active clicked KPI to show some hilarious description sheets!
  const [selectedKPI, setSelectedKPI] = React.useState<number>(0);

  const kpis: KPIProfile[] = [
    {
      label: 'Charme-Vorkommen',
      value: 120,
      max: 100,
      unit: '%',
      description: 'Zuhören ohne zu unterbrechen, Türen aufhalten und im Regelfall die richtige Jackengröße schätzen. Inklusive dezentem Parfüm-Dosierungs-Zertifikat.',
      iconName: 'heart',
    },
    {
      label: 'Humor & Schlagfertigkeit',
      value: 100,
      max: 100,
      unit: '%',
      description: 'Von intelligentem Wortwitz bis hin zu trockenem Humor – die Balance wird in Echtzeit an Elviras Lächeln angepasst. Keine unlustigen Altherrenwitze im Portfolio!',
      iconName: 'sparkles',
    },
    {
      label: 'Erfolgsquote (Erst-Dates)',
      value: 100,
      max: 100,
      unit: '%',
      description: '100% lückenlose Erfolgsbilanz im First-Stage Bewerbungsverfahren. Nie gab es eine Beschwerde beim Schiedsgericht für Dating-Standards.',
      iconName: 'trophy',
    },
    {
      label: 'Bügelfreiheit & Outfit-Schnitt',
      value: 95,
      max: 100,
      unit: '%',
      description: 'Der Kandidat erscheint in frisch gebügelter Premium-Kleidung. Keine Jogginghosen-Gefahr im First-Contact-Meeting.',
      iconName: 'award',
    },
  ];

  return (
    <div id="slide-candidate-profile" className="space-y-6">
      {/* Upper header block */}
      <div className="space-y-1">
        <h2 className="text-xs font-mono tracking-widest text-rose-600 uppercase flex items-center gap-2 font-black">
          <Trophy className="w-4 h-4 text-rose-600" /> KANDIDAT-FACTSHEET & CORE COMPETE
        </h2>
        <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">
          Das Profil von <span className="text-rose-600 italic font-medium">{candidateName}</span> (The Perfect Match)
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Metric bars column */}
        <div className="lg:col-span-7 space-y-4">
          <p className="text-sm text-slate-600 font-sans leading-relaxed">
            Der Kandidat wurde umfassenden Belastungstests im Büro- und Freizeitbereich unterzogen. Bestätigte Metriken übertreffen die marktüblichen Benchmarks nachhaltig:
          </p>

          <div className="space-y-3">
            {kpis.map((kpi, index) => {
              const percentage = Math.min((kpi.value / kpi.max) * 100, 100);
              const isSelected = selectedKPI === index;

              return (
                <div
                  key={index}
                  onClick={() => setSelectedKPI(index)}
                  className={`p-4 rounded-3xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-rose-50/70 border-rose-400 shadow-sm'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-350 hover:bg-slate-100/50'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-sans font-extrabold text-slate-900">
                      {kpi.label}
                    </span>
                    <span className="font-mono text-sm font-bold text-rose-600">
                      {kpi.value}
                      {kpi.unit}
                    </span>
                  </div>

                  {/* Meter line */}
                  <div className="w-full h-3 bg-slate-200/80 rounded-full overflow-hidden p-[2px] border border-slate-200">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-rose-500 to-rose-600"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Sheet column (Using dark contrast Bento card for beautiful hierarchy) */}
        <div className="lg:col-span-5 bg-slate-900 rounded-3xl p-6 space-y-5 self-stretch flex flex-col justify-between text-white shadow-lg min-h-[340px]">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="bg-slate-800 text-rose-400 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase">
                PROFIL-DETAILS
              </span>
              <span className="text-slate-400 font-mono text-xs">USP #{selectedKPI + 1}</span>
            </div>

            <h4 className="text-xl font-black uppercase text-white tracking-tight">
              {kpis[selectedKPI].label} im Audit
            </h4>
            <p className="text-sm text-slate-300 font-sans leading-relaxed">
              {kpis[selectedKPI].description}
            </p>
          </div>

          {/* Interactive Certificate Badge of Integrity */}
          <div className="border-t border-slate-800 pt-4 flex items-center gap-3.5 mt-auto">
            <div className="bg-rose-500/10 p-3 rounded-full border border-rose-500/20 text-rose-400 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-white uppercase flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-rose-500" /> TÜV-Humor zertifiziert
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                Geprüftes Charisma im realen Testeinsatz. 100% frei von unangenehmem Schweigen oder schlechtem Musikgeschmack.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
