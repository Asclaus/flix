// document (página inteira)
document
  // busca no documento por qualquer TAG A dentro de uma CLASSE "jogo"
  .querySelectorAll('.jogo a')
    // LOOP (estrutura de repetição) pra cada A (botao)
    .forEach((botao, i) => {
      // executa um trecho de código (function) pra cada evento "CLICK" no botao
      botao.addEventListener('click', function(evento) {
        // parar o evento que ocorreria naturalmente durante o click
        evento.preventDefault();

        // variável LINK recebe o atributo "href" do botao (tag A)
        var link = botao.getAttribute('href');
        alert(link);
      });
  });
