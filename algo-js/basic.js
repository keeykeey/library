function getDistance(array){
    let loss = 0;
    for (const value of array){
        loss += value;
    } 
    return loss
}

array = [...Array(5).keys()];
array = [1,2,3]
loss = getDistance(array);
console.log(loss);

