import React, { useState, useEffect } from "react"
import "../App.css"
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
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
      <h1>HOME</h1>
      {albumData.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </div>
  )
}

export default Home
