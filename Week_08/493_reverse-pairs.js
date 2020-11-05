// 493. 翻转对
// https://leetcode.com/problems/reverse-pairs/discuss/
// https://leetcode-cn.com/problems/reverse-pairs/

// binary-search, divide-and-conquer, sort, binary-indexed-tree, segment-tree

/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
    if (!nums || nums.length < 2) return 0;
    let res = 0;
    const count = (arr, left, mid, right) => {
        let i = left,
            j = mid + 1;
        while (i <= mid && j <= right) {
            if (arr[i] / 2 > arr[j]) {
                res += mid + 1 - i;
                j += 1;
            } else {
                i += 1;
            }
        }
    };
    const merge = (arr, left, mid, right) => {
        let i = left,
            j = mid + 1,
            temp = [];
        while (i <= mid && j <= right) {
            temp.push(arr[i] <= arr[j] ? arr[i++] : arr[j++]);
        }
        while (i <= mid) {
            temp.push(arr[i++]);
        }
        while (j <= right) {
            temp.push(arr[j++]);
        }
        for (let k = 0; k < temp.length; k++) {
            arr[left + k] = temp[k];
        }
    };
    const sort = (arr, left, right) => {
        if (left >= right) return;
        let mid = (left + right) >> 1;
        sort(arr, left, mid);
        sort(arr, mid + 1, right);
        count(arr, left, mid, right);
        merge(arr, left, mid, right);
    };
    sort(nums, 0, nums.length - 1);
    return res;
};
