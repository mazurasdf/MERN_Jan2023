// function doThing(param, times){
//     function helperFunc(){
//         console.log("running the inner function now!");
//         console.log(param);
//     }

//     for(var i = 0; i < times; i++){
//         helperFunc();
//     }    
// }

// doThing("hey it's me!",5);

// function printStatement(){
//     console.log("wow did you really expect this code to be passed around so much?");
// }

function doSomethingXTimes(otherFunc,x){
    for(let i = 0; i < x; i++){
        otherFunc();
    }
}

const calculateSquare = (num) => {
    return num * num;
}

console.log(calculateSquare(5));


doSomethingXTimes((x,y,z) => {console.log("now we're running an anonymous function!");console.log("second line!")},10);