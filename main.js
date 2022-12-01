// buscar iframe e colocar numa variável
var iframe = document.querySelector('#play');

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

        // puxa a lista de classes do IFRAME e adiciona a class "exibir"
        iframe.classList.add('exibir');
        // define um atributo "SRC" no IFRAME com valor de LINK (variável)
        iframe.setAttribute('src', link);
      });
    });

// busca em todo document
document
  // observando o evento "keypress" (tecla do teclado) e executa uma função
  .addEventListener('keypress', function(evento) {
    // SE (condicional) a TECLA (key) do evento for IGUAL (==) a "Escape", executa o código {}
    if (evento.key == '0') {
      // puxa a lista de classes do IFRAME e remove a class "exibir"
      iframe.classList.remove('exibir');
      // definindo o atributo "SRC" com valor VAZIO ('') no IFRAME
      iframe.setAttribute('src', '');
    }
  });
