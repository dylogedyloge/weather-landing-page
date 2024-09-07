describe("Weather App", () => {
  it("loads the weather app when clicking the button", () => {
    cy.visit("http://localhost:9000");
    cy.get("#loadWeatherApp").click();
    cy.get("#weatherAppContainer").should("exist");
  });
});
