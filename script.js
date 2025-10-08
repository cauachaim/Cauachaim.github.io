document.addEventListener('DOMContentLoaded', () => {

    // Efeito de digitação na seção Home
    new Typed('.typing-text', {
        strings: ['Técnico em Eletrônica', 'Programador', 'Líder de Robótica', 'Criativo'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Animação de fundo com Particles.js
    particlesJS('particles-js', {
        particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: '#f9185a' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out' }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'repulse' } },
            modes: { repulse: { distance: 100, duration: 0.4 } }
        },
        retina_detect: true
    });
    
    // Função de Rolagem Suave para links da NAV e Cards
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Leva em conta a altura do header fixo
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Função para Marcar link ativo na NAV ao rolar
    const navLinks = document.querySelectorAll('header nav a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 90) { 
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkHref = link.getAttribute('href').substring(1);

            if (linkHref === 'projects' && current.includes('-details') && current !== 'certificados-details') {
                // Ativa "Projetos" para todas as seções de detalhes, exceto certificados
                link.classList.add('active');
            } else if (linkHref === current) {
                // Ativa o link correspondente exato (como #about, #certificados-details, #contact)
                link.classList.add('active');
            }
        });
        
        // Garante que o primeiro link visível seja o ativo por padrão
        if (window.pageYOffset < sections[1].offsetTop - 90) {
             document.querySelector('header nav a[href="#about"]').classList.add('active');
        }
    });
});

