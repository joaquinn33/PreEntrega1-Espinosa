// a) A través de 3 prompts, pídale al usuario que ingrese su nombre, usuario y su contraseña. Valide que el usuario y la contraseña coincidan con los datos de las variables, estos datos tienen que ser iguales entre sí. En el caso de que no lo sean, devuelva un mensaje en forma de alerta, para cada uno de los casos: "Su usuario es erróneo" o "Su contraseña es errónea". EN EL CASO DE QUE SE EQUIVOQQUE EN LOS DOS: "SU USUARIO Y CONTRASEÑA SO ERRÓNEOS".
// b) Luego de que el usuario se loguee exitosamente, envíe una alerta que notifique "Bienvenido ${nombre}". La alerta debe saludar al usuario que se loguea.
// c) Valide con un bucle que el usuario tiene una arroba. En el caso que no la contenga, envíe un prompt con el siguiente mensaje: "Ingrese nuevo email". Cambie el valor de la variable usuarioConEmail.
// d) Valide si la contraseña del usuario tiene más de 8 caracteres. En el caso de que tenga más de ocho caracteres, no haga nada. De lo contrario, envíe un alerta con el siguiente mensaje: "Su contraseña es insegura."
// e) Valide con un bucle que la contraseña al menos tenga un número. En el caso de que no tenga uno, envíe un prompt que exprese lo siguiente: "Su contraseña debe tener caracteres alfanuméricos. Desea cambiarla?". Si el usuario dice si, entonces cambie el valor de la contraseña.

let usuario = "joaquin@1"
let contraseña = "contra123"
const nombre = prompt("Bienvenido, Ingrese su Nombre")
let usuarioIngresado = prompt("Ingrese su Usuario")
let contraseñaIngresada = prompt("Ingrese su contraseña")

//Validacion a) y b)
if (usuario === usuarioIngresado && contraseña === contraseñaIngresada) {
    alert("Bienvenido : " + nombre)
} else if (usuario === usuarioIngresado && !(contraseña === contraseñaIngresada)) {
    alert("Su contraseña es errónea")
} else if (!(usuario === usuarioIngresado) && contraseña === contraseñaIngresada) {
    alert("Su usuario es erróneo")
} else {
    alert("Su usuario y contraseña son erroneos")
}

// c)
let arroba = false

function tieneArroba(usuarioIngresado) {
    for (i = 0; i < usuarioIngresado.length; i++) {
        if (usuarioIngresado[i] === "@") {
            arroba = true
        }
    }
    if (arroba != true) {
        usuarioIngresado = prompt("Ingrese nuevo Usuario con @")
    }
}

tieneArroba(usuarioIngresado)

// d)
function contraseñaSegura(contraseña) {
    if (contraseña.length <= 8) {
        alert("Su contraseña es insegura.")
    }
}

contraseñaSegura(contraseña)

// e)

let tiene_num = false

const validarContraseña = contraseña => {
    const numeros = "0123456789"
    for (const car of contraseña) {
        if (numeros.includes(car)) {
            tiene_num = true
        }
    }
    if (tiene_num == false) {
        let desicion = prompt("Su contraseña debe tener caracteres alfanuméricos. Desea cambiarla?")
        if (desicion.toLocaleLowerCase() == "si") {
            contraseña = prompt("Ingrese su nueva contraseña")
        }
    }
}

validarContraseña(contraseña)