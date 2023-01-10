// var arr = [4,8,15,16,23,42];
// let a = arr[0];
// let [first, ...others] = arr;

// console.log(first);
// console.log(others);
// console.log(banana);
// console.log(more);
// console.log(another);

// var fruit1 = "apples";
// var fruit2 = "oranges";
// [fruit1,fruit2] = [fruit2,fruit1];

// console.log(fruit1 + fruit2);

// var sundae = {
//     "flavor": "vanilla",
//     "numScoops": 5,
//     "sprinkles": true,
//     "toppings": ["hot fudge", "pecans", "cherry"]
// }

// let {toppings,sprinkles, ...banana} = sundae;
// let {...copy} = sundae;
// copy.toppings.pop();

// // sprinkles = false;
// // toppings.push("whipped cream");
// copy.flavor = "chocolate";
// console.log(sundae);
// console.log(copy);

var faves = ["pistachio", "cookie dough", "cookies and cream"];
let newList = ["vanilla", ...faves, "raspberry sorbet", "strawberry"];
// let copy = [...faves];
// newList.push("mango sorbet");
console.log(newList);
console.log(faves);