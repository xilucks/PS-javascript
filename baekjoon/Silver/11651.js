const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input= [];
readline.on('line', (line) => {
    input.push(line);
}).on("close", ()=> {
    let n = parseInt(input[0]);
    let list = input.slice(1, input.length);
    console.log(solution(n, list));
})


const solution = (n, list) => {
    const dotsArrays = list.reduce((acc, cur) => {
        let dots = cur.split(' ');
        let x = parseInt(dots[0]);
        let y = parseInt(dots[1]);
        acc.push([x, y]);

        return acc;
    }, []);

    dotsArrays.sort((a, b) => {
        if(a[1] === b[1]) return  a[0] - b[0];
        return a[1] - b[1]
    });

    return dotsArrays.reduce((acc, cur) => {
        acc += `${cur[0]} ${cur[1]}\n`;
        return acc;
    },'');
}