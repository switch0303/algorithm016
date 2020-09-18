// 239. 滑动窗口最大值
// https://leetcode.com/problems/sliding-window-maximum/discuss/
// https://leetcode-cn.com/problems/sliding-window-maximum/
// heap, sliding-window

class Heap {
    constructor(data, compare) {
        this.data = [];
        this.compare = compare || this.defaultCompare;
        if (Array.isArray(data)) {
            for (let item of data) {
                this.insert(item);
            }
        }
    }

    defaultCompare(a, b) {
        return b - a;
    }

    insert(value) {
        this.insertAt(this.data.length, value);
    }

    insertAt(index, value) {
        this.data[index] = value;
        // 对比当前节点与其父节点，如果当前节点更小就交换它们
        while (
            index > 0 &&
            this.compare(value, this.data[Math.floor((index - 1) / 2)]) < 0
        ) {
            this.data[index] = this.data[Math.floor((index - 1) / 2)];
            this.data[Math.floor((index - 1) / 2)] = value;
            index = Math.floor((index - 1) / 2);
        }
    }

    delete(item) {
        const data = this.data;
        if (data.length === 0) {
            return;
        }
        const index = data.findIndex((it) => it === item);
        if (index > -1) {
            return this.deleteByIndex(index);
        }
    }

    deleteByIndex(index) {
        const data = this.data;
        if (data.length === 0) {
            return;
        }

        let value = data[index];
        let i = index;
        // fix heap
        while (i < data.length) {
            let left = i * 2 + 1;
            let right = i * 2 + 2;
            // 没有左子节点
            if (left >= data.length) break;
            // 没有右子节点
            if (right >= data.length) {
                data[i] = data[left];
                i = left;
                break;
            }
            // 比较左右子节点的大小，更小的补到父节点
            if (this.compare(data[left], data[right]) < 0) {
                data[i] = data[left];
                i = left;
            } else {
                data[i] = data[right];
                i = right;
            }
        }
        // 查看最后的空位是不是最后的叶子节点
        if (i < data.length - 1) {
            this.insertAt(i, data.pop());
        } else {
            data.pop();
        }
        return value;
    }

    shift() {
        return this.deleteByIndex(0);
    }

    get topVal() {
        const data = this.data;
        return data.length ? data[0] : null;
    }

    get size() {
        return this.data.length;
    }
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let res = [];
    let heap = new Heap();
    for (let i = 0; i < nums.length; i++) {
        let start = i - k;
        if (start >= 0) {
            heap.delete(nums[start]);
        }

        heap.insert(nums[i]);
        if (heap.size === k) {
            res.push(heap.topVal);
        }
    }
    return res;
};
