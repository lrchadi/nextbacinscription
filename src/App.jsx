import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Schools from './pages/Schools'
import Schools_Info from './pages/School_Info'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ecoles/:id' element={<Schools />} />
        <Route path='/ecoles/:ecole_name' element={<Schools_Info />} />
      </Routes>
    </>
  )
}

export default App
