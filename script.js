function validateName() {
    let name = document.getElementById('hero-name').value;
    let regex = /^[A-Za-z\s]+$/;
        
    if (!regex.test(name)) {
        alert('Por favor, insira um nome válido (apenas letras e espaços).');
        nameInput.value = ''; 
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const heroForm = document.getElementById("hero-form");
    const resultDiv = document.getElementById("result");
    const heroNameSpan = document.getElementById("hero-result-name");
    const heroLevelSpan = document.getElementById("hero-result-level");

    heroForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const heroName = document.getElementById("hero-name").value;
        const heroXP = parseInt(document.getElementById("hero-xp").value);

        let heroLevel;

        if (heroXP < 1000) {
            heroLevel = "Ferro";
        } else if (heroXP >= 1001 && heroXP <= 2000) {
            heroLevel = "Bronze";
        } else if (heroXP >= 2001 && heroXP <= 5000) {
            heroLevel = "Prata";
        } else if (heroXP >= 6001 && heroXP <= 7000) {
            heroLevel = "Ouro";
        } else if (heroXP >= 7001 && heroXP <= 8000) {
            heroLevel = "Platina";
        } else if (heroXP >= 8001 && heroXP <= 9000) {
            heroLevel = "Ascendente";
        } else if (heroXP >= 9001 && heroXP <= 10000) {
            heroLevel = "Imortal";
        } else {
            heroLevel = "Radiante";
        }

        heroNameSpan.textContent = heroName;
        heroLevelSpan.textContent = heroLevel;
        resultDiv.classList.remove("hidden");
    });
});
