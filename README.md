# Landing Page

## 1. Apresentação do Projeto

A Landing Page visa proporcionar uma experiência agradável e informativa aos visitantes, destacando informações importantes e serviços oferecidos. O design é focado na usabilidade e na experiência do usuário.

O projeto pode ser utilizado em Windows ou Linux usando o Visual Studio Code.

## 2. Versões das Ferramentas Utilizadas

Para manter um ambiente consistente de desenvolvimento, é importante estar ciente das versões e ferramentas utilizadas abaixo no projeto:

- React: Versão 18.2.0
- Node.js: Versão 16.13.0
- Axios: Versão 1.3.4
- JSON Server: Versão 0.17.0

É recomendável que você verifique se está utilizando as versões mais recentes das ferramentas para garantir compatibilidade e aproveitar as últimas funcionalidades disponíveis.

## 3. Instruções para rodar o software.

- Clonar o projeto de https://github.com/evertonrichard/Software-Financeiro em uma pasta
```
git clone https://github.com/evertonrichard/landing-page
```

- Após clonar o repositório, entre na pasta do projeto:
```
cd landing-page
```

- Instale as dependências do projeto:
```
npm install
```
- Inicie o JSON Server:
```
npx json-server --watch db.json --port 5000 ou npm run backend
```
- Inicie o servidor de desenvolvimento React:
```
npm start
```
- Abra o projeto no navegador:
```
http://localhost:3000
```



