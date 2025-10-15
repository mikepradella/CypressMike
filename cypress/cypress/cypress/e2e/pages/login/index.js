 // Lógica das ações (métodos)
import { loginElements } from './element'


export class LoginPage {
  acessarLogin() {
    cy.visit('https://www.saucedemo.com/')
  }

  preencherUsuario(usuario) {
    cy.get(loginElements.username).type(usuario)
  }

  preencherSenha(senha) {
    cy.get(loginElements.password).type(senha)
  }

  clicarLogin() {
    cy.get(loginElements.loginButton).click()
  }

  validarLoginSucesso() {
    cy.url().should('include', '/inventory.html')
  }

  validarMensagemErro(mensagem) {
    cy.get(loginElements.errorMessage).should('contain.text', mensagem)
  }
}