class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let area = 0;

        for (let l = 0; l < heights.length; l++) {
            let r = heights.length - 1;
            while (l < r) {
                const width = r - l;
                const height = Math.min(heights[l], heights[r]);
                area = Math.max(area, width * height);
                r--;
            }
        }
        return area;
    }
}
