
var asyncAdd = (a, b) => {
    // return a promise.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 1500);
    });
}

asyncAdd(1,'3').then((res) => {
    console.log('Result: ', res);
    // return a  new promise to chain promises
    return asyncAdd(res, 33);
}).then((res) => {
    console.log('new answer: ', res);
}).catch((error) => {
    console.log(error);
});

// let somePromise = new Promise((resolve, reject) => {
//     // a promise to go fetch some data/do something
//     setTimeout(() => {
//         //resolve('Hey. It worked!');
//         reject('It did not work');
//     }, 2500);
    
// });

// somePromise.then((message) => {
//     // only gets called if the promise is fulfilled (resolve).
//     console.log('Success: ', message);
// }, (errorMessage) => {
//     console.log('Error: ', errorMessage);
// });