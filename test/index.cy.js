import Home from "../pages/index"

describe('<Home />', () => {
  it('should render and display expected content', () => {
    // Mount the React component for the About page
    cy.mount(<Home/>)

    // The new page should contain an h1 with "About page"
    cy.get('h1').contains('About Page')

    // Validate that a link with the expected URL is present
    // *Following* the link is better suited to an E2E test
    cy.get('a[href="/"]').should('be.visible')
  })
})
