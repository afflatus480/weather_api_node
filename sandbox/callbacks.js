var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Travis'
    };
setTimeout(() => {
    callback(user);
}, 3000);
}

getUser(11, (userObj) => {
    console.log(userObj);
});