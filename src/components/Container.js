import React from 'react'
import PropTypes from 'prop-types'
import { Container as SemanticContainer } from 'semantic-ui-react'

const Container = ({ text }) => (
  <SemanticContainer>
    <p>{text}</p>
  </SemanticContainer>
)

Container.propTypes = {
  text: PropTypes.string,
}

Container.defaultProps = {
  text: 'Hello World!',
}

export { Container }
