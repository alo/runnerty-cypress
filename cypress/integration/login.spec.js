/// <reference types="Cypress" />

describe('Runnerty IO Home Test A', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should have a h1 with the text "Log in"', () => {
    cy.get('h1').contains('Log in');
  });

  it('Should fail the login and show a toaster', () => {
    cy.get('#mat-input-0').type(Cypress.env('username'));
    cy.get('#mat-input-1').type(Cypress.env('password') + '{enter}');
    cy.get('.mat-snack-bar-container').should(
      'contain.text',
      'Incorrect username or password'
    );
  });
});
