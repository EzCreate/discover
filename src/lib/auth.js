import { getUsernameFromAuthKey } from './api.js';
export async function authenticate() {
    if (import.meta.env.browser) {
        console.log('NEVER GIVE THE AUTH KEY TO ANYONE, YOU WILL GET SCAMMED IT WILL GIVE THE SCAMMER FULL ACCESS OVER THE ACCOUNT THE KEY IS LINKED TO');
        const authkey = localStorage.getItem("authkey");

        try {
            return await getUsernameFromAuthKey(authkey);
        } catch (error) {
            console.error('Failed to authenticate:', error);
            throw error;
        }
    } else {
        console.warn('localStorage is not available in the current environment.');
        return null;
    }
}

export function saveauthkey(input) {
    if (import.meta.env.browser) {
        localStorage.setItem("authkey", input);
    } else {
        console.warn('localStorage is not available in the current environment.');
    }
}
