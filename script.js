document.addEventListener('DOMContentLoaded', function () {
    
    const contactForm = document.getElementById('contactForm');
    const btnEnviar = document.getElementById('btnEnviar');

    if (contactForm) {

        contactForm.addEventListener('submit', async function (e) {
            
            e.preventDefault(); // Impede a página de recarregar
            
            // Altera o estado do botão para o usuário saber que está enviando
            btnEnviar.innerText = "Enviando...";
            btnEnviar.disabled = true;

            // ATENÇÃO: Substitua o "xanyvbdq" pelo ID real que o Formspree te fornecer!
            const formspreeEndpoint = "https://formspree.io/f/mojbwpeq"; 

            // Captura os dados digitados
            const formData = new FormData(this);

            try {

                const response = await fetch(formspreeEndpoint, {

                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }

                });

                if (response.ok) {

                    alert(`Obrigado pelo contato! Sua mensagem foi enviada com sucesso para a nossa equipe.`);
                    contactForm.reset(); // Limpa os campos do formulário

                } 
                
                else {

                    alert("Ops! Ocorreu um erro ao enviar os dados. Por favor, tente novamente.");

                }

            } 
            
            catch (error) {

                alert("Erro de conexão. Verifique sua internet e tente novamente.");

            } 
            
            finally {

                // Restaura o botão ao estado original
                btnEnviar.innerHTML = 'Enviar Mensagem <i class="fa-solid fa-paper-plane ms-2"></i>';
                btnEnviar.disabled = false;

            }

        });

    }

    // Efeito visual na Navbar ao rolar a página
    window.addEventListener('scroll', function () {

        const navbar = document.querySelector('.navbar');

        if (navbar) {

            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
                navbar.style.backgroundColor = 'rgba(13, 44, 84, 0.98)';
            } 
            
            else {

                navbar.style.boxShadow = 'none';
                navbar.style.backgroundColor = 'rgba(13, 44, 84, 0.95)';

            }

        }

    });

});