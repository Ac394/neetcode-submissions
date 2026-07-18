class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const result: number[][] = [], length = nums.length;
        nums.sort((a, b) => a - b);

        for (let i = 0; i < length; i++) {
            for (let j = i + 1; j < length; j++) {
                for (let k = j + 1; k < length; k++) {
                    if (nums[i] + nums[j] + nums[k] === 0) {
                        const curr = [nums[i], nums[j], nums[k]];
                        const isDistinct = result.every((x) => {
                            return !(x[0] === curr[0] && x[1] === curr[1] && x[2] === curr[2])
                        })
                        if (isDistinct) {
                            result.push(curr);
                        }
                    }
                }
            }
        }
        return result;
    }
}
