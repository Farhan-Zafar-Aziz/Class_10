// //Callback function
//  function makeFryAnda(callback) {
//     setTimeout(() => {
//        // callback("Egg is ready");
//     }, 2000);
//  }
//  function toastBread(toaster){
//     setTimeout(() => {
//       // toaster("Toast is ready") 
//     }, 2000);
//  }
//  toastBread(function(a){
//     console.log(a);
//     makeFryAnda(function(b){
//         console.log(b);
//     })
//  })

// //promises 
// function getToastPromise(){
//     return new Promise((resolve, reject)=>{  
//         let wifeMood = 6;
//         if(wifeMood >= 5) {
//            resolve("Toast ready");
//         } 
//         else {
//             reject("She is in a bad mood")
//         }
//     })
// }
// getToastPromise().then((arg)=>{
//     console.log(arg)
// })
// .catch((error)=>{
//     console.log(error);
// });

function doSomething(callback) {
    console.log("Eating");
    callback();

function doing(argument) {
    console.log('washing');
}
}
doSomething(argument)//matlb ye k aesa function jisy ham kisi function k undr parameter tor call kren. jese k 'doSomething' ak function h or 'doing' bhi ak function h jisy hamny 'doSomething' function mn assign krny k baad usy 'doSomething' function ko call krty waqt parameter k tor call kya h. 

const loginUser = (email, pass, callbackFunc) => {
    setTimeout(() => {
       callbackFunc(email) 
    }, 2000);
}

const userVideos = (email,cb) => {
    setTimeout(() => {
       cb(["video 1","video 2","video 3"]); 
    }, 3000);
}
loginUser("aziz@gmail.com",12345), (email) => {
    console.log("user logged in");
    console.log(userVideos(email, (videos) => {console.log("got videos");}));
}

let add = (a, b) => {
  let result = a + b
  return result
}

const result = add(4, 8)

if(result < 100) {
    console.log("addition");
}




















