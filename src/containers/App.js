import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMosch } from '../actions'
import { Container } from '../components'

class App extends Component {
  render() {
    return (
      <Container />
    )
  }
}

const mapStateToProps = ({ mosch }) => ({ mosch })

const mapDispatchToProps = dispatch => ({
  getMosch: () => {
    dispatch(getMosch())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
