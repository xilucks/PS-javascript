function solution(a, b) {
    let min = a < b ? a : b;
    let max = a < b ? b : a;
    let answer = 0;
    for(let i = min; i<=max; i++){
        answer += i;
    }
    return answer;
}