function solution(food) {
    let eating = [];
    food.map((element, index) => {
        if(index !== 0){
            let foodNum = Math.floor(element / 2);
            for(let i = 0; i < foodNum; i++){
                eating.push(index);
            }
        }
    });
    return eating.join('') + '0' + eating.reverse().join('');
}