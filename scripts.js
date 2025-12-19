document.addEventListener("DOMContentLoaded", () => {
  const img = new Image();
  img.src = "img/Patagonia.jpg";

  img.onload = () => {
    document.body.style.backgroundImage = `url('${img.src}')`;
  };
});
