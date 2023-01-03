function solution(seoul) {
    let userIndex;
    seoul.filter((name, index) => {
        if (name === 'Kim') userIndex = index;
    });

    return `김서방은 ${userIndex}에 있다`;
}