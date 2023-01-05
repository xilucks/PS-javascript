function collatz(num){
    return num % 2 === 0 ? (num / 2) : (num * 3 + 1);
}

function solution(num) {
    let answer = 0;
    let nowNum = num;
    while (nowNum !== 1){
        if(answer >= 500) {
            break;
        }
        nowNum = collatz(nowNum);
        answer += 1;
    }
    return answer >= 500 ? -1 : answer;
}