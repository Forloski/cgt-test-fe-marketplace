export class DefaultLayoutPageObjects {
  linkToHomePage() {
    return cy.get("#link-to-home").first();
  }

  linkToCartPage() {
    return cy.get("#link-to-cart").first();
  }
}
