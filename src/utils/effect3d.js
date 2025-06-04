document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.effect-hover').forEach(contenedor => {
    contenedor.style.transition = 'transform 0.3s ease-out, box-shadow 0.3s ease-out';

    contenedor.addEventListener('mousemove', mouse => {
      const elementArea = contenedor.getBoundingClientRect();
      const positionX = mouse.clientX - elementArea.left;
      const positionY = mouse.clientY - elementArea.top;
      const centerX = elementArea.width / 2;
      const centerY = elementArea.height / 2;

      const rotateY = ((positionX - centerX) / centerX) * 4;
      const rotateX = -((positionY - centerY) / centerY) * 4;

      contenedor.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      contenedor.style.boxShadow = '0 0 20px 2px rgba(255, 255, 255, 0.15)';
      contenedor.style.opacity = '1';
    });

    contenedor.addEventListener('mouseleave', () => {
      contenedor.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
      contenedor.style.boxShadow = 'none';
    });
  });

  document.querySelectorAll('.opacity-20').forEach(div => {
    div.addEventListener('mouseenter', () => {
      div.classList.remove('opacity-20');
      div.classList.add('opacity-100');
    });
  });
});