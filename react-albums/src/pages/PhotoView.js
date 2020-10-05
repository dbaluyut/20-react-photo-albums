import React, { useState, useEffect } from "react"
import "../App.css"
import { BrowserRouter as Router, Link, useParams } from "react-router-dom"

import axios from "axios"
function PhotoView() {
  const { id } = useParams()
  //need to get photo urls from this get
  //you are inside an album at this point

  const [albumData, setAlbumData] = useState({ photos: [] })
  const [currentPhoto, setCurrentPhoto] = useState([])
  const [photoData, setPhotoData] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3000/albums/${id}`).then((r) => {
      const albumData = r.data
      albumData.photos.filter((photo) => {
        if (photo.id == id) {
          setCurrentPhoto(photo.url)
          setPhotoData(photo)
        }
      })
      console.log(albumData.id)
      // setCurrentPhoto(albumData.photos.id)
    })
  }, [])
  //location in object needs to be resolved above and stored in states as needed
  return (
    <div>
      <h1 className="header">PHOTO VIEW</h1>

      <div className="container-photo-view">
        <Link>
          <i class="fas fa-arrow-left arrow"></i>
        </Link>
        <img key={photoData.id} src={currentPhoto} className="img-large"></img>
        <Link>
          <i class="fas fa-arrow-right arrow"></i>
        </Link>
      </div>
    </div>
  )
}

export default PhotoView
