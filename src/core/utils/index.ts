// samirapi/core/utils/index.ts

/**
 * Replaces path parameters in a string endpoint.
 *
 * @param {string} endpoint - for replacing endpoint.
 * @param {any} params - The parameter to replace.
 * @returns {string}  modify endpoint with new ones .-..
 */
export function replacePathParam(endpoint: string, params: any): string {
    return endpoint.replace(/{[^}]+}/, String(params));
}