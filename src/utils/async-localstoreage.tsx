export const asyncLocalStorage = {
    async setItem(key: string, value: string) {
        await Promise.resolve();
        localStorage.setItem(key, value);
    },
    async getItem(key: string) {
        await Promise.resolve();
        return localStorage.getItem(key);
    },
    async removeItem(key: string) {
        await Promise.resolve();
        return localStorage.removeItem(key);
    }
};
