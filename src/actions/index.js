import axios from 'axios';

export const TRANSLATE = 'TRANSLATE';

export function translate(word) {
    const url = `https://glosbe.com/gapi/translate?from=eng&dest=de&format=json&phrase=${word}&pretty=true`;
    const request = axios.get(url);

    return {
        type: TRANSLATE,
        payload: request
    };
}