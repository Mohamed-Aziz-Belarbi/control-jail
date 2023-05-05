import  Axios  from 'axios';
import React, {useState} from 'react';

function UpdatePrisoner(props) {
    const [name,setName]=useState("")
    const [duration,setDuration]=useState("")
    const [degree,setDegree]=useState("")
    const [cells_idCell,setCell]=useState("")
    const [image,setImage]=useState("")

    const update=()=>{
        const updated={
            name:name,
            duration:duration,
            degree:degree,
            cells_idCell:cells_idCell,
            image:image

        }
        Axios.put(`http://localhost:5000/prisoner/${props.ddd}`,updated).catch((err)=>{console.log(err);})
      }
        
 
    return (
        <div>
             <input placeholder="Name" type="text" onChange={(e)=>setName(e.target.value)} />
          <input placeholder="Picture" type="text" onChange={(e)=>setImage(e.target.value)} />
          <input placeholder="Duration" type="text" onChange={(e)=>setDuration(e.target.value)} />
          <input placeholder="degree" type="text" onChange={(e)=>setDegree(e.target.value)} />
          <input placeholder="cell" type="text" onChange={(e)=>setCell(e.target.value)} />
          <button onClick={update}>Edit</button>
        </div>
    );

    }
export default UpdatePrisoner;