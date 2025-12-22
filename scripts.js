// Espera a que la página cargue
window.onload = function() {
    // Es mejor usar rutas relativas para que funcione en cualquier PC
    let backgroundUrl = 'Patagonia.jpg'; 
    
    let img = new Image();
    img.src = backgroundUrl;
    
    img.onload = function() {
        document.body.style.backgroundImage = 'url(' + backgroundUrl + ')';
        console.log("Fondo cargado correctamente");
    };
    
    img.onerror = function() {
        console.error("No se pudo encontrar la imagen de fondo. Verifica que 'Patagonia.jpg' esté en la misma carpeta.");
    };
};
