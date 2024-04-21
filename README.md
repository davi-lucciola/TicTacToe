# Jogo da Velha

Jogo da velha com interface em multiplas cores a depender do jogador
- [Clique aqui para jogar](https://tic-tac-toe-chi-ecru.vercel.app/)

<img src="./assets/tiktoktoe1.png" alt="ticktoktoe-img-1">
<img src="./assets/tiktoktoe2.png" alt="ticktoktoe-img-2">

## Tecnologias

- ![ReactJS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- ![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
- ![StyledComponents](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

## Solução

### Objetivo

Desenvolver um Jogo da Velha

### Problemas

- Armazenar o estado do jogo
- Verificação de vitória / empate

### Solução

- Armazenar o estado do jogo

Para armazenar o estado do jogo, utilizei uma matrix 3x3, representada por um array de 2 dimensões. Uma posição na matrix poderia ter 3 valores: `'X'`, `'O'` ou `null`, que era o jogador que tinha jogado ali, ou se estava vazio (quando null).

- Verificação de vitória / empate

Para verificação de vitória, na função que faz a jogada do jogador para trocar, a função de verificação de vitória é chamada, onde ela primeiro verifica se houve um jogador que ganhou nas linhas ou nas colunas, depois verifica se um jogador ganhou nas diagonais. Caso algum jogador tenha ganhado, ele retorna o jogador que venceu. Ao final, se nenhum jogador tiver ganhado ele retorna um booleano para saber se ainda há espaços disponiveis para jogar, caso não haja espaços disponiveis ele declara empate e reseta o jogo.

## Rodando local

> `git clone https://github.com/davi-lucciola/TicTacToe.git`

> `cd TicTacToe`

> `pnpm install` (Pode ser com qualquer gerenciador de pacotes.)

> `pnpm run dev`

Pronto! Agora o projeto está rodando localmente!
