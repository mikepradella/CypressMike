# CypressMike

🚀 Projeto de Automação de Testes com Cypress – Login OrangeHRM
Este repositório apresenta um projeto de automação de testes utilizando Cypress, focado no fluxo de login da aplicação OrangeHRM Demo. Criado com o objetivo de demonstrar habilidades práticas em testes automatizados para fins profissionais e acadêmicos.
📌 Objetivo
Automatizar o processo de login na plataforma OrangeHRM e validar o sucesso da autenticação, utilizando boas práticas de escrita de testes com Cypress.
🧪 Tecnologias Utilizadas
- Cypress – Framework moderno para testes end-to-end
- JavaScript
- Node.js
📂 Estrutura do Projeto
cypressMike/
├── cypress/
│   └── e2e/
│       └── login.cy.js
├── package.json
└── README.md


✅ Cenário de Teste: Login com Sucesso
/// <reference types="cypress"/>

describe('Teste de Login - Demo Automação Mike', () => {
  it('Login com sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
  })
})


📸 Evidência de Execução
O teste acessa a aplicação, insere credenciais válidas e valida se o login foi realizado com sucesso ao verificar a visibilidade do elemento de navegação principal.

💼 Por que este projeto é relevante?
Este projeto demonstra:
- Capacidade de estruturar testes automatizados com clareza e eficiência
- Conhecimento em validações com Cypress (.should())
- Domínio de comandos essenciais como cy.visit, cy.get, cy.type, cy.click
- Aplicação de boas práticas em automação de testes para aplicações web
🧠 Próximos passos
- Implementar testes negativos (login inválido)
- Criar testes para logout e navegação interna
- Adicionar integração com CI/CD (GitHub Actions)
📬 Contato
Se você gostou do projeto e quer saber mais sobre meu trabalho:

Mike tyson schwarzenegger pradella
📧 miketysonpradella@yahoo.com.br

💼 LinkedIn : https://www.linkedin.com/in/ctfl-miketysonpradella-automa%C3%A7%C3%A3odetestes/


