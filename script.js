// Menu mobile
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    // Alternar menu
    navLinks.classList.toggle('active');
    
    // Animação do ícone
    burger.classList.toggle('toggle');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
    });
});

// Efeito de rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70, // Ajuste para a barra de navegação fixa
            behavior: 'smooth'
        });
    });
});