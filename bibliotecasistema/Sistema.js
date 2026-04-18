function verificarSenha() {
    const senhaCorreta = "617";
    const senhaDigitada = document.getElementById('campoSenha').value;

    if (senhaDigitada === senhaCorreta) {
            alert("CONCORDI! O terminal abriu. Preparando para Sala 3...");
            // Aqui você coloca o link para o Desafio 3
            window.location.href = "Desafio3.html";
    } else {
        alert("ERRO: Senha inválida! Tente procurar melhor no código.");
    }
 }
