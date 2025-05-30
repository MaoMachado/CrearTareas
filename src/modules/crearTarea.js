import { tareasLista } from "../data/tareasLista";

import { ListarTareas } from "../components/listarTareas";


export const formularioCrearTarea = (formTarea, contenedorTareas) => {
  formTarea.addEventListener('submit', (e) => {
    e.preventDefault();

    const inpTarea = document.getElementById('ipt_tarea');
    const nombreTarea = inpTarea.value.trim();

    if (!nombreTarea || nombreTarea.length < 5 || !isNaN(nombreTarea)) {
      alert('Tienes que digitar la tarea con menos de 5 dígitos');
      return;
    };

    if (inpTarea.dataset.editando) {
      const idEditar = parseInt(inpTarea.dataset.editando);
      const tareaIndex = tareasLista.findIndex((t) => t.id === idEditar);

      if (tareaIndex !== -1) {
        tareasLista[tareaIndex].nombreTarea = nombreTarea;
        alert('Tarea Editada Correcta Mente');
      }

      delete inpTarea.dataset.editando;

      document.getElementById('form_titulo').textContent = 'Crear Tarea';
      // document.getElementById('btn_agregar').textContent = 'Agregar Tarea'
    } else {
      const nuevoId = tareasLista.length ? tareasLista[tareasLista.length - 1].id + 1 : 1

      const nuevaTarea = {
        id: nuevoId,
        nombreTarea,
        estado: 'pendiente'
      }

      tareasLista.push(nuevaTarea)
      alert(`Tarea Agregada Correctamente: ${nuevaTarea.nombreTarea}`);
    }

    inpTarea.value = ''

    ListarTareas(contenedorTareas)
  })
}