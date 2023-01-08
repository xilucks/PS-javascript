function solution(dartResult) {
    const dart = dartResult.split('');
    let weight = -1;
    let pointStack = [];
    const result = dart.reduce((acc, cur) => {
        if(cur >= 0 || cur <= 10) {
            if(parseInt(cur) === 0 && weight !== -1){
                weight = 10;
            } else {
                weight = cur;
            }
            return acc;
        } else {
            if (cur === '*') {
                pointStack = pointStack.map((point) => {return point * 2});
            } else if ( cur === '#'){
                pointStack.push(parseInt(pointStack.pop()) * -1);
            } else if (cur === 'S') {
                pointStack.push(parseInt(weight));
            } else if (cur === 'D') {
                console.log('D')
                pointStack.push(parseInt(weight) ** 2);
            } else if (cur === 'T') {
                pointStack.push(parseInt(weight) ** 3);
            }
            weight = -1;
        }
        if(pointStack.length > 2) {
            acc += parseInt(pointStack.shift());
        }
        return acc;
    },0);
    return pointStack.reduce((acc, cur) => {
        acc += cur;
        return acc;
    }, result)
}