import { DefaultLayoutPageObjects } from "../pageObjects/layouts/DefaultLayout/DefaultLayout.pageobjects";

describe("Default Layout Spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  describe(`Given a user trying to get to cart page`, () => {
    describe(`When user clicks on cart link`, () => {
      it(`Then user should be redirected to cart page`, () => {
        const defaultLayout = new DefaultLayoutPageObjects();

        defaultLayout.linkToCartPage().click();
        cy.url().should("include", "/cart");
      });
    });
  });

  describe(`Given a user trying to return to home page from cart page`, () => {
    describe(`When user clicks on home link`, () => {
      it(`Then user should be redirected to home page`, () => {
        const defaultLayout = new DefaultLayoutPageObjects();

        defaultLayout.linkToCartPage().click();
        cy.url().should("include", "/cart");
        defaultLayout.linkToHomePage().click();
        cy.url().should("include", "/");
      });
    });
  });
});
