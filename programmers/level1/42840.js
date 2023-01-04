function problemSolve(user, answer, index){
    const userSelect = user[index % (user.length)];
    return answer === userSelect;
}
function solution(answers) {
    const firstUser = [1, 2, 3, 4, 5];
    const secondUser = [2, 1, 2, 3, 2, 4, 2, 5];
    const thirdUser = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let firstSolved = 0;
    let secondSolved = 0;
    let thirdSolved = 0;

    answers.map((answer, index) => {
        if (problemSolve(firstUser, answer, index)) firstSolved += 1;
        if (problemSolve(secondUser, answer, index)) secondSolved += 1;
        if (problemSolve(thirdUser, answer, index)) thirdSolved += 1;
    })
    const arr = [firstSolved, secondSolved, thirdSolved];
    let highScore;
    return arr.reduce((acc, cur, index) => {
        if(acc.length === 0 || highScore === cur){
            highScore = cur;
            acc.push(index + 1);
        } else if(highScore < cur){
            highScore = cur;
            acc = [index + 1];
        }
        return acc;
    },[])
}