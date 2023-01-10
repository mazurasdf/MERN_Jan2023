function bubbleSort(array){
    let swapped = true;
    while(swapped){
        console.log("running the inner loop again");
        swapped = false;
        for(let i = 0; i < array.length; i++){
            if(array[i] > array[i+1]){
                console.log(`swapping bigger value ${array[i]} with smaller value ${array[i+1]}`);
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                
                swapped = true;
            }
        }
    }
    return array;
}

var test1 = [5,4,2,6,8,14,1,3,20,-5,24];
console.log(bubbleSort(test1));