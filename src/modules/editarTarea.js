import { tareasLista } from "../data/tareasLista"

export const editarTarea = () => {
  const btnGrupoEditar = document.querySelectorAll('.btn_editar_tarea');

  btnGrupoEditar.forEach(btn => {
    btn.addEventListener('click', () => {
      const idTarea = parseInt(btn.dataset.id);
      const tarea = tareasLista.find(t => t.id === idTarea);

      if (!tarea) return;

      const inpTarea = document.getElementById('ipt_tarea');
      inpTarea.value = tarea.nombreTarea;
      inpTarea.dataset.editando = idTarea;

      document.getElementById('form_titulo').textContent = 'Editar Tarea';

      inpTarea.focus();
    })
  })
}