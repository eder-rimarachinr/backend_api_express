const express = require('express')
const multer = require('multer')

const router = express.Router()

const storage = multer.diskStorage({
  destination: function(){

  },
  filename: function(){

  }
})

router.post("/", (req, res) => {
  res.send({ a: 1 })
})


module.exports = router;