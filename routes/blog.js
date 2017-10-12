const express = require('express');
const router = express.Router()
const blog = require('../controllers/blog');
const juwita = require('../helper/jsonWebToken')

console.log('+++++++++ masuk router blog');

router.get('/',blog.all)
router.post('/',juwita.isLogin,blog.add)
router.get('/:id',juwita.isLogin,blog.single)
router.get('/category/:category',juwita.isLogin,blog.category)
router.get('/author/:author',juwita.isLogin,blog.author)
router.put('/:id',juwita.isLogin,blog.edit)
router.delete('/:id',juwita.isLogin,blog.remove)

module.exports = router
