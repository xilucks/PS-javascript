const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input= [];
readline.on('line', (line) => {
    input.push(line);
}).on("close", ()=> {
    let n = parseInt(input[0]);
    let liquids = input[1].split(' ').map(Number);
    console.log(solution(n, liquids));
})

const solution = (n ,liquids) => {
    liquids.sort((a, b) => { return a - b });
    let left = 0;
    let right = liquids.length - 1;

    let answer = [liquids[left], liquids[right]];

    while(left < right){
        if(Math.abs(answer[0] + answer[1]) > Math.abs(liquids[left] + liquids[right])){
            answer[0] = liquids[left];
            answer[1] = liquids[right];
        }

        if (liquids[left] + liquids[right] > 0){
            right -= 1;
        } else {
            left += 1;
        }
    }

    return answer.join(' ');
}
