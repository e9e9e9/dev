function solution(array, commands) {
    var answer = [];
    
    for (let arr of commands) {
        const [i, j, k] = arr;
        answer.push(array.slice(i - 1, j).sort((first, second) => first - second)[k - 1])
    }
    
    return answer;
}