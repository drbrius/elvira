import { RiskItem, DatePackage } from './types';

export const DEFAULT_CANDIDATE_NAME = 'Maximilian';
export const DEFAULT_COLLEAGUE_NAME = 'Sara';

export const getRisks = (colleagueName: string): RiskItem[] => [
  {
    id: 'laughtears',
    name: 'Akute Lachkrämpfe & Kieferschmerzen',
    probability: 'MAXIMUM',
    impact: 'HIGH',
    description: 'Elviras Lachmuskulatur wird durch den permanenten Beschuss mit humoristischen Pointen, entwaffnender Schlagfertigkeit und trockenem Humor massiv überbeansprucht.',
    mitigation: 'Präventives Einlegen von Schweigeminuten (30–60 Sek.) sowie bewusste Fachdiskussionen über trockene Themen (z. B. die korrekte steuerliche Abschreibung von Bürostühlen), um die Muskulatur zu entspannen.'
  },
  {
    id: 'sister_interference',
    name: `Die '${colleagueName}-Intervention' (Spionage-Gefahr)`,
    probability: 'MEDIUM',
    impact: 'MEDIUM',
    description: `Deine Arbeitskollegin ${colleagueName} (Elviras Schwester) fordert stündliche Live-Updates per WhatsApp, tarnt sich mit Sonnenbrille und Zeitung am Nachbartisch oder manipuliert das Date im Vorfeld.`,
    mitigation: `Unterzeichnung eines Non-Disclosure-Agreements (NDA). Bestechung von ${colleagueName} am Folgetag im Büro durch Kaffee und Premium-Gebäck zur Wahrung des Geschäftsgeheimnisses.`
  },
  {
    id: 'charm_overload',
    name: 'Charm-Kollaps / Schwindelgefühl',
    probability: 'HIGH',
    impact: 'CRITICAL',
    description: 'Die plötzliche Konfrontation mit einem echten Gentleman (Zuhören ohne zu unterbrechen, Jacke anbieten, Türen aufhalten) führt zu temporärem Realitätsverlust auf Elviras Seite.',
    mitigation: 'Der Bewerber baut gezielt kleine Makel ein (z. B. ungeschicktes Stolpern über eine Ameise, unvollständiges Wissen über die Abseitsregel oder Tragen von Rentner-Socken) zur Erdung der Perfektion.'
  },
  {
    id: 'habituation',
    name: 'Suchtgefahr (Post-Date-Melancholie)',
    probability: 'MAXIMUM',
    impact: 'HIGH',
    description: 'Bereits 5 Minuten nach Verabschiedung setzt bei Elvira das Verlangen nach einem Folgetermin ein. Der Kalender des Bewerbers ist jedoch durch Büro-Meetings und Welteroberungspläne stark limitiert.',
    mitigation: 'Einrichten einer exklusiven VIP-Buchungshotline für Elvira. Sofortiger Abschluss eines Vorvertrags (Terminsicherung für ein Folge-Kaffee-Audit) noch am selben Abend.'
  }
];

export const datePackages: DatePackage[] = [
  {
    id: 'business',
    title: 'Das "Business-Class-Date" (Executive Lounge Edition)',
    tagline: 'Maximale Struktur, dokumentierter ROI & höchste Professionalität',
    atmosphere: 'Hell, modern, Premium-Café oder stylisches Lunch-Bistro mit laminiertem Ablaufplan.',
    duration: '90 Minuten (inkl. 15 Min. Q&A und Feedback-Runde)',
    highlights: [
      'Handschlag-Begrüßung inklusive Übergabe einer edlen Visitenkarte',
      'Kurze Keynote-Präsentation auf dem Tablet ("Warum ich deine Investments wert bin")',
      'Umfassende Risikoanalyse live besprochen',
      'Gemeinsame Roadmap-Planung für das verbleibende Quartal'
    ],
    roiRating: '98.7% (Durch Beziehungsanalysten zertifiziert)',
    costEstimate: 'Budget gedeckt durch die Bewerber-Holding (100% Spesen)'
  },
  {
    id: 'bachelor',
    title: 'Die "Nacht der Rosen" (Bachelor Premium Edition)',
    tagline: 'Das absolute VIP-Paket mit maximalem Romantik-Index',
    atmosphere: 'Gedimmtes Licht, edler Rotwein, sanfter Jazz im Hintergrund und Rosenblätter-Garantie.',
    duration: 'Klassisches Abendessen (Open End, je nach Rose-Verteilung)',
    highlights: [
      'Einzelspritzfahrt im sauber gesaugten Traum-Boliden',
      'Hintergrundmusik mit kinematischem Drama-Effekt',
      'Tiefsinniger Augenkontakt (mindestens 4,5 Sekunden am Stück)',
      'Die zeremonielle Übergabe einer echten roten Rose am Ende des Abends'
    ],
    roiRating: '100% (Bachelor-Finale-Atmosphäre garantiert)',
    costEstimate: 'Gesponsert von Armor-Investments & Co.'
  },
  {
    id: 'adventure',
    title: 'Der "Wildcard Venture" (Creative Startup Edition)',
    tagline: 'Risikodiversifikation durch Spontaneität & Action',
    atmosphere: 'Locker, agil, hochgradig interaktiv, Pizza & unvergessliche Stories.',
    duration: 'Flexibel (typischerweise bis zum Zwerchfellkrampf)',
    highlights: [
      'Eis-Verkostung mit unfairen Sortenkombinationen',
      'Gemeinsames Meistern einer absurd trivialen Aktivität (z.B. Minigolf)',
      'Pizza direkt aus dem Karton am besten Aussichtspunkt der Stadt',
      'High-Five-Verabschiedung mit legendärem Insider-Potenzial'
    ],
    roiRating: '92% (Hoher Spaßfaktor, minimierter Erwartungsdruck)',
    costEstimate: 'Gemeinschafts-Investment (Der Verlierer des Events zahlt das Eis)'
  }
];

export const funFacts = [
  { label: 'Erfolgsquote bei früheren Erst-Dates', value: '100%' },
  { label: 'Zufriedenheit der vermittelnden Schwester (Sara)', value: 'Überragend (will Provision)' },
  { label: 'Gentleman-Score', value: '9.8 / 10' },
  { label: 'Bügel-Fähigkeiten (Hemden)', value: 'Meisterklasse' },
  { label: 'Humor-Frequenz', value: '5 Pointen pro Stunde (Konstant)' },
];
