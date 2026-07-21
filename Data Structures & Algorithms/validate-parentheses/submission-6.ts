class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const curr: string[] = [];

        for (let i = 0; i < s.length; i++) {
            if (s[i] === '[') {
                curr.push(']');
            } else if (s[i] === '(') {
                curr.push(')');
            } else if (s[i] === '{') {
                curr.push('}');
            } else if (s[i] === ']' && curr.at(-1) === ']') {
                curr.pop()
            } else if (s[i] === ')' && curr.at(-1) === ')') {
                curr.pop()
            } else if (s[i] === '}' && curr.at(-1) === '}') {
                curr.pop()
            } else {
                return false;
            }
        }
        return !curr.length;
    }
}
