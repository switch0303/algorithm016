// 347. 前 K 个高频元素
// https://leetcode.com/problems/top-k-frequent-elements/discuss/
// https://leetcode-cn.com/problems/top-k-frequent-elements/
// hash-table, heap

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

class MinHeap {
    constructor(data, compare) {
        this.data = [];
        this.compare = compare || this.defaultCompare;
        if (Array.isArray(data)) {
            for (let item of data) {
                this.add(item);
            }
        }
    }

    defaultCompare(a, b) {
        return a - b;
    }

    add(item) {
        const data = this.data;
        data.push(item);

        let index = data.length - 1;
        while (index) {
            let parent = Math.floor((index - 1) / 2);
            if (this.compare(data[index], data[parent]) > 0) {
                break;
            }
            swap(data, index, parent);
            index = parent;
        }
    }

    shift() {
        const data = this.data;
        if (data.length === 0) {
            return null;
        }

        swap(data, 0, data.length - 1);
        const res = data.pop();

        const len = data.length;
        let parent = 0,
            exchange = parent * 2 + 1;

        while (exchange < len) {
            let right = parent * 2 + 2;
            if (right < len && this.compare(data[right], data[exchange]) < 0) {
                exchange = right;
            }
            if (this.compare(data[exchange], data[parent]) > 0) {
                break;
            }
            swap(data, exchange, parent);
            parent = exchange;
            exchange = parent * 2 + 1;
        }

        return res;
    }

    get min() {
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
var topKFrequent = function (nums, k) {
    let hash = {};
    for (let num of nums) {
        if (hash[num] == null) {
            hash[num] = 1;
        } else {
            hash[num] += 1;
        }
    }

    let heap = new MinHeap(null, (a, b) => hash[a] - hash[b]);
    for (let num in hash) {
        if (heap.size < k) {
            heap.add(num);
        } else {
            if (hash[num] > hash[heap.min]) {
                heap.shift();
                heap.add(num);
            }
        }
    }
    return heap.data;
};
