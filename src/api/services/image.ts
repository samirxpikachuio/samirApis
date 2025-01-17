// samirapi/api/services/image.ts
import { makeImageRequest } from '../../core';

/**
 * Contains all functions related to image generation
 */
export const imageService = {
   /**
     *  Generates an image using artify
     */
    artify: (url: string) => makeImageRequest("artify", { url }),
    /**
     *  Generates an image using togta
     */
    togta: (url: string) => makeImageRequest("gta", { url }),
    /**
     *  Generates an image using imagine
     */
    imagine: (prompt: string) => makeImageRequest("Imagine", { prompt }),
    /**
     *  Generates an image using animagine
     */
    animagine: (prompt: string, resolution: string, model: string, qualitytag?: string) => makeImageRequest("animagine", { prompt, resolution, model, qualitytag }),
    /**
     *  Generates an image using niji
     */
    niji: (prompt: string, resolution: string) => makeImageRequest("niji", { prompt, resolution }),
     /**
     *  Generates an image using mageDef
     */
    mageDef: (prompt: string) => makeImageRequest("mageDef", { prompt }),
    /**
     *  Generates an image using flux
     */
    flux: (prompt: string) => makeImageRequest("flux", { prompt }),
    /**
     *  Generates an image using marjia
     */
    marjia: (prompt: string) => makeImageRequest("marjia", { prompt }),
    /**
     *  Generates an image using tozombie
     */
    tozombie: (url: string) => makeImageRequest("zombie", { imgurl: url }),
    /**
     *  Removes background from an image
     */
    remBackground: (url: string) => makeImageRequest("rbg", { url }),
    /**
     * Generates image based on pet
     */
    pet: (url: string) => makeImageRequest("pet", { url }),
    /**
     * Converts html to an image
     */
    html2image: (html: string) => makeImageRequest("html2image", { html }),
     /**
     * Generates an image of a note
     */
    note: (text: string) => makeImageRequest("note", { text }),
    /**
     * Generates avatar
     */
   generateAvatar: (name: string, id: string, subname?: string, color?: string) => {
      const params = { name, id };
      if (subname) params.subname = subname;
      if (color) params.color = color;
      return makeImageRequest("avatar", params);
    },
     /**
      * Generate snippet
      */
    snippet: (code: string, theme: string, language: string, lineNumbers: boolean, scale: number, backgroundColor: string, backgroundImage: string, showBackground: boolean) =>
        makeImageRequest('snippet', {
            code,
            theme,
            language,
            'line-numbers': lineNumbers,
            scale,
            'background-color': backgroundColor,
            'background-image': backgroundImage,
            'show-background': showBackground
        }),
};