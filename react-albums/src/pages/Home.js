import React, { useState, useEffect } from "react"
import "../App.css"
import { Link } from "react-router-dom"
import axios from "axios"
function Home() {
  const [albumData, setAlbumData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/albums").then((r) => {
      const test = r.data
      setAlbumData(test)
    })
  }, [])
  return (
    <div>
      <h1 class="header">MY ALBUMS</h1>
      <div className="container">
        {albumData.map((album) => (
          <Link to={`/album/${album.id}`}>
            <div className="card">
              <img src={album.albumThumbnail}></img>
              <li key={album.id}>{album.name}</li>
              {console.log(album.photos[0])}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
