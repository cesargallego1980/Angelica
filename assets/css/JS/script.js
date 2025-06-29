// document.addEventListener('DOMContentLoaded', function() {
//     // Obtener el modal
//     var modal = document.getElementById("myModal");

//     // Obtener el botón que abre el modal
//     var btn = document.getElementById("openModalLink");

//     // Obtener el elemento <span> que cierra el modal
//     var span = document.getElementsByClassName("close-button")[0];

//     // Cuando el usuario hace clic en el botón, abre el modal
//     btn.onclick = function() {
//         modal.style.display = "block";
//         document.body.style.overflow = "hidden"; // Evita el scroll del fondo
//     }

//     // Cuando el usuario hace clic en <span> (x), cierra el modal
//     span.onclick = function() {
//         modal.style.display = "none";
//         document.body.style.overflow = "auto"; // Restaura el scroll del fondo
//     }

//     // Cuando el usuario hace clic en cualquier lugar fuera del contenido del modal, cierra el modal
//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//             document.body.style.overflow = "auto"; // Restaura el scroll del fondo
//         }
//     }

//     // Opcional: Cerrar el modal con la tecla 'Esc'
//     document.addEventListener('keydown', function(event) {
//         if (event.key === 'Escape' || event.key === 'Esc') {
//             if (modal.style.display === 'block') {
//                 modal.style.display = 'none';
//                 document.body.style.overflow = 'auto'; // Restaura el scroll del fondo
//             }
//         }
//     });
// });

const modal = document.getElementById("myModal");
    const openModal = document.getElementById("openModal");
    const closeModal = document.querySelector(".close");

    openModal.onclick = function(e) {
      e.preventDefault();
      modal.style.display = "block";
    };

    closeModal.onclick = function() {
      modal.style.display = "none";
    };

    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
