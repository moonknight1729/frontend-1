// function doSomething() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         // Other things to do before completion of the promise
//         console.log("Did something");
//         // The fulfillment value of the promise
//         resolve("https://example.com/");
//       }, 200);
//     });
//   }

  // doSomething(function (result) {
  //   doSomethingElse(result, function (newResult) {
  //     doThirdThing(newResult, function (finalResult) {
  //       console.log(`Got the final result: ${finalResult}`);
  //     }, failureCallback);
  //   }, failureCallb  8`1ack);
  // }, failureCallback);

//   function hello(){
//     console.log("Hello World!");
//   }

//   const promise=doSomething();
//   console.log(promise);
//   promise.then(hello); 

// doSomething()
//   .then(function (result) {
//     return doSomethingElse(result);
//   })
//   .then(function (newResult) {
//     return doThirdThing(newResult);
//   })
//   .then(function (finalResult) {
//     console.log(`Got the final result: ${finalResult}`);
//   })
//   .catch(failureCallback);


function doSomething(resolve,error){

}