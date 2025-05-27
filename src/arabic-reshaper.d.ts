/**
 * TypeScript declaration file for arabic-reshaper.js
 */

/**
 * Reshapes Arabic text to ensure proper character joining and display
 * @param text - The Arabic text to reshape
 * @return The reshaped Arabic text
 */
export function reshapeArabicText(text: string): string;

/**
 * Gets the corrected and reshaped Arabic text for a given English prompt
 * @param englishText - The English text to translate
 * @return The corrected and reshaped Arabic text
 */
export function getCorrectArabicText(englishText: string): string;

/**
 * Corrected Arabic translations for card prompts
 */
export const CORRECTED_ARABIC_PROMPTS: Record<string, string>;
