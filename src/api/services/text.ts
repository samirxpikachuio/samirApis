// samirapi/api/services/text.ts

import { makeRequest } from '../../core';
/**
 * Contains all text related functions
 */
export const textService = {
    /**
     *  Generates response using palm
     */
    palm: (a: string) => makeRequest("palm", { text: a }),
     /**
     * Generates response using liner
     */
    liner: (a: string) => makeRequest("liner", { prompt: a }),
    /**
     * Generates response using gpt
     */
    gpt: (a: string) => makeRequest("gpt", { content: a }),
      /**
      * Generates response using llama3
      */
    llama3: (prompt: string, system_prompt?: string) => makeRequest("llama3", { prompt, system_prompt }),
      /**
     * Generates response using mixtral142B
     */
    mixtral142B: (prompt: string, system_prompt?: string) => makeRequest("Mixtral/142B", { prompt, system_prompt }),
     /**
     * Generates response using bing
     */
    bing: ({ message, mode, uid }: { message: string, mode: string, uid: string }) => makeRequest("bing", { message, mode, uid }),
      /**
     * Generates response using gemini
     */
    gemini: (text: string, uid?: string) => makeRequest("Gemini", { text, uid }),
    /**
     * Generates response using stoicai
     */
    stoicai: (a: string) => makeRequest("stoicai", { query: a }),
     /**
     * Generates response using stoicgpt
     */
    stoicgpt: (a: string) => makeRequest("stoicgpt", { query: a }),
    /**
     * Generates prompt
     */
    generatePrompt: (text: string) => makeRequest("prompt", { text }),
    /**
     * Creates paste on pastebin
     */
    pastebin: (text: string) => makeRequest("pastebin", { text }),
    /**
     * Creates paste on paste
     */
    paste: (text: string) => makeRequest("paste", { text }),
    /**
     * Creates paste on hastebin
     */
    hastebin: (text: string) => makeRequest("Hastebin", { text }),
    /**
     * Creates paste on nekobin
     */
    nekobin: (code: string) => makeRequest("nekobin", { code }),
     /**
     * Obfuscate a text
     */
    obfuscate: (query: string) => makeRequest("obfuscate", { query }, 'POST'),
    /**
     * Stylize text
     */
   stylize: (text: string) => makeRequest('api/stylize', { text }),
};