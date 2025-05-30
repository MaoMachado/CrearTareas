import './index.css';

import { formularioCrearTarea } from '../../modules/crearTarea';
import { ListarTareas } from '../listarTareas';

export const agregarNuevaTarea = (elemento) => {
  elemento.innerHTML = `
    <h2 id="form_titulo">Agrega una Tarea</h2>
    <form id="form_tarea">
      <input type="text" name="ipt_tarea" class="ipt_tarea" id="ipt_tarea" placeholder="Escribe la Tarea" />
      <input type="submit" value="👍" class="btn_agregar" id="btn_agregar" />
    </form>
    <div class="tareas_lista" id="tareas_lista"></div>
  `
  formularioCrearTarea(document.getElementById('form_tarea'), document.getElementById('tareas_lista'));
  ListarTareas(document.getElementById('tareas_lista'));
}
