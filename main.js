var urlSite = 'https://flixsenac.000webhostapp.com/';

// buscando na URL contida na variável urlSite
fetch(urlSite, {
  // método GET pega um valor
  method: 'GET'
})
// "então"... ou seja, assim que a resposta vier
.then(function(resposta) {
  // retorna a resposta em texto
  return resposta.text();
})
.then(function(texto) {
  // retornando o texto convertido em JSON
  return JSON.parse(texto)
})
.then(function(json) {

  // buscar listaJogos e colocar numa variável
  var listaJogos = document.querySelector('#listaJogos');

  // LOOP (estrutura de repetição) executa um trecho de código pra cada jogo
  json.forEach((jogo, j) => {
    // DIV com classe "jogo"
    var div = document.createElement('div');
    div.classList.add('jogo');

    // variável IMG com elemento <img>
    var img = document.createElement('img');
    // definindo um atributo SRC no elemento IMG
    img.setAttribute('src', 'https://flixsenac.000webhostapp.com' + jogo.cover);
    // coloca o elemento IMG na DIV
    div.appendChild(img);

    // variável H3 com elemento <h3>
    var h3 = document.createElement('h3');
    // atribui o título ao h3
    h3.innerHTML = jogo.title;
    // coloca o elemento H3 na DIV
    div.appendChild(h3);

    // variável a com elemento <a>
    var a = document.createElement('a');
    // definindo um atributo HREF no elemento A
    a.setAttribute('href', jogo.url);
    // atribui o texto ao elemento A
    a.innerHTML = 'Jogue aqui';
    // coloca o elemento A na DIV
    div.appendChild(a);

    // coloca o elemento DIV na #listaJogos
    listaJogos.appendChild(div);
  });

});

// buscar iframe e colocar numa variável
var iframe = document.querySelector('#play');

// document (página inteira)
document
  // executa um trecho de código (function) pra cada evento "CLICK" no botao
  .addEventListener('click', function (evento) {
    // SE o nome da TAG do elemento do EVENTO ("click") for A
    if (evento.target.tagName == 'A') {
      // parar o evento que ocorreria naturalmente durante o click
      evento.preventDefault();

      // criando variável botão para armazenar o elemento clicado
      var botao = evento.target;

      // variável LINK recebe o atributo "href" do botao (tag A)
      var link = botao.getAttribute('href');

      // puxa a lista de classes do IFRAME e adiciona a class "exibir"
      iframe.classList.add('exibir');
      // define um atributo "SRC" no IFRAME com valor de LINK (variável)
      iframe.setAttribute('src', link);
    }
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
