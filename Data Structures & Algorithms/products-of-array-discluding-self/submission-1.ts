class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        return nums.map((_, idx_1) => nums.reduce((a, b, idx_2) => idx_1 === idx_2 ? a : a * b, 1));
    }
}
