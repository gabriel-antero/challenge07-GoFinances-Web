![Wallpaper GoStack](https://user-images.githubusercontent.com/58411170/79023960-f326d100-7b57-11ea-9a3b-d3fd0d6bf6bd.png)

<h2 align="center">
  Desafio 07: GoFinances Web
</h2> 

<p align="center">
  Criado durante o bootcamp GoStack 11.
</p>

<p align="center">
 
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/gabriel-antero/challenge07-GoFinances-Web">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/gabriel-antero/challenge07-GoFinances-Web"> 
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/gabriel-antero/challenge07-GoFinances-Web">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/gabriel-antero/challenge07-GoFinances-Web">
  
</p>

<p align="center">
  <a href="https://github.com/gabriel-antero/challenge06-nodeJS#information_source-sobre-o-desafio">Sobre o desafio<a/> |
  <a href="https://github.com/gabriel-antero/challenge06-nodeJS#dart-objetivos-realizados">Objetivos a realizar<a/> |
  <a href="https://github.com/gabriel-antero/challenge06-nodeJS#espec%C3%ADfica%C3%A7%C3%A3o-dos-testes">Especificação dos testes<a/> |
  <a href="https://github.com/gabriel-antero/challenge06-nodeJS#memo-licen%C3%A7a">LICENÇA<a/>
</p>

## :information_source: Sobre o desafio
Aplicação que irá se conectar ao backend do [Desafio 06](https://github.com/gabriel-antero/challenge06-nodeJS), exibir as transações criadas e permitir a importação de um arquivo CSV para gerar novos registros no banco de dados.

Feito utilizando testes automatizados.

## :dart: Objetivos realizados
<h3 align="center">Funcionalidades da aplicação</h3>

- [X] **`Listar os repositórios da sua API`**: Sua página `Dashboard` deve ser capaz de exibir uma listagem através de uma tabela, com o campo `title`, `value`, `type` e `category` de todas as transações que estão cadastradas na sua API.

**Dica**: Você pode utilizar a função [Intl](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat) para formatar os valores. Dentro da pasta `utils` no template você encontrará um código para te ajudar.

- [X] **`Exibir o balance da sua API`**: Sua página `Dashboard`, você deve exibir o balance que é retornado do seu backend, contendo o total geral, junto ao total de entradas e saídas.

- [X] **`Importar arquivos CSV`**: Na sua página `Import`, você deve permitir o envio de um arquivo no formato `csv` para o seu backend, que irá fazer a importação das transações para o seu banco de dados. O arquivo csv deve seguir o seguinte [modelo](https://github.com/Rocketseat/bootcamp-gostack-desafios/blob/master/desafio-database-upload/assets/file.csv).

**Dica**: Deixamos disponível um componente chamado `Upload` na pasta `components` para você ter já preparado uma opção de drag-n-drop para o upload de arquivos. PS: Caso você esteja no windows e esteja sofrendo com algum erro ao tentar importar CSV, altere o tipo de arquivo dentro do arquivo `components/upload/index.ts` de `text/csv` para `application/vnd.ms-excel`.

**Dica 2**: Deixamos disponível um componente chamado `FileList` na pasta `components` para ajudar você a listar os arquivos que enviar pelo componente de `Upload`, ele deve exibir o título do arquivo e o tamanho dele.

**Dica 3**: Utilize o [FormData()](https://developer.mozilla.org/pt-BR/docs/Web/API/FormData/FormData) para conseguir enviar o seu arquivo para o seu backend.

<h3 align="center">Específicação dos testes</h3>
<p align="center">Necessário realizar os seguintes testes:

- [X] **`should be able to list the total balance inside the cards`**: Para que esse teste passe, sua aplicação deve permitir que seja exibido na sua Dashboard, cards contendo o total de `income`, `outcome` e o total da subtração de `income - outcome` que são retornados pelo balance do seu backend.

* [X] **`should be able to list the transactions`**: Para que esse teste passe, sua aplicação deve permitir que sejam listados dentro de uma tabela, toda as transações que são retornadas do seu backend.

**Dica**: Para a exibição dos valores na listagem de transações, as transações com tipo `income` devem exibir os valores no formado `R$ 5.500,00`. Transações do tipo `outcome` devem exibir os valores no formado `- R$ 5.500,00`.

- [X] **`should be able to navigate to the import page`**: Para que esse teste passe, você deve permitir a troca de página através do Header, pelo botão que contém o nome `Importar`.

**Dica**: Utilize o componente `Link` que é exportado do `react-router-dom`, passando a propriedade `to` que leva para a página `/import`.

## :memo: LICENÇA

Projeto sobre licença MIT. Mais informações em [LICENÇA](https://github.com/gabriel-antero/challenge07-GoFinances-Web/blob/master/LICENSE).

---

Trechos desse conteúdo copiado do arquivo do desafio.
