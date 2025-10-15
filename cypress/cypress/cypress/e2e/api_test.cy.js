describe('Teste de API Get - mike', () => {
  it('GET - Deve retornar dados válidos com sucesso', () => {
    cy.api('https://jsonplaceholder.typicode.com/posts/1')
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('id', 1)
      })
  })

  describe('Teste de API - POST', () => {
    it('POST - Deve criar um novo post com sucesso', () => {
      cy.api('POST', 'https://jsonplaceholder.typicode.com/posts', {
        userId: 1,
        title: 'Novo post do Mike',
        body: 'Conteúdo do post criado via Cypress'
      }).should((response) => {
        expect(response.status).to.eq(201)
        expect(response.body).to.have.property('id')
        expect(response.body.title).to.eq('Novo post do Mike')
      })
    })


    describe('Teste de API - PUT', () => {
      it('PUT - Deve atualizar um post existente do mike', () => {
        cy.api('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
          id: 1,
          userId: 1,
          title: 'Post atualizado do Mike Tyson',
          body: 'Novo conteúdo do post'
        }).should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body.title).to.eq('Post atualizado do Mike Tyson')
        })
      })

      describe('Teste de API - PATCH', () => {
        it('PATCH - Deve atualizar parcialmente um post', () => {
          cy.api('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', {
            title: 'Título parcial atualizado MIKE'
          }).should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.title).to.eq('Título parcial atualizado MIKE')
          })
        })

        describe('Teste de API - DELETE', () => {
          it('DELETE - Deve remover um post com sucesso', () => {
            cy.api('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
              .should((response) => {
                expect(response.status).to.eq(200)
              })
          })
        })

        describe.only('Teste de API - Post valida Body', () => {
          it('Valida post com sucesso e o body', () => {
            const requestBody = {
              userId: 1,
              title: 'Post do Mike',
              body: 'Conteúdo do post criado via Cypress'
            };

            cy.api({
              method: 'POST',
              url: 'https://jsonplaceholder.typicode.com/posts',
              body: requestBody,
            }).then((response) => {
              expect(response.status).to.eq(201);
              expect(response.body).to.deep.equal({
                id: 101, // O ID é gerado automaticamente
                ...requestBody           
                
                
              });
              cy.log(JSON.stringify(response.body));
              expect(response.body).to.have.property('id');
            });
          })
        })
      })
    })
  })
})     