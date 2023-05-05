import React, { useState } from 'react';
import axios from 'axios';
import './AddPrisoner.css';

function AddPrisoner({fetchData}) {
    const [name,setName]=useState("")
    const [duration,setDuration]=useState("")
    const [degree,setDegree]=useState("")
    const [cells_idCell,setCell]=useState("")
    const [image,setImage]=useState("")

    const addprisoner=()=>{
        const body={
            name:name,
            duration:duration,
            degree:degree,
            cells_idCell:cells_idCell,
            image:image
        }
        axios.post(`http://localhost:5000/prisoner/add`,body)
        .then((res)=>{
            console.log(res.data)
        })
        .then(() => fetchData())
        .catch((err)=>{
            console.log("hello", err)
        })
    }
    return (

        <div id="add-div">
             <h1>jail 06</h1>
          <input className='add-input' placeholder="Name" type="text" onChange={(e)=>setName(e.target.value)} />
          <input className='add-input' placeholder="Picture" type="text" onChange={(e)=>setImage(e.target.value)} />
          <input className='add-input' placeholder="Duration" type="text" onChange={(e)=>setDuration(e.target.value)} />
          <input className='add-input' placeholder="degree" type="text" onChange={(e)=>setDegree(e.target.value)} />
          <input className='add-input' placeholder="cell" type="text" onChange={(e)=>setCell(e.target.value)} />
        
              <button id="add-button" onClick={addprisoner}>Add prisoner</button>
            
        </div>
    );
}

export default AddPrisoner;