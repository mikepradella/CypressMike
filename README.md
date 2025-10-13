🚀 CypressMike – Automação de Testes com Cypress

Bem-vindo ao CypressMike, um projeto de automação de testes desenvolvido com Cypress, focado no fluxo de login da aplicação OrangeHRM Demo. Este repositório foi criado para demonstrar habilidades práticas em testes automatizados, tanto para fins profissionais quanto acadêmicos.

📌 Objetivos do Projeto
- 🔐 Automatizar o processo de login na plataforma OrangeHRM
- ✅ Validar o sucesso da autenticação
- 🔧 Implementar testes de API com o plugin do Cypress
- 🧠 Aplicar boas práticas em testes end-to-end e de serviços REST

🧪 Tecnologias Utilizadas
- 🧬 Cypress – Framework moderno para testes end-to-end
- 🔌 Cypress API Plugin – Para testes de serviços REST
- 💻 JavaScript
- 📦 Node.js

📂 Estrutura do Projeto
cypressMike/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   └── api-tests.cy.js
│   ├── fixtures/
│   └── support/
├── package.json
└── README.md



✅ Cenários de Teste Implementados
🔐 Teste de Login – OrangeHRM
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
🌐 Teste de API – JSONPlaceholder
describe('Testes de API - JSONPlaceholder', () => {
  it('Deve retornar dados de um post específico', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('userId', 1)
        expect(response.body).to.have.property('title')
        expect(response.body).to.have.property('body')
      })
  })
})



📸 Evidências de Execução
- 🖥️ Teste de UI: Login realizado com sucesso, validado pela visibilidade do elemento de navegação principal.
- 🔍 Teste de API: Execução bem-sucedida com status 200 e estrutura da resposta validada.

💼 Por que este projeto é relevante?
Este projeto demonstra:
- 🧩 Capacidade de estruturar testes automatizados com clareza e eficiência
- 🧪 Conhecimento em validações com Cypress (.should(), expect())
- 🛠️ Domínio de comandos essenciais como cy.visit, cy.get, cy.type, cy.click, cy.request
- 🔍 Experiência com testes de API, incluindo validação de status e estrutura de resposta
- 📐 Aplicação de boas práticas em automação de testes para aplicações web e serviços REST

🚀 Próximos Passos
- ❌ Implementar testes negativos (login inválido)
- 🔙 Criar testes para logout e navegação interna
- 🔄 Adicionar mais cenários de testes de API
- ⚙️ Integrar com CI/CD (GitHub Actions)
- 📊 Adicionar relatórios de execução de testes
- ⚡ Criar testes de performance com Cypress

📬 Contato
Se você gostou do projeto e quer saber mais sobre meu trabalho:
- 👤 Mike Tyson Schwarzenegger Pradella
- 📧 miketysonpradella@yahoo.com.br
- 💼 LinkedIn

🔄 Projeto atualizado com testes de API – Demonstra habilidades completas em automação de testes web e serviços REST.



