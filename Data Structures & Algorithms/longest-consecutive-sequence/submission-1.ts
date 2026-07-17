class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (!nums.length) return 0;

        let max = 0, curr_max = 1;
        const sorted_nums = nums.sort((a, b) => a - b);

        for (let i = 1; i < nums.length; i++) {
            if (sorted_nums[i] === sorted_nums[i - 1]) {
                continue;
            } else if (sorted_nums[i] - sorted_nums[i - 1] === 1) {
                curr_max++
            } else {
                max = curr_max > max ? curr_max : max;
                curr_max = 1;
            }
        }

        max = curr_max > max ? curr_max : max;
        return max;
    }
}
