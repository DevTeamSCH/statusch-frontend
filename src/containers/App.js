import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, Route, Switch, Redirect } from 'react-router-dom'
import { Menu, Image, Container } from 'semantic-ui-react'

import { getWashRoom } from '../actions'
import { Page, WashRoom, Printer, StudyRoom, NotFound } from '../components'

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
          <Container>
            <Menu.Item header>
              <Image size='mini' src='favicon.ico' />
            </Menu.Item>
            <Menu.Item as={NavLink} to='/laundry-rooms'>MosógépSCH</Menu.Item>
            <Menu.Item as={NavLink} to='/study-rooms'>TanulóSCH</Menu.Item>
            <Menu.Item as={NavLink} to='/printer'>PrinterSCH</Menu.Item>
          </Container>
        </Menu>
        <Page>
          <Switch>
            <Redirect exact from='/' to='/laundry-rooms' />
            <Route path='/laundry-rooms' component={WashRoom} />
            <Route path='/study-rooms' component={StudyRoom} />
            <Route path='/printer' component={Printer} />
            <Route component={NotFound} />
          </Switch>
        </Page>
      </div>
    )
  }
}

const mapStateToProps = ({ washroom }) => ({ washroom })

const mapDispatchToProps = dispatch => ({
  getWashRoom: () => {
    dispatch(getWashRoom())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
