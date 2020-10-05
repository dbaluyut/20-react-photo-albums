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
  }, [id])

  const [activePhoto, setActivePhoto] = useState(null)
  console.log(activePhoto)
  return (
    <div>
      {activePhoto ? (
        <div
          className="modal"
          onClick={() => {
            console.log(activePhoto)
            setActivePhoto(null)
          }}
        >
          <img src={activePhoto.url}></img>
          <li>{activePhoto.name}</li>
        </div>
      ) : null}
      <div className="header">
        <h1>{albumData.name}</h1>
      </div>
      <div className="wrapper">
        <div className="container1">
          {masterData.map((item) => {
            return (
              <Link to={"/album/" + item.id}>
                <li className="album-name-aside">{item.name}</li>
              </Link>
            )
          })}
        </div>
        <div className="container3">
          {albumData.photos.map(function (photo) {
            return (
              <div
                className="card"
                // onClick={function showModal() {
                //   document.getElementById(photo.id).style.display = "flex"
                // }}
                onClick={() => setActivePhoto(photo)}
              >
                <div>
                  <img src={photo.url} key={photo.id}></img>
                </div>

                <div className="photo-name">
                  <li>{photo.name}</li>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AlbumView
