import React from "react";

import { useEffect,useState } from "react";
import UpdatePrisoner from "../updatePrisoner/updatePrisoner";
import './allPrisoners.css'




function AllPrisoners({deletePrisoner,data,fetchData}) {

const [editing,setEditing]=useState(false)
console.log(data)



return(
    
    <div className="cadre">
      
        {data.map(prisoner=>{
            return(
                    <div id="data" key={prisoner.idPrisoner}> 
                    <img className="image" src={prisoner.image} alt=""/>
                    <h4>name:   {prisoner.name}</h4>
                    <h4>duration:   {prisoner.duration}</h4>
                    <h4>degree:   {prisoner.degree}</h4>
                    <h4>ID-cell:   {prisoner.cells_idCell}</h4>
                    <button  onClick={()=>{deletePrisoner(prisoner.idPrisoner)}}>release</button>
                    <button onClick={()=>setEditing(!editing)}>edit</button>
                    {console.log(prisoner.idPrisoner)}
                    {editing && <UpdatePrisoner ddd={prisoner.idPrisoner} fetchData={fetchData}/>}
                    </div>
                 

        )}


        )}
    </div>
)


}


export default AllPrisoners;