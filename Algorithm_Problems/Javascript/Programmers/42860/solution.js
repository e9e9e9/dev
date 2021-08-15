function solution(name) {
    const alphabetObj = {};
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    alphabet.map((el, idx) => {
        alphabetObj[el] = idx < 13 ?  idx : 26 - idx;
    });
    
    const nameArr = name.split('');
    let idxsNotA = [];
    let answer = 0;
    for (const [idx, el] of nameArr.entries()) {
        answer += alphabetObj[el];
        if (idx !== 0 && el !== 'A') {
            idxsNotA.push([idx, Math.min(nameArr.length - idx, idx)]);
        }
    }
    
    // Greedy : 현재 위치에서 가장 가까운 A가 아닌 Char를 가진 곳으로 이동
    while (idxsNotA.length > 0) {
        idxsNotA.sort((a, b) => a[1] - b[1]);
        const minEl = idxsNotA.shift();
        answer += minEl[1];
        
        idxsNotA.map(el => 
                     el[1] = Math.min(
            (nameArr.length - el[0] + minEl[0]) % nameArr.length, // 역방향으로 가는 가중치
            Math.abs(el[0] - minEl[0]))); // 정방향으로 가는 가중치
    }
    
    return answer;
}