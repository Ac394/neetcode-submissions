class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const obj = {};
        const uniqueNums = [...new Set(nums)];


        for (const num of nums) {
            if (!obj[num]) {
                obj[num] = 0;
            }
            obj[num]++;
        }

        uniqueNums.sort((a, b) => obj[a] < obj[b] ? -1 : 1);

        return uniqueNums.slice(-k);
    }
}
