//synchronous means line by line programming
//asynchronous means multiple programminng

// function parentFunction(callBackFunc: () => void){
//     callBackFunc();
//     console.log("parent function");
//     callBackFunc();
// }

// function cb() {
//   console.log("CallBack Function");
  
// }
//  parentFunction(cb); //or 
// //parentFunction(cb());

// parentFunction(( ) => {});

// console.log("first");

// setTimeout(() => {
//    console.log("second");
   
// }, 0);

// console.log("third");


// let orderPiza = (cb: () => void, handleErrorcb: ()=> void) => {
// console.log("preparing pizza");
 
//  let isburnt = false;

//     setTimeout(() => {
//         if(isburnt) {
//           cb();
//         } else {
//             handleErrorcb();
//         }
//     //return ("your pizza is ready");
//     //console.log("your pizza is ready");  
//     //cb()
//     }, 5000);
//  console.log("test console");
// };

// let ringBell = () => {
// console.log("your pizza is ready");
// }

// let handleErrorcb = () => {
//     console.log("something is went wrong");
//     }

// let pizza = orderPiza(ringBell,handleErrorcb);
// console.log(pizza);
// console.log("Hamzah");

// let makeOrder = () => {
   
//     return new Promise( (resolve,reject) => {
       
//         setTimeout(() => {
//          let isBurnt = false; 
//         if(isBurnt) {
//             reject("something is went wrong");
//         } else {
//             resolve("promise successful")  
//         }
//         }, 2000);
//     })
// }
//  makeOrder()
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));

//   // Asynchronous Function

//   let getOrder = async () => {
//     //let result = 
//     await makeOrder();
    //console.log(result); 
//   }
//getOrder()
//let getOrder = async () => {

// try {
//     let result = await makeOrder();
//     console.log(result) 
// } catch (error) {
//     console.log(error)
// };


let add = (a:number, b: number) => {
    let result = a + b
    return result
  }
  
  const result = add(4, 8)
  
  if(result < 100) {
      console.log("addition");
  }
