import React from "react"
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom"
import Home from "./pages/Home"
import AlbumView from "./pages/AlbumView"
import PhotoView from "./pages/PhotoView"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/album/:id">
          <AlbumView />
        </Route>
        <Route path="/album/:id/photo/:id">
          <PhotoView />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
