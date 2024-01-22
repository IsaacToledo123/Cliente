import { } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Ventana from './components/ventanaNotificaciones' 
import Calendario from './components/Calendario'
import Login from './components/InicioSesion'
import './App.css'


function App() {

  return (
  <BrowserRouter>
  <Routes>
    <Route path='/inicioSesion' element={<Login></Login>}></Route>
    <Route path='/menuAdmin' element={<Ventana></Ventana>} ></Route>
    <Route path='/menuCliente' element={<Calendario></Calendario>}></Route>

  </Routes>
  
  
  </BrowserRouter>
  )
}

export default App
