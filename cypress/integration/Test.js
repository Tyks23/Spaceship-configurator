/// <reference types="cypress" /> 

describe('renders page', () => {
  it('renders react', () => {
    cy.visit("/")
    cy.get(".App").should("exist");
  });

  it('renders color components', () => {
    cy.visit("/")
    cy.get(".container-color").should("exist");
  })

  it('renders simple components', () => {
    cy.get(".container-simple").should("exist");
  })

  it('renders detail components', () => {
    cy.get(".container-detail").should("exist");
  })

  it('renders price components', () => {
    cy.get(".container-price").should("exist");
  })

  it('updates color price', () => {
    cy.visit("/");

    const t = cy.get(".container-price > p").eq(3);
    t.contains("+0€");

    cy.get('.Color-selection > .selection > :nth-child(2)').click();
    t.contains("+100€")

    cy.get('.Color-selection > .selection > :nth-child(3)').click();
    t.contains("+100€")

    cy.get('.Color-selection > .selection > :nth-child(1)').click();
    t.contains("+0€")
  })

  it('updates power price', () => {
    cy.visit("/");

    const t = cy.get(".container-price > p").eq(5);
    t.contains("+0€");

    cy.get('.Power-selection > .selection > :nth-child(2)').click();
    t.contains("+200€")

    cy.get('.Power-selection > .selection > :nth-child(3)').click();
    t.contains("+500€")

    cy.get('.Power-selection > .selection > :nth-child(1)').click();
    t.contains("+0€")
  })

  it('updates warp price', () => {
    cy.visit("/");

    const t = cy.get(".container-price > p").eq(7);
    t.contains("+0€");

    cy.get('.Warp-drive-selection > .selection > :nth-child(2)').click();
    t.contains("+1000€")

    cy.get('.Warp-drive-selection > .selection > :nth-child(1)').click();
    t.contains("+0€")
  })

  it('updates package price', () => {
    cy.visit("/");

    const t = cy.get(".container-price > p").eq(9);
    t.contains("+0€");

    cy.get('.Package-selection > .selection > :nth-child(2)').click();
    t.contains("+100€")

    cy.get('.Package-selection > .selection > :nth-child(3)').click();
    t.contains("+500€")
  })
})


