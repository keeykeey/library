function getSumOfLoss(_y,_x){
    //_y is a array of test data and _x is a array of train data
    const loss = 0;
    for (let integer = 0; integer < _y.length; integer ++){
        loss += (_y[integer]-_x[integer])
    } 
    return loss;
}

function get_L1_norm(x1,y1,x2,y2){
    const d1 = Math.abs(x2 - x1);
    const d2 = Math.abs(y2 - y1);
    const distance = Math.abs(d1 + d2);

    return distanve;
} 
    
function get_L2_norm(x1,y1,x2,y2){
    const d1 = Math.abs(x2 - x1);
    const d2 = Math.abs(y2 - y1);
    const distance = Math.abs((d1+d2)**2);

    return distanve;
} 



arr1 = [10,10,10];
arr2 = [5,5,5];
loss = getDistance(arr1,arr2);
console.log(loss);


