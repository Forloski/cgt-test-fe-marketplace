import { DefaultLayoutPageObjects } from "../../layouts/DefaultLayout/DefaultLayout.pageobjects";

export class HomePageObjects extends DefaultLayoutPageObjects {
  linkToProductA() {
    return cy.get("#link-to-product-a").first();
  }

  linkToProductB() {
    return cy.get("#link-to-product-b").first();
  }
}
