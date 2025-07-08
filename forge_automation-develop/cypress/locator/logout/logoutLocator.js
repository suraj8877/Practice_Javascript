class LogoutLocator{
    get clickThreeDots(){
        return cy.get(':nth-child(3) > span > .px-2');
    }

    get ClickOnLogout(){
      return cy.get('[data-testid="logout-button"]');
    }
  }
export default LogoutLocator;