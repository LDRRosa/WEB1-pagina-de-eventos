document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const groups = document.querySelectorAll(".group");

    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;

        // Desativar botões no início e fim
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === groups.length - 1;
    }

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (currentIndex < groups.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });




    updateCarousel(); // Inicializar estado inicial do carrossel
});

function toggleDetails(element) {
    const details = element.nextElementSibling;
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}


    // Seleciona os botões e os conteúdos das abas
    const buttons = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    // Adiciona o evento de clique em cada botão
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe "active" de todos os botões e esconde os conteúdos
            buttons.forEach(btn => btn.classList.remove('active'));
            contents.forEach(content => (content.style.display = 'none'));

            // Adiciona a classe "active" ao botão clicado e exibe o conteúdo correspondente
            button.classList.add('active');
            const target = document.querySelector(button.dataset.target);
            target.style.display = 'block';
        });
    });

    // Garante que a aba de Artilheiros seja exibida por padrão
    document.querySelector('.tab-button.active').click();



