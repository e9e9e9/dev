const list = [4, 1, 3, 5, 9, 2, 7, 8, 6];

// 선택 정렬 : 가장 작은 값을 찾아 앞에 위치 시킨다.
for (let i = 0; i < list.length; i++) {
    let minValIdx = i;
    for (let j = i + 1; j < list.length; j++) {
        if (list[j] < list[minValIdx]) {
            minValIdx = j;
        }
    }
    // swap
    const temp = list[i];
    list[i] = list[minValIdx];
    list[minValIdx] = temp;
}

console.log(list);