const Blog = require('../models/Blog');
const jwt = require('jsonwebtoken');
require('dotenv').config()


class blogController {
  constructor() {

  }

  static all (req,res) {
    Blog.find().sort({date: 'descending'})
    .then(result=>{
      res.send(result)
    })
    .catch(err=>{
      res.send(err)
    })
  }

  static add (req,res) {
    Blog.create({
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      author: req.body.author
    })
    .then(result=>{
      res.send(result)
    })
    .catch(err=>{
      res.send(err)
    })
  }

  static single (req,res) {
    Blog.findOne({_id:req.params.id})
    .then(result=>{
      res.send(result)
    })
    .catch(err=>{
      res.send(err)
    })
  }

  static category (req,res) {
    Blog.find({category:req.params.category})
    .then(result=>{
      res.send(result)
    })
    .catch(err=>{
      res.send(err)
    })
  }

  static author (req,res) {
    Blog.find({author:req.params.author})
    .then(result=>{
      res.send(result)
    })
    .catch(err=>{
      res.sedn(err)
    })
  }

  static edit (req,res) {
    Blog.findOneAndUpdate({_id:req.params.id},{})
    .then(result=>{
      res.send(result)
    })
    .catch(err=>{
      res.send(err)
    })
  }

  static remove (req,res) {
    Blog.remove({_id:req.params.id})
    .then(result=>{
      res.send(result)
    })
    .catch(err=>{
      res.send(err)
    })
  }
}

module.exports = blogController
