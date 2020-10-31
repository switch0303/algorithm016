// 127. 单词接龙
// https://leetcode.com/problems/word-ladder/discuss/
// https://leetcode-cn.com/problems/word-ladder/
// breadth-first-search

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    let wordListSet = new Set(wordList);
    if (!wordListSet.has(endWord)) return 0;
    if (beginWord === endWord) return 1;

    let beginSet = new Set([beginWord]),
        endSet = new Set([endWord]),
        count = 1;
    wordLen = beginWord.length;

    while (beginSet.size > 0) {
        count += 1;
        let newBeginSet = new Set();
        for (let word of beginSet) {
            for (let i = 0; i < wordLen; i++) {
                for (let j = 97; j < 123; j++) {
                    let char = String.fromCharCode(j);
                    if (char !== word[i]) {
                        let newWord =
                            word.slice(0, i) + char + word.slice(i + 1);
                        if (endSet.has(newWord)) return count;
                        if (wordListSet.has(newWord)) {
                            newBeginSet.add(newWord);
                            wordListSet.delete(newWord);
                        }
                    }
                }
            }
        }
        beginSet = newBeginSet;
        if (beginSet.size > endSet.size) {
            [beginSet, endSet] = [endSet, beginSet];
        }
    }
    return 0;
};
