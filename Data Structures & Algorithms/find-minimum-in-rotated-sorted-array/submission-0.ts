class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        if (nums[0] < nums.at(-1)) return nums[0];

        let curr = Math.floor(nums.length / 2);
        while (nums[curr - 1] < nums[curr] || nums[curr + 1] < nums[curr]) {
            nums[curr] > nums.at(-1) ? curr++ : curr--
        }
        return nums[curr];
    }
}
