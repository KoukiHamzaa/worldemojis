import React from 'react';

// Import all 16 illustrated card images (assuming they exist)
// NOTE: Using placeholders for now as actual assets are not confirmed
const illustratedCards = Array.from({ length: 16 }, (_, i) => `/placeholder/card_${i + 1}.png`);

// Placeholder for actual central art - User needs to provide this asset
const centralArtImage = '/placeholder/center-art.png';

// Define the layout based on reference image
// This needs precise mapping based on the original board's 28 slots
const perimeterSlotsConfig = [
  // Top Row (8 slots) - Map to card indices or specific images
  { id: 't1', imageIndex: 0 }, { id: 't2', imageIndex: 1 }, { id: 't3', imageIndex: 2 }, { id: 't4', imageIndex: 3 },
  { id: 't5', imageIndex: 4 }, { id: 't6', imageIndex: 5 }, { id: 't7', imageIndex: 6 }, { id: 't8', imageIndex: 7 },
  // Right Column (6 slots) - Top to bottom
  { id: 'r1', imageIndex: 8 }, { id: 'r2', imageIndex: 9 }, { id: 'r3', imageIndex: 10 },
  { id: 'r4', imageIndex: 11 }, { id: 'r5', imageIndex: 12 }, { id: 'r6', imageIndex: 13 },
  // Bottom Row (8 slots) - Right to left
  { id: 'b8', imageIndex: 14 }, { id: 'b7', imageIndex: 15 }, { id: 'b6', imageIndex: 0 }, { id: 'b5', imageIndex: 1 },
  { id: 'b4', imageIndex: 2 }, { id: 'b3', imageIndex: 3 }, { id: 'b2', imageIndex: 4 }, { id: 'b1', imageIndex: 5 },
  // Left Column (6 slots) - Bottom to top
  { id: 'l6', imageIndex: 6 }, { id: 'l5', imageIndex: 7 }, { id: 'l4', imageIndex: 8 },
  { id: 'l3', imageIndex: 9 }, { id: 'l2', imageIndex: 10 }, { id: 'l1', imageIndex: 11 },
];

// Helper component for textured background - Refined CSS patterns
const TexturedBackground: React.FC<{ side: 'blue' | 'yellow' }> = ({ side }) => {
  const style = side === 'blue'
    ? { // More distinct star-like dots
        backgroundImage: `
          radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px),
          radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: '30px 30px, 30px 30px',
        backgroundPosition: '0 0, 15px 15px',
        opacity: 0.6,
      }
    : { // More subtle swirl/wave pattern
        backgroundImage: `
          radial-gradient(circle at 100% 50%, transparent 20%, rgba(255,255,255,.1) 21%, rgba(255,255,255,.1) 34%, transparent 35%, transparent),
          radial-gradient(circle at 0% 50%, transparent 20%, rgba(255,255,255,.1) 21%, rgba(255,255,255,.1) 34%, transparent 35%, transparent) 0 -25px
        `,
        backgroundSize: '50px 50px',
        opacity: 0.4,
      };

  return <div className="absolute inset-0 pointer-events-none" style={style}></div>;
};

// Main GameBoard Component
const GameBoard: React.FC = () => {
  // Define approximate positions based on visual inspection and blueprint
  // These would need fine-tuning
  const slotWidthPx = 80; // Example fixed size for calculation
  const slotHeightPx = 100;
  const boardWidthPx = 900; // Assumed board width for calc
  const boardHeightPx = 1286; // Assumed board height (7:10 of 900)
  const margin = 20;

  return (
    <div className="w-full max-w-5xl mx-auto bg-gray-900 p-2 rounded-xl shadow-2xl border-4 border-black overflow-hidden">
      {/* Main container using absolute positioning for children, aspect ratio set by padding-bottom hack or aspect-ratio CSS */}
      <div className="relative w-full" style={{ paddingBottom: '142.86%' /* Approx 7:10 aspect ratio */ }}>
        <div className="absolute inset-0 flex">
          {/* Left Blue Half - Added subtle gradient */}
          <div className="w-1/2 h-full bg-gradient-to-br from-cyan-400 to-cyan-500 relative overflow-hidden">
            <TexturedBackground side="blue" />
            {/* Vertical Text - Positioned on far left edge */}
            <div
              className="absolute top-1/2 left-2 transform -translate-y-1/2 -rotate-90 origin-left text-4xl font-semibold text-white arabic-text whitespace-nowrap z-10"
              style={{ fontFamily: '"El Messiri", sans-serif', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}
            >
              روپولي
            </div>
            {/* Horizontal Deck Placeholder */}
            <div className="absolute top-[35%] left-[15%] w-[30%] h-[15%] bg-orange-600/70 border-2 border-white/50 rounded-lg shadow-lg flex items-center justify-center text-xs text-white font-semibold z-10">
              Deck Left (H)
            </div>
          </div>

          {/* Right Yellow Half - Added subtle gradient */}
          <div className="w-1/2 h-full bg-gradient-to-bl from-yellow-400 to-yellow-500 relative overflow-hidden">
            <TexturedBackground side="yellow" />
            {/* Vertical Deck Placeholders */}
            <div className="absolute top-[20%] right-[15%] w-[20%] h-[20%] bg-green-600/70 border-2 border-white/50 rounded-lg shadow-lg flex items-center justify-center text-xs text-white font-semibold z-10">
              Deck R1 (V)
            </div>
            <div className="absolute bottom-[20%] right-[15%] w-[20%] h-[20%] bg-purple-600/70 border-2 border-white/50 rounded-lg shadow-lg flex items-center justify-center text-xs text-white font-semibold z-10">
              Deck R2 (V)
            </div>
          </div>
        </div> {/* Close flex container for halves */}

        {/* Central Art Placeholder - Enhanced Styling, Awaiting Asset */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[45%] h-[35%] z-20 flex items-center justify-center pointer-events-none">
          <div className="w-full h-full bg-gradient-radial from-slate-400 via-slate-600 to-slate-800 rounded-full flex items-center justify-center text-slate-100/70 text-lg font-semibold shadow-2xl border-4 border-white/40 ring-4 ring-black/20">
            Central Art Asset Needed
          </div>
          {/* <img src={centralArtImage} alt="Game Central Art" className="max-w-full max-h-full object-contain" /> */}
        </div>

        {/* Central Text "Aalam" - Overlapping */}
        <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 text-center z-30 pointer-events-none">
          <h2
            className="text-6xl font-extrabold text-white arabic-text drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]"
            style={{ fontFamily: '".SF NS Rounded", "El Messiri", sans-serif', textShadow: '1px 1px 2px rgba(0,0,0,0.4), 0 0 5px rgba(255,255,255,0.2)' }} // Trying a slightly softer shadow and maybe a system font fallback
          >
            عالم
          </h2>
        </div>

        {/* Perimeter Track - Using absolute positioning, refined styling for integration */}
        {/* NOTE: Unique assets needed for each slot for full fidelity */}
        {perimeterSlotsConfig.map((slot, index) => {
          // Placeholder: Precise positioning calculations needed here based on board dimensions
          // Example positions for demonstration
          let positionStyle = {};

          if (index < 8) { // Top row
            positionStyle = { top: `${margin}px`, left: `${margin + (boardWidthPx - 2 * margin) / 8 * index + (boardWidthPx - 2 * margin) / 16 - slotWidthPx / 2}px` };
          } else if (index < 14) { // Right Column
            positionStyle = { top: `${margin + (boardHeightPx - 2 * margin) / 6 * (index - 8) + (boardHeightPx - 2 * margin) / 12 - slotHeightPx / 2}px`, right: `${margin}px` };
          } else if (index < 22) { // Bottom Row (R to L)
            positionStyle = { bottom: `${margin}px`, right: `${margin + (boardWidthPx - 2 * margin) / 8 * (index - 14) + (boardWidthPx - 2 * margin) / 16 - slotWidthPx / 2}px` };
          } else { // Left Column (B to T)
             positionStyle = { bottom: `${margin + (boardHeightPx - 2 * margin) / 6 * (index - 22) + (boardHeightPx - 2 * margin) / 12 - slotHeightPx / 2}px`, left: `${margin}px` };
          }

          return (
            <div
              key={slot.id}
              className="absolute bg-black/10 rounded-md shadow-inner shadow-black/40 overflow-hidden flex items-center justify-center border border-black/20 group hover:border-white/50 transition-all duration-200"
              style={{
                ...positionStyle,
                width: `${slotWidthPx}px`,
                height: `${slotHeightPx}px`,
                // Using background image for placeholder/asset
                backgroundImage: `url(${illustratedCards[slot.imageIndex]})`,
                backgroundSize: 'contain', // Use contain to show full image
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {/* Optional: Add overlay or text if needed */}
              {/* <span className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">Slot {slot.id}</span> */}
            </div>
          );
        })}

      </div> {/* Close relative w-full div */}
    </div> /* Close outermost div */
  );
};

export default GameBoard;

