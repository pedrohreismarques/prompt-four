document.addEventListener('DOMContentLoaded', function () {
    
    // Validação e envio do formulário de contato
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            alert(`Obrigado pelo contato, ${name}! Seu e-mail simulado foi registrado com sucesso.`);
            this.reset();
        });
    }

    // Efeito visual na Navbar ao rolar a página
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
                navbar.style.backgroundColor = 'rgba(13, 44, 84, 0.98)';
            } else {
                navbar.style.boxShadow = 'none';
                navbar.style.backgroundColor = 'rgba(13, 44, 84, 0.95)';
            }
        }
    });
});