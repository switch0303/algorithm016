// 剑指 Offer 49. 丑数
// https://leetcode-cn.com/problems/chou-shu-lcof/
// heap

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

class MinHeap {
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
            if (data[index] > data[parent]) {
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
            if (right < len && data[right] < data[exchange]) {
                exchange = right;
            }
            if (data[exchange] > data[parent]) {
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
}

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    const res = [];
    const heap = new MinHeap([1]);
    const hash = { 1: true };
    const primes = [2, 3, 5];

    for (let i = 0; i < n; i++) {
        res[i] = heap.shift();
        for (let prime of primes) {
            let temp = res[i] * prime;
            if (!hash[temp]) {
                heap.add(temp);
                hash[temp] = true;
            }
        }
    }

    return res[n - 1];
};
