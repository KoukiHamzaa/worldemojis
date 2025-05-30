import { useState, useEffect, useRef } from 'react'
import './App.css'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"
import { initializeYamliAPI, applyYamliToElement, CORRECTED_ARABIC_PROMPTS } from './yamli-integration'

import GameBoardSVG from './components/GameBoardSVG';

// Import card front images
// Illustrated cards
import illustratedCard1 from './assets/cards/fronts/emoji_world_card_illustrated_1.png'
import illustratedCard2 from './assets/cards/fronts/emoji_world_card_illustrated_2.png'
import illustratedCard3 from './assets/cards/fronts/emoji_world_card_illustrated_3.png'
import illustratedCard4 from './assets/cards/fronts/emoji_world_card_illustrated_4.png'
import illustratedCard5 from './assets/cards/fronts/emoji_world_card_illustrated_5.png'
import illustratedCard6 from './assets/cards/fronts/emoji_world_card_illustrated_6.png'
import illustratedCard7 from './assets/cards/fronts/emoji_world_card_illustrated_7.png'
import illustratedCard8 from './assets/cards/fronts/emoji_world_card_illustrated_8.png'
import illustratedCard9 from './assets/cards/fronts/emoji_world_card_illustrated_9.png'
import illustratedCard10 from './assets/cards/fronts/emoji_world_card_illustrated_10.png'
import illustratedCard11 from './assets/cards/fronts/emoji_world_card_illustrated_11.png'
import illustratedCard12 from './assets/cards/fronts/emoji_world_card_illustrated_12.png'
import illustratedCard13 from './assets/cards/fronts/emoji_world_card_illustrated_13.png'
import illustratedCard14 from './assets/cards/fronts/emoji_world_card_illustrated_14.png'
import illustratedCard15 from './assets/cards/fronts/emoji_world_card_illustrated_15.png'
import illustratedCard16 from './assets/cards/fronts/emoji_world_card_illustrated_16_magenta.png'

// Define card types
interface Card {
  id: number;
  front: string;
  prompt: string;
  flipped: boolean;
  pairId: number;
}

export default function App() {
  const [language, setLanguage] = useState<'english' | 'arabic'>('english');
  const [illustratedCards, setIllustratedCards] = useState<Card[]>([]);
  // Removed promptCards state as the section is removed
  const arabicCorrectionRef = useRef<HTMLTextAreaElement>(null);
  const selectedPromptRef = useRef<string>('');
  
  // Initialize cards
  useEffect(() => {
    // Initialize Yamli API
    initializeYamliAPI();
    
    // Create illustrated cards
    const illustratedCardsData: Card[] = [
      { id: 1, front: illustratedCard1, prompt: "Sing a short song about how you feel", flipped: false, pairId: 1 },
      { id: 2, front: illustratedCard2, prompt: "Make a face that shows how you're feeling right now", flipped: false, pairId: 2 },
      { id: 3, front: illustratedCard3, prompt: "Describe a time you felt brave", flipped: false, pairId: 3 },
      { id: 4, front: illustratedCard4, prompt: "Show what happiness looks like to you", flipped: false, pairId: 4 },
      { id: 5, front: illustratedCard5, prompt: "Act out being scared by something", flipped: false, pairId: 5 },
      { id: 6, front: illustratedCard6, prompt: "Pretend you just got exciting news", flipped: false, pairId: 6 },
      { id: 7, front: illustratedCard7, prompt: "Hop on one foot for 10 seconds", flipped: false, pairId: 7 },
      { id: 8, front: illustratedCard8, prompt: "Crawl like a crocodile", flipped: false, pairId: 8 },
      { id: 9, front: illustratedCard9, prompt: "Act like a tree that sways in the wind", flipped: false, pairId: 9 },
      { id: 10, front: illustratedCard10, prompt: "Put something on your head and move with it", flipped: false, pairId: 10 },
      { id: 11, front: illustratedCard11, prompt: "Pretend to be a robot", flipped: false, pairId: 11 },
      { id: 12, front: illustratedCard12, prompt: "Walk like your favorite animal", flipped: false, pairId: 12 },
      { id: 13, front: illustratedCard13, prompt: "Draw a picture in the air with your finger", flipped: false, pairId: 13 },
      { id: 14, front: illustratedCard14, prompt: "Describe your dream vacation", flipped: false, pairId: 14 },
      { id: 15, front: illustratedCard15, prompt: "Make up a short story about a magical creature", flipped: false, pairId: 15 },
      { id: 16, front: illustratedCard16, prompt: "Write a sentence with your left hand if you are right-handed, and vice versa", flipped: false, pairId: 16 },
    ];
    
    setIllustratedCards(illustratedCardsData);
    // Removed promptCards initialization
  }, []);
  
  // Apply Yamli to Arabic correction textarea when language changes
  useEffect(() => {
    if (language === 'arabic' && arabicCorrectionRef.current) {
      // Small delay to ensure the element is rendered
      setTimeout(() => {
        applyYamliToElement('arabic-correction');
      }, 500);
    }
  }, [language]);
  
  // Handle card flip (only for illustrated cards)
  const handleCardFlip = (cardId: number) => {
    setIllustratedCards(cards => 
      cards.map(card => 
        card.id === cardId ? { ...card, flipped: !card.flipped } : card
      )
    );
  };
  
  // Handle prompt selection for correction
  const handlePromptSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPrompt = e.target.value;
    selectedPromptRef.current = selectedPrompt;
    
    if (arabicCorrectionRef.current) {
      arabicCorrectionRef.current.value = CORRECTED_ARABIC_PROMPTS[selectedPrompt] || '';
    }
  };
  
  // Handle correction submission
  const handleCorrectionSubmit = () => {
    if (arabicCorrectionRef.current && selectedPromptRef.current) {
      // In a real app, this would send the correction to a server
      alert(`شكراً لمساعدتك في تحسين الترجمات! سيتم مراجعة التصحيحات المقترحة.`);
      
      // Reset the form
      selectedPromptRef.current = '';
      arabicCorrectionRef.current.value = '';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-yellow-500 bg-clip-text text-transparent">
          {language === 'english' ? 'Emoji World' : <span className="arabic-text">{CORRECTED_ARABIC_PROMPTS["Emoji World"]}</span>}
        </h1>
        <p className={`text-lg text-gray-600 mb-4 ${language === 'arabic' ? 'rtl arabic-text' : 'ltr'}`}>
          {language === 'english' 
            ? 'A world full of adventure and exploration where we can express our feelings and explore our thoughts.' 
            : CORRECTED_ARABIC_PROMPTS["A world full of adventure and exploration where we can express our feelings and explore our thoughts."]}
        </p>
        
        <div className="flex justify-center mb-4">
          <button 
            onClick={() => setLanguage('english')}
            className={`px-4 py-2 rounded-l-lg ${language === 'english' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            English
          </button>
          <button 
            onClick={() => setLanguage('arabic')}
            className={`px-4 py-2 rounded-r-lg ${language === 'arabic' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            العربية
          </button>
        </div>
      </header>

      {/* Updated Tabs: Removed Prompt Cards section */}
      <Tabs defaultValue="board" className="w-full">
        <TabsList className="grid w-full grid-cols-2"> {/* Changed grid-cols-3 to grid-cols-2 */}
          <TabsTrigger value="board">
            {language === 'english' ? 'Game Board' : <span className="arabic-text">{CORRECTED_ARABIC_PROMPTS["Game Board"]}</span>}
          </TabsTrigger>
          <TabsTrigger value="illustrated-cards">
            {language === 'english' ? 'Illustrated Cards' : <span className="arabic-text">{CORRECTED_ARABIC_PROMPTS["Illustrated Cards"]}</span>}
          </TabsTrigger>
          {/* Removed Prompt Cards TabsTrigger */}
        </TabsList>
        
        <TabsContent value="board" className="mt-6">
          <GameBoardSVG />
        </TabsContent>
        
        <TabsContent value="illustrated-cards" className="mt-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">
              {language === 'english' ? 'Illustrated Cards' : <span className="arabic-text">{CORRECTED_ARABIC_PROMPTS["Illustrated Cards"]}</span>}
            </h2>
            <p className={`text-center mb-4 text-gray-700 ${language === 'arabic' ? 'rtl arabic-text' : 'ltr'}`}>
              {language === 'english' 
                ? 'Click on any card to flip it and see the prompt.' 
                : CORRECTED_ARABIC_PROMPTS["Click on any card to flip it and see the prompt."]}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {illustratedCards.map((card) => (
                <div 
                  key={card.id} 
                  className="card-container"
                  onClick={() => handleCardFlip(card.id)} // Updated onClick handler
                >
                  <div className={`card ${card.flipped ? 'flipped' : ''}`}>
                    <div className="card-front">
                      <img 
                        src={card.front} 
                        alt={`Illustrated Card ${card.id}`}
                        className="w-full h-full object-cover rounded-lg shadow-md card-image"
                      />
                    </div>
                    <div className="card-back">
                      {/* Rotated container for horizontal back */}
                      <div className="card-back-rotated-content-container illustrated-card-back-bg">
                        {/* Content layout based on reference image */}
                        <div className="card-back-content">
                          <div className="text-section arabic-section">
                            <p className="text-center rtl arabic-text">
                              {CORRECTED_ARABIC_PROMPTS[card.prompt] || card.prompt}
                            </p>
                          </div>
                          <div className="star-separator">⭐</div>
                          <div className="text-section english-section">
                            <p className="text-center ltr">
                              {card.prompt}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        
        {/* Removed Prompt Cards TabsContent */}
      </Tabs>
      
      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p className={`${language === 'arabic' ? 'rtl arabic-text' : 'ltr'}`}>
          {language === 'english' 
            ? '© 2025 Emoji World - A game for 2-8 players to express feelings and explore emotions.' 
            : CORRECTED_ARABIC_PROMPTS["© 2025 Emoji World - A game for 2-8 players to express feelings and explore emotions."]}
        </p>
      </footer>
      
      {/* User review system for Arabic translations */}
      {language === 'arabic' && (
        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-xl font-bold mb-2 text-center arabic-text rtl">
            مراجعة الترجمات العربية
          </h3>
          <p className="mb-4 text-gray-700 arabic-text rtl">
            إذا وجدت أي أخطاء في الترجمة العربية، يرجى استخدام النموذج أدناه لتصحيحها.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded shadow-sm">
              <label className="block mb-1 font-medium arabic-text rtl">
                النص الإنجليزي:
              </label>
              <select 
                className="w-full p-2 border rounded mb-2"
                onChange={handlePromptSelection}
              >
                <option value="">-- Select English text --</option>
                {/* Filter prompts to only include those from illustrated cards */}
                {illustratedCards.map((card) => (
                  <option key={card.prompt} value={card.prompt}>{card.prompt}</option>
                ))}
              </select>
            </div>
            
            <div className="bg-white p-3 rounded shadow-sm">
              <label className="block mb-1 font-medium arabic-text rtl">
                الترجمة العربية المقترحة:
              </label>
              <textarea 
                id="arabic-correction"
                ref={arabicCorrectionRef}
                className="w-full p-2 border rounded mb-2 rtl arabic-text"
                rows={3}
              ></textarea>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <button 
              onClick={handleCorrectionSubmit}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 arabic-text"
            >
              إرسال التصحيح
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

