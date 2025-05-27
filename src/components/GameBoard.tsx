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
    // Star pattern using multiple radial gradients
    style = {
      backgroundImage: `
        radial-gradient(circle at 10px 10px, rgba(255, 255, 255, 0.15) 1px, transparent 1.5px),
        radial-gradient(circle at 30px 30px, rgba(255, 255, 255, 0.15) 1px, transparent 1.5px)
      `,
      backgroundSize: '40px 40px',
      opacity: 0.6,
    };
  } else {
    // Swirl-like pattern using repeating conic gradients (more subtle)
    style = {
      backgroundImage: `
        repeating-conic-gradient(from 45deg, rgba(255,255,255,0.0) 0% 10%, rgba(255,255,255,0.1) 10% 20%)
      `,
      backgroundSize: '60px 60px',
      opacity: 0.4,
    };
  }

  return <div className="absolute inset-0" style={style}></div>;
};

const GameBoard: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto bg-gray-800 p-1 md:p-2 rounded-lg shadow-lg border-4 border-gray-900 overflow-hidden"> {/* Outermost div */} 
      <div className="aspect-[7/10] relative grid grid-cols-10 grid-rows-8 gap-0.5 bg-gradient-to-r from-cyan-400 to-yellow-400"> {/* Aspect ratio div */} 

        {/* Render Perimeter Slots - slightly refined styling */}
        {boardSlots.map((slot, index) => {
          let gridPosition = '';
          // Refined styling for integration: remove explicit border, use inner shadow, slight rounding, add subtle outer shadow
          const baseClasses = `flex items-center justify-center overflow-hidden relative z-10 shadow-inner shadow-black/20 rounded-sm shadow-md shadow-black/30`; 
          const sideClass = slot.side === 'blue' ? 'bg-cyan-500/60 hover:bg-cyan-500/80' : 'bg-yellow-500/60 hover:bg-yellow-500/80'; // Slightly more transparent bg

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
        <div className="col-start-2 col-span-8 row-start-2 row-span-6 flex relative z-0 overflow-hidden shadow-inner rounded-md"> {/* Center area main div */} 
          {/* Left Blue Half */}
          <div className="w-1/2 h-full bg-cyan-300 flex items-center justify-center relative p-2 overflow-hidden">
             <TexturedBackground side="blue" />
             {/* Horizontal Card Stack Placeholder (Left) */}
             <div className="absolute top-[calc(50%-2rem)] left-2 md:left-4 w-24 h-16 md:w-32 md:h-20 bg-orange-500 border-2 border-orange-700 rounded-md flex items-center justify-center text-[8px] md:text-xs text-white font-semibold shadow-md z-10">Deck Left (H)</div>
             {/* Vertical Text 'Rupoli' (Left) */}
             <div className="absolute left-0 md:left-1 top-1/2 -translate-y-1/2 transform -rotate-90 origin-center text-xl md:text-3xl font-semibold text-cyan-900/90 arabic-text whitespace-nowrap z-10 tracking-normal" style={{ fontFamily: '"El Messiri", sans-serif' }}>روپولي</div>
          </div> {/* Close Left Blue Half */} 
          {/* Right Yellow Half */}
          <div className="w-1/2 h-full bg-yellow-300 flex items-center justify-center relative p-2 overflow-hidden">
             <TexturedBackground side="yellow" />
             {/* Vertical Card Stack Placeholders (Right) */}
             <div className="absolute top-2 md:top-4 right-2 md:right-4 w-16 h-24 md:w-20 md:h-28 bg-green-500 border-2 border-green-700 rounded-md flex items-center justify-center text-[8px] md:text-xs text-white font-semibold shadow-md z-10">Deck R1 (V)</div>
             <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 w-16 h-24 md:w-20 md:h-28 bg-purple-500 border-2 border-purple-700 rounded-md flex items-center justify-center text-[8px] md:text-xs text-white font-semibold shadow-md z-10">Deck R2 (V)</div>
          </div> {/* Close Right Yellow Half */} 

          {/* Central Art Placeholder (Overlapping both halves) - Enhanced Styling */}
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"> {/* Central art container */} 
            <div className="w-28 h-28 md:w-48 md:h-48 bg-gradient-radial from-slate-500 via-slate-700 to-slate-900 rounded-full flex items-center justify-center text-slate-200 text-sm md:text-xl font-bold shadow-2xl border-4 border-white/50 ring-4 ring-black/20 ring-offset-2 ring-offset-transparent shadow-black/50">
              <span className="opacity-75">Center Art</span>
            </div>
          </div> {/* Close Central art container */} 

          {/* Central Text "Aalam" (Overlapping) - Enhanced Styling */}
          <div className="absolute bottom-[48%] left-0 right-0 text-center z-30 pointer-events-none"> {/* Central text container */} 
             <h2 className="text-4xl md:text-6xl font-black text-white arabic-text drop-shadow-[0_4px_4px_rgba(0,0,0,0.7)]" style={{ fontFamily: '"El Messiri", sans-serif', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
               عالم
             </h2>
          </div> {/* Close Central text container */} 

        </div> {/* Close Center area main div */} 
      </div> {/* Close Aspect ratio div */} 
    </div> /* Close Outermost div */ 
  );
};

export default GameBoard;

