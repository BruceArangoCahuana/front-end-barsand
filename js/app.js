document.addEventListener('DOMContentLoaded',inicio);

function inicio(){
    escribir();
}

const escribir = () =>{
    const typed = new Typed('.typed',{
        /**  strings:[
        '<i class="letra">Ica</i>',
        '<i class="letra">Nasca</i>',
        '<i class="letra">Paracas</i>'
    ],*/
    
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
    typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
    startDelay: 280, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
    backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
    smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
    shuffle: false, // Alterar el orden en el que escribe las palabras.
    backDelay: 1400, // Tiempo de espera despues de que termina de escribir una palabra.
    loop: true, // Repetir el array de strings
    loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
    showCursor: true, // Mostrar cursor palpitanto
    cursorChar: '|', // Caracter para el cursor
    contentType: 'html', // 'html' o 'null' para texto sin formato -14.830881961533198, -74.93778090315921
});
}