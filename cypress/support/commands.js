/**
 * cy.winTheParty
 * 
 * Simulate a party with a specified winner
 * 
 * @param string winner - "yellow" or "red"
 */
Cypress.Commands.add("winTheParty", (winner) => {
  if (winner === "yellow") cy.get(".column-5").click();
  
  cy.get(".column-0").click();
  cy.get(".column-0").click();
  cy.get(".column-1").click();
  cy.get(".column-1").click();
  cy.get(".column-2").click();
  cy.get(".column-2").click();
  cy.get(".column-3").click();

})