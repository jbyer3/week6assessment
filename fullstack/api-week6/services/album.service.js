const Album = require('../models/album.model');

_this = this

exports.getAlbums = async function(query, page, limit) {

  const options = {
    page,
    limit
  }

  try {
    const albums = await Album.paginate(query, options)
    return albums;
  } catch(e){
    console.log(e)
    throw Error('oh no! error ')
  }
}

exports.createAlbum = async function(album) {
  // Creating a new Mongoose Object by using the new keyword

  var newAlbum = new Album({
    title: album.title,
    artist: album.artist,
    year: album.year,
    genre: album.genre
  });

  try {
    // Let's go ahead and save the word

    var savedAlbum = await newAlbum.save();
    return savedAlbum;
  } catch (e) {
    //if we can't create a word we want to throw an error

    throw Error("Error while Creating Word");
  }
};

exports.updateAlbum = async function(album){
  const id = album.id

  try {
    const oldAlbum = await Album.findById(id);
  } catch(e){
    console.log(e)
    throw Error("error occured finding the album")
  }

  if(!oldAlbum){
    return false;
  }

  console.log(oldAlbum)

  oldAlbum.title = album.title
  oldAlbum.artist = album.artist
  oldAlbum.year = album.year
  oldAlbum.genre = album.genre

  console.log(oldAlbum)

  try {
    const savedAlbum = await oldAlbum.save()
    return savedAlbum;
  } catch(e) {
    throw Error("an error occured while updating")
  }
}

exports.deleteAlbum = async function(id){

  try{
    const deleted = await Album.deleteOne({_id: id})
    if(deleted.n === 0){
      throw Error("Album could not be deleted")
    }
    return deleted
  } catch(e){
    throw Error("error occured deleting album")
  }
}