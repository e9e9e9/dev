// https://school.programmers.co.kr/learn/courses/30/lessons/67259

let costMapFromR;
let costMapFromC;

function findRoute(board, startPoint, direction, cost, visitParam) {
    const copiedBoard = board.map(el => [...el]);
    const visitedNodes = [...visitParam, [startPoint]];
    const [r, c] = startPoint;
    const right = c + 1;
    const left = c - 1;
    const top = r - 1;
    const bottom = r + 1;
    const candidates = [];
    let possible = false;

    // console.log(`access startPoint : [${r}, ${c}] => ${cost}`);
    // console.log(`visitedNodes : ${visitedNodes}`);
    if (r === board.length - 1 && c === board.length -1) {
        return cost;
    }

    if (direction === 'r' && costMapFromR[r][c] !== -1) {
        return costMapFromR[r][c];
    }
    if (direction === 'c' && costMapFromC[r][c] !== -1) {
        return costMapFromC[r][c];
    }

    if (right < board.length && board[r][right] === 0) {
        let localCost = cost;
        possible = true;
        copiedBoard[r][c] = 1;
        if (direction === 'c') {
            localCost += 500;
        }
        localCost += 100;
        candidates.push(findRoute(copiedBoard, [r, right], 'r', localCost, visitedNodes));
    }
    if(left >= 0 && board[r][left] === 0) {
        let localCost = cost;
        possible = true;
        copiedBoard[r][c] = 1;
        if (direction === 'c') {
            localCost += 500;
        }
        localCost += 100;
        candidates.push(findRoute(copiedBoard, [r, left], 'r', localCost, visitedNodes));
    }
    if(top >= 0 && board[top][c] === 0) {
        let localCost = cost;
        possible = true;
        copiedBoard[r][c] = 1;
        if (direction === 'r') {
            localCost += 500;
        }
        localCost += 100;
        candidates.push(findRoute(copiedBoard, [top, c], 'c', localCost, visitedNodes));
    }
    if(bottom < board.length && board[bottom][c] === 0) {
        let localCost = cost;
        possible = true;
        copiedBoard[r][c] = 1;
        if (direction === 'r') {
            localCost += 500;
        }
        localCost += 100;
        candidates.push(findRoute(copiedBoard, [bottom, c], 'c', localCost, visitedNodes));
    }
    if (possible === false) {
        // console.log(`impossible : [${r}, ${c}]`);
        return 987654321;
    }

    let result = Math.min(...candidates);
    if (direction === 'r' && costMapFromR[r][c] !== -1) {
        costMapFromR[r][c] = result;
    }
    if (direction === 'c' && costMapFromC[r][c] !== -1) {
        costMapFromC[r][c] = result;
    }
    return result;
}

function solution(board) {
    const startPoint = [0, 0];
    costMapFromR = Array.from({length: board.length},() => Array(board.length).fill(-1));
    costMapFromC = Array.from({length: board.length},() => Array(board.length).fill(-1));

    const result = findRoute(board, startPoint, undefined, 0, []);
    console.log('result : ' + result);


    return result;

}

solution([[0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 1], [0, 0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0]]);
// solution([[0, 0, 0], [0, 0, 0], [0, 0, 0]])