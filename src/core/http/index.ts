// samirapi/core/http/index.ts

import https from 'node:https';
import { URL, URLSearchParams } from 'url';
import { RequestOptions, RequestParams } from './types'; 

const BASE_URL = 'https://www.samirxpikachu.run.place/';
 //ok

/**
 * Makes an HTTP request to the specified endpoint.
 * @param {string} endpoint - The API endpoint to request.
 * @param {RequestParams} [params={}] - The query parameters or request body.
 * @param { 'GET' | 'POST'} [method='GET'] - The HTTP method.
 * @returns {Promise<any>} A Promise that resolves with the parsed JSON response or the response text, rejects with an Error on failure.
 */
export function makeRequest(endpoint: string, params: RequestParams = {}, method: 'GET' | 'POST' = 'GET'): Promise<any> {
    return new Promise((resolve, reject) => {
        const url = new URL(endpoint, BASE_URL);
        if (method === 'GET') {
            url.search = new URLSearchParams(params).toString();
        }
        const options: RequestOptions = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const req = https.request(url, options, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
                    try {
                        resolve(JSON.parse(data));
                    } catch (error) {
                        resolve(data);
                    }
                } else {
                    reject(new Error(`Request failed with status code ${res.statusCode}: ${data}`));
                }
            });
        });
        req.on('error', (error) => { reject(error); });
        if (method === 'POST') {
            req.write(JSON.stringify(params));
        }
        req.end();
    });
}

/**
 * Makes an HTTP request to the specified endpoint and expects a binary image response.
 * @param {string} endpoint The API endpoint.
 * @param {RequestParams} [params={}] Query parameters.
 * @returns {Promise<Buffer>} A Promise that resolves with a Buffer containing the image data. Rejects with an Error on failure.
 */
export function makeImageRequest(endpoint: string, params: RequestParams = {}): Promise<Buffer> {
    return new Promise((resolve, reject) => {
        const url = new URL(endpoint, BASE_URL);
        url.search = new URLSearchParams(params).toString();
        https.get(url, (res) => {
            if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
                const chunks: Buffer[] = [];
                res.on('data', (chunk: Buffer) => chunks.push(chunk));
                res.on('end', () => resolve(Buffer.concat(chunks)));
            } else {
                reject(new Error(`Image request failed with status code ${res.statusCode}`));
            }
        }).on('error', reject);
    });
}