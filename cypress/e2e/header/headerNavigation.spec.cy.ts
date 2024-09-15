describe("teste de navegação do header", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("visitar a pagina principal e clicar na logo", () => {
    cy.contains("h1", "moranisdev").click();

    cy.url().should("include", "/");
  });

  it("clicar no elemento projetos e ir para a pagina de projetos", () => {
    cy.contains("li", "Projetos").click();

    cy.url().should("include", "/works");
  });

  it("clicar no elemento Itens Pc e ir para a pagina de Itens para Pc", () => {
    cy.contains("li", "Itens Pc").click();

    cy.url().should("include", "/setup");
  });

  it("clicar no elemento Fotos e ir para a pagina de imagens", () => {
    cy.contains("li", "Fotos").click();

    cy.url().should("include", "/images");
  });
});

describe("testes de alternancia entre temas", () => {
  it("deve alternar entre temas claro e escuro ao clicar no botao", () => {
    cy.visit('/')

    // Garantir que o elemento 'header' esteja presente
    cy.get('header').should('exist')

    // Verificar o estado inicial (tema claro)
    cy.get('header').should('not.have.class', 'bg-zinc-400')

    // Verificar se o botão está visível e clicável
    cy.get('#mode').should('be.visible').click()

    // Verificar se o tema escuro foi ativado
    cy.get('header').should('have.class', 'bg-zinc-400')

    // Clicar novamente no botão para alternar de volta
    cy.get('#mode').click()

    // Verificar se o tema claro foi reativado
    cy.get('header').should('not.have.class', 'bg-zinc-400')
  })
})

describe('abrir o menu burguer', () => {
  it('deve abrir o menu burguer com um clique', () => {
    cy.visit('/')

    // Certifique-se de que o botão de menu burguer está visível e clicável
    cy.get('#burguer')
      .should('exist')
      .and('be.visible')
      .click()

    // Verificar se o menu foi aberto, assumindo que o menu tem o ID 'list'
    cy.get('#list')
      .should('be.visible')
  })
})
