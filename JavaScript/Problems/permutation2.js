// generated by chatgpt

const getPermutations = arr => {
    if (arr.length === 0) return [[]]; // 기저 사례: 빈 배열이면 빈 배열을 포함하는 배열을 반환
  
    const [first, ...rest] = arr; // 배열을 첫 번째 요소와 나머지 요소들로 분리
    const permsWithoutFirst = getPermutations(rest); // 나머지 요소들에 대한 순열을 재귀적으로 구함
    const allPermutations = []; // 모든 순열을 저장할 배열
  
    permsWithoutFirst.forEach(perm => {
      for (let i = 0; i <= perm.length; i++) {
        const permWithFirst = [...perm.slice(0, i), first, ...perm.slice(i)]; // 첫 번째 요소를 다양한 위치에 삽입
        allPermutations.push(permWithFirst); // 새로운 순열을 결과 배열에 추가
      }
    });
  
    return allPermutations; // 모든 순열을 반환
  };

console.log(getPermutations([1,2,3,4]));
console.log(getPermutations([1]));