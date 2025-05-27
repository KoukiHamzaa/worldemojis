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

const GameBoard: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto bg-gray-100 p-1 md:p-4 rounded-lg shadow-lg border-4 border-gray-700 overflow-hidden">
      {/* Using aspect ratio to maintain board shape */}
      <div className="aspect-[7/10] relative grid grid-cols-10 grid-rows-8 gap-0.5">
        {/* Render Slots */}
        {boardSlots.map((slot, index) => {
          let gridPosition = '';
          const baseClasses = `border border-gray-400 flex items-center justify-center overflow-hidden`;
          const sideClass = slot.side === 'blue' ? 'bg-blue-100' : 'bg-yellow-100';

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
            <div key={slot.id} className={`${gridPosition} ${baseClasses} ${sideClass}`}>
              <img src={slot.image} alt={`Card slot ${index + 1}`} className="max-w-full max-h-full object-contain p-0.5" />
            </div>
          );
        })}

        {/* Center Area */}
        <div className="col-start-2 col-span-8 row-start-2 row-span-6 bg-gradient-to-r from-blue-200 to-yellow-200 flex flex-col items-center justify-center relative p-2">
          {/* Card Deck Placeholders - Adjusted styling */}
          <div className="absolute top-2 left-2 w-16 h-24 md:w-20 md:h-28 bg-orange-300 border-2 border-orange-500 rounded flex items-center justify-center text-[8px] md:text-xs text-orange-800 font-semibold shadow-md">Illustrated Deck</div>
          <div className="absolute top-2 right-2 w-16 h-24 md:w-20 md:h-28 bg-green-300 border-2 border-green-500 rounded flex items-center justify-center text-[8px] md:text-xs text-green-800 font-semibold shadow-md">Prompt Deck</div>
          <div className="absolute bottom-2 left-2 w-16 h-24 md:w-20 md:h-28 bg-blue-400 border-2 border-blue-600 rounded flex items-center justify-center text-[8px] md:text-xs text-blue-800 font-semibold shadow-md">Draw Pile?</div>
          <div className="absolute bottom-2 right-2 w-16 h-24 md:w-20 md:h-28 bg-purple-300 border-2 border-purple-500 rounded flex items-center justify-center text-[8px] md:text-xs text-purple-800 font-semibold shadow-md">Discard?</div>
          
          {/* Central Text/Image Placeholder */}
          <div className="text-center z-10">
            {/* Placeholder for central character image - Use a simple div for now */}
            <div className="w-20 h-20 md:w-32 md:h-32 bg-gray-400 rounded-full mb-2 md:mb-4 mx-auto flex items-center justify-center text-white text-sm md:text-base shadow-inner">Center Art</div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 arabic-text" style={{ fontFamily: '"El Messiri", sans-serif' }}>
              عالم ايموجي
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBoard;

