function solution(N, number) {
    let answer = 9;
    const getCnt = (currVal, idx, cnt, values) => {
        // console.log(currVal, idx, cnt);
        if (cnt > 8 || cnt >= answer) {
            return;
        }
        console.log(values.join(''));
        if (eval(values.join('')) == number) {
        // if (currVal == number) {
            
            // console.log(crrVal);
            return answer = Math.min(answer, cnt);
        }
        
        let val = 0;
        for (let i = 0; i < (8 - cnt); i++) {
            val += N * Math.pow(10, i);
            if (idx === 0) {
                return getCnt(val, idx + 1, i + 1, [...values, val]);
            }
            const modified = [...values];
            modified.splice(values.length -1, 0, '(');
            getCnt(currVal + val, idx + 1, cnt + i + 1, [...values,'+', val]);
            getCnt(currVal - val, idx + 1, cnt + i + 1, [...values,'-', val]);
            if (values[values.length -1] != ')') {
                getCnt(currVal + val, idx + 1, cnt + i + 1, [...modified, '+', val, ')']);
                getCnt(currVal - val, idx + 1, cnt + i + 1, [...modified, '-', val, ')']);
            }
            getCnt(Math.floor(currVal / val), idx + 1, cnt + i + 1, [...values, '/', val]);
            getCnt(currVal * val, idx + 1, cnt + i + 1, [...values,'*', val]);
        }
    }
    
    getCnt(0, 0, 0, []);
    console.log(answer);
    return answer === 9 ? -1 : answer;
}

solution(5, 12);