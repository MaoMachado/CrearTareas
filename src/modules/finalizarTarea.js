import { ListarTareas } from "../components/listarTareas";
import { tareasLista } from "../data/tareasLista";

export const finalizarTarea = (contenedorTarea) => {
  const btnFinalizarGrupo = document.querySelectorAll('.btn_finalizar_tarea');

  btnFinalizarGrupo.forEach(btn => {
    btn.addEventListener('click', () => {
      const idTarea = parseInt(btn.dataset.id);
      const tareaIndex = tareasLista.find(t => t.id === idTarea);

      if (!tareaIndex) return;

      if (tareaIndex.estado === "finalizada") {
        alert("Esta tarea ya está finalizada");
        return;
      };

      const confirmacion = confirm(`¿Estás seguro de que deseas marcar la tarea "${tareaIndex.nombreTarea}" como finalizada?`);
      if (!confirmacion) return;

      tareaIndex.estado = "finalizada";
      alert("Tarea marcada como finalizada ✅");

      console.log(tareaIndex)

      ListarTareas(contenedorTarea);
    })
  })
}