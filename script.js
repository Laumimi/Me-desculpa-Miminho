// script.js

function animarDesculpas() {
    const animationContainer = document.getElementById("animation");
    
    // Torna a animação visível
    animationContainer.style.display = "block";
    
    // Criar o texto de desculpas com animação
    const texto = document.createElement("p");
    texto.innerHTML = "Eu errei e reconheço isso! 😢 Quero te fazer feliz, me perdoa! 💕";
    texto.style.fontSize = "1.5rem";
    texto.style.color = "#2c3e50";
    texto.style.animation = "fadeIn 2s ease-out";
    
    // Adiciona o texto ao container
    animationContainer.appendChild(texto);
}
