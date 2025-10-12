describe('Teste de API- mike', () => {
  it('GET - Deve retornar dados válidos com sucesso', () => {
    cy.api('https://jsonplaceholder.typicode.com/posts/1')
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('id', 1)
      })
  })
})