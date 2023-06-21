Cypress.Commands.add("login", (email, password) => {
  cy.get("button").contains("Log in").click();
  if (email) {
    cy.get("#mail").type(email);
  }
  if (password) {
    cy.get("#pass").type(password);
  }
  cy.contains("Submit").click();
});

Cypress.Commands.add("addNewBook", (book) => {
  cy.contains("Add new").click();
  cy.contains("Book description").should("be.visible");
  cy.get("#title").type(book.title);
  cy.get("#description").type(book.description);
  cy.get("#authors").type(book.author);
  cy.contains("Submit").click();
});

Cypress.Commands.add("addBookToFavorite", (book) => {
  cy.contains("Add new").click();
  cy.contains("Book description").should("be.visible");
  cy.get("#title").type(book.title);
  cy.get("#description").type(book.description);
  cy.get("#authors").type(book.author);
  cy.get("#favorite").click();
  cy.contains("Submit").click();
});