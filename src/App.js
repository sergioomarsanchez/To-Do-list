import logo from './img/thomas-bormans-pcpsVsyFp_s-unsplash.jpg';
import './App.css';
import { useState } from 'react';
import Tarea from './Components/Tarea.jsx';
import InputBar from './Components/InputBar.jsx';



function App() {
  let [lenguage, setLenguage] = useState('es')
  let [theme, setTheme] = useState('light')
  let [listado, setListado] = useState([])

  function agregarTarea (texto){
    setListado([...listado, texto])
  }
  function onChangeLenguage(){
    lenguage==='es'? setLenguage('en') : setLenguage('es')
  }
  function onChangeTheme(){
    theme==='light'? setTheme('dark') : setTheme('light')
  }
  function eliminar (tarea){
    setListado(listado.filter(t=> t!== tarea))
  }
  function handleClick(){
    setListado([])
  }
  return (
    <>
    <div className='contenedorLeng.DarkLigth'>
      <button value={lenguage} onClick={()=>{onChangeLenguage()}}>{lenguage==='es'? 'Es':'En'}</button>
      <button value={theme} onClick={()=>{onChangeTheme()}}>{theme==='light'? '\u2600':'\u263D'}</button>

    </div>
    <div className="aplicacion-tareas">
      <div className='contenedor-logo'>
      <img 
      src={logo} 
      className='logo'
      alt='img-logo'
      />
      </div>
      <div className='tareas-lista-principal' >
       <div>
        <h1>
        {lenguage==='es'? 'Mis Tareas':'My chores'}
        </h1>
       </div>
      <div className='inputDiv'>
        <InputBar lenguage={lenguage} agregarTarea={agregarTarea}/>
      </div>

        <ul>
          {
            listado?.map(tarea =>
             <li key={tarea}>
               <Tarea  texto={ tarea } eliminar={eliminar}/>
              </li>)
          }
        </ul>
      <div>
      <button onClick={handleClick}>{lenguage==='es'? 'Eliminar todas':'Delete all'}</button>
      </div>
      </div>
    </div>
    </>
  );
}

export default App;
