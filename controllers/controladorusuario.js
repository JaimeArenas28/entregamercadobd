let url="http://localhost:8080/storeapi/v1/usuario"

let peticion={
    method:"GET",
    Headers:{}
}

fetch(url,peticion)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
    //recorriendo la respuesta para hacer render
    let fila=document.getElementById("fila")
    respuesta.forEach(function(usuario){
        
        let columna=document.createElement("div")
        columna.classList.add("col")
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","shadow","h-100")
    
        let nombreusuario=document.createElement("h3")
        nombreusuario.classList.add("text-center")
        nombreusuario.textContent=usuario.nombres

        let cedulausuario=document.createElement("h4")
        cedulausuario.classList.add("text-center")
        cedulausuario.textContent=usuario.cedula

        let correousuario=document.createElement("h5")
        correousuario.classList.add("text-center")
        correousuario.textContent=usuario.correo

        tarjeta.appendChild(nombreusuario)
        tarjeta.appendChild(cedulausuario)
        tarjeta.appendChild(correousuario)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })
})
.catch(function(respuesta){
    console.log(respuesta)
})