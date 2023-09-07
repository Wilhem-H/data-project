describe("candidat", () => {
    beforeEach(() => {
      cy.visit("https://externatic-front.valence.wilders.dev");
    })
    context("Hero section", () => {
      it("Se connecter et modifier ses information", () => {
        cy.get(`.connexion > p`).click()
        cy.get(`#email`).type("wilhemh38@hotmail.fr")
        cy.get(`#password`).type("1234")
        cy.get(`[type="submit"]`).click()
        cy.get(`.Toastify__toast-body > :nth-child(2)`).contains("Vous êtes connecté")
        cy.location("pathname").should("equal", "/espace")
        cy.get(`[href="/espace/profil"]`).click()
        cy.get(`#ville`).clear().type("Bourg les valence")
        cy.get(`.profil_input > button`).click()
        cy.wait(4050);
        cy.get(`[href="/espace/profil"]`).click()
        cy.get(`#ville`).should("have.value", "Bourg les valence")

      })
    })
  });