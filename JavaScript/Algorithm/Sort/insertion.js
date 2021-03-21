const list = [4, 1, 3, 5, 9, 2, 7, 8, 6];

// 삽입 정렬 : 정렬중인 리스트 내 선택된 원소를 위치시키는 정렬
for (let i = 1; i < list.length; i++) {
    // 이동의 대상 : j + 1
    for (let j = i - 1; j >= 0; j--) {
        if (list[j+1] < list[j]) {
             // swap
            const temp = list[j+1];
            list[j+1] = list[j];
            list[j] = temp;
        } else {
            break;
        }
    }
}

console.log(list);