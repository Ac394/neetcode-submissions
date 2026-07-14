class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const group_arr = [];
        const idx = {};

        for (const str of strs) {
            const key = str.split("").sort().join("");
            if (idx[key] instanceof Array) {
                idx[key] = [...idx[key], str];
            } else {
                idx[key] = [str];
            }
        }

        for (const item in idx) {
            group_arr.push(idx[item]);
        }

        return group_arr;
    }
}
