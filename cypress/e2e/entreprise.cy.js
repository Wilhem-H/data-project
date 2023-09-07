
//const formattedDate = Cypress.moment("2023/09/07", "YYYY/MM/DD").format("YYYY-MM-DD");


describe("entreprise", () => {
    beforeEach(() => {
      cy.visit("https://externatic-front.valence.wilders.dev");
    })
    context("Hero section", () => {
      it("Se connecter et ajouter une offre d'emploi", () => {
        cy.get(`.connexion > p`).click()
        cy.get(`#connexion_entreprise_button`).click()
        cy.get(`#email`).type("slack")
        cy.get(`#password`).type("1234")
        cy.get(`.connexion_submitButton`).click()
        cy.get(`.Toastify__toast-body > :nth-child(2)`).contains("Vous êtes connecté")
        cy.location("pathname").should("equal", "/companypage")
        cy.get(`a > button`).click()
        cy.get(`#JobTitle`).clear().type("Developpeur web valence")
        cy.get(`#Description`).clear().type("Recrute developpeur full à Valence")
        cy.get(`#location`).clear().type("valence")
        cy.get(`#uploadDate`).clear().type("2023-09-07")
        cy.get(`#contractType`).clear().type("CDI")
        cy.get(`#category`).clear().type("web")
        cy.get(`#jobSubmissionForm_submit`).click()
        cy.location("pathname").should("equal", "/companypage")
        cy.get(`.Toastify__toast-body`).contains("Nouvelle annonce postée")
        cy.wait(3000)
        cy.get(`h3`).contains("Developpeur web valence")//.as("delete")
        //cy.get("@delete").find("button").click()
        cy.get(`:nth-child(6) > :nth-child(5) > button`).click()
        cy.get(`.yes`).click()
        cy.get(` h3`).should("not.contain", "Developpeur web valence") 
        //.yes



        
        // cy.get(`[href="/espace/profil"]`).click()
        // cy.get(`#ville`).should("have.value", "Bourg les valence")

      })
    })
  });