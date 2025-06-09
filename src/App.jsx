
import './App.css'
import Navbar from './Component/Navbar'
import { Routes, Route } from 'react-router-dom'
import Login from './Component/SigninAndLoginPages/Login'
import Signin from './Component/SigninAndLoginPages/Signin'

function App() {


  return (
    <><Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signin />} />
      <Route path='/' element={<Navbar />} />

    </Routes>



    </>
  )
}

export default App
