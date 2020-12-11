const imagenes = document.querySelectorAll('.img-galeria')
const imageneslight = document.querySelector('.agregar-imagen')
const contenedorlight = document.querySelector('.imagen-light')

/*para cada imagen en imagenes */
imagenes.forEach(imagen => {
    /*cuando le des click a una de las imagenes que estan dentro de imagenes */
    imagen.addEventListener('click',() =>{

        AparecerImagen(imagen.getAttribute('src')/*Se obtienee la direccion de la imagen */)
    })
})


const AparecerImagen = (imagen) =>{
    imageneslight.src = imagen /*El src de img que está vacio ese src va a ser igual al de la imagen que le demos click  */
    contenedorlight.classList.toggle('show') /*quiere decir que en el contenedor, cuando se le de click agregue la clase show entre sus clases */
    imageneslight.classList.toggle('showImage');
}


contenedorlight.addEventListener('click',(e)=>{ /*en el contenedorlight  */
    if (e.target !== imageneslight ){/*Cuando demos click a un lugar diferente a la imagen en ves de abrir la imagen va a cerrarla */
        contenedorlight.classList.toggle('show')
        imageneslight.classList.toggle('showImage');
    }
})