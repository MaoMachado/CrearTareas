import { ListarTareas } from "../components/listarTareas";
import { tareasLista } from "../data/tareasLista";

export const eliminarTarea = (contenedorTareas) => {
  const btnGrupoEliminar = document.querySelectorAll('.btn_eliminar_tarea');

  btnGrupoEliminar.forEach(btn => {
    btn.addEventListener('click', () => {
      const idTarea = parseInt(btn.dataset.id);
      const tareaIndex = tareasLista.findIndex(t => t.id === idTarea);

      if (tareaIndex !== -1) {
        const confirmacion = confirm(`¿Estás seguro de que deseas eliminar la tarea "${tareasLista[tareaIndex].nombreTarea}"?`);

        if (!confirmacion) return;

        tareasLista.splice(tareaIndex, 1);
        alert("Tarea eliminada correctamente");
        ListarTareas(contenedorTareas);
      };

    });
  });
}