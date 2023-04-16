# Projeto FAQ

Este projeto consiste em uma página simples de Perguntas Frequentes (FAQ) com uma lista de perguntas e respostas, onde as respostas são reveladas ao clicar nas perguntas. A aplicação foi construída usando HTML, CSS e JavaScript.

## Estrutura do projeto

O projeto possui três arquivos principais:

- `index.html`: Arquivo HTML que contém a estrutura da página.
- `style.css`: Arquivo CSS que contém os estilos da página.
- `script.js`: Arquivo JavaScript que contém a lógica para mostrar e ocultar as respostas.

### JavaScript

O arquivo `script.js` é responsável pela funcionalidade de alternância (toggle) das respostas das perguntas. Abaixo está uma explicação detalhada do que foi feito no JavaScript:

1. Selecionamos todos os elementos `li` dentro da lista de perguntas usando `querySelectorAll('.faq ul li')`.

2. Para cada `li` encontrado, executamos o seguinte:

   - Definimos os estilos iniciais dos elementos internos do `li`:

     - O elemento `p` (resposta) é ocultado definindo seu estilo `display` como `'none'`.
     - O elemento `h3` (pergunta) tem seu `fontWeight` definido como `'400'` (não-negrito).
     - A seta (imagem) tem sua transformação definida como `'rotate(0deg)'`.

   - Adicionamos um evento de clique (`click`) ao elemento `li` que, quando acionado, executa a seguinte lógica:
     - Selecionamos o elemento `p` (resposta), `h3` (pergunta) e a seta (imagem) do `li` clicado.
     - Alternamos o estilo `display` do elemento `p` entre `'none'` e `'block'` para mostrar ou ocultar a resposta.
     - Alternamos o estilo `fontWeight` do elemento `h3` entre `'400'` e `'bold'` para tornar a pergunta negrito ou não-negrito.
     - Adicionamos ou removemos a classe CSS `arrow-rotate` à seta (imagem) para rotacioná-la em 180 graus.

Desta forma, ao clicar em uma pergunta, a resposta é revelada ou ocultada, a pergunta fica em negrito e a seta é rotacionada.
