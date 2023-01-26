function solution(numbers) {
    var answer = 0;
    const sortNum = numbers.sort((a,b)=>a-b)
    // 제일 큰 음수*음수 혹은 양수*양수가 결과값이 가장 큼
    const expArr = Math.max(sortNum[0] * sortNum[1],sortNum[sortNum.length - 1] * sortNum[sortNum.length - 2])
    return expArr
}