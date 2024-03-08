
function reproducirPronunciacion(letra) {
    const mensaje = new SpeechSynthesisUtterance(letra);
     mensaje.lang = 'es-Es';
    window.speechSynthesis.speak(mensaje);
}