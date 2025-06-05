function isDesktop() {
  return window.matchMedia('(min-width: 768px)').matches;
}

function activarEfecto3D() {
  document.querySelectorAll('.effect-hover').forEach(contenedor => {
    contenedor.style.boxShadow = '0 0 10px 5px rgba(255, 255, 255, 0.1)';
    contenedor.style.transition = 'transform 0.3s ease-out, box-shadow 0.3s ease-out';

    // Limpia handlers previos
    contenedor.onmousemove = null;
    contenedor.onmouseleave = null;

    if (isDesktop()) {
      contenedor.onmousemove = mouse => {
        const elementArea = contenedor.getBoundingClientRect();
        const positionX = mouse.clientX - elementArea.left;
        const positionY = mouse.clientY - elementArea.top;
        const centerX = elementArea.width / 2;
        const centerY = elementArea.height / 2;

        const rotateY = ((positionX - centerX) / centerX) * 4;
        const rotateX = -((positionY - centerY) / centerY) * 4;

        contenedor.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        contenedor.style.boxShadow = '0 0 20px 10px rgba(255, 255, 255, 0.2)';
      };
      contenedor.onmouseleave = () => {
        contenedor.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        contenedor.style.boxShadow = '0 0 10px 5px rgba(255, 255, 255, 0.1)';
      };
    } else {
      // Limpia cualquier transformación si no es desktop
      contenedor.style.transform = '';
      contenedor.style.boxShadow = '';
    }
  });
}

window.addEventListener('DOMContentLoaded', activarEfecto3D);
window.addEventListener('resize', activarEfecto3D);


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.opacity-20').forEach(div => {
    div.addEventListener('mouseenter', () => {
      div.classList.remove('opacity-20');
      div.classList.add('opacity-100');
    });
  });
});