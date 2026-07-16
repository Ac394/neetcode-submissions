class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let result = "";

        for (const str of strs) {
            result += (str.length + '#' + str);
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        console.log(str);
        const strs: string[] = [];
        let i = 0, j = 0;

        while (i < str.length) {
            j = i;
            while (str.charAt(j) !== '#') {
                j++;
            }

            const len = Number(str.slice(i, j));
            strs.push(str.slice(j + 1, j + 1 + len));
            i = j + len + 1;
        }

        return strs;
    }
}
