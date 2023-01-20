function linearSearch(arr, num){
    let ans = -1;
    arr.map((element, index) => {
        if(element === num) {
            return ans = index;
        }
    })

    return ans;
}