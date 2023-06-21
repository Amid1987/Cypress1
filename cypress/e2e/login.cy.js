describe("login process", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("logins successfully with correct credentials", () => {
      cy.login("bropet@mail.ru", "123");
      cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
    });
  
    it("show error when login is not entered", () => {
      cy.login("", "123");
      cy.get("#mail")
        .then((el) => {
          return el[0].checkValidity();
        })
        .should("be.false");
      cy.get("#mail")
        .then((el) => {
          return el[0].validationMessage;
        })
        .should("contain", "Заполните это поле.");
    });
  
    it("show error when password is not entered", () => {
      cy.login("bropet@mail.ru", "");
      cy.get("#pass")
        .then((el) => {
          return el[0].checkValidity();
        })
        .should("be.false");
      cy.get("#pass")
        .then((el) => {
          return el[0].validationMessage;
        })
        .should("contain", "Заполните это поле.");
    });
  });