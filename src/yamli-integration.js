/**
 * Yamli API Integration for Arabic text processing
 * This module integrates the Yamli API for proper Arabic text rendering
 */

/**
 * Initialize Yamli API with the website
 * This function should be called once when the application loads
 */
export function initializeYamliAPI() {
  // Create a script element to load the Yamli API
  const yamliScript = document.createElement('script');
  yamliScript.type = 'text/javascript';
  yamliScript.src = 'https://api.yamli.com/js/yamli_api.js';
  document.head.appendChild(yamliScript);
  
  // Initialize Yamli once the script is loaded
  yamliScript.onload = () => {
    if (typeof window.yamli === 'object') {
      window.yamli.init({
        uiLanguage: 'en',
        startMode: 'onOrUserDefault'
      });
    }
  };
}

/**
 * Apply Yamli to specific text input elements
 * @param {string} elementId - The ID of the element to apply Yamli to
 */
export function applyYamliToElement(elementId) {
  if (typeof window.yamli === 'object') {
    window.yamli.yamlify(elementId, { settingsPlacement: 'bottomLeft' });
  }
}

/**
 * Corrected Arabic translations for card prompts
 * These will be used as fallbacks if Yamli is not available
 */
export const CORRECTED_ARABIC_PROMPTS = {
  // Emotional expression prompts
  "Sing a short song about how you feel": "غنِّ أغنية قصيرة عن شعورك",
  "Make a face that shows how you're feeling right now": "اصنع وجهاً يُظهر شعورك الآن",
  "Describe a time you felt brave": "صِف وقتاً شعرت فيه بالشجاعة",
  "Show what happiness looks like to you": "أرِنا كيف يبدو السعادة بالنسبة لك",
  "Act out being scared by something": "مثّل أنك خائف من شيء ما",
  "Pretend you just got exciting news": "تظاهر بأنك تلقيت خبراً مثيراً للحماس",
  
  // Physical activity prompts
  "Hop on one foot for 10 seconds": "اقفز على قدم واحدة لمدة 10 ثوانٍ",
  "Crawl like a crocodile": "ازحف مثل التمساح",
  "Act like a tree that sways in the wind": "تصرف مثل شجرة تتمايل في الريح",
  "Put something on your head and move with it": "ضع شيئاً على رأسك وتحرك به",
  "Pretend to be a robot": "تظاهر بأنك روبوت",
  "Walk like your favorite animal": "امشِ مثل حيوانك المفضل",
  
  // Creative thinking prompts
  "Draw a picture in the air with your finger": "ارسم صورة في الهواء بإصبعك",
  "Describe your dream vacation": "صِف إجازة أحلامك",
  "Make up a short story about a magical creature": "ألّف قصة قصيرة عن مخلوق سحري",
  "Write a sentence with your left hand if you are right-handed, and vice versa": "اكتب جملة بيدك اليسرى إذا كنت أيمن، والعكس صحيح",
  
  // Game interface text
  "Emoji World": "عالم الإيموجي",
  "A world full of adventure and exploration where we can express our feelings and explore our thoughts.": "عالم مليء بالمغامرة والاستكشاف، عالم نستطيع من خلاله التعبير عن مشاعرنا واكتشاف أفكارنا.",
  "Game Board": "لوحة اللعبة",
  "Illustrated Cards": "البطاقات المصورة",
  "Prompt Cards": "بطاقات الأنشطة",
  "Click on any card to flip it and see the prompt.": "انقر على أي بطاقة لقلبها ورؤية النشاط المرتبط بها.",
  "Click on any card to flip it and see the illustration.": "انقر على أي بطاقة لقلبها ورؤية الصورة المرتبطة بها.",
  "The bilingual game board features a blue and yellow design with spaces for players to move and draw cards.": "تتميز لوحة اللعبة ثنائية اللغة بتصميم أزرق وأصفر مع مساحات للاعبين للتحرك وسحب البطاقات.",
  "© 2025 Emoji World - A game for 2-8 players to express feelings and explore emotions.": "© 2025 عالم الإيموجي - لعبة لـ 2-8 لاعبين للتعبير عن المشاعر واستكشاف العواطف."
};
