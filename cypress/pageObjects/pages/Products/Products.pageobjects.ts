import { DefaultLayoutPageObjects } from "../../layouts/DefaultLayout/DefaultLayout.pageobjects";

export class ProductsPageObjects extends DefaultLayoutPageObjects {
  txtName() {
    return cy.get("#txt-name").first();
  }

  txtPrice() {
    return cy.get("#txt-price").first();
  }

  btnAddToCart() {
    return cy.get("#btn-add-to-cart").first();
  }

  productImage() {
    return cy.get("#product-image").first();
  }
}
