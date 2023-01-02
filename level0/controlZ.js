function solution(s) {
    var answer = 0;
    const item = s.split(' ')
    for(let i = 0; i < item.length; i++){
        if(item[i] != 'Z'){
            answer += Number(item[i])    
        } else {
            answer -= Number(item[i-1])   
        }
    }
    return answer;
}