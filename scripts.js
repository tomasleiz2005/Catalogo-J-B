let img = new Image();
img.src = 'C:/Users/betye/OneDrive/Escritorio/DW/Catalogos/Patagonia.jpg';
img.onload = function() {
  document.body.style.backgroundImage = 'url(' + img.src + ')';
};