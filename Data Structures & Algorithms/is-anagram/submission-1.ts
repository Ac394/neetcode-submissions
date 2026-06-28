class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }

        const _s = s.split("").sort();
        const _t = t.split("").sort();

        for (let i = 0; i < _s.length; i++) {
            if (_s[i] !== _t[i]) {
                return false
            }
        }
        return true;
    }
}
