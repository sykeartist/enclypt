
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import HomePage from './pages/HomePage'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/registration' element={<RegistrationPage/>}></Route>
    <Route path='/login' element={<LoginPage/>}></Route>
    <Route path='/' element={<HomePage/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
