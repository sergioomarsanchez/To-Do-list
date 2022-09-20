import style from '../StyledSheets/Tarea.module.css'

export default function Tarea ({ texto, eliminar }){

function cambioEstadoTarea(e){
    e.target.className = 'done'
}
    
return(
    <div onClick={(e)=>{cambioEstadoTarea(e)}} className={style.porHacer}>
      <div className={style.tarea}>{texto}
    </div>
      <button className={style.eliminar} onClick={()=>{eliminar(texto)}}>X</button></div>
)
}


