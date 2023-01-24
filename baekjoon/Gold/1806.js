const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input= [];
readline.on('line', (line) => {
    input.push(line);
}).on("close", ()=> {
    let [n, s] = input[0].split(' ').map(Number);
    let nums = input[1].split(' ').map(Number);
    console.log(solution(n, s, nums));
})

const solution = (n, s ,nums) => {
    nums.sort((a, b) => { return a - b });
    let left = 0;
    let right = 0;
    let sum = nums[left];
    let answer = Infinity;

    while(left <= right && right < nums.length) {
        if(sum < s){
            right += 1;
            if(right >= n) continue;
            sum += nums[right];
        } else {
            answer = answer > (right - left + 1) ? right - left + 1 : answer;
            sum -= nums[left++];
        }
    }

    return answer === Infinity ? 0 : answer;
}