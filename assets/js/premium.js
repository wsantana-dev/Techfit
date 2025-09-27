// Header fixo
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("header--scrolled");
    } else {
        header.classList.remove("header--scrolled");
    }
});

// === 3. BENEFÍCIOS INTERATIVOS ===
const beneficioCards = document.querySelectorAll(".beneficio-card");

beneficioCards.forEach(card => {
    card.addEventListener("click", () => {
        // Remove ativo de todos
        beneficioCards.forEach(c => c.classList.remove("ativo"));
        // Adiciona ativo no clicado
        card.classList.add("ativo");
    });
});

// Seleciona elementos
const cadastroForm = document.getElementById("cadastroForm");
const popup = document.getElementById("popupConfirmacao");
const mensagemPopup = document.getElementById("mensagemPopup");
const fecharPopup = document.getElementById("fecharPopup");

if (cadastroForm && popup && mensagemPopup && fecharPopup) {
    cadastroForm.addEventListener("submit", function(e) {
        e.preventDefault(); // evita recarregar a página

        // Mensagem personalizada
        mensagemPopup.innerHTML = "Parabéns! Você está inscrito no Plano Premium 😊💪. Agora entraremos em contato pelo seu e-mail para conectar você a uma TechFit mais próxima e realizar sua digital.";

        // Mostra o pop-up
        popup.style.display = "flex";

        // Limpa os campos do formulário
        cadastroForm.reset();
    });

    // Fecha o pop-up ao clicar no X
    fecharPopup.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // Fecha o pop-up ao clicar fora do conteúdo
    window.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });
}