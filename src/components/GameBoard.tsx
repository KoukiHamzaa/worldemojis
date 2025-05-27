import React from 'react';

// Import all 16 illustrated card images
import illustratedCard1 from '../assets/cards/fronts/emoji_world_card_illustrated_1.png';
import illustratedCard2 from '../assets/cards/fronts/emoji_world_card_illustrated_2.png';
import illustratedCard3 from '../assets/cards/fronts/emoji_world_card_illustrated_3.png';
import illustratedCard4 from '../assets/cards/fronts/emoji_world_card_illustrated_4.png';
import illustratedCard5 from '../assets/cards/fronts/emoji_world_card_illustrated_5.png';
import illustratedCard6 from '../assets/cards/fronts/emoji_world_card_illustrated_6.png';
import illustratedCard7 from '../assets/cards/fronts/emoji_world_card_illustrated_7.png';
import illustratedCard8 from '../assets/cards/fronts/emoji_world_card_illustrated_8.png';
import illustratedCard9 from '../assets/cards/fronts/emoji_world_card_illustrated_9.png';
import illustratedCard10 from '../assets/cards/fronts/emoji_world_card_illustrated_10.png';
import illustratedCard11 from '../assets/cards/fronts/emoji_world_card_illustrated_11.png';
import illustratedCard12 from '../assets/cards/fronts/emoji_world_card_illustrated_12.png';
import illustratedCard13 from '../assets/cards/fronts/emoji_world_card_illustrated_13.png';
import illustratedCard14 from '../assets/cards/fronts/emoji_world_card_illustrated_14.png';
import illustratedCard15 from '../assets/cards/fronts/emoji_world_card_illustrated_15.png';
import illustratedCard16 from '../assets/cards/fronts/emoji_world_card_illustrated_16_magenta.png';

// Define the layout based on reference image, using available cards (repeating as needed)
const cardMap = {
  1: illustratedCard1, 2: illustratedCard2, 3: illustratedCard3, 4: illustratedCard4,
  5: illustratedCard5, 6: illustratedCard6, 7: illustratedCard7, 8: illustratedCard8,
  9: illustratedCard9, 10: illustratedCard10, 11: illustratedCard11, 12: illustratedCard12,
  13: illustratedCard13, 14: illustratedCard14, 15: illustratedCard15, 16: illustratedCard16,
};

// Layout definition: [card_number, side ('blue' or 'yellow')]
const boardLayoutConfig = [
  // Top Row (8 slots)
  [1, 'blue'], [2, 'blue'], [3, 'blue'], [4, 'blue'],
  [5, 'yellow'], [6, 'yellow'], [7, 'yellow'], [8, 'yellow'],
  // Left Column (6 slots - top to bottom)
  [9, 'blue'], [10, 'blue'], [11, 'blue'], [12, 'blue'], [13, 'blue'], [14, 'blue'],
  // Right Column (6 slots - top to bottom)
  [15, 'yellow'], [16, 'yellow'], [1, 'yellow'], [2, 'yellow'], [3, 'yellow'], [4, 'yellow'],
  // Bottom Row (8 slots - left to right)
  [5, 'blue'], [6, 'blue'], [7, 'blue'], [8, 'blue'],
  [13, 'yellow'], [14, 'yellow'], [15, 'yellow'], [16, 'yellow'], // Use remaining cards
];

const boardSlots = boardLayoutConfig.map(([cardNumber, side], index) => ({
  id: `slot-${index}`,
  image: cardMap[cardNumber as keyof typeof cardMap],
  side: side,
}));

// Helper component for textured background with more distinct patterns
const TexturedBackground: React.FC<{ side: 'blue' | 'yellow' }> = ({ side }) => {
  let style = {};
  if (side === 'blue') {
    // Attempting a star-like pattern with conic gradients (simplified)
    style = {
      backgroundImage: `
        radial-gradient(circle at 0% 0%, transparent 10px, rgba(255, 255, 255, 0.1) 10px, rgba(255, 255, 255, 0.1) 11px, transparent 11px),
        radial-gradient(circle at 100% 100%, transparent 10px, rgba(255, 255, 255, 0.1) 10px, rgba(255, 255, 255, 0.1) 11px, transparent 11px)
      `,
      backgroundSize: '40px 40px',
    };
  } else {
    // Attempting a swirl-like pattern with repeating conic gradients (simplified)
    style = {
      backgroundImage: `
        repeating-conic-gradient(rgba(0,0,0,0.0) 0% 5%, rgba(0,0,0,0.05) 5% 10%),
        repeating-radial-gradient(rgba(0,0,0,0.05) 0% 1%, transparent 1% 5%)
      `,
      backgroundSize: '50px 50px, 25px 25px',
    };
  }

  return <div className="absolute inset-0 opacity-50" style={style}></div>;
};

const GameBoard: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto bg-gray-800 p-1 md:p-2 rounded-lg shadow-lg border-4 border-gray-900 overflow-hidden">
      {/* Main container with aspect ratio */}
      <div className="aspect-[7/10] relative grid grid-cols-10 grid-rows-8 gap-0.5 bg-gradient-to-r from-cyan-400 to-yellow-400">

        {/* Render Perimeter Slots - slightly refined styling */}
        {boardSlots.map((slot, index) => {
          let gridPosition = '';
          // Slightly softer borders, more integrated background
          const baseClasses = `border border-black/20 flex items-center justify-center overflow-hidden relative z-10 shadow-inner`; 
          const sideClass = slot.side === 'blue' ? 'bg-cyan-500/70 hover:bg-cyan-500/90' : 'bg-yellow-500/70 hover:bg-yellow-500/90';

          if (index < 8) { // Top Row
            gridPosition = `row-start-1 col-start-${index < 4 ? index + 2 : index + 2}`;
          } else if (index < 14) { // Left Column
            gridPosition = `col-start-1 row-start-${index - 8 + 2}`;
          } else if (index < 20) { // Right Column
            gridPosition = `col-start-10 row-start-${index - 14 + 2}`;
          } else { // Bottom Row
            gridPosition = `row-start-8 col-start-${index < 24 ? index - 20 + 2 : index - 20 + 2}`;
          }

          return (
            <div key={slot.id} className={`${gridPosition} ${baseClasses} ${sideClass} transition-colors duration-200`}>
              <img src={slot.image} alt={`Card slot ${index + 1}`} className="max-w-full max-h-full object-contain p-0.5" />
            </div>
          );
        })}

        {/* Center Area - Reflecting the two-tone split */}
        <div className="col-start-2 col-span-8 row-start-2 row-span-6 flex relative z-0 overflow-hidden shadow-inner rounded-md">
          {/* Left Blue Half */}
          <div className="w-1/2 h-full bg-cyan-300 flex items-center justify-center relative p-2 overflow-hidden">
             <TexturedBackground side="blue" />
             {/* Horizontal Card Stack Placeholder (Left) */}
             <div className="absolute top-[calc(50%-2rem)] left-2 md:left-4 w-24 h-16 md:w-32 md:h-20 bg-orange-500 border-2 border-orange-700 rounded-md flex items-center justify-center text-[8px] md:text-xs text-white font-semibold shadow-md z-10">Deck Left (H)</div>
             {/* Vertical Text Placeholder (Left) */}
             <div className="absolute left-0 md:left-1 top-1/2 -translate-y-1/2 transform -rotate-90 origin-center text-xl md:text-3xl font-bold text-cyan-900/70 arabic-text whitespace-nowrap z-10 tracking-wider" style={{ fontFamily: '"El Messiri", sans-serif' }}>روپولي</div>
          </div>
          {/* Right Yellow Half */}
          <div className="w-1/2 h-full bg-yellow-300 flex items-center justify-center relative p-2 overflow-hidden">
             <TexturedBackground side="yellow" />
             {/* Vertical Card Stack Placeholders (Right) */}
             <div className="absolute top-2 md:top-4 right-2 md:right-4 w-16 h-24 md:w-20 md:h-28 bg-green-500 border-2 border-green-700 rounded-md flex items-center justify-center text-[8px] md:text-xs text-white font-semibold shadow-md z-10">Deck R1 (V)</div>
             <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 w-16 h-24 md:w-20 md:h-28 bg-purple-500 border-2 border-purple-700 rounded-md flex items-center justify-center text-[8px] md:text-xs text-white font-semibold shadow-md z-10">Deck R2 (V)</div>
          </div>

          {/* Central Art Placeholder (Overlapping both halves) */}
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <div className="w-28 h-28 md:w-48 md:h-48 bg-gradient-radial from-gray-600 to-gray-800 rounded-full flex items-center justify-center text-white text-sm md:text-xl font-bold shadow-xl border-4 border-white/70">Center Art</div>
          </div>

          {/* Central Text "Aalam" (Overlapping) */}
          <div className="absolute bottom-[48%] left-0 right-0 text-center z-30 pointer-events-none">
             <h2 className="text-4xl md:text-6xl font-extrabold text-white arabic-text drop-shadow-[0_3px_3px_rgba(0,0,0,0.6)]" style={{ fontFamily: '"El Messiri", sans-serif' }}>
               عالم
             </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBoard;

