const express = require('express');
const router = express.Router()
const blog = require('../controllers/blog');
const juwita = require('../helper/jsonWebToken')

console.log('+++++++++ masuk router blog');

router.get('/',blog.all)
router.post('/',blog.add)
router.get('/:id',blog.single)
router.get('/category/:category',blog.category)
router.get('/author/:author',blog.author)
router.put('/:id',blog.edit)
router.delete('/:id',blog.remove)

module.exports = router
