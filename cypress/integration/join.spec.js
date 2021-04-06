/// <reference types="Cypress" />

describe('Runnerty IO Home Test B', () => {
  beforeEach(() => {
    cy.visit('/#/join');
  });
  it('Should have an h1 with the text "Join to Runnerty"', () => {
    cy.get('h1').contains('Join to Runnerty').should('exist');
  });
});
