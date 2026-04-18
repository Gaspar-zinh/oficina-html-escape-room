function verificarMapa() {
    const senhaCorreta = "9988";
    // Ajustado para 'inputMapa' para bater com o ID do HTML
    const senhaDigitada = document.getElementById('inputMapa').value;

    if (senhaDigitada === senhaCorreta) {
            alert("COORDENADAS ACEITAS! Rota para a Sala 4 calculada...");
            window.location.href = "Desafio4.html";
    } else {
        alert("ERRO: Coordenada incorreta! Verifique a tabela no mapa.");
    }
}