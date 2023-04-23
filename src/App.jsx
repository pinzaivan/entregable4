import axios from "axios"
import { useEffect, useState } from "react"
import Modal from "./components/Modal"
import Header from "./components/Header"
import { useForm } from "react-hook-form"
import UsersList from "./components/UsersList"
const BASE_URL = "https://users-crud.academlo.tech"
const defaulValues = {
  first_name: "",       
  last_name: "",
  email: "",
  password: "",
  birthday: "",
  image_url: "",
}

function App() {

  const [users, setUsers] = useState([])

  const [isUserIdToEdit, setIsUserIdToEdit] = useState()

  const [isShowForm, setIsShowForm] = useState(false)
  
  const {register, handleSubmit, reset} = useForm()
  
  const submit =(data)=>{
    if(!data.birthday){
      data.birthday = null
    }
    if (!data.image_url){
      data.image_url = null
    }
    if(isUserIdToEdit){
      editUser(data);
    } else {
      createUser(data);
    }
        
  }

  const createUser = (data) => {
    const URL = BASE_URL +"/users/";
    
    axios.post(URL, data)
    .then((res)=> {
      getAllUsers()
      reset(defaulValues);
      setIsShowForm(!isShowForm)
    })
    .catch((err)=> console.log(err))
  }

  const deleteUser = (id) => {
    const URL = BASE_URL +`/users/${id}/`;
   
    axios.delete(URL)
    .then((res)=> getAllUsers())
    .catch((err)=> console.log(err))
  }

  const editUser = (data) => {
    const URL = BASE_URL +`/users/${isUserIdToEdit}/`;

    axios.patch(URL, data)
    .then((res)=> {
      getAllUsers()
      reset(defaulValues)
      setIsShowForm(!isShowForm)
      setIsUserIdToEdit()
    })
    .catch((err)=> console.log(err))
  }

  const handleClickEdit = (data)=> {
    setIsShowForm((isShowForm)=> !isShowForm)
    reset(data)
    setIsUserIdToEdit(data.id)
  }

  const getAllUsers =()=>{
  const URL = BASE_URL +"/users/";

  axios.get(URL)
    .then((res)=> setUsers(res.data))
    .catch((err)=> console.log(err))
}

useEffect(()=>{
  getAllUsers()
},[])

  return (
    <main className="font-sans relative">
      <Header setIsShowForm={setIsShowForm} />
      <Modal 
      handleSubmit={handleSubmit} 
      register={register} 
      isShowForm={isShowForm} 
      setIsShowForm={setIsShowForm} 
      submit={submit} 
      reset={reset}
      setIsUserIdToEdit={setIsUserIdToEdit}
      isUserIdToEdit={isUserIdToEdit}
      />
      <UsersList users={users} deleteUser={deleteUser} handleClickEdit={handleClickEdit}/>
      <h3 className="absolute -bottom-[130px] left-1/2 -translate-x-1/2 text-gray-500">Elaborado por Ivan Jojoa </h3>
    </main>
  )
}

export default App
