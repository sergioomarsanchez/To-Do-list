import { useState } from 'react';
import style from '../StyledSheets/InputBar.module.css'

export  default function InputBar ({ agregarTarea, lenguage }){
const [input, setInput] = useState('')
    
function onInputSubmit(e){
e.preventDefault()
agregarTarea(input.charAt(0).toUpperCase()+input.slice(1))
setInput('')
}
function onInputChange(e){
    setInput(e.target.value)
    }
return(
    <div className={style.divContenedor}>
      <input type='text' value={input} onChange={(e)=>{onInputChange(e)}} className={style.tarea} placeholder={lenguage==='es'? 'ej. Comprar pan':'e.g. Groceries'}></input>
      <button className={style.eliminar} onClick={(e)=>{onInputSubmit(e)}}>{lenguage==='es'? 'Agregar Tarea':'Add chore'}</button>
    </div>
)
}


