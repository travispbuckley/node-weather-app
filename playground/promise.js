let somePromise = new Promise((resolve, reject) => {
    // a promise to go fetch some data/do something
    setTimeout(() => {
        //resolve('Hey. It worked!');
        reject('It did not work');
    }, 2500);
    
});

somePromise.then((message) => {
    // only gets called if the promise is fulfilled (resolve).
    console.log('Success: ', message);
}, (errorMessage) => {
    console.log('Error: ', errorMessage);
});