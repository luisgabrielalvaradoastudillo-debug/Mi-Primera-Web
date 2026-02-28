document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Lógica para resaltar el menú activo
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        // Obtenemos el nombre del archivo del href (ej. "index.html")
        const linkPath = link.getAttribute('href');
        
        // Si la ruta actual incluye el href del enlace, lo marcamos como activo
        // También maneja el caso donde la ruta es solo "/" (la raíz del servidor) y resalta el index
        if (currentPath.includes(linkPath) || (currentPath.endsWith('/') && linkPath === 'index.html')) {
            link.classList.add('active');
        }
    });

    // 2. Lógica para el formulario de contacto
    const contactForm = document.getElementById('contactForm');
    
    // Verificamos si estamos en la página que tiene el formulario
    if (contactForm) {
        contactForm.addEventListener('submit', function(evento) {
            // Evitamos que el formulario recargue la página (comportamiento por defecto)
            evento.preventDefault();
            
            // Mostramos la alerta solicitada
            alert('Mensaje enviado');
            
            // Limpiamos los campos del formulario
            contactForm.reset();
        });
    }
});