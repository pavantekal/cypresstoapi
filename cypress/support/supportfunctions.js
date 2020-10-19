cy.loginFunction = {
    login: (username,password) => {
        cy.visit("https://10.87.89.189/");
        cy.wait(3000);
        cy.get('.bk-login .bk-auth-form .login-email .bk-input-field').type(username);
        cy.get('.bk-login .bk-auth-form .login-password .bk-input-field').type(password);
        cy.get('.bk-login .bk-auth-form-actions .bk-login-btn').click();
        cy.get('.bk-primary-nav').should('be.visible');
    }
}

cy.visitAdminPortal = {
    adminportal: () => {
        cy.url().then(url => {
            if(url.endsWith("#/")) {
                url = url.slice(0, -2);
            }
            cy.visit(url+'managementconsole');
            cy.wait(3000);
            cy.contains('Settings').click();
            cy.get('.admin-header-title').should('contain.text','Home');
        });
    }
}

cy.configureSMTP = {
    configureSmtp: () => {
        cy.contains('SMTP').click();
        cy.get('.admin-config-container .bk-primary-button').click();
        cy.get('.modal-popup').should('be.visible');
        cy.get('input[name="relayHost"]').type('74.125.197.26');
        cy.get('input[name="fromEmail"]').type('thoughtspot-system');
        cy.get('input[name="fromName"]').type('thoughtspot.com');
        cy.get('.bk-radio').last().click();
        cy.get('.modal-footer .bk-primary-button').click();
        cy.get('.modal-popup').should('not.be.visible');
        cy.get('.admin-config-display .status-text').should('contain.text','Enabled');
    },
    removeSmtp: () =>{
        cy.get('.bk-search-button-icon.pointer').click();
        cy.contains('Remove').click();
        cy.get('.modal-popup').should('be.visible');
        cy.get('.modal-footer .bk-primary-button').click();
    }
}
