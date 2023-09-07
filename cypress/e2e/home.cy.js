describe("template spec", () => {
  beforeEach(() => {
    cy.visit("https://externatic-front.valence.wilders.dev");
  })
  context("Hero section", () => {
    it("the h2 contains the correct text", () => {
      cy.get(`.weAre_h2`).contains(
        "Qui sommes-nous"
      )
      cy.wait(500)
    })
    it("Chercher un emploi", () => {
      cy.get(`:nth-child(3) > .navbar_link`).click()
      cy.get(`.input`).type("Développeur web")
      //cy.downloadPageContentToJson();
    })
  })
});
