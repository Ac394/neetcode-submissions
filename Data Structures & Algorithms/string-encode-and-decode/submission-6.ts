class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        const arr = strs.map((x) => x === "" ? "\null" : x)
        return arr.join("/\s");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const arr = str ? str.split("/\s") : [];
        return arr.map((x) => x === "\null" ? "" : x)
    }
}
