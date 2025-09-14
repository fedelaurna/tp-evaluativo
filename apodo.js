

let key="5hgcwemdorrZZQWCcgkqttIk7r8jH6KDy0qsTQes"

let imagenDelDia = document.querySelector("#imagenDelDia")
let boton = document.querySelector("#boton")
let titulo = document.querySelector("h1")
let info = document.querySelector("#infoImagenDelDia")
let autor = document.querySelector("#autorImagenDelDia")

 boton.onclick = function(){
fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
.then(res => res.json())
.then(fotoDelDia => {
imagenDelDia.src = fotoDelDia.hdurl
titulo.textContent = fotoDelDia.title
 info.textContent = "Descripción: " + fotoDelDia.explanation
  autor.textContent = "Autor: " + (fotoDelDia.copyright || "Desconocido")
   })
 }

 let imagenFecha = document.querySelector("#imagenFecha")
let botonFecha = document.querySelector("#botonFecha")
let fechaUsuario = document.querySelector("#fecha")
let infoFecha = document.querySelector("#infoImagenFecha")
let autorFecha = document.querySelector("#autorImagenFecha")
let tituloFecha = document.querySelector("#tituloImagenFecha")

 botonFecha.onclick = function(){
console.log(fechaUsuario)
fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${fechaUsuario.value}`)
.then(res => res.json())
.then (fotoFecha => {
imagenFecha.src = fotoFecha.hdurl
   infoFecha.textContent = "Descripción: " + fotoFecha.explanation
    autorFecha.textContent = "Autor: " + (fotoFecha.copyright || "Desconocido")
      tituloFecha.textContent = fotoFecha.title
  })
 }

 let contenedorImagen = document.querySelector(".contenedor-imagen")
  let botonCantidad = document.querySelector("#botonCantidad")
  let cantidadUsuario = document.querySelector("#cantidad")
  

  botonCantidad.onclick = function(){
console.log(cantidadUsuario.value)
fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&count=${cantidadUsuario.value}`)
.then(res => res.json())
.then(fotos => {
contenedorImagen.innerHTML=""
for (let i= 0; i < fotos.length; i++) {
  contenedorImagen.innerHTML = `${contenedorImagen.innerHTML} <img src="${fotos[i].url}" alt="${fotos[i].title}">`
   
    }
   })
  }
