import { CartPageObjects } from "../pageObjects/pages/Cart/CartPage.pageobjects";
import { ProductsPageObjects } from "../pageObjects/pages/Products/Products.pageobjects";

describe("Cart Page Spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/cart");
  });

  describe(`Given a user with empty cart`, () => {
    describe(`When user enters cart page`, () => {
      it(`Then there shouldn't be any item on the list and the total price should be 0`, () => {
        const cart = new CartPageObjects();

        cart.list().should("be.empty");
        cart.txtTotalPrice().should("have.text", " Total Price: 0 USD");
      });
    });
  });

  describe(`Given a user with a product on the cart`, () => {
    describe(`When user enters cart page`, () => {
      it(`Then the product should be on the list and the total price should be the product price`, () => {
        const cart = new CartPageObjects();
        const products = new ProductsPageObjects();

        cy.visit("http://localhost:3000/products/a");
        products.btnAddToCart().click();
        cy.visit("http://localhost:3000/cart");

        cart.list().children().should("have.length", 1);
        cart.listItem("A").should("have.text", "A x 1 = 10 USD");
        cart.txtTotalPrice().should("have.text", " Total Price: 10 USD");
      });
    });
  });

  describe(`Given a user with multiple products on the cart`, () => {
    describe(`When user enters cart page`, () => {
      it(`Then the products should be on the list and the total price should be the sum of products prices`, () => {
        const cart = new CartPageObjects();
        const products = new ProductsPageObjects();

        cy.visit("http://localhost:3000/products/a");
        products.btnAddToCart().click();
        cy.visit("http://localhost:3000/products/b");
        products.btnAddToCart().click();
        cy.visit("http://localhost:3000/cart");

        cart.list().children().should("have.length", 2);
        cart.listItem("A").should("have.text", "A x 1 = 10 USD");
        cart.listItem("B").should("have.text", "B x 1 = 20 USD");
        cart.txtTotalPrice().should("have.text", " Total Price: 30 USD");
      });
    });
  });

  describe(`Given a user with trying to remove a product from the cart`, () => {
    describe(`When user clicks remove item button`, () => {
      it(`Then the product should be removed from the cart and the price updated accordingly`, () => {
        const cart = new CartPageObjects();
        const products = new ProductsPageObjects();

        cy.visit("http://localhost:3000/products/a");
        products.btnAddToCart().click();
        cy.visit("http://localhost:3000/products/b");
        products.btnAddToCart().click();
        cy.visit("http://localhost:3000/cart");

        cart.list().children().should("have.length", 2);
        cart.listItem("A").should("have.text", "A x 1 = 10 USD");
        cart.listItem("B").should("have.text", "B x 1 = 20 USD");
        cart.txtTotalPrice().should("have.text", " Total Price: 30 USD");

        cart.btnRemoveItem("A").click();
        cart.list().children().should("have.length", 1);
        cart.listItem("B").should("have.text", "B x 1 = 20 USD");
        cart.txtTotalPrice().should("have.text", " Total Price: 20 USD");
      });
    });
  });

  describe(`Given a user with trying to clear the cart`, () => {
    describe(`When user clicks clear cart button`, () => {
      it(`Then all products should be removed from the cart and the price updated accordingly`, () => {
        const cart = new CartPageObjects();
        const products = new ProductsPageObjects();

        cy.visit("http://localhost:3000/products/a");
        products.btnAddToCart().click();
        cy.visit("http://localhost:3000/products/b");
        products.btnAddToCart().click();
        cy.visit("http://localhost:3000/cart");

        cart.list().children().should("have.length", 2);
        cart.listItem("A").should("have.text", "A x 1 = 10 USD");
        cart.listItem("B").should("have.text", "B x 1 = 20 USD");
        cart.txtTotalPrice().should("have.text", " Total Price: 30 USD");

        cart.btnClearCart().click();
        cart.list().should("be.empty");
        cart.txtTotalPrice().should("have.text", " Total Price: 0 USD");
      });
    });
  });
});
