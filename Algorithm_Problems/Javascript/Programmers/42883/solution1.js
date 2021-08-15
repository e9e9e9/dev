function solution(number, k) {
    let answer = '';    
    let idx = 0;
    
    number = number.split('').map(el => Number(el));

    while (k > 0) {
        if (number.length - idx === k) {
            idx = number.length;
            break;
        }
        const targetArr = number.slice(idx, idx + k + 1);
        const target = Math.max(...targetArr);
        const target_idx = idx + targetArr.indexOf(target);
        answer += target.toString();
        k -= target_idx - idx;
        idx = target_idx + 1;
    }
    return answer + number.slice(idx).join('');
}