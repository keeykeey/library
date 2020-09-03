function getDistance(...array){
    let loss = 0;
    for (const value of array){
        loss += int(value);
    } 
    return loss
}

array = [...Array(5).keys()];
loss = getDistance(array);
console.log(loss);

