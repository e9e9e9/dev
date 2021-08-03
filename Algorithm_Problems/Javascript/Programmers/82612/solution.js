function solution(price, money, count) {
    return Math.max((count * ((count + 1) * price)) / 2 - money, 0);
}