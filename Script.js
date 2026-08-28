const botaoSair = document.querySelector('#sair');

if (botaoSair) {
  botaoSair.addEventListener('click', () => {
    alert('Ação de saída acionada.');
  });
}
