const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input= [];
readline.on('line', (line) => {
    input.push(line);
}).on("close", ()=> {
    let n = parseInt(input[0]);
    let x = parseInt(input[input.length-1]);
    let list = input.slice(1, input.length-1)[0].split(' ').map(Number);
    console.log(solution(n, list, x));
})


const solution = (n, list, x) => {
    let left = 0;
    let right = list.length - 1;
    let ans = 0;
    list.sort((a, b) => {return a - b});

    while(left < right){
        let sum = list[left] + list[right];
        if(sum === x){
            ans += 1;
            left += 1;
        } else if(sum > x) {
            right -= 1;
        } else {
            left += 1;
        }
    }
    return ans;
}