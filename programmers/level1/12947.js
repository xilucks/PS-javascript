function solution(x) {
    return x % (x.toString().split('').reduce((acc, cur) => {
        acc += parseInt(cur);
        return acc;
    },0)) === 0;
}