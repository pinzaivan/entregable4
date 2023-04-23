import React from 'react'

const Header = ({setIsShowForm}) => {
  const handleClickShowModal = () => {
    setIsShowForm((isShowForm)=> !isShowForm)
  }
  return (
   <header className='flex relative max-w-3xl'>
    <h1 className='text-[30px] font-bold m-[40px]'>Usuarios</h1>
    <button onClick={handleClickShowModal} className='bg-purple-p text-white p-2 hover:bg-purple-p/90 transition-colors text-sm absolute right-4 top-1/2 translate-y-[-50%]'>+ Crear nuevo usuario</button>
   </header>
  
  )
}

export default Header
