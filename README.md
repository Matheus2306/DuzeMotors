# DuzéMotors

## Descrição do Projeto

DuzéMotors é uma plataforma web para uma concessionária de motos, desenvolvida para proporcionar uma experiência completa de compra, gerenciamento de estoque, cadastro de usuários e fornecedores, além de avaliações de clientes e integração com métodos de pagamento.

## Tecnologias Utilizadas

- **Frontend:** [React](https://react.dev/), [Vite](https://vitejs.dev/), [Bootstrap](https://getbootstrap.com/), [React Router](https://reactrouter.com/)
- **Backend/API:** C# (.NET) _(adapte aqui caso utilize outra stack para a API)_
- **Hospedagem:** [Vercel](https://duzemotors.vercel.app/) (Frontend), Somee (API)
- **Outros:** [React Credit Cards](https://www.npmjs.com/package/react-credit-cards-2), [react-telefone-brasileiro](https://www.npmjs.com/package/react-telefone-brasileiro)

## Como Executar o Projeto Localmente

### Frontend

1. Clone o repositório:
```sh
   git clone https://github.com/Matheus2306/Duzemotors.git
cd Duzemotors
```
2. Instale as dependência:
```sh
npm install --force
```
3. Teste o projeto:
```sh
npm run dev
```

### Backend

1.  Clone o repositório
```sh
git clone https://github.com/Matheus2306/ConcessionariaDuZe.git

cd ConcessionariaDuZe
``` 


### Funcionalidades Implementadas

1.Catálogo de motos com filtros por marca, preço e busca.
2.Cadastro e login de usuários.
3.Perfil do usuário com edição de dados e método de pagamento.
4.Carrinho de compras e checkout com integração de cartão.
5.Gerenciamento de estoque e fornecedores (restrito a administradores).
6.Avaliações de clientes e exibição de localização.
7.Página de Sobre com informações da equipe.
8.Página de erro personalizada (404).
9.Deploy automatizado do frontend (Vercel).