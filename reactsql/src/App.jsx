import Index from "./components"
import { Display } from "./components/Display";
import {Routes,Route} from 'react-router-dom'
import { Update } from "./components/Update";
import axios from "axios"

axios.defaults.baseURL = 'http://localhost:3000';
function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/show" element={<Display/>} />
        <Route path="/edit/:eid" element={<Update/>} />
    </Routes>
      
    </>
  )
}

export default App
