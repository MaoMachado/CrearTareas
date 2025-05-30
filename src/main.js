import './style.css'

//--------------------------> Imports Components
import { agregarNuevaTarea } from './components/agregarNuevaTarea'

document.querySelector('#app').innerHTML = `
  <section class="tareas">
    <h1>Agrega una Lista</h1>
    <section class="crear_tarea" id="crear_tarea"></section>
  </section>
`

agregarNuevaTarea(document.getElementById('crear_tarea'))