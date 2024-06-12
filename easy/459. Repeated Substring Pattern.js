function repeatedSubstringPattern(s) {
    const twoStr = s + s
    const newStr = twoStr.slice(1, -1);
    return newStr.includes(s);
}
//я сегодня готовился к гэку, поэтому кода вообще не написал, но почитал немного базы, как-то так