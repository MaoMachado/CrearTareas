import './index.css';

import { tareasLista } from '../../data/tareasLista';
import { editarTarea } from '../../modules/editarTarea';
import { eliminarTarea } from '../../modules/eliminarTarea';
import { finalizarTarea } from '../../modules/finalizarTarea';

export const ListarTareas = (elemento) => {

  if (tareasLista.length === 0) {
    elemento.classList.remove('visible');
    elemento.innerHTML = "";
    return;
  }

  elemento.classList.add('visible');

  elemento.innerHTML = `
    <h2>Tareas</h2>
    <article class="lista_content">
      ${tareasLista.map(tarea => {
    return `
          <div class="tarea_container ${tarea.estado === "finalizada" ? "finalizada" : ""}">
            <section class="info_tarea">
              <h2>${tarea.nombreTarea}</h2>
              <p>ID: ${tarea.id} | Estado: ${tarea.estado}</p>
            </section>
            <section class="tarea_btn_container">
              <button class="btn_editar_tarea" data-id="${tarea.id}"><img src="/img_icons/edit_tarea.svg" alt="Botón de Editar Tarea" /></button>
              <button class="btn_eliminar_tarea" data-id="${tarea.id}"><img src="/public/img_icons/delete_tarea.svg" alt="Botón de Eliminar Tarea" /></button>
              <button class="btn_finalizar_tarea" data-id="${tarea.id}"><img src="/public/img_icons/checked_tarea.svg" alt="Botón de Finalizar Tarea" /></button>
            </section>
          </div>
        `
  }).join('')
    }
    </article >
  `;

  editarTarea();
  eliminarTarea(elemento);
  finalizarTarea(elemento);
}