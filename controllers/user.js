const Users = require('../models/Users');

console.log('=========== masuk CONTR users');


class userController {
  constructor() {

  }

  static all (req,res) {
    res.send('denny')
    Users.find({}).then(result=>{
      res.send(result)
    })
    .catch(err=>{
      res.send(err)
    })
  }

  static add (req,res) {
    Users.create({})
    .then(result=>{
      res.send(result)
    })
    .catch(err=>{
      res.send(err)
    })
  }

  static single (req,res) {
    Users.findOne({_id:req.params.id})
    .then(result=>{
      res.send(result)
    })
    .catch(err=>{
      res.send(err)
    })
  }

  static update (req,res) {
    Users.findOneAndUpdate({_id:req.params.id},{})
    .then(result=>{
      res.send(result)
    })
    .catch(err=>{
      res.send(err)
    })
  }

  static remove (req,res) {
    Users.remove({_id:req.params.id})
    .then(result=>{
      res.send(result)
    })
    .catch(err=>{
      res.send(err)
    })
  }

  static login (req,res) {

  }

  static verify (req,res) {

  }
}



module.exports = userController
