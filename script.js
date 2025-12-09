document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    
    const seuNumeroWhatsapp = "5541991850421"; // número completo com código do país
    
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nome = formulario.querySelector('input[name="nome"]').value.trim();
<<<<<<< HEAD
        const mensagem = formulario.querySelector('textarea[name="mensagem"]').value.trim();
        
        if (!nome | !mensagem) {
=======
        const telefone = formulario.querySelector('input[name="telefone"]').value.trim();
        const mensagem = formulario.querySelector('textarea[name="mensagem"]').value.trim();
        
        if (!nome || !telefone || !mensagem) {
>>>>>>> af7262357be1faa1495c2113d9bb187e6d6f9b9d
            alert('Por favor, preencha todos os campos do formulário.');
            return;
        }
        
        const textoMensagem = encodeURIComponent(
<<<<<<< HEAD
            `Olá Andrey, meu nome é ${nome}\n\n` +
=======
            `Olá Andrey, meu nome é ${nome} e gostaria de entrar em contato.\n\n` +
            `Meu telefone: ${telefone}\n\n` +
>>>>>>> af7262357be1faa1495c2113d9bb187e6d6f9b9d
            `Mensagem:\n${mensagem}`
        );
        
        const whatsappLink = `https://wa.me/${seuNumeroWhatsapp}?text=${textoMensagem}`;
        
        window.open(whatsappLink, '_blank', 'noopener,noreferrer');
        
        formulario.reset();
    });
});
