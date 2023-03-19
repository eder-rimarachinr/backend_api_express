const express = require('express')

const router = express.Router()

const { getItems, getItem, createItem, updateItems, deleteItems } = require('../controllers/tracksController')
// const { getItems, getItem, createItem, updateItems, deleteItems } = require('../controllers/storagesController')
// const { getItems, getItem, createItem, updateItems, deleteItems } = require('../controllers/usersController')


router.get('/', getItems)
router.get('/:id', getItem)
router.post('/', createItem)
router.put('/', updateItems)
router.delete('/:id', deleteItems)


module.exports = router