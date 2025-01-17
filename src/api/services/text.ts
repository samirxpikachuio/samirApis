// samirapi/api/services/text.ts

import { makeRequest } from '../../core';

export const textService = {
    palm: (a: string) => makeRequest("palm", { text: a }),
    liner: (a: string) => makeRequest("liner", { prompt: a }),
    gpt: (a: string) => makeRequest("gpt", { content: a }),
    llama3: (prompt: string, system_prompt?: string) => makeRequest("llama3", { prompt, system_prompt }),
    mixtral142B: (prompt: string, system_prompt?: string) => makeRequest("Mixtral/142B", { prompt, system_prompt }),
    bing: ({ message, mode, uid }: { message: string, mode: string, uid: string }) => makeRequest("bing", { message, mode, uid }),
    gemini: (text: string, uid?: string) => makeRequest("Gemini", { text, uid }),
    stoicai: (a: string) => makeRequest("stoicai", { query: a }),
    stoicgpt: (a: string) => makeRequest("stoicgpt", { query: a }),
    generatePrompt: (text: string) => makeRequest("prompt", { text }),
    pastebin: (text: string) => makeRequest("pastebin", { text }),
    paste: (text: string) => makeRequest("paste", { text }),
    hastebin: (text: string) => makeRequest("Hastebin", { text }),
    nekobin: (code: string) => makeRequest("nekobin", { code }),
    obfuscate: (query: string) => makeRequest("obfuscate", { query }, 'POST'),
    stylize: (text: string) => makeRequest('api/stylize', { text }),
};