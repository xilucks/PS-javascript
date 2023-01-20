function power(base, num){
    if(num === 0){
        return 1;
    }
    return base * power(base, num - 1);
}
