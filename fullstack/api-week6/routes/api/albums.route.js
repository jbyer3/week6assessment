var express = require('express')
var router = express.Router()

// Getting the Todo Controller that we just created

var AlbumController = require('../../controllers/album.controller.js');


// Map each API to the Controller FUnctions

router.get('/', AlbumController.getAlbums)

router.post('/', AlbumController.createAlbum)

router.put('/', AlbumController.updateAlbum)

router.delete('/:id', AlbumController.removeAlbum)


// Export the Router

module.exports = router;