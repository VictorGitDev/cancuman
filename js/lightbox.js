const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelectorAll('.agregar-imagen')
const contenedorLight = document.querySelectorAll('.imagen-light')

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerimagen(imagen.getAttribute('src'))
    })
})

const aparecerimagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classlist.toggle('show')
}