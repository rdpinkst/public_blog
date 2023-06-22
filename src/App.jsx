import './App.css'
import { Route, Routes } from "react-router-dom"
import  Home  from "./components/Home"
import  PostPage  from "./components/PostPage"
import  NotFound  from "./components/NotFound"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="post/:id" element={<PostPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
  
}

export default App
