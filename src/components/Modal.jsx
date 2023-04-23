import React from 'react'

const Modal = ({isShowForm,  setIsShowForm, handleSubmit, register,submit,reset,setIsUserIdToEdit,isUserIdToEdit}) => {
  const handleShowForm =()=>{setIsShowForm((isShowForm)=> !isShowForm)
  reset(
    {
      first_name: "",       
          last_name: "",
          email: "",
          password: "",
          birthday: "",
          image_url: "",
    }
  )
    setIsUserIdToEdit()
}
  return (
    <section className={`fixed top-0 left-0 bottom-0 right-0 bg-black/40 flex justify-center items-center transition-opacity ${isShowForm ? "opacity-100 visible" : "opacity-0 invisible"} z-10`}>
      <form onSubmit={handleSubmit(submit)} className='bg-white p-4 grid gap-4 w-[300px] relative'>
        <h3 className='text-2xl font-bold'>{isUserIdToEdit ? "Editar Usuario" : "Nuevo Usuario"}</h3>

        <div className='grid gap-1'>
          <label htmlFor="first_name" className='text-xs font-semibold'>Nombre<span className='text-red-500'>*</span></label>
          <input id="first_name" type="text"  className="border-[1px] rounded-sm bg-gray-100 p-1" 
          {...register("first_name")} />
        </div>

        <div className='grid gap-1'>
          <label htmlFor="last_name" className='text-xs font-semibold'>Apellido<span className='text-red-500'>*</span></label>
          <input id="last_name" type="text" className="border-[1px] rounded-sm bg-gray-100 p-1" 
          {...register("last_name")} />
        </div>

        <div className='grid gap-1'>
          <label htmlFor="email" className='text-xs font-semibold'>Correo<span className='text-red-500'>*</span></label>
          <input id="email" type="text" className="border-[1px] rounded-sm bg-gray-100 p-1" 
          {...register("email")} />
        </div>

        <div className='grid gap-1'>
          <label htmlFor="password" className='text-xs font-semibold'>Contraseña<span className='text-red-500'>*</span></label>
          <input id="password" type="password" className="border-[1px] rounded-sm bg-gray-100 p-1" 
          {...register("password")} />
        </div>

        <div className='grid gap-1'>
          <label htmlFor="birthday" className='text-xs font-semibold'>Cumpleaños</label>
          <input id="birthday" type="date" className="border-[1px] rounded-sm bg-gray-100 p-1" 
          {...register("birthday")} />
        </div>

        <div className='grid gap-1'>
          <label htmlFor="image_url" className='text-xs font-semibold'>URL imagen</label>
          <input id="image_url" type="text" className="border-[1px] rounded-sm bg-gray-100 p-1" 
          {...register("image_url")} />
        </div>

        <i onClick={handleShowForm} className='bx bx-x absolute top-2 right-2 text-2xl hover:text-red-500 cursor-pointer transition-colors'></i>

        <button className='bg-purple-p text-white p-2 hover:bg-purple-p/90 transition-colors text-sm'>{isUserIdToEdit ? "Guardar cambios":"Agregar nuevo usuario"}</button>


      </form>
    </section>
  )
}

export default Modal
