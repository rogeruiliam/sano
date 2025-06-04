// Funções básicas de autenticação
function verificarAutenticacao() {
    // Verifica se o usuário está autenticado
    const usuarioAutenticado = localStorage.getItem('usuarioAutenticado');
    if (!usuarioAutenticado) {
        window.location.href = 'index.html';
    }
}

// Verifica autenticação ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    verificarAutenticacao();
});