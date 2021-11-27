describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('pokemon page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('blastoise').click()
    cy.contains('Previous').should('have.attr', 'href').should('include', '/pokemon/wartortle')
    cy.contains('Next').should('have.attr', 'href').should('include', '/pokemon/caterpie')
  })
})