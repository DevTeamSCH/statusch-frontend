import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'semantic-ui-react'

const Page = ({ text, children }) => (
  <Container style={{ paddingTop: 70 }}>
    <p>{text}</p>
    {children}
  </Container>
)

Page.propTypes = {
  text: PropTypes.string,
}

Page.defaultProps = {
  text: 'Hello World!',
}

export { Page }
