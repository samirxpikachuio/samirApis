// samirapi/api/services/social.ts
import { makeRequest } from '../../core';
/**
 * Contains functions related to different social media platforms
 */
export const socialService = {
    /**
     * Downloads tiktok video
     */
    tiktok: (a: string) => makeRequest("tiktok", { url: a }),
    /**
     * Downloads facebook video
     */
    facebook: (a: string) => makeRequest("fbdl", { vid_url: a }),
    /**
     * Downloads spotify song
     */
    spotifydl: (a: string) => makeRequest("spotifydl", { url: a }),
     /**
     * Downloads twitter video
     */
    Twitter: (a: string) => makeRequest("Twitter", { url: a }),
    /**
     * Downloads instagram video
     */
    Instagram: (a: string) => makeRequest("igdl", { url: a }),
     /**
      * Get tiktoks from a user
      */
    tikstalk: (username: string) => makeRequest('tikstalk', { username }),
      /**
     * Get tweets from a user
     */
    tweetStalk: (username: string) => makeRequest('tweet/stalk', { username }),
}