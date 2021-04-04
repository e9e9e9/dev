// Divide 와 Conquer 구간을 명확히 인지해야 함
// targetList, left, mid, right 값을 활용
// sorted를 관리할 추가 메모리 필요

// 동작
//      1. mid를 기준으로 left와 right를 나눈다.
//      2. 1개의 인자가 될 때까지 나눈다.
//      3. merge를 수행한다.
//          3-1. Sorted에 대상이 되는 left구간과 right구간까지 순서대로 넣어준다.
//          3-2. left or right의 인자가 남아있는 경우 나머지 값을 Sorted에 넣어준다.
//          3-3. list에 sorted 값을 Copy해준다. 

const list = [4, 1, 3, 5, 9, 2, 7, 8, 6];
const sorted = Array(list.length);

// left : merge하는 대상의 시작점
// right : merge하는 대성의 마지막점
function merge(list, left, mid, right) {
    let leftOfleft = left;
    let leftOfRight = mid + 1;
    let sortedIdx = left;

    // 왼쪽과 오른쪽의 각 리스트에서 작은 값을 순서대로 Sorted에 넣어준다
    while(leftOfleft <= mid && leftOfRight <= right) {
        if (list[leftOfleft] <= list[leftOfRight]) {
            sorted[sortedIdx] = list[leftOfleft];
            leftOfleft++;
        } else {
            sorted[sortedIdx] = list[leftOfRight];
            leftOfRight++;
        }
        sortedIdx++;
    }

    // left 값들이 모두 Sorted에 들어가 있는 경우
    if (leftOfleft > mid) {
        while (leftOfRight <= right) {
            sorted[sortedIdx] = list[leftOfRight];
            leftOfRight++;
            sortedIdx++;
        }
    } 
    
    // right 값들이 모두 Sorted에 들어가 있는 경우
    if (leftOfRight > right){ 
        while (leftOfleft <= mid) {
            sorted[sortedIdx] = list[leftOfleft];
            leftOfleft++;
            sortedIdx++;
        }
    }

    // Copy to Original
    for (let i = left; i <= right; i++) {
        list[i] = sorted[i];
    }
}

function mergeSort(list, left, right) {
    if (left >= right) {
        return;
    }

    const mid = Math.floor((left + right) / 2);
    mergeSort(list, left, mid);
    mergeSort(list, mid + 1, right);
    merge(list, left, mid, right);
}

mergeSort(list, 0, list.length - 1);
console.log(list);


