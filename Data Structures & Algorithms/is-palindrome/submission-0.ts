class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const clean_string = s.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
        const s_length = clean_string.length - 1;

        for (let i = 0; i < Math.floor(clean_string.length / 2); i++) {
            if (clean_string[i] !== clean_string[s_length - i]) {
                return false;
            }
        }
        return true;
    }
}
