function solution(brown, yellow) {
    const col1 = ((brown + 4) + Math.sqrt(Math.pow(-(brown + 4), 2) - 4 * 2 * (2 * brown + 2 * yellow))) / 4
    const col2 = ((brown + 4) - Math.sqrt(Math.pow(-(brown + 4), 2) - 4 * 2 * (2 * brown + 2 * yellow))) / 4
    
    return [Math.max(col1, col2), Math.min(col1, col2)];
}