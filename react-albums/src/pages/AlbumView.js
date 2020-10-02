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
  const [masterData, setMaster] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:3000/albums/`).then((r) => {
      const albumData = r.data
      setMaster(r.data)
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
      <div className="header">
        <h1>{albumData.name}</h1>
      </div>
      <div className="wrapper">
        <div className="container1">
          {masterData.map((item) => {
            return (
              <Link to="/album/">
                <li className="album-name-aside">{item.name}</li>
              </Link>
            )
          })}
        </div>
        <div className="container3">
          {albumData.photos.map(function (photo) {
            return (
              <div className="card">
                <Link to={`/photo/${photo.id}`}>
                  <img src={photo.url} key={photo.id}></img>{" "}
                  <li>{photo.name}</li>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AlbumView
