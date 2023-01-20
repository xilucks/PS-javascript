function binarySearch(arr, targetNum){
    let left = 0;
    let right = arr.length;

    function searching(left, right, targetNum){
        if (left >= right) return -1;
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] === targetNum){
            return mid;
        } else {
            arr[mid] > targetNum ? right = mid - 1 : left = mid + 1;
            return searching(left, right, targetNum);
        }
    }
    return searching(left, right, targetNum);
}

console.log(binarySearch([1,2,3,4,5],6))