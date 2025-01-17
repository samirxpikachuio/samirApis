// samirapi/api/services/voice.ts
import { makeRequest } from '../../core';

export const voiceService = {
    ytTranscript: (url: string) => makeRequest('yt/transcript', { url }),
    transcribe: (url: string) => makeRequest('transcribe', { url }),
    vocalRev: (url: string) => makeRequest('vocalrev', { url }),
    waifuTTS: (text: string, number: number) => makeRequest('waifu-tts', { text, number }),
    waifuVoicelist: () => makeRequest('waifu-voicelist'),
}