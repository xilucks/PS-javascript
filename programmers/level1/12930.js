function solution(s) {
    const spellings = s.split('');
    let index = 1;
    return spellings.reduce((acc, cur) => {
        if(cur === ' '){
            index = 1;
            acc.push(cur);
        } else {
            acc.push(index % 2 === 0 ? cur.toLowerCase() : cur.toUpperCase());
            index += 1;
        }
        return acc;

    },[]).join('');
}