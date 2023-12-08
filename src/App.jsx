import './App.css'
import { Route, Routes } from "react-router-dom"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import  Home  from "./components/Home"
import  PostPage  from "./components/PostPage"
import  NotFound  from "./components/NotFound"

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="post/:id" element={<PostPage />} />
        <Route path="*" element={<NotFound />} />  
      </Routes>
    </QueryClientProvider>
  )  
}
  
  

export default App
