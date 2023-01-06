function solution(n) {
    const nums = n.toString().split('');
    return parseInt(nums.sort( (a,b) => {return b - a }).join(''));
}