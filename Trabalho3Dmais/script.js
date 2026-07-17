// Função para Alternar Modo Escuro (Modo Missão)
function toggleDarkMode() {
    const body = document.body;
    const btn = document.getElementById("btn-dark-mode");
    
    // Alterna a classe na tag body
    body.classList.toggle("dark-mode");
    
    // Altera o visual do botão dependendo do estado
    if (body.classList.contains("dark-mode")) {
        btn.textContent = "Desativar Modo Missão";
        btn.style.backgroundColor = "#ff007f"; // Fica rosa
        btn.style.color = "#fff";
    } else {
        btn.textContent = "Ativar Modo Missão";
        btn.style.backgroundColor = "#ffcc00"; // Volta pro amarelo
        btn.style.color = "#000";
    }
}

// Função para expandir o card de personagem com um clique
function expandirCard(elemento) {
    // Se já estiver expandido, volta ao normal
    if (elemento.style.transform === "scale(1.05)") {
        elemento.style.transform = "scale(1) translateY(0)";
        elemento.style.boxShadow = "0 4px 8px rgba(0,0,0,0.05)";
        elemento.style.zIndex = "1";
    } else {
        // Expande e destaca
        elemento.style.transform = "scale(1.05)";
        elemento.style.boxShadow = "0px 15px 30px rgba(0,0,0,0.5)";
        elemento.style.zIndex = "10";
        elemento.style.position = "relative";
    }
}