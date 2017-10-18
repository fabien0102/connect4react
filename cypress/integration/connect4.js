describe("Connect 4 react", () => {
  it("should have correct title", () => {
    cy.visit("/");
    cy.title().should("include", "Connect 4 react");
  });

  context("Gameplay", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("should add a red disc", () => {
      cy.get(".column-0").click();
      cy.get(".cell-0-0").should("have.css", "background").and("match", /red/);

      cy.screenshot("red-disc");
    });

    it("should add a yellow disc", () => {
      cy.get(".column-0").click();
      cy.get(".column-0").click();
      cy
        .get(".cell-0-1")
        .should("have.css", "background")
        .and("match", /yellow/);

      cy.screenshot("yellow-disc");
    });

    it("should show the winning popup (red)", () => {
      cy.winTheParty("red");

      cy.get(".overlay").should("be.visible");
      cy.get("h2").should("contain", "Red player wins!");
      cy.screenshot("red-win");
    });

    it("should show the winning popup (yellow)", () => {
      cy.winTheParty("yellow");

      cy.get(".overlay").should("be.visible");
      cy.get("h2").should("contain", "Yellow player wins!");
      cy.screenshot("yellow-win");
    });

    it("should have the correct score (3 - 1)", () => {
      cy.winTheParty("red");
      cy.get("button").click();
      cy.winTheParty("red");
      cy.get("button").click();
      cy.winTheParty("red");
      cy.get("button").click();
      cy.winTheParty("yellow");
      cy.get("button").click();

      cy.get("#root>div>div").first().should("contain", "3 - 1");
      cy.screenshot("score");
    });
  });
});
