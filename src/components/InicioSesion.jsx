import React from 'react'

const InicioSesion = () => {
  return (
    <div>
       
        <div className='w-1/2 flex flex-col'>
        <h1 className='bg-red-200 ml-20 mr-20 '>Inicio Sesion</h1>
            <form className='flex flex-col items-center p-10'>
                <label htmlFor="">Correo Electronico</label>
                <input type="text" className='w-1/2 '/>
                <label htmlFor="">Contraseña</label>
                <input type="text" />
                <button className="bg-red-400 rounded-lg pl-10 pr-10 p-2">Aceptar</button>
            </form>
        </div>
      
    </div>
  )
}

export default InicioSesion
