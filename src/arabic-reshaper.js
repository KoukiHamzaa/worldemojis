/**
 * Arabic Text Reshaper
 * Based on the js-arabic-reshaper library
 * https://github.com/mapmeld/js-arabic-reshaper
 * 
 * This module handles proper Arabic text rendering by reshaping Arabic characters
 * to ensure correct character joining and display.
 */

// Arabic character mapping for different positions
const ARABIC_GLYPHS = {
  // Arabic letters
  'ا': { isolated: '\u0627', initial: '\u0627', medial: '\u0627', final: '\u0627' },
  'ب': { isolated: '\u0628', initial: '\u0628', medial: '\u0628', final: '\u0628' },
  'ت': { isolated: '\u062A', initial: '\u062A', medial: '\u062A', final: '\u062A' },
  'ث': { isolated: '\u062B', initial: '\u062B', medial: '\u062B', final: '\u062B' },
  'ج': { isolated: '\u062C', initial: '\u062C', medial: '\u062C', final: '\u062C' },
  'ح': { isolated: '\u062D', initial: '\u062D', medial: '\u062D', final: '\u062D' },
  'خ': { isolated: '\u062E', initial: '\u062E', medial: '\u062E', final: '\u062E' },
  'د': { isolated: '\u062F', initial: '\u062F', medial: '\u062F', final: '\u062F' },
  'ذ': { isolated: '\u0630', initial: '\u0630', medial: '\u0630', final: '\u0630' },
  'ر': { isolated: '\u0631', initial: '\u0631', medial: '\u0631', final: '\u0631' },
  'ز': { isolated: '\u0632', initial: '\u0632', medial: '\u0632', final: '\u0632' },
  'س': { isolated: '\u0633', initial: '\u0633', medial: '\u0633', final: '\u0633' },
  'ش': { isolated: '\u0634', initial: '\u0634', medial: '\u0634', final: '\u0634' },
  'ص': { isolated: '\u0635', initial: '\u0635', medial: '\u0635', final: '\u0635' },
  'ض': { isolated: '\u0636', initial: '\u0636', medial: '\u0636', final: '\u0636' },
  'ط': { isolated: '\u0637', initial: '\u0637', medial: '\u0637', final: '\u0637' },
  'ظ': { isolated: '\u0638', initial: '\u0638', medial: '\u0638', final: '\u0638' },
  'ع': { isolated: '\u0639', initial: '\u0639', medial: '\u0639', final: '\u0639' },
  'غ': { isolated: '\u063A', initial: '\u063A', medial: '\u063A', final: '\u063A' },
  'ف': { isolated: '\u0641', initial: '\u0641', medial: '\u0641', final: '\u0641' },
  'ق': { isolated: '\u0642', initial: '\u0642', medial: '\u0642', final: '\u0642' },
  'ك': { isolated: '\u0643', initial: '\u0643', medial: '\u0643', final: '\u0643' },
  'ل': { isolated: '\u0644', initial: '\u0644', medial: '\u0644', final: '\u0644' },
  'م': { isolated: '\u0645', initial: '\u0645', medial: '\u0645', final: '\u0645' },
  'ن': { isolated: '\u0646', initial: '\u0646', medial: '\u0646', final: '\u0646' },
  'ه': { isolated: '\u0647', initial: '\u0647', medial: '\u0647', final: '\u0647' },
  'و': { isolated: '\u0648', initial: '\u0648', medial: '\u0648', final: '\u0648' },
  'ي': { isolated: '\u064A', initial: '\u064A', medial: '\u064A', final: '\u064A' },
  'ى': { isolated: '\u0649', initial: '\u0649', medial: '\u0649', final: '\u0649' },
  'ة': { isolated: '\u0629', initial: '\u0629', medial: '\u0629', final: '\u0629' },
  'ء': { isolated: '\u0621', initial: '\u0621', medial: '\u0621', final: '\u0621' },
  'أ': { isolated: '\u0623', initial: '\u0623', medial: '\u0623', final: '\u0623' },
  'إ': { isolated: '\u0625', initial: '\u0625', medial: '\u0625', final: '\u0625' },
  'آ': { isolated: '\u0622', initial: '\u0622', medial: '\u0622', final: '\u0622' },
  'ؤ': { isolated: '\u0624', initial: '\u0624', medial: '\u0624', final: '\u0624' },
  'ئ': { isolated: '\u0626', initial: '\u0626', medial: '\u0626', final: '\u0626' },
  // Arabic diacritics
  'ً': { isolated: '\u064B', initial: '\u064B', medial: '\u064B', final: '\u064B' },
  'ٌ': { isolated: '\u064C', initial: '\u064C', medial: '\u064C', final: '\u064C' },
  'ٍ': { isolated: '\u064D', initial: '\u064D', medial: '\u064D', final: '\u064D' },
  'َ': { isolated: '\u064E', initial: '\u064E', medial: '\u064E', final: '\u064E' },
  'ُ': { isolated: '\u064F', initial: '\u064F', medial: '\u064F', final: '\u064F' },
  'ِ': { isolated: '\u0650', initial: '\u0650', medial: '\u0650', final: '\u0650' },
  'ّ': { isolated: '\u0651', initial: '\u0651', medial: '\u0651', final: '\u0651' },
  'ْ': { isolated: '\u0652', initial: '\u0652', medial: '\u0652', final: '\u0652' },
};

// Characters that don't connect to the next letter
const NON_CONNECTING_CHARS = ['ا', 'د', 'ذ', 'ر', 'ز', 'و', 'ء', 'أ', 'إ', 'آ', 'ؤ'];

/**
 * Reshapes Arabic text to ensure proper character joining and display
 * @param {string} text - The Arabic text to reshape
 * @return {string} - The reshaped Arabic text
 */
export function reshapeArabicText(text) {
  if (!text) return '';
  
  const result = [];
  const textLength = text.length;
  
  for (let i = 0; i < textLength; i++) {
    const currentChar = text[i];
    const glyphData = ARABIC_GLYPHS[currentChar];
    
    // If not an Arabic character, keep as is
    if (!glyphData) {
      result.push(currentChar);
      continue;
    }
    
    // Determine character position (isolated, initial, medial, final)
    let position = 'isolated';
    
    const prevChar = i > 0 ? text[i - 1] : null;
    const nextChar = i < textLength - 1 ? text[i + 1] : null;
    
    const prevConnects = prevChar && ARABIC_GLYPHS[prevChar] && !NON_CONNECTING_CHARS.includes(prevChar);
    const nextConnects = nextChar && ARABIC_GLYPHS[nextChar] && !NON_CONNECTING_CHARS.includes(currentChar);
    
    if (prevConnects && nextConnects) {
      position = 'medial';
    } else if (prevConnects) {
      position = 'final';
    } else if (nextConnects) {
      position = 'initial';
    }
    
    result.push(glyphData[position]);
  }
  
  return result.join('');
}

/**
 * Corrected Arabic translations for card prompts
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

/**
 * Gets the corrected and reshaped Arabic text for a given English prompt
 * @param {string} englishText - The English text to translate
 * @return {string} - The corrected and reshaped Arabic text
 */
export function getCorrectArabicText(englishText) {
  const correctedText = CORRECTED_ARABIC_PROMPTS[englishText] || englishText;
  return reshapeArabicText(correctedText);
}
