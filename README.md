# Readable

## Visão geral do projeto:
Nesta aplicação, a página principal exibe:

Menu de navegação que possui um link para:
- Lista de posts;
- Add novo Posts.

Lista de "posts" com as principais informações dos posts em destaque;
Filtro da lista que exibe as opções de listagem por catgorias;
Componente de Ordenação com as opções de listagem em ordem de data de postegem ou de posts mais votados.

### Lista de Posts
Na listagem é exibido as informações principais de cada post:
- Categoria
- Título
- Texto do Post
- Autor
- Data de postagem
- Score de likes do post
- Quantidade de comentários
- Comandos para Like e Unlike

### Análise de Posts
Os posts da lista prncipal podem ser analisados através do botão de Detail.
Esta funcionalidade expõe a possibilidade de edição e exclusão do post em questão. Nesta tela também pode ser visualizado a lista de comentários deste post e os controles de comentário e de votação.
- Título
- Texto do Post
- Categoria
- Autor
- Lista de Posts (Autor, Descrição do comenário, Nota e Data do comentário)

### Cadastro de Comentários
Ao selecionar a opção de incluir novo comentário é visualizado uma Dialog solicitando as informações de:
- Autor 
- Descrição do Comentário

### Cadastro de Posts
- Título
- Texto do Post
- Categoria
- Autor

## Especificadades do projeto:
As funções que foram implementadas utilizando:
- React + Redux;
- Reac Router;
- Estilização com React-Bootstrap;
- sortBy
- uuid (geração de IDs v4)

### Rodando localmente:
Certifique-se de ter instalado em sua máquina o Node.js. Você pode verificar a versão do node com o comando `node -v`, o mesmo vale para o npm (`npm -v`). Feito isso:
- Clone o projeto para sua máquina local: `git clone https://github.com/RodrigoPadilha/Readable`

#### Inicie o servidor Backend
- Entre no diretório do projeto: `cd Backend/api-server`
- Instale todas as denpendências com o `npm install`
- Inicie o servidor de desenvolvimento com `node server`

#### Inicie o servidor de aplicação Frontend
- Entre no diretório do projeto: `cd FrontEnd/Leitura`
- Instale todas as denpendências com o `npm install`
- Inicie o servidor de desenvolvimento com `npm start`

### Agradecimentos:
- Aos mentores que tiveram muita atenção e paciência Ricardo Canelas e Alexandre Lara.
