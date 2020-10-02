import React, { useState, useEffect } from "react"
import "../App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom"

import axios from "axios"
function PhotoView() {
  const { id } = useParams()
  //need to get photo urls from this get
  //you are inside an album at this point

  const [albumData, setAlbumData] = useState({ photos: [] })
  const [currentPhoto, setCurrentPhoto] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3000/albums/${id}`).then((r) => {
      const albumData = r.data
      albumData.photos.filter((photo) => {
        if (photo.id == id) {
          setCurrentPhoto(photo.url)
          return photo
        }
      })
      console.log(albumData.photos)
      // setCurrentPhoto(albumData.photos.id)
    })
  }, [])
  //location in object needs to be resolved above and stored in states as needed
  return (
    <div>
      <h1>PHOTO VIEW</h1>
      <img src={currentPhoto}></img>
    </div>
  )
}

export default PhotoView
