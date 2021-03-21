const list = [4, 1, 3, 5, 9, 2, 7, 8, 6];

function quick(list, startIdx, endIdx) {
    // console.log(`startIdx : ${startIdx}, endIdx : ${endIdx}`);
    // startIdx가 endIdx보다 크거나 같은 경우
    // 이미 분할된 list가 정렬이 완료된 상태
    if (startIdx >= endIdx) {
        return;
    }

    const pivotIdx = startIdx;
    let leftIdx = startIdx + 1;
    let rightIdx = endIdx;

    while(leftIdx <= rightIdx) {
        // console.log(`leftIdx : ${leftIdx}, rightIdx : ${rightIdx}`);
        // left value가 pivot 보다 클 때 까지 index 증가
        while (leftIdx <= endIdx && list[leftIdx] < list[pivotIdx]) {
            leftIdx++;
        }
        // right value가 pivot 보다 작을 때 까지 index 감소
        while (rightIdx > pivotIdx && list[rightIdx] > list[pivotIdx]) {
            rightIdx--;
        }
        // left와 right 가 엇갈렸을 때 pivot과 right(작은값)를 Swap
        if (leftIdx > rightIdx) {
            const temp = list[pivotIdx];
            list[pivotIdx] = list[rightIdx];
            list[rightIdx] = temp;
        } 
        // 엇갈리지 않은 경우 left와 right를 Swap
        else { 
            const temp = list[rightIdx];
            list[rightIdx] = list[leftIdx];
            list[leftIdx] = temp;
        }
    }
    
    quick(list, startIdx, rightIdx - 1);
    quick(list, rightIdx + 1, endIdx);
}

quick(list, 0, list.length - 1)
console.log(list);