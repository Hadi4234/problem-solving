import { describe,it,expect } from "vitest";

const binarySearch = function (nums:number[], target:number):number {
    let [left, right] = [0, nums.length - 1];

    while (left <= right) {
        const mid = (left + right) >> 1;
        const guess = nums[mid];

        const isTarget = guess === target;
        if (isTarget) return mid;

        const isTargetGreater = guess < target;
        if (isTargetGreater) left = mid + 1;

        const isTargetLess = target < guess;
        if (isTargetLess) right = mid - 1;
    }

    return -1;
};



describe("binary search", () => {
	const cases = [
		[[-1, 0, 3, 5, 9, 12], 9, 4],
		[[-1, 0, 3, 5, 9, 12], 2, -1],
	];

	for (const [nums, target, output] of cases) {
		it(`should return ${output} when nums = [${nums}] and target = ${target}`, () => {
			expect(binarySearch(nums, target)).toBe(output);
		});
	}
});

