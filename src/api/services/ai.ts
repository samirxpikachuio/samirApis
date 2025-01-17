// samirapi/api/services/ai.ts
import { makeRequest } from '../../core';

export const aiService = {
    detectHumanAI: (inputText: string) => makeRequest("ai/detect", { input_text: inputText }),
    emojimix: (emoji1: string, emoji2: string) => makeRequest("emojimix2", { emoji1, emoji2 }),
    detectLanguage: (text: string) => makeRequest('detect/lang', { text }),
    hentai: () => makeRequest('hentai'),
}