import { HomePageObjects } from "../pageObjects/pages/Home/Home.pageobjects";

describe("Home Page Spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.intercept("POST", "http://localhost:3333/carts").as("createCart");
  });

  describe(`Given an user trying to get to productA page`, () => {
    describe(`When user clicks on productA link`, () => {
      it(`Then user should be redirected to productA page`, () => {
        const home = new HomePageObjects();

        home.linkToProductA().click();
        cy.url().should("include", "/products/a");
      });
    });
  });

  describe(`Given an user trying to get to productB page`, () => {
    describe(`When user clicks on productB link`, () => {
      it(`Then user should be redirected to productB page`, () => {
        const home = new HomePageObjects();

        home.linkToProductB().click();
        cy.url().should("include", "/products/b");
      });
    });
  });

  describe(`Given an user entering home page`, () => {
    describe(`When user enters for the first time`, () => {
      it(`Then the app should give him an local user identifier`, () => {
        assert.isNotNull(localStorage.getItem("localUserIdentifier"));
      });

      it(`Then the app should create a cart for him on the database`, () => {
        cy.wait("@createCart").then((interception) => {
          assert.equal(interception.response.statusCode, 201);
        });
      });
    });
  });
});
