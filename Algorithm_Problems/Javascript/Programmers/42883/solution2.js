function solution(number, k) {
    let answer = '';    
    let idx = 0;
    
    number = number.split('').map(el => Number(el));

    while (k > 0) {
        if (number.length - idx <= k) {
            idx = number.length;
            break;
        }
        const targetArr = number.slice(idx, idx + k + 1);
        const target = Math.max(...targetArr);
        let targets = targetArr.filter(el => el === target);
        let target_cnt = targets.length;
        const remove_cnt = targetArr.length - target_cnt;
        const target_idx = idx + targetArr.lastIndexOf(target);
        if (target_idx === targetArr.length - 1 && remove_cnt < k) {
            targets = targets.slice(k);
            target_cnt = targets.length;
        }
        answer += targets.join("");
        k -= (target_idx - idx - (target_cnt - 1));
        idx = target_idx + 1;
    }
    return answer + number.slice(idx).join('');
}