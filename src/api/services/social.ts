// samirapi/api/services/social.ts
import { makeRequest } from '../../core';

export const socialService = {
    tiktok: (a: string) => makeRequest("tiktok", { url: a }),
    facebook: (a: string) => makeRequest("fbdl", { vid_url: a }),
    spotifydl: (a: string) => makeRequest("spotifydl", { url: a }),
    Twitter: (a: string) => makeRequest("Twitter", { url: a }),
    Instagram: (a: string) => makeRequest("igdl", { url: a }),
    tikstalk: (username: string) => makeRequest('tikstalk', { username }),
    tweetStalk: (username: string) => makeRequest('tweet/stalk', { username }),
}