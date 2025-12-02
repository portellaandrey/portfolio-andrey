document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    
    const seuNumeroWhatsapp = "5541991850421"; // número completo com código do país
    
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nome = formulario.querySelector('input[name="nome"]').value.trim();
        const telefone = formulario.querySelector('input[name="telefone"]').value.trim();
        const mensagem = formulario.querySelector('textarea[name="mensagem"]').value.trim();
        
        if (!nome || !telefone || !mensagem) {
            alert('Por favor, preencha todos os campos do formulário.');
            return;
        }
        
        const textoMensagem = encodeURIComponent(
            `Olá Andrey, meu nome é ${nome} e gostaria de entrar em contato.\n\n` +
            `Meu telefone: ${telefone}\n\n` +
            `Mensagem:\n${mensagem}`
        );
        
        const whatsappLink = `https://wa.me/${seuNumeroWhatsapp}?text=${textoMensagem}`;
        
        window.open(whatsappLink, '_blank', 'noopener,noreferrer');
        
        formulario.reset();
    });
});
