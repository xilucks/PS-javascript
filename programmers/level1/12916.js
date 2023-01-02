function solution(s){
    let pNum = 0;
    let yNum = 0;
    [...s].map((ch) => {
        if(ch === 'p' || ch === 'P') return pNum += 1;
        if(ch === 'y' || ch === 'Y') return yNum += 1;
    });
    return pNum === yNum;
}