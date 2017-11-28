import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, Route } from 'react-router-dom'
import { Menu, Image, Container as SemanticContainer } from 'semantic-ui-react'

import { getMosch } from '../actions'
import { Container } from '../components'
import { Mosch, Printer, StudyRoom } from '../components'

const menuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}

class App extends Component {
  render() {
    return (
      <div>
        <Menu fixed='top' style={menuStyle} borderless>
          <SemanticContainer>
            <Menu.Item>
            <Image size='mini' src='/logo.png' />
            </Menu.Item>
            <Menu.Item as='h2' header>Státusz SCH</Menu.Item>
            <Menu.Item as={NavLink} to='/laundry-rooms'>MosógépSCH</Menu.Item>
            <Menu.Item as={NavLink} to='/study-rooms'>TanulóSCH</Menu.Item>
            <Menu.Item as={NavLink} to='/printer'>PrinterSCH</Menu.Item>
          </SemanticContainer>
        </Menu>
        <Container>
          <Route path='/' />
          <Route path='/laundry-rooms' component={Mosch} />
          <Route path='/study-rooms' component={StudyRoom} />
          <Route path='/printer' component={Printer} />
        </Container>
      </div>
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
