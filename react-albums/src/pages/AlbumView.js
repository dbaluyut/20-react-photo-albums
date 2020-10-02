import React, { useState, useEffect } from "react"
import "../App.css"
import { Link, useParams } from "react-router-dom"
import axios from "axios"

function AlbumView() {
  const { id } = useParams()
  //need to get photo urls from this get
  //you are inside an album at this point

  //find album per id then display all photos in html
  const [albumData, setAlbumData] = useState({ photos: [] })

  useEffect(() => {
    axios.get(`http://localhost:3000/albums/`).then((r) => {
      const albumData = r.data
      console.log(albumData)

      albumData.forEach(function (album) {
        if (album.id == id) {
          setAlbumData(album)
          console.log(album)
        }
      })
    })
  }, [])

  return (
    <div>
      <h1>ALBUM VIEW</h1>
      {albumData.photos.map(function (photo) {
        return (
          <Link to={`/photo/${photo.id}`}>
            <img src={photo.url}></img> <li>{photo.name}</li>
          </Link>
        )
      })}
    </div>
  )
}

export default AlbumView
