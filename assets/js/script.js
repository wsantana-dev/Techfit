// === 1. MENU FIXO ===
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("header--scrolled");
    } else {
        header.classList.remove("header--scrolled");
    }
});

// === 2. ANIMAÇÃO PLANOS ===
const plans = document.querySelectorAll(".pricing-plan");
function animatePlans() {
    const triggerBottom = window.innerHeight * 0.85;
    plans.forEach(plan => {
        const planTop = plan.getBoundingClientRect().top;
        if (planTop < triggerBottom) {
            plan.classList.add("show");
        } else {
            plan.classList.remove("show");
        }
    });
}
window.addEventListener("scroll", animatePlans);
animatePlans();

// === 3. DARK/LIGHT MODE ===
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "🌙";
toggleBtn.classList.add("toggle-mode");
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    toggleBtn.innerText = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
});

// === 4. SCROLL SUAVE E MENU ATIVO ===
const sections = document.querySelectorAll(".section, .home-section"); // incluir home
const menuLinks = document.querySelectorAll(".header__nav a");

// Scroll suave ao clicar
menuLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Atualiza menu ativo usando getBoundingClientRect()
function updateActiveMenu() {
    let currentSection = "home"; // default para Home

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= header.offsetHeight + 10 && rect.bottom > header.offsetHeight + 10) {
            currentSection = section.getAttribute("id");
        }
    });

    menuLinks.forEach(link => {
        link.classList.remove("header__nav--active");
        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("header__nav--active");
        }
    });
}

window.addEventListener("scroll", updateActiveMenu);
updateActiveMenu(); // chama ao carregar

// === 5. FORMULÁRIO DE SUPORTE ===
const enviarBtn = document.getElementById("enviar");
const confirmacao = document.getElementById("confirmacao");

if (enviarBtn && confirmacao) {
    enviarBtn.addEventListener("click", (e) => {
        e.preventDefault();
        confirmacao.innerText = "Obrigado pela mensagem! Em breve retornaremos.";

        // limpa formulário
        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("assunto").value = "";
        document.getElementById("mensagem").value = "";
    });
}
