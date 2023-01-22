const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input= [];
readline.on('line', (line) => {
    input.push(line);
}).on("close", ()=> {
    let n = parseInt(input[0]);
    console.log(solution(n));
})


const solution = (n) => {
    let largeSugar = Math.floor(n / 5);
    let lastSugar = n - largeSugar * 5;
    const countSugar = (five, last)  => {
        if(five === -1) return -1;
        return last % 3 === 0 ? five + last / 3 : countSugar(five - 1, last + 5);
    }
    return countSugar(largeSugar, lastSugar);
}