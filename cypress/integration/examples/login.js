import "../../support/supportfunctions.js";

describe("Login to thoughtspot Application", () => {
    it("Enter username and password and click login should login to thoughtspot", () =>{
        cy.loginFunction.login('tsadmin','admin');
    })
})
