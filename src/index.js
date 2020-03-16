module.exports = function check(str, bracketsConfig) {
    // your solution
    let arr = []
    for (let s of str) {
        let isBracketCorrect = false;
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (s === bracketsConfig[i][1] && arr[arr.length - 1] === bracketsConfig[i][0]) {
                arr.pop();
                isBracketCorrect = true;
            } else if (s === bracketsConfig[i][0]) {
                arr.push(s);
                isBracketCorrect = true;
            }
        }
        if (!isBracketCorrect) {
            return false
        }
    }
    return arr.length === 0;
}
