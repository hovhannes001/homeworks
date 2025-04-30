// console.log("Hello world");

// let book = {
//     type: "javascript",
//     version: "v8"
// }

// console.log(book.type);
// book["version"] = "v9";

// console.log(book);
// console.log(book.version);

// console.log("\narrays");
// let primes = [1,2,3,4,5];

// for(let i = 0; i < primes.length; i++){
//     console.log(`prime[${i}] = ${primes[i]}`);
// }

// primes[-11] = 6;
// console.log("\nafter adding element");

// for(let i = 0; i < primes.length; i++){
//     console.log(`prime[${i}] = ${primes[i]}`);
// }

// console.log("\n\tfunctions");

// let plus = function(x,y){
//     return x + y;
// }

// console.log(plus(134,56));

// function square(x) {
//     return x **(1/2);
// }

// console.log(square(16));

// const power = (x,y) => x ** y;

// console.log(power(3,3));



// let arr0 = [];

// arr0.push(1,2,3);

// arr0.pop()

// console.log(arr0);

// function prob(){
//     return
//     true;
// }

// console.log(prob());

// let num  = 1_655_345
// console.log(.3333333);

// console.log(num);

// console.log(1/0);

// console.log(-1/0);

// console.log(0/0);

// console.log(-1/Infinity);

// let num1 = true;
// let num2 = 12.34;
// let num3;
// let num4 = null;
// let num5 = BigInt(1_000_000_000)
// console.log(num1.toString(), typeof num1.toString());
// console.log(num2.toString(), typeof num2.toString());
// console.log((typeof num3).toString());
// console.log((typeof num4).toString());
// console.log(num5.toString(), typeof num5.toString());

// let symname = Symbol("arr");

// console.log(symname, typeof symname, );

// const obj = {
//     [symname] : 10,
//     [symname] : 20

// }

// [symname] = 20;

// // console.log(obj)

// console.log("\t\v continue\n");
// const geval = eval;
// let x = "global";
// y = "global";

// function f() {
//     let x = "local";
//     eval("x += 'changed';");
//     return x;
// }

// function g() {
//     let y = "local";
//     geval("y += 'changed';");
//     return y;
// }

// console.log(f(), x);
// console.log(g(), y);


// label:
//     // console.log("jump");
// for (let i = 0;i < 10;i++){
//     if (i == 5) {
//         continue label;
//     }
//     console.log(i);
// }

// console.log("\t\vwith\n");

// const person = {
//     name: "Valod",
//     surname: "James",
//     age: 12
// }

// with (person){
//     console.log(name);
//     console.log(surname);
//     console.log(age);
// }
// let set = new Set([1, 2, 3, 4, 1]);
// console.log(typeof set); // Output: "object"

// console.log(set.entries());

// Define the object
const obj = {
    name: "TestObject",
    regularFunc: function () {
      console.log("regularFunc this:", this);
    },
    arrowFunc: () => {
      console.log("arrowFunc this:", this);
    }
  };
  
  
  console.log("Global this:", this);
  

  obj.regularFunc(); 
  obj.arrowFunc();   
  
//regular functioni jamanak this@ objn e qani vor haytararvel e henc objecti mej
//arrow functionneri jamanak this@ voroshvum e aytnex vortex kanchvel e