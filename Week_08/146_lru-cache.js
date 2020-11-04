// 146. LRU缓存机制
// https://leetcode.com/problems/lru-cache/discuss/
// https://leetcode-cn.com/problems/lru-cache/
// design

// 方法一：使用Map
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.cache = new Map();
    this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.cache.has(key)) {
        let value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }
    return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.cache.has(key)) {
        this.cache.delete(key);
    } else {
        if (this.cache.size === this.capacity) {
            this.cache.delete(this.cache.keys().next().value);
        }
    }
    this.cache.set(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// 方法二：使用哈希表+双向链表
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
class DoublyLinkedList {
    constructor() {
        this._size = 0;
        this.head = new Node();
        this.tail = new Node();
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    get size() {
        return this._size;
    }
    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this._size -= 1;
    }
    prepend(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
        this._size += 1;
    }
    getLastNode() {
        return this.tail.prev;
    }
}
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.hash = {};
    this.dbLinkedList = new DoublyLinkedList();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    let node = this.hash[key];
    if (node != null) {
        this.dbLinkedList.remove(node);
        this.dbLinkedList.prepend(node);
        return node.value;
    }
    return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    let node = this.hash[key];
    if (node != null) {
        node.value = value;
        this.dbLinkedList.remove(node);
        this.dbLinkedList.prepend(node);
    } else {
        if (this.dbLinkedList.size === this.capacity) {
            let lastNode = this.dbLinkedList.getLastNode();
            this.dbLinkedList.remove(lastNode);
            delete this.hash[lastNode.key];
        }
        let node = new Node(key, value);
        this.dbLinkedList.prepend(node);
        this.hash[key] = node;
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
