import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { getRisks } from '../data';
import { RiskItem } from '../types';
import { AlertTriangle, ShieldCheck, Flame, Scale, TrendingUp } from 'lucide-react';

interface RiskMatrixProps {
  colleagueName: string;
}

export default function SlideRiskMatrix({ colleagueName }: RiskMatrixProps) {
  const risks = getRisks(colleagueName);
  const [activeRiskId, setActiveRiskId] = React.useState<string>(risks[0].id);

  const activeRisk = risks.find((r) => r.id === activeRiskId) || risks[0];

  // Map probability & impact strings to visual colors for pills
  const getSeverityColor = (value: string) => {
    switch (value) {
      case 'MAXIMUM':
      case 'CRITICAL':
        return 'bg-rose-100 text-rose-700 border-none px-3 py-1 rounded-full text-[10px] font-extrabold';
      case 'HIGH':
        return 'bg-amber-100 text-amber-700 border-none px-3 py-1 rounded-full text-[10px] font-extrabold';
      case 'MEDIUM':
        return 'bg-yellow-100 text-yellow-800 border-none px-3 py-1 rounded-full text-[10px] font-extrabold';
      default:
        return 'bg-emerald-100 text-emerald-700 border-none px-3 py-1 rounded-full text-[10px] font-extrabold';
    }
  };

  return (
    <div id="slide-risk-matrix" className="space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-xs font-mono tracking-widest text-rose-600 uppercase flex items-center gap-2 font-black">
          <AlertTriangle className="w-4 h-4 text-rose-600" /> ENTERPRISE RISK MANAGEMENT (ERM)
        </h2>
        <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">
          Risikoanalyse dieses <span className="text-rose-600 italic font-medium">exklusiven Treffens</span>
        </h3>
      </div>

      <p className="text-sm text-slate-600 font-sans leading-relaxed">
        Jedes hochkarätige Joint-Venture birgt Risiken. Gemäß ISO-9001 (Dating-Compliance) wird nachfolgend ein umfassender Risikobericht vorgelegt. Die gute Nachricht: <strong>Alle identifizierten Risiken sind kontrollierbar!</strong>
      </p>

      {/* Main split: Visual 2x2 Heatmap on left, Selected detail card on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Heatmap Section */}
        <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-3xl p-5 flex flex-col justify-between space-y-4 hover:bg-slate-100/50 transition-colors">
          <div>
            <h4 className="text-xs font-mono font-extrabold text-slate-500 uppercase tracking-widest mb-1">
              PROFILING HEATMAP (2x2 RISIKO-MATRIX)
            </h4>
            <p className="text-[11px] text-slate-500 font-sans">
              Interaktives Koordinatensystem. Wählen Sie ein Risiko für die Vorstandsvorlage:
            </p>
          </div>

          {/* Real Comedic 2x2 Grid */}
          <div className="relative border-l-2 border-b-2 border-slate-300 w-full aspect-square max-w-[280px] mx-auto my-3 flex flex-col justify-between p-3 select-none">
            {/* Y-Axis Label */}
            <div className="absolute -left-9 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-mono tracking-widest text-slate-500 font-black uppercase origin-center whitespace-nowrap">
              Wahrscheinlichkeit ➔
            </div>
            {/* X-Axis Label */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-widest text-slate-500 font-black uppercase whitespace-nowrap">
              Auswirkung / Impact ➔
            </div>

            {/* Quadrant backgrounds for look and feel */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 opacity-10 pointer-events-none">
              <div className="bg-yellow-400 border border-slate-300"></div>
              <div className="bg-rose-400 border border-slate-300"></div>
              <div className="bg-emerald-400 border border-slate-300"></div>
              <div className="bg-yellow-400 border border-slate-300"></div>
            </div>

            {/* Risk Dot 1: Lachkrämpfe (High Impact, Max Probability) - Top Right */}
            <button
              id={`risk-dot-laughtears`}
              onClick={() => setActiveRiskId('laughtears')}
              className={`absolute top-[15%] right-[25%] p-2 rounded-full transition-all duration-300 ${
                activeRiskId === 'laughtears'
                  ? 'bg-rose-500 text-white scale-120 shadow-md shadow-rose-500/30'
                  : 'bg-white text-rose-500 border border-slate-200 hover:bg-slate-100'
              }`}
              title="Akute Lachkrämpfe"
            >
              <Flame className="w-5 h-5" />
            </button>

            {/* Risk Dot 2: Sister Intervention (Medium Probability, Medium Impact) - Center */}
            <button
              id={`risk-dot-sister_interference`}
              onClick={() => setActiveRiskId('sister_interference')}
              className={`absolute top-[45%] left-[40%] p-2 rounded-full transition-all duration-300 ${
                activeRiskId === 'sister_interference'
                  ? 'bg-amber-500 text-white scale-120 shadow-md shadow-amber-500/30'
                  : 'bg-white text-amber-600 border border-slate-200 hover:bg-slate-100'
              }`}
              title="Schwester Spionage"
            >
              <AlertTriangle className="w-5 h-5" />
            </button>

            {/* Risk Dot 3: Charm Overload (High Probability, Critical Impact) - Bottom Right */}
            <button
              id={`risk-dot-charm_overload`}
              onClick={() => setActiveRiskId('charm_overload')}
              className={`absolute bottom-[25%] right-[10%] p-2 rounded-full transition-all duration-300 ${
                activeRiskId === 'charm_overload'
                  ? 'bg-rose-600 text-white scale-120 shadow-md shadow-rose-600/30'
                  : 'bg-white text-rose-600 border border-slate-200 hover:bg-slate-100'
              }`}
              title="Charm Overload"
            >
              <TrendingUp className="w-5 h-5" />
            </button>

            {/* Risk Dot 4: Habituation (High Impact, Max Probability) - Alternate Upper Right */}
            <button
              id={`risk-dot-habituation`}
              onClick={() => setActiveRiskId('habituation')}
              className={`absolute top-[10%] right-[10%] p-2 rounded-full transition-all duration-300 ${
                activeRiskId === 'habituation'
                  ? 'bg-rose-600 text-white scale-120 shadow-lg shadow-rose-500/45 animate-pulse'
                  : 'bg-white text-rose-500 border border-slate-200 hover:bg-slate-100'
              }`}
              title="Suchtgefahr"
            >
              <Scale className="w-5 h-5" />
            </button>
          </div>

          {/* Quick list selectors */}
          <div className="flex flex-wrap gap-2 justify-center pt-2">
            {risks.map((risk) => (
              <button
                key={risk.id}
                onClick={() => setActiveRiskId(risk.id)}
                className={`px-3 py-1.5 rounded-full text-[11px] font-mono tracking-wider border uppercase transition-colors ${
                  activeRiskId === risk.id
                    ? 'bg-slate-900 text-white border-none font-bold'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {risk.id === 'laughtears' ? 'Lachmuskeln' : risk.id === 'sister_interference' ? 'Spionage' : risk.id === 'charm_overload' ? 'Charm-Schock' : 'Suchtgefahr'}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed mitigation report */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-5 flex flex-col justify-between space-y-4 shadow-sm">
          <div className="space-y-3.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className={getSeverityColor(activeRisk.probability)}>
                PROBABILITY: {activeRisk.probability}
              </span>
              <span className={getSeverityColor(activeRisk.impact)}>
                IMPACT: {activeRisk.impact}
              </span>
            </div>

            <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight">
              {activeRisk.name}
            </h4>

            <div className="space-y-1">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                Risikobeschreibung:
              </div>
              <p className="text-sm text-slate-600 font-sans leading-relaxed">
                {activeRisk.description}
              </p>
            </div>
          </div>

          {/* Mitigation strategy (The core funny corporate response) */}
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 space-y-2 mt-2">
            <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 flex items-center gap-1.5 font-extrabold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Auszug aus dem präventiv-Katalog (Mitigation):
            </div>
            <p className="text-xs text-slate-700 font-sans leading-relaxed font-semibold">
              {activeRisk.mitigation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
