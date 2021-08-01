function solution(genres, plays) {
    var answer = [];
    const totalCnt = {};
    const totalCntArr = [];
    const idAndPlays = {};
    
    for (const [idx, genre] of genres.entries()) {
        totalCnt[genre] ? totalCnt[genre] += plays[idx] : totalCnt[genre] = plays[idx];
        if (idAndPlays[genre]) {
            idAndPlays[genre].push([idx, plays[idx]])
        } else {
            idAndPlays[genre] = [[idx, plays[idx]]];
        }
    }
    
    for (const [genre, cnt] of Object.entries(totalCnt)) {
        totalCntArr.push([genre, cnt]);
    }
    totalCntArr.sort((a, b) => b[1] - a[1]);
    // idAndPlays.sort((a, b) => b[1] - a[1]);
    
    for (const [genre, item] of Object.entries(idAndPlays)) {
        item.sort((a, b) => b[1] - a[1]);
    }
    
    for (const [genre, totalCnt] of totalCntArr) {
        for (const [idx, val] of idAndPlays[genre].entries()) {
            if (idx > 1) {
                break;
            }
            answer.push(val[0]);
        }
    }
    // console.log(totalCntArr);
    // console.log(idAndPlays);
    // console.log(answer);
    return answer;
}