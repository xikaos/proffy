# Proffy

## Contexto
### Objetivo
A aplicação tem como objetivo permitir que alunos e professores de diferentes assuntos ou matérias possam entrar em contato entre si.

### Tecnologias
As seguinte tecnologias foram utilizadas na construção da aplicação, que deve ser responsiva e seguir as diretrizes de mobile-fist:
* HTML
* CSS
* TypeScript
* React
* Node
* MySQL
* Docker 

## Frontend
A aplicação é composta por três páginas distintas:
1. Landing Page
2. Listagem de Aulas
3. Formulário de Cadastro de Aulas

### Landing Page

A página consiste de três elementos principais:
1. Logo e Título
2. Imagem Principal
3. Botões de Navegação

O primeiro botão direciona o usuário para a página de **Listagem de Aulas**, enquanto o segundo leva para o **Formulário de Cadastro de Aulas**. Abaixo o layout desktop e mobile da tela em questão:

#### Layout Mobile
![layout landing page mobile](https://github.com/xikaos/proffy/blob/master/docs/img/layout/mobile/landing-page/landing-page.png?raw=true "layout landing page mobile")

#### Layout Desktop
![layout landing page desktop](https://github.com/xikaos/proffy/blob/master/docs/img/layout/desktop/landing-page/landing-page.png?raw=true "layout landing page desktop")

### Listagem de Aulas

A página é composta por três elementos principais:
1. Cabeçalho com o logo e seta para retornar à página anterior.
2. Campos de Filtragem: **Matéria**, **dia da semana** e **horário**.
3. Lista de Aulas

Abaixo o layout mobile e desktop da página:

#### Layout Mobile
![layout mobile listagem de aulas](https://github.com/xikaos/proffy/blob/master/docs/img/layout/mobile/class-list/class-list.png?raw=true "layout mobile listagem de aulas")

#### Layout Desktop
![layout desktop listagem de aulas](https://github.com/xikaos/proffy/blob/master/docs/img/layout/desktop/class-list/class-list.png?raw=true "layout desktop listagem de aulas")

### Formulário de Cadastro de Aulas
A página consiste em um formulário que permite que as informações do professor, da aula e dos horários disponíveis sejam cadastradas:

#### Layout Mobile - Primeira Rolagem
![layout mobile cadastro de aulas primeira rolagem](https://github.com/xikaos/proffy/blob/master/docs/img/layout/mobile/class-form/class-form-1.png?raw=true "layout mobile cadastro de aulas primeira rolagem")

#### Layout Mobile - Segunda Rolagem
![layout mobile cadastro de aulas segunda rolagem](https://github.com/xikaos/proffy/blob/master/docs/img/layout/mobile/class-form/class-form-2.png?raw=true "layout mobile cadastro de aulas segunda rolagem")

#### Layout Desktop - Primeira Rolagem
![layout desktop cadastro de aulas primeira rolagem](https://github.com/xikaos/proffy/blob/master/docs/img/layout/desktop/class-form/class-form-1.png?raw=true "layout desktop cadastro de aulas primeira rolagem")

#### Layout Desktop - Segunda Rolagem
![layout desktop cadastro de aulas segunda rolagem](https://github.com/xikaos/proffy/blob/master/docs/img/layout/desktop/class-form/class-form-2.png?raw=true "layout desktop cadastro de aulas segunda rolagem")

### Melhorias
Algumas melhorias foram realizadas em relação ao projeto original e serão descritas conforme sua classificação.

#### Intraestrutura
##### Docker e docker-compose
De forma a facilitar o processo de desenvolvimento e deploy do projeto, a infraestrutura foi implementada através de um conjunto de containers descritos através de serviços no arquivo `docker-compose.yml`. Mesmo tendo o mesmo ambiente de execução (Node), é interessante que as dependências do back-end e do front-end fiquem sejam isoladas por questões de segurança e manutenção.

#### Banco de Dados MySQL
A solução é implementada originalmente utilizando um banco SQLite, que é uma solução robusta e adequada em diversos contextos, porém tendo em vista que o back-end e front-end já estão em ambientes de execução isolados, não faria sentido violar essa organização colocando a camada de dados no mesmo container do back-end, já que o SQLite é um banco de dados local. Dessa forma, a solução que mais se adequa a organização já existente é utilizar um banco que permita o acesso via rede e a opção escolhida de banco de dados foi o MySQL.

#### Configuração
Durante o bootcamp a configuração da conexão com o banco de dados é hard-coded, o que viola o terceiro princípio do já difundido conjunto de boas práticas [12 factor app](https://12factor.net/config) que diz que configurações que variem conforme o ambiente devem ser estritamente separadas do código e preferencialmente armazenadas em variáveis de ambiente. Dessa forma, a biblioteca [dotenv](https://github.com/motdotla/dotenv) foi utilizada juntamente de um arquivo `.env`.