import Swal from "sweetalert2";

export const confirmationAlert = (title: string, text: string) => {
  return Swal.fire({ // Retorna la Promesa para manejar la respuesta
    title: title,
    text: text,
    //icon: 'warning',
    imageUrl: '/robotDam.png', // Ruta personalizada del icono de advertencia
    imageWidth: 300, // **Reducido para hacerla menos alta**
    imageHeight: 200, // **Reducido para hacerla menos alta**

    background: '#000000ff', // Fondo azul claro
    showCancelButton: true,
    confirmButtonText: 'Sí, continuar',
    cancelButtonText: 'Cancelar',
    confirmButtonColor: '#e40000ff', // Botón morado
    cancelButtonColor: '#5f5f5fff', // Botón gris
    iconColor: '#fc0000ff', // Color del icono de advertencia
    padding: '1em', // **Reducido para hacerla menos alta**

    width: '500px', // **Aumentado para hacerla más ancha**
    willOpen: (popup) => {
      // popup es el elemento DOM de la alerta
      popup.style.border = '3px solid #b31717ff';
      popup.style.color = '#ffffffff';
    }
  });
}

export const mostrarAlertaEliminar = () => {
    Swal.fire({
        title: 'Eliminado',
        text: 'Tu información ha sido eliminada con éxito.',
        icon: 'success',
        // 💡 Opciones de estilo
        iconColor: '#fc0000ff', // Color del icono de éxito
        background: '#000000ff', // Fondo azul claro
        confirmButtonColor: '#e40000ff', // Botón morado
        padding: '1.5em',
        width: '500px',
        willOpen: (popup) => {
            // popup es el elemento DOM de la alerta
            popup.style.border = '3px solid #b31717ff';
            popup.style.color = '#ffffffff';
        }
});

};

export const mostrarAlertaAltaPersona = (nombre?: string) => {
  const texto = nombre ? `${nombre} ha sido registrada correctamente.` : 'La persona ha sido registrada correctamente.';
  Swal.fire({
    title: 'Alta exitosa',
    text: texto,
    icon: 'success',
    iconColor: '#fc0000ff',
    background: '#000000ff',
    confirmButtonColor: '#e40000ff',
    padding: '1.5em',
    width: '500px',
    willOpen: (popup) => {
      popup.style.border = '3px solid #b31717ff';
      popup.style.color = '#ffffffff';
    }
  });
};