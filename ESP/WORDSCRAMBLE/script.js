
let bd = new Array(8);
bd[0] = ['PERA', 'GUAYABA', 'NARANJA', 'MELÓN', 'PIÑA','CEREZA', 'ALBARICOQUE'];
bd[1] = ['PIMIENTO', 'CEBOLLA', 'BRÓCOLI', 'ENELDO', 'ZANAHORIA', 'PEPINO', 'HINOJO'];
bd[2] = ['TURRÓN','CHUPETA','CHOCOLATE','GELATINA','HELADO','GALLETA','MENTA','REGALIZ'];
bd[3] = ['ROSA', 'LIRIO', 'GIRASOL', 'AMAPOLA', 'NARCISO', 'GERANIO', 'LAVANDA'];
bd[4] = ['OLIVO', 'HELECHO', 'PALMERA', 'BAMBÚ', 'ROBLE', 'PINO', 'ALMENDRO'];
bd[5] = ['LEÓN', 'GALLINA', 'PERRO', 'LEOPARDO', 'MURCIÉLAGO', 'MONO', 'ELEFANTE'];
bd[6] = ['HORNO', 'NEVERA', 'SARTÉN', 'BATIDORA', 'CUCHILLO', 'OLLA', 'TOSTADORA'];
bd[7] = ['FLAUTA', 'ARMÓNICA', 'PIANO', 'ARPA', 'TAMBORES', 'CASTAÑUELAS', 'BONGOS'];
bd[8] = ['BORRA', 'REGLA', 'TINTA', 'TIJERAS', 'LÁPIZ', 'PEGA', 'BOLÍGRAFO'];


let categorias = ['FRUTAS', 'VEGETALES', 'CARAMELOS','FLORES', 'ÁRBOLES','ANIMALES', 'HOGAR', 'MÚSICA', 'ESCUELA']



const cantidadPalabras = 5;
let palabras = [];
let desordenadas = [];

let pos = 0;


function agregarPalabras(categoria){
    for(i=0;i<cantidadPalabras;i++){
        let x = Math.floor(Math.random() * categoria.length);
        palabras.push(categoria[x]);
        categoria.splice(x,1);
    }   
}
agregarPalabras(bd[pos]);


function desordenarPalabras(){
    for(var i=0;i<palabras.length;i++){
        let palabra = palabras[i];
        palabra = palabra.split('');
    
        let palabraDesordenada;

        palabraDesordenada = palabra.sort(function(){return Math.random() - 0.5});
    
        palabraDesordenada = palabraDesordenada.toString();
        palabraDesordenada = palabraDesordenada.replace(/,/g,"");
    
        if(palabraDesordenada == palabras[i]){
            i = i - 1;
        }else{
            desordenadas.push(palabraDesordenada);
        }
    }
}

function agregarPalabra(){
    let h2 = document.createElement("h2");
    h2.textContent = categorias[pos];
    document.querySelector("#contenedor").appendChild(h2);
    for(var i = 0; i < desordenadas.length;i++){
        let div = document.createElement("div");
        div.className = "fila";
        let palabra = document.createElement("div")
        palabra.textContent = desordenadas[i];
        palabra.className = "palabra";
        div.appendChild(palabra);
        let input = document.createElement("input");
        input.id = i;
        input.setAttribute("onkeyup", "corregir("+i+")");
        div.appendChild(input);
        document.querySelector("#contenedor").appendChild(div);
    }
}

desordenarPalabras();
agregarPalabra();
efectoNivel();

function corregir(i) {
  let input = document.getElementById(i);
  let texto = input.value;

  let textoMayusculas = texto.toUpperCase();

  input.value = textoMayusculas;

  if (textoMayusculas === palabras[i]) {
    input.className = "correcta";
    controlarFin();
  } else {
    input.className = "";
  }
}


let btnCraeado = false;
function controlarFin(){
    let total = document.getElementsByClassName("correcta").length;
    if(total==cantidadPalabras && btnCraeado==false){
        let button = document.createElement("button");
        button.textContent = "Siguiente";
        button.setAttribute("onclick", "siguiente()");
        document.querySelector("#contenedor").appendChild(button);
        btnCraeado=true;
        
        let niveles = document.getElementsByClassName("nivel");
        niveles[pos].classList = "nivel completado";
    }
}

function siguiente(){
    palabras.length = 0;
    desordenadas.length = 0;
    document.querySelector("#contenedor").textContent = "";
    pos++;

    if(pos<bd.length){
        btnCraeado = false;
        agregarPalabras(bd[pos]);
        desordenarPalabras();
        efectoNivel();
        agregarPalabra();
    }else{
        let h2 = document.createElement("h2");
        h2.textContent = "¡JUEGO FINALIZADO!       !MUY BIEN!";
        document.querySelector("#contenedor").appendChild(h2);
    }

}


function efectoNivel(){
    let niveles = document.getElementsByClassName("nivel");
    niveles[pos].style.boxShadow = "0px 0px 7px 5px green";

}