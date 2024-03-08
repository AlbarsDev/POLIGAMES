

function reproducirPronunciacion(letra) {
    const mensaje = new SpeechSynthesisUtterance(letra);
    mensaje.lang = 'en-US';
    window.speechSynthesis.speak(mensaje);
}

  
  
  
