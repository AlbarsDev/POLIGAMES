
function reproducirPronunciacion(letra) {
    const mensaje = new SpeechSynthesisUtterance(letra);
    mensaje.lang = 'it-IT';
    window.speechSynthesis.speak(mensaje);
}