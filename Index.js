// Adiciona a função de clicar na classe das dúvidas 
var elementosDuvida = document.querySelectorAll('.duvida')

elementosDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa')
    })
})

// Adiciona um evento de rolagem para mostrar ou ocultar o botão conforme necessário
window.addEventListener('scroll', function() {
    var backToTopButton = document.getElementById('back-to-top');
    
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Adiciona um evento de clique para rolar suavemente de volta ao topo
document.getElementById('back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Adiciona um evento de rolagem da página ao clicar em algum item do menu inicial
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', scrollToSection);
    });

    function scrollToSection(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    }
});