var getUser = (id, callback) => {
    var user = {id: 1, name: "Travis"};

    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(1, (user) => {
    // do something with that data.
    console.log(user);
});