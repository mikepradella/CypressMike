/// <reference types="cypress" />


describe(' Demo automacao  outro site Mike', () => {
  it('tela principal vai para women', () => {
    //loga no site - mike
    cy.visit('http://www.automationpractice.pl/index.php?id_category=3&controller=category')
    
    //clica no campo name - mike
    cy.get('.sfHoverForce > [href="http://www.automationpractice.pl/index.php?id_category=3&controller=category"]').click()

    //valida apos clicar - mike
    cy.get('#categories_block_left > .title_block').should('be.visible') 
    //valida se contem o texto - mike
    cy.get('.rte > :nth-child(1) > strong').contains('You will find here all woman fashion collections')
  
  })

    it.only('tela principal vai para dresses', () => {
    //loga no site - mike
    cy.visit('http://www.automationpractice.pl/index.php?id_category=3&controller=category')
    
    //clica no campo name - mike
   cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
    //valida apos clicar - mike
   cy.get('.first-in-line.first-item-of-tablet-line > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x').click()
    //valida se contem o texto - mike
   cy.get('h1').should('contains.text','Printed Dress')
  })


});

