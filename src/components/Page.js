import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'semantic-ui-react'

const Page = ({ children }) => (
  <Container style={{ paddingTop: 70 }}>
    {children}
  </Container>
)

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export { Page }
