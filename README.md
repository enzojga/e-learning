# E-learning

Landing Page para uma edtech ficticia. Durante o desenvolvimento da aplicação foi utilizada a versão v18.16.0 do Node.
 
 ## Deploy
```https://e-learning-seven-livid.vercel.app/```


A versão de deploy se encontra com um bug na autenticação com a Microsoft por conta do redirect ser para o localhost. Devido ao tempo limitado a correção foi despriorizada

## Como rodar

- Maquina local.

1. Clonar o repositório.

```git clone https://github.com/enzojga/e-learning.git```


2. Instalar depêndencias.

```npm install```

3. Iniciar servidor.


```npm start```

3. Acessar o localhost na porta 3000 no navegador.

## Testes

1. npm run test

2. Devido a grande parte das telas serem estaticas e ao tempo limitado os testes foram concentrados no componente SignUp.test.jsx devido a maior possibilidades de testes;

## Considerações

1. Como dada a liberdade, alguns estilos de fontes foram alteradas.

2. Ao fazer login pela Microsoft pelo celular rodando localmente é capaz do provedor bloquear o popup gerado pela login social.

3. Apesar do curto prazo o desafio foi bem divertido e me agregou bastante conhecimento.