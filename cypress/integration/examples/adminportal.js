import "../../support/supportfunctions";

describe("Go to Admin Portal and verify Home Screen", () => {
    it("Going to managementConsole and click on settings should give Home page", () => {
        cy.loginFunction.login('tsadmin','admin');
        cy.visitAdminPortal.adminportal();
    })
})
