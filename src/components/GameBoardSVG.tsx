import React from 'react';

// Placeholder data - replace with actual assets/logic later
const perimeterCards = Array.from({ length: 32 }, (_, i) => ({
  id: `card-${i + 1}`,
  imageUrl: `https://placehold.co/90x110/${i < 4 || i >= 19 ? '7ADFF2' : 'FFC04D'}/ffffff?text=Card+${i + 1}`,
}));

const centralArtUrl = "https://placehold.co/600x600/cccccc/333333?text=Central+Characters+Art";

const GameBoardSVG: React.FC = () => {
  // Define perimeter slot positions (example, needs precise calculation)
  const slots = [
    // Top row (8 slots)
    { x: 20, y: 20 }, { x: 120, y: 20 }, { x: 220, y: 20 }, { x: 320, y: 20 },
    { x: 420, y: 20 }, { x: 520, y: 20 }, { x: 620, y: 20 }, { x: 720, y: 20 },
    // Right column (8 slots)
    { x: 790, y: 140 }, { x: 790, y: 260 }, { x: 790, y: 380 }, { x: 790, y: 500 },
    { x: 790, y: 620 }, { x: 790, y: 740 }, { x: 790, y: 860 }, { x: 790, y: 980 },
    // Bottom row (8 slots)
    { x: 690, y: 1070 }, { x: 590, y: 1070 }, { x: 490, y: 1070 }, { x: 390, y: 1070 },
    { x: 290, y: 1070 }, { x: 190, y: 1070 }, { x: 90, y: 1070 }, { x: 20, y: 1070 },
    // Left column (8 slots)
    { x: 20, y: 950 }, { x: 20, y: 830 }, { x: 20, y: 710 }, { x: 20, y: 590 },
    { x: 20, y: 470 }, { x: 20, y: 350 }, { x: 20, y: 230 }, { x: 20, y: 110 },
  ];

  return (
    <div className="game-board-wrapper w-full max-w-5xl mx-auto aspect-[900/1200] bg-white rounded-2xl shadow-lg overflow-hidden">
      <svg viewBox="0 0 900 1200" preserveAspectRatio="xMidYMid meet" className="block w-full h-full">
        {/* Background Halves */}
        <rect x="0" y="0" width="450" height="1200" fill="#7ADFF2" />
        <rect x="450" y="0" width="450" height="1200" fill="#FFC04D" />

        {/* Central Art Placeholder */}
        <image href={centralArtUrl}
               x="150" y="300" width="600" height="600"
               preserveAspectRatio="xMidYMid slice" />

        {/* Central Text "Aalam" */}
        <text x="450" y="760" textAnchor="middle" fontSize="100" fill="white"
              stroke="#333" strokeWidth="2" className="arabic-font"
              style={{ filter: 'drop-shadow(3px 3px 2px rgba(0,0,0,0.5))', fontFamily: 'Amiri, serif', direction: 'rtl', unicodeBidi: 'embed' }}>
            عالم
        </text>

        {/* Vertical Text "Rupoli" */}
        <text x="50" y="600" textAnchor="middle" fontSize="70" fill="white"
              stroke="#333" strokeWidth="1" transform="rotate(-90 50 600)"
              className="arabic-font" style={{ filter: 'drop-shadow(2px 2px 1px rgba(0,0,0,0.4))', fontFamily: 'Amiri, serif', direction: 'rtl', unicodeBidi: 'embed' }}>
            روپولي
        </text>

        {/* Deck Placeholders */}
        {/* Deck Left (H) */}
        <rect x="80" y="350" width="250" height="180" rx="15" ry="15"
              fill="rgba(0,0,0,0.1)" stroke="white" strokeWidth="4" />
        <text x="205" y="450" textAnchor="middle" fontSize="30" fill="white">Deck Left (H)</text>

        {/* Deck Right 1 (V) */}
        <rect x="570" y="250" width="180" height="250" rx="15" ry="15"
              fill="rgba(0,0,0,0.1)" stroke="white" strokeWidth="4" />
        <text x="660" y="380" textAnchor="middle" fontSize="30" fill="white" transform="rotate(90 660 380)">Deck R1 (V)</text>

        {/* Deck Right 2 (V) */}
        <rect x="570" y="700" width="180" height="250" rx="15" ry="15"
              fill="rgba(0,0,0,0.1)" stroke="white" strokeWidth="4" />
        <text x="660" y="830" textAnchor="middle" fontSize="30" fill="white" transform="rotate(90 660 830)">Deck R2 (V)</text>

        {/* Perimeter Slots */}
        <g>
          {slots.map((slot, index) => (
            <g key={`slot-${index}`}>
              <rect x={slot.x} y={slot.y} width="90" height="110" rx="8" ry="8" fill="rgba(255,255,255,0.1)" stroke="white" strokeWidth="2"/>
              <image href={perimeterCards[index]?.imageUrl || ''} x={slot.x} y={slot.y} width="90" height="110" preserveAspectRatio="xMidYMid slice"/>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default GameBoardSVG;

