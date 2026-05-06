const express = require('express');
const router = express.Router();
const fs = require('fs');


//save users to file 
function saveUser(users) {  
    fs.writeFileSync('user.json', JSON.stringify(users, null, 2));
}

//get users from file
function getUser() {
    const data = fs.readFileSync('user.json');
    return JSON.parse(data);
}   



//temp data storage for users
// let users = [];


//get all users
// router.get('/', (req, res) => {
//     res.json(users);
// });

// //post: create users
//  router.post('/', (req, res) => {
//     const user = req.body;
//     users.push(user);

//     res.json({
//         message: 'user added',
//         users
//     })
//  });
//get all users
router.get('/', (req, res) => {
    const users = getUser();
    res.json({
        totalUsers: users.length,
        users
 } );
});

//create a new user
router.post('/', (req, res) => {
    const users = getUser();
    const newUser = req.body;

    //push new user to users array and save to file
    users.push(newUser);
    saveUser(users);

    //send response back to client
    res.json({
        message: 'user added',
        users
    })
});


 //this is use to export the router to be used in other files, such as server.js
 module.exports = router;