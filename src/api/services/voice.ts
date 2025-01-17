// samirapi/api/services/voice.ts
import { makeRequest } from '../../core';
/**
 * Contains all voice related functions
 */
export const voiceService = {
     /**
     * Get transcript from youtube video
     */
    ytTranscript: (url: string) => makeRequest('yt/transcript', { url }),
     /**
     * Transcribes audio from a url
     */
    transcribe: (url: string) => makeRequest('transcribe', { url }),
    /**
     *  vocal rev
     */
    vocalRev: (url: string) => makeRequest('vocalrev', { url }),
    /**
     * Generates tts using a waifu voice
     */
    waifuTTS: (text: string, number: number) => makeRequest('waifu-tts', { text, number }),
     /**
     *  Get waifu voice list
     */
    waifuVoicelist: () => makeRequest('waifu-voicelist'),
}