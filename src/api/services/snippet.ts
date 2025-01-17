// samirapi/api/services/snippet.ts
import { makeRequest } from '../../core';

export const snippetService = {
    snippetLanguages: () => makeRequest('snippet/languages'),
    snippetThemes: () => makeRequest('snippet/themes'),
}