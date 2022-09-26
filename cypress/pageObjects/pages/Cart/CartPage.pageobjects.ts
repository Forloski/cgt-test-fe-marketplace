import { DefaultLayoutPageObjects } from "../../layouts/DefaultLayout/DefaultLayout.pageobjects";

export class CartPageObjects extends DefaultLayoutPageObjects {
  list() {
    return cy.get("#list").first();
  }

  listItem(itemName: string) {
    return cy.get(`#list-item-${itemName}`).first();
  }

  btnRemoveItem(itemName: string) {
    return cy.get(`#btn-rmv-item-${itemName}`).first();
  }

  txtTotalPrice() {
    return cy.get("#txt-total-price").first();
  }

  btnClearCart() {
    return cy.get("#btn-clear-cart").first();
  }
}
