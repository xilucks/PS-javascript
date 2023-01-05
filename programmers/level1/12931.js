function solution(n){
    const nums = n.toString().split('');
    return nums.reduce((acc, cur) => {
        acc += parseInt(cur);
        return acc;
    },0)
}