document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede que os dados apareçam na URL
    document.getElementById("popup").style.display = "block"; // Mostra o popup
});

function fecharPopup() {
    document.getElementById("popup").style.display = "none"; // Fecha o popup
    document.getElementById("formContato").reset(); // Limpa os campos do formulário
}
