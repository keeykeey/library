function getDistance(arr1,arr2){
    let loss = 0;
    for (let integer = 0; integer < arr1.length; integer ++){
        loss += (arr1[integer]-arr2[integer])
    } 
    return loss
}

arr1 = [10,10,10]
arr2 = [5,5,5]
loss = getDistance(arr1,arr2);
console.log(loss);

