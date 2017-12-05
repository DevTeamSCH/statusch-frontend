import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, Link, Route, Switch, Redirect } from 'react-router-dom'
import { Menu, Image, Container } from 'semantic-ui-react'

import { getLaundry } from '../actions'
import { Page, Laundry, Printer, Study, NotFound } from '../components'

const menuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}

class App extends Component {
  componentWillMount() {
    this.props.getLaundry()
  }

  render() {
    return (
      <div>
        <Menu fixed='top' style={menuStyle} borderless>
          <Container>
            <Menu.Item header>
              <Image size='mini' src='favicon.ico' />
            </Menu.Item>
            <Menu.Item as={Link} to='/laundry-rooms'>MosógépSCH</Menu.Item>
            <Menu.Item as={NavLink} to='/study-rooms'>TanulóSCH</Menu.Item>
            <Menu.Item as={NavLink} to='/printer'>PrinterSCH</Menu.Item>
          </Container>
        </Menu>
        <Page>
          <Switch>
            <Redirect exact from='/' to='/laundry-rooms' />
            <Route path='/laundry-rooms' component={Laundry} />
            <Route path='/study-rooms' component={Study} />
            <Route path='/printer' component={Printer} />
            <Route component={NotFound} />
          </Switch>
        </Page>
      </div>
    )
  }
}

const mapStateToProps = ({ laundry }) => ({ laundry })

const mapDispatchToProps = dispatch => ({
  getLaundry: () => {
    dispatch(getLaundry())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
