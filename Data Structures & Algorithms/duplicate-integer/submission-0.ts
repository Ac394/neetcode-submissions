class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const dup = [];
        for (const num of nums) {
            if (dup.includes(num)) {
                return true
            }
            dup.push(num);
        }
        return false
    }
}
