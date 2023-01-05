function findMinNum(arr){
    return [...arr].sort((a,b) => {return a - b}).slice(0, 1);
}
function solution(arr) {
    const minNum = findMinNum(arr)[0];
    const answer = arr.reduce((acc, cur) => {
        if (cur !== minNum) acc.push(cur);
        return acc;
    },[])
    return answer.length === 0 ? [-1] : answer;
}