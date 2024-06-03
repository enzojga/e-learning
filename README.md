# E-learning

Landing Page para uma edtech fictícia. Durante o desenvolvimento da aplicação foi utilizada a versão v18.16.0 do Node.
 
## Deploy
```https://e-learning-seven-livid.vercel.app/```

A versão de deploy encontra-se com um bug na autenticação com a Microsoft por conta do redirecionamento ser para o localhost. Devido ao tempo limitado de desenvolvimento, a correção foi despriorizada.

## Como rodar

- Máquina local.

1. Clonar o repositório.

```git clone https://github.com/enzojga/e-learning.git```

2. Instalar dependências.

```npm install```

3. Iniciar servidor.

```npm start```

4. Acessar o localhost na porta 3000 no navegador.

## Testes

1. npm run test

2. Devido a grande parte das telas serem estáticas e ao tempo limitado, os testes foram concentrados no componente SignUp.test.jsx devido à maior possibilidade de testes.

## Considerações

1. Dada a liberdade, alguns estilos de fontes foram alterados.

2. Ao fazer login pela Microsoft pelo celular rodando localmente, é possível que o provedor bloqueie o popup gerado pelo login social.

3. Apesar do curto prazo de desenvolvimento, o desafio foi bem divertido e me agregou bastante conhecimento.