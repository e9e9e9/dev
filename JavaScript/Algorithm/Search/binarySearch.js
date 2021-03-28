const list = [4, 1, 3, 5, 9, 2, 7, 8, 6];
const target = 3;

function binarySearch(list, target, start, end) {
    if (start >= end) {
        return;
    }

    const mid = parseInt(((end - start) / 2) + start);
    console.log(`start : ${start}, end : ${end}, mid : ${mid}, list[mid] : ${list[mid]}`);

    if (list[mid] === target) {
        console.log(`We found target : ${target}`);
        return mid;
    } else if (target < list[mid]) {
        return binarySearch(list, target, start, mid - 1);
    } else {
        return binarySearch(list, target, mid+1, end)
    }
}

list.sort();
result = binarySearch(list, target, 0, list.length - 1);