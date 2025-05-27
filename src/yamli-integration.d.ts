/**
 * TypeScript declaration file for yamli-integration.js
 */

/**
 * Initialize Yamli API with the website
 * This function should be called once when the application loads
 */
export function initializeYamliAPI(): void;

/**
 * Apply Yamli to specific text input elements
 * @param elementId - The ID of the element to apply Yamli to
 */
export function applyYamliToElement(elementId: string): void;

/**
 * Corrected Arabic translations for card prompts
 */
export const CORRECTED_ARABIC_PROMPTS: Record<string, string>;
