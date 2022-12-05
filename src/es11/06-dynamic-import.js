const button = document.getElementById("btn");


boton.addEventListener("click", async function () {
    const modulo = await import('./modulo.js')
    modulo.funcion()
})