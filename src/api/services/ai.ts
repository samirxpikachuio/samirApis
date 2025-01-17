// samirapi/api/services/ai.ts
import { makeRequest } from '../../core';
/**
 * Contains all ai related functions
 */
export const aiService = {
     /**
     * Detect if the text is generate by ai
     */
    detectHumanAI: (inputText: string) => makeRequest("ai/detect", { input_text: inputText }),
    /**
     * Mix two emojis
     */
    emojimix: (emoji1: string, emoji2: string) => makeRequest("emojimix2", { emoji1, emoji2 }),
    /**
     * Detects the language of a text
     */
    detectLanguage: (text: string) => makeRequest('detect/lang', { text }),
      /**
     * Gets random hentai
     */
    hentai: () => makeRequest('hentai'),
}