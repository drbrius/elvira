import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Volume2, HelpCircle, Award, Shield, UserCheck, Flame } from 'lucide-react';

// Custom component imports
import DeckHeader from './components/DeckHeader';
import SlideExecutiveSummary from './components/SlideExecutiveSummary';
import SlideMarketAnalysis from './components/SlideMarketAnalysis';
import SlideCandidateProfile from './components/SlideCandidateProfile';
import SlideRiskMatrix from './components/SlideRiskMatrix';
import SlideDatePlanner from './components/SlideDatePlanner';
import SlideRoseCeremony from './components/SlideRoseCeremony';

export default function App() {
  // Application localized customization state
  const [candidateName, setCandidateName] = React.useState('Maximilian');
  const [colleagueName, setColleagueName] = React.useState('Sara');

  // Presentation flow state
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [selectedPackageId, setSelectedPackageId] = React.useState('bachelor');
  const [addOns, setAddOns] = React.useState<string[]>([
    'nda_colleague',
    'rose_music', // standard recommendation
  ]);

  const totalSlides = 6;

  // Key listeners for comfortable slideshow traversal
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const goToNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goToPrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Helper to render active slide with variables passed down
  const renderSlideContent = () => {
    switch (currentSlide) {
      case 0:
        return (
          <SlideExecutiveSummary
            candidateName={candidateName}
            colleagueName={colleagueName}
          />
        );
      case 1:
        return <SlideMarketAnalysis colleagueName={colleagueName} />;
      case 2:
        return <SlideCandidateProfile candidateName={candidateName} />;
      case 3:
        return <SlideRiskMatrix colleagueName={colleagueName} />;
      case 4:
        return (
          <SlideDatePlanner
            colleagueName={colleagueName}
            selectedPackageId={selectedPackageId}
            setSelectedPackageId={setSelectedPackageId}
            addOns={addOns}
            setAddOns={setAddOns}
          />
        );
      case 5:
        return (
          <SlideRoseCeremony
            candidateName={candidateName}
            colleagueName={colleagueName}
            selectedPackageId={selectedPackageId}
            addOns={addOns}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-rose-100 selection:text-rose-700">
      {/* Subtle fine light mesh lines representing structured layout grid */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-25">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-rose-100 blur-[130px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-rose-50 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-6 md:py-10 space-y-6 flex flex-col justify-between min-h-screen">
        {/* Top bar: Slide controls and header */}
        <div className="space-y-4">
          <DeckHeader
            currentSlide={currentSlide}
            totalSlides={totalSlides}
            colleagueName={colleagueName}
          />
        </div>

        {/* Master Slide Card Display */}
        <main className="grow flex items-center justify-center py-6">
          <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-8 lg:p-10 shadow-sm flex flex-col justify-between relative overflow-hidden min-h-[480px]">
            {/* Visual background page grid representing structured business presentations */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

            {/* Render slide with simple reactive transition */}
            <div className="relative z-10 w-full animate-fade-in">
              {renderSlideContent()}
            </div>
          </div>
        </main>

        {/* Footer Navigation Bar */}
        <footer className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-5">
          {/* Quick info stamps */}
          <div className="flex items-center gap-3.5 text-xs text-slate-500 font-mono">
            <span className="flex items-center gap-1">
              <UserCheck className="w-3.5 h-3.5 text-rose-600" /> {candidateName}
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-rose-600" /> 100% Security
            </span>
          </div>

          {/* Core presentation navigator buttons */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              id="prev-slide-btn"
              onClick={goToPrev}
              disabled={currentSlide === 0}
              className={`px-4 py-2.5 rounded-2xl border font-mono text-xs tracking-wider flex items-center gap-1.5 transition-all ${
                currentSlide === 0
                  ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50 cursor-pointer'
              }`}
            >
              <ChevronLeft className="w-4 h-4" /> ZURÜCK
            </button>

            {/* Bullet slide jumps */}
            <div className="hidden sm:flex items-center gap-1.5 px-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  id={`jump-slide-${index}`}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-rose-600 w-6'
                      : 'bg-slate-200 hover:bg-slate-300'
                  }`}
                  title={`Gehe zu Folie ${index + 1}`}
                />
              ))}
            </div>

            <button
              id="next-slide-btn"
              onClick={goToNext}
              disabled={currentSlide === totalSlides - 1}
              className={`px-5 py-2.5 font-mono text-xs font-bold tracking-wider rounded-2xl flex items-center gap-1.5 transition-all hover:brightness-105 active:scale-95 shadow-sm uppercase ${
                currentSlide === totalSlides - 1
                  ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed pointer-events-none'
                  : currentSlide === totalSlides - 2
                  ? 'bg-rose-600 text-white cursor-pointer hover:bg-rose-700'
                  : 'bg-slate-900 text-white cursor-pointer hover:bg-slate-800'
              }`}
            >
              {currentSlide === totalSlides - 2 ? 'ZUR ENTSCHEIDUNG 🌹' : 'WEITER'} <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </footer>
      </div>

      {/* Styled backdrop patterns */}
      <style>{`
        .bg-grid-pattern {
          background-size: 24px 24px;
          background-image: linear-gradient(to right, rgba(148, 163, 184, 0.08) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(148, 163, 184, 0.08) 1px, transparent 1px);
        }
      `}</style>
    </div>
  );
}
