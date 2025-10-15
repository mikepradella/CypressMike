/// <reference types="cypress" />

describe('teste login Demo automacao Mike', () => {
  it('login com sucesso', () => {
    //loga no site - mike
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    //digita no campo name - mike
    cy.get('[name="username"]').type('Admin')
    //digita no campo name - mike
    cy.get('[name="password"]').type('admin123')
    //clica no campo button para logar - mike
    cy.get('.oxd-button').click()
    
    //valida apos logar - mike
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible') 
  
  })

   it('atualizando meu nome - my info ', () => {
    //loga no site - mike
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    //digita no campo name - mike
    cy.get('[name="username"]').type('Admin')
    //digita no campo name - mike
    cy.get('[name="password"]').type('admin123') 
    //clica no campo button para logar - mike
    cy.get('.oxd-button').click()
    
    //valida apos logar - mike
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible') 
    cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click()
    cy.get('[name="firstName"]').clear().type('mike tyson')
    cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
  
  })

});

 