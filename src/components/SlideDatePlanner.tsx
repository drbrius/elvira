import React from 'react';
import { motion } from 'motion/react';
import { datePackages } from '../data';
import { DatePackage } from '../types';
import { Percent, CheckSquare, Square, Gift, CheckCircle, Sparkles, Sliders } from 'lucide-react';

interface DatePlannerProps {
  colleagueName: string;
  selectedPackageId: string;
  setSelectedPackageId: (id: string) => void;
  addOns: string[];
  setAddOns: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function SlideDatePlanner({
  colleagueName,
  selectedPackageId,
  setSelectedPackageId,
  addOns,
  setAddOns,
}: DatePlannerProps) {
  const currentPackage = datePackages.find((p) => p.id === selectedPackageId) || datePackages[0];

  const possibleAddOns = [
    {
      id: 'laminated_agenda',
      label: 'Laminierter Ablaufplan (PDF vorab)',
      bonus: '+15% Professionalität',
      desc: 'Wird 24 Stunden vor dem Meeting zugestellt, inkl. Kleiderordnung-Empfehlung.',
    },
    {
      id: 'rose_music',
      label: 'Bachelor-Musik-Loop bei Rosenübergabe',
      bonus: '+40% Romantik-Fieber',
      desc: 'Dramatische Streicher-Musik ertönt per Smartphone-Lautsprecher während der Vergabe.',
    },
    {
      id: 'nda_colleague',
      label: 'Büro-NDA & Stillschweigen für ' + colleagueName,
      bonus: '+100% Ruhe vor WhatsApp-Intervention',
      desc: `Kollegin ${colleagueName} wird vertraglich verpflichtet, keine Spione einzuschleusen.`,
    },
    {
      id: 'chocolate_goodie',
      label: 'Premium-Kakaobohnen-Spezialität (Begrüßung)',
      bonus: '+25% Sympathie-Boost',
      desc: 'Kleine, kalorienoptimierte Aufmerksamkeit zur Senkung des Stresspegels.',
    },
  ];

  const toggleAddOn = (id: string) => {
    if (addOns.includes(id)) {
      setAddOns(addOns.filter((item) => item !== id));
    } else {
      setAddOns([...addOns, id]);
    }
  };

  // Calculate dynamic ROI index based on selections!
  const calculateROI = () => {
    let base = selectedPackageId === 'bachelor' ? 95 : selectedPackageId === 'business' ? 88 : 80;
    // Add bonus based on items
    if (addOns.includes('laminated_agenda')) base += 5;
    if (addOns.includes('rose_music')) base += 10;
    if (addOns.includes('nda_colleague')) base += 12;
    if (addOns.includes('chocolate_goodie')) base += 8;
    return Math.min(base, 100);
  };

  return (
    <div id="slide-date-planner" className="space-y-6">
      {/* Upper header */}
      <div className="space-y-1">
        <h2 className="text-xs font-mono tracking-widest text-rose-600 uppercase flex items-center gap-2 font-black">
          <Sliders className="w-4 h-4 text-rose-600" /> PRODUKT-DETAIL & OPTIONEN
        </h2>
        <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">
          Wählen Sie Ihr <span className="text-rose-600 italic font-medium">Date-Paket</span>
        </h3>
      </div>

      <p className="text-sm text-slate-600 font-sans leading-relaxed">
        Zur Risikominimierung ist das Date modular aufgebaut. Wählen Sie ein vordefiniertes Basis-Szenario und fügen Sie optionale Service-Level-Agreements (SLAs) hinzu:
      </p>

      {/* Grid of the 3 main packages */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {datePackages.map((pkg) => {
          const isSelected = selectedPackageId === pkg.id;
          return (
            <div
              key={pkg.id}
              onClick={() => setSelectedPackageId(pkg.id)}
              className={`p-5 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-3 ${
                isSelected
                  ? 'bg-rose-50/70 border-rose-400 shadow-md'
                  : 'bg-slate-50 border-slate-200 hover:border-slate-350 hover:bg-slate-100/50'
              }`}
            >
              <div className="space-y-1.5 animate-fade-in">
                <div className="flex justify-between items-start">
                  <span className={`px-2.5 py-1 rounded-full text-[9px] font-mono uppercase font-black ${
                    isSelected ? 'bg-rose-600 text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {pkg.id === 'bachelor' ? 'TOP ROMANCE' : pkg.id === 'business' ? 'EXECUTIVE' : 'STARTUP'}
                  </span>
                </div>
                <h4 className="font-extrabold text-slate-900 text-base leading-tight uppercase tracking-tight">
                  {pkg.title}
                </h4>
                <p className="text-xs text-rose-600 font-mono font-bold italic">
                  {pkg.tagline}
                </p>
              </div>

              <div className="pt-2.5 border-t border-slate-200 text-[11px] text-slate-500 font-sans space-y-1">
                <div>Atmosphäre: {pkg.atmosphere.slice(0, 35)}...</div>
                <div className="text-slate-800 font-extrabold font-mono">{pkg.duration}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Package Details & Add-Ons Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
        {/* Core Description Left */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-5 space-y-4 shadow-sm">
          <div>
            <span className="text-xs font-mono font-extrabold text-slate-400 block mb-1">
              PRODUKT-EVALUATION
            </span>
            <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight">
              {currentPackage.title} Inhaltsübersicht
            </h4>
          </div>

          <ul className="space-y-2.5">
            {currentPackage.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-600 font-sans">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-2 gap-4 pt-3.5 border-t border-slate-150 text-xs font-mono">
            <div>
              <span className="text-slate-400 block uppercase tracking-wider text-[9px] font-bold">Kostenstelle</span>
              <span className="text-emerald-700 font-extrabold">{currentPackage.costEstimate}</span>
            </div>
            <div>
              <span className="text-slate-400 block uppercase tracking-wider text-[9px] font-bold">Erfolgsquote (Prognose)</span>
              <span className="text-rose-600 font-extrabold">{currentPackage.roiRating}</span>
            </div>
          </div>
        </div>

        {/* Add-Ons Options Right */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-5 flex flex-col justify-between space-y-4 shadow-sm">
          {/* Header config */}
          <div className="space-y-1">
            <h4 className="text-xs font-mono font-extrabold text-slate-500 uppercase tracking-widest">
              ZUSATZLEISTUNGEN (OPTIONAL)
            </h4>
            <p className="text-[11px] text-slate-500 font-sans">
              Personalisieren Sie die Service-Optionen zur Steigerung des Erlebnisses:
            </p>
          </div>

          {/* List checkable items */}
          <div className="space-y-2.5">
            {possibleAddOns.map((addon) => {
              const isChecked = addOns.includes(addon.id);
              return (
                <div
                  key={addon.id}
                  onClick={() => toggleAddOn(addon.id)}
                  className={`p-3 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start gap-3 select-none ${
                    isChecked
                      ? 'bg-rose-50/50 border-rose-300 text-rose-900'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <div className="mt-0.5 shrink-0">
                    {isChecked ? (
                      <CheckSquare className="w-4 h-4 text-rose-600" />
                    ) : (
                      <Square className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-xs font-extrabold font-sans leading-tight">
                      {addon.label}
                    </div>
                    <div className="flex gap-2 items-center text-[10px] font-mono leading-none">
                      <span className="text-emerald-600 font-bold">{addon.bonus}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Core Gauge Score widget (Dark High Contrast Bento block) */}
          <div className="bg-slate-900 text-white p-4 rounded-3xl flex items-center justify-between shadow-md">
            <div className="space-y-0.5">
              <span className="text-[10px] text-slate-400 font-mono uppercase font-bold tracking-wide">Erwartungshaltung (ROI)</span>
              <p className="text-xs text-slate-300 font-sans leading-tight">Prognostizierter Glücks-Koefficient</p>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-800 px-3 py-1.5 rounded-2xl">
              <span className="text-2xl font-black font-sans text-rose-400">
                {calculateROI()}%
              </span>
              <Percent className="w-4 h-4 text-rose-400 shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
