function solution(numbers) {
    numbers.sort((a, b)=>{
        const strA = a.toString();
        const strB = b.toString();
        
        if (parseInt(strA + strB) > parseInt(strB + strA)) {
            return -1;
        }
        return 1;        
    })
    return numbers[0] === 0 ? '0' : numbers.join('');
}