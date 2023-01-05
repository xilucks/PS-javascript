function solution(n) {
    let arr = n.toString().split('').map((item) => {
        return parseInt(item, 10);
    });
    return arr.reverse();
}