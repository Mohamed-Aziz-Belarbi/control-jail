import  { useEffect, useState } from "react"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AllPrisoners from "./components/AllPrisoners/allPrisoners"
import AddPrisoner from "./components/AddPrisoner/AddPrisoner"
import axios from "axios"
import UpdatePrisoner from "./components/updatePrisoner/updatePrisoner"
import "./App.css"
import React from "react"

function App() {
  const[data,setData]=useState([])

  const fetchData =() => {
    axios.get('http://localhost:5000/prisoner').then(res=>{
    setData(res.data)
})}

useEffect(()=>{fetchData()},[])
const deletePrisoner=(id)=>{

  axios.delete(`http://localhost:5000/prisoner/${id}`).then(() => fetchData())
 .catch((err)=>console.log(err))
}

return (

  <BrowserRouter>
 <AddPrisoner fetchData={fetchData} />
  <Routes>
  
      <Route path="/" element={<AllPrisoners deletePrisoner={deletePrisoner} updatePrisoner={UpdatePrisoner}  fetchData={fetchData} data={data} />}></Route>
     
  </Routes>
  
  
  
  
  </BrowserRouter>
)

}
export default App;
