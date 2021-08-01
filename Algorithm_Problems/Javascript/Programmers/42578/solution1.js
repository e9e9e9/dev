function solution(clothes) {
    var answer = 1;
    const clothesMap = {};
    for (const cloth of clothes) {
        clothesMap[cloth[1]] = clothesMap[cloth[1]] ? clothesMap[cloth[1]] + 1 : 1;
    }
    Object.values(clothesMap).forEach(cnt => answer = answer * (cnt + 1));
    return answer - 1;
}