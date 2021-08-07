function solution(operations) {
    var answer = [];
    
    for (const operation_str of operations) {
        const operation = operation_str.split(' ');
        if (operation[0] === 'I') {
            answer.push(parseInt(operation[1]));
            answer.sort((a, b) => a - b);
        } else {
            if (operation[1] === '1') {
                if (answer.length > 0) {
                    answer.pop();
                }
            } else {
                if (answer.length > 0) {
                    answer.shift();
                }
            }
        }
    }
    
    if (answer.length > 0) {
        answer = [answer[answer.length - 1], answer[0]];
    } else {
        answer = [0, 0]
    }
    
    return answer;
}