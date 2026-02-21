import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddFormRoom from './pages/AddFormRoom'

function App() {
  // const res = await fetch("http://localhost:3000")חיבור לסרבר
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/AddFormRoom" element={<AddFormRoom />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
