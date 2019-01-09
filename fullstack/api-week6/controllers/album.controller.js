const AlbumService = require('../services/album.service')

_this = this

exports.getAlbums = async function(req, res, next){
  const page = req.query.page ? req.query.page : 1
  const limit = req.query.limit ? req.query.limit : 10;

  try{
    const albums = await AlbumService.getAlbums({}, page, limit)
    return res.status(200).json({status: 200, data: albums, message: "got albums successfully"})
  } catch(e){
    return res.status(400).json({status: 400, message: e.message})
  }
}

exports.createAlbum = async function(req, res, next){
  const album = {
    title: req.body.title,
    artist: req.body.artist,
    year: req.body.year,
    genre: req.body.genre
  }

  try{
    const createdAlbum = await AlbumService.createAlbum(album)
    return res.status(201).json({status: 201, data: createdAlbum, message: "succeeded in creating album"})
  }catch(e){
    return res.status(400).json({status: 400, message: "failed to create album"})
  }
}

exports.updateAlbum = async function(req, res, next){
  if(!req.body._id){
    return res.status(400).json({status: 400, message: "id is missing"})
  }

  const id = req.body._id
  console.log(req.body)

  const album = {
    id, 
    title: req.body.title ? req.body.title : null,
    artist: req.body.artist ? req.body.artist : null,
    year: req.body.year ? req.body.year : null,
    genre: req.body.genre ? req.body.genre : null
  }

  try{
    const updatedAlbum = await AlbumService.updateAlbum(album)
    return res.status(200).json({ status: 200, data: updatedAlbum, message: "Succesfully Updated Album" })
  } catch(e){
    return res.status(400).json({ status: 400, message: e.message })
  }
}

exports.removeAlbum = async function (req, res, next) {

  var id = req.params.id;

  try {
    var deleted = await AlbumService.deleteAlbum(id)
    return res.status(204).json({ status: 204, message: "Succesfully Todo Deleted" })
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message })
  }

}