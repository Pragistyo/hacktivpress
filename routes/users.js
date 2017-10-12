// const juwita    = require('../helper/jsonWebToken');
const user      = require('../controllers/user');
const express   = require('express');
const router    = express.Router();

console.log('=========== routes USER');

// router.get('/', jwt.isLogin,jwt.isAdmin,customer.allCustomer); //get allUser
// router.post('/', jwt.isLogin,jwt.isAdmin,customer.addCustomer);//post newUser
// router.get('/:id', jwt.isLogin,jwt.authUser,customer.singleCustomer);//get eachUser
// router.put('/:id', jwt.isLogin,jwt.authUser,customer.updateCustomer);//post newUser
// router.delete('/:id', jwt.isLogin,jwt.isAdmin,customer.removeCustomer);//post newUser

//REGISTER
router.get('/register', user.all); //get allUser
router.post('/register', user.add);//post newUser
router.get('/register/:id', user.single);//get eachUser
router.put('/register/:id', user.update);//post newUser
router.delete('/register/:id', user.remove);//post newUser

router.post('/login',user.login);
router.post('/verify', user.verify)


module.exports = router;
