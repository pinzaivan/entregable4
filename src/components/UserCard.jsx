import React from 'react'

const UserCard = ({user,deleteUser,handleClickEdit}) => {
  return (
    <article className='border-[1px] border-gray-300 p-4 relative rounded-md'>
      <div>
        <img src={user.image_url ? user.image_url:"/images/noporfile.jpg"} className='w-[100px] aspect-[3/5] object-cover mx-auto rounded-md' alt="User image" />
      </div>
      <h3 className='text-[16px] font-semibold mt-4'>{user.first_name} {user.last_name}</h3>
      <ul>
        <li>
          <h4 className='text-gray-400'>Correo</h4>
          <span>{user.email}</span>
        </li>
        <li>
          <h4 className='text-gray-400'>Cumpleaños</h4>
          <span>
            <i className='bx bx-gift'></i>  {user.birthday}
          </span>
        </li>
      </ul>
      <div>
        <button className='absolute bottom-3 right-3 bg-[#D85D5D] p-0.5 hover:bg-[#da2b2b]' onClick={()=> deleteUser(user.id)}>
          <i className='bx bxs-trash text-2xl text-white'></i>
        </button>
        <button className='absolute bottom-3 right-12 bg-gray-200 p-0.5 hover:bg-gray-400' onClick={()=> handleClickEdit(user)}>
        <i className='bx bxs-pencil text-2xl'></i>
        </button>
      </div>
    </article>
  )
}

export default UserCard
