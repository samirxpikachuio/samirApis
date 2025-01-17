// samirapi/api/services/image.ts
import { makeImageRequest } from '../../core';
import { RequestParams } from '../../types';

export const imageService = {
    artify: (url: string) => makeImageRequest("artify", { url }),
    togta: (url: string) => makeImageRequest("gta", { url }),
    imagine: (prompt: string) => makeImageRequest("Imagine", { prompt }),
    animagine: (prompt: string, resolution: string, model: string, qualitytag?: string) => makeImageRequest("animagine", { prompt, resolution, model, qualitytag }),
    niji: (prompt: string, resolution: string) => makeImageRequest("niji", { prompt, resolution }),
    mageDef: (prompt: string) => makeImageRequest("mageDef", { prompt }),
    flux: (prompt: string) => makeImageRequest("flux", { prompt }),
    marjia: (prompt: string) => makeImageRequest("marjia", { prompt }),
    tozombie: (url: string) => makeImageRequest("zombie", { imgurl: url }),
    remBackground: (url: string) => makeImageRequest("rbg", { url }),
    pet: (url: string) => makeImageRequest("pet", { url }),
    html2image: (html: string) => makeImageRequest("html2image", { html }),
    note: (text: string) => makeImageRequest("note", { text }),
    generateAvatar: (name: string, id: string, subname?: string, color?: string) => {
      const params: RequestParams = { name, id };
      if (subname) params.subname = subname;
      if (color) params.color = color;
      return makeImageRequest("avatar", params);
    },
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