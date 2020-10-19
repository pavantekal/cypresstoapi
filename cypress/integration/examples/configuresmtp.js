import "../../support/supportfunctions";

describe("Go to Admin Portal and configure SMTP", () => {
    it("Going to managementConsole and click on settings click on SMTP and configure with valid data should configure SMTP", () => {
        cy.loginFunction.login('tsadmin','admin');
        cy.visitAdminPortal.adminportal();
        cy.configureSMTP.configureSmtp();
    })
    after(() => {
        cy.configureSMTP.removeSmtp();
    })
})
