// Animasi saat menu diklik
document.querySelectorAll('.menu li a').forEach(menu => {
  menu.addEventListener('click', () => {
    menu.style.transform = "scale(1.25)";
    menu.style.boxShadow = "0 0 25px #ffcc00";

    setTimeout(() => {
      menu.style.transform = "scale(1)";
      menu.style.boxShadow = "none";
    }, 250);
  });
});
