function solution(arr, divisor) {
    const result = arr.reduce((acc, cur) => {
        if(cur % divisor === 0){
            acc.push(cur);
        }
        return acc;
    },[]);

    return result.length ? result.sort((a, b) => { return a - b}) : [-1];
}