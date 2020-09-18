// 剑指 Offer 40. 最小的k个数
// https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/
// heap

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

class MaxHeap {
    constructor(data) {
        this.data = [];
        if (Array.isArray(data)) {
            for (let item of data) {
                this.add(item);
            }
        }
    }

    add(item) {
        const data = this.data;
        data.push(item);

        let index = data.length - 1;
        while (index) {
            let parent = Math.floor((index - 1) / 2);
            if (data[index] < data[parent]) {
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
            if (right < len && data[right] > data[exchange]) {
                exchange = right;
            }
            if (data[exchange] < data[parent]) {
                break;
            }
            swap(data, exchange, parent);
            parent = exchange;
            exchange = parent * 2 + 1;
        }

        return res;
    }

    get max() {
        const data = this.data;
        return data.length ? data[0] : null;
    }
}
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
    if (k >= arr.length) {
        return arr;
    }
    const maxHeap = new MaxHeap(arr.slice(0, k));
    for (let i = k; i < arr.length; i++) {
        if (arr[i] < maxHeap.max) {
            maxHeap.shift();
            maxHeap.add(arr[i]);
        }
    }
    return maxHeap.data;
};
