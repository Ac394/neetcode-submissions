class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let area = 0, l = 0, r = heights.length - 1;

        while (l < r) {
            const width = r - l;
            const height = Math.min(heights[l], heights[r]);
            area = Math.max(area, width * height);

            if (heights[l] < heights[r]) {
                l++
            } else {
                r--;
            }
        }
        return area;
    }
}