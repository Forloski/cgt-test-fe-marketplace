import { ProductsPageObjects } from "../pageObjects/pages/Products/Products.pageobjects";

describe("Products Page Spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/products/a");
    cy.intercept("GET", "http://localhost:3333/products").as("getProducts");
  });

  describe(`Given an user trying to look product A details`, () => {
    describe(`When user enters product A page`, () => {
      it(`Then user should see product A name on the page`, () => {
        const products = new ProductsPageObjects();

        products.txtName().should("have.text", "Product A");
      });
      it(`Then user should see product A price on the page`, () => {
        const products = new ProductsPageObjects();

        products.txtPrice().should("have.text", "Price: 10 USD");
      });
      it(`Then user should see product A image on the page`, () => {
        const products = new ProductsPageObjects();

        products
          .productImage()
          .should("be.visible")
          .and("have.prop", "naturalWidth")
          .should("be.greaterThan", 0);
      });
    });
  });

  describe(`Given an user trying to add product A to cart`, () => {
    describe(`When user clicks on add to cart button`, () => {
      it(`Then the cart counter on cart link should increase by 1`, () => {
        const products = new ProductsPageObjects();

        products.btnAddToCart().click();
        // eslint-disable-next-line testing-library/await-async-utils
        cy.wait(500);
        products.linkToCartPage().should("have.text", "Cart (1) ");
      });

      it(`Then should make a PUT request to the cart endpoint to add the item and GET the updated cart`, () => {
        const products = new ProductsPageObjects();
        cy.intercept("PUT", "http://localhost:3333/carts/*").as("updateCart");
        cy.intercept("GET", "http://localhost:3333/carts/*").as("getCart");

        products.btnAddToCart().click();
        // eslint-disable-next-line testing-library/await-async-utils
        cy.wait(500);
        cy.wait("@updateCart").then((interception) => {
          assert.equal(interception.response.statusCode, 200);
        });

        cy.wait("@getCart").then((interception) => {
          assert.equal(interception.response.statusCode, 200);
        });
      });
    });
  });

  describe(`Given an user trying to look for a products that does not exist`, () => {
    describe(`When user enters product C on the URL`, () => {
      it(`Then user should be redirected to HomePage`, () => {
        cy.visit("http://localhost:3000/products/c");

        cy.url().should("equals", "http://localhost:3000/");
      });
    });
  });
});
