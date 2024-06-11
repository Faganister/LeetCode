function repeatedSubstringPattern(s) {
    const twoStr = s + s
    const newStr = twoStr.slice(1, -1);
    return newStr.includes(s);
}