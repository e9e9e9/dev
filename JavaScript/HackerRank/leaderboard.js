function climbingLeaderboard(ranked, player) {
    // Write your code here
    ranked.sort((a, b) => b - a);
    
    const rankWithScores = [];
    let myRank = 0;
    let preScore = -1;
    for (const rank of ranked) {
         if (preScore !== rank) {
              myRank++;
        }
        preScore = rank;
        rankWithScores.push([myRank, rank]);
    }
    // console.log(`origin rankWithScore : ${rankWithScores}`);

    
    function findRank(score, start, end) {
        // console.log(`score : ${score}`);
        if (start >= end) {
            if (score >= rankWithScores[start][1]) {
                return rankWithScores[start][0];
            } else {
                return rankWithScores[start][0] + 1;
            }
        }
        const midIndex = Math.floor((end + start) / 2);

        // console.log('midIndex', midIndex);
        const mid = rankWithScores[midIndex];
        if (score > mid[1]) {
            if (midIndex === 0) {
                return 1;
            }
            return findRank(score, start, midIndex);
        } else if (score < mid[1]) {
            if (midIndex === rankWithScores.length - 1) {
                return mid[0] + 1;
            }
            return findRank(score, midIndex + 1, end);
        } else {
            return mid[0];
        }
    }
    
    const result = [];
    for (const score of player) {
        // console.log(`======= score : ${score} =======`);
        const partResult = findRank(score, 0, rankWithScores.length);
        // console.log(`^^^^^ partResult : ${partResult} ^^^^^`);
        result.push(partResult);
    }
    // console.log(`result : ${result}`);
    return result;
}

// climbingLeaderboard('100 90 90 80 75 60'.split(' ').map(el => parseInt(el)), '120'.split(' ').map(el => parseInt(el)));
// climbingLeaderboard('100 90 90 80 75 60'.split(' ').map(el => parseInt(el)), '120'.split(' ').map(el => parseInt(el)));
climbingLeaderboard('100 90 90 80 75 60'.split(' ').map(el => parseInt(el)), '50 65 77 90 102'.split(' ').map(el => parseInt(el)));
climbingLeaderboard('100 100 50 40 40 20 10'.split(' ').map(el => parseInt(el)), '5 25 50 120'.split(' ').map(el => parseInt(el)));