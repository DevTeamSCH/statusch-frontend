import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, Link, Route, Switch, Redirect } from 'react-router-dom'

import GrommetApp from 'grommet/components/App'
import Columns from 'grommet/components/Columns'
import Box from 'grommet/components/Box'
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Menu from 'grommet/components/Menu'
import Anchor from 'grommet/components/Anchor'
import GrommetIcon from 'grommet/components/icons/base/BrandGrommetOutline'

import { getLaundry } from '../actions'
import { Page, Printer, Study, NotFound } from '../components'
import LaundryContainer from './LaundryContainer'

class App extends Component {
  componentWillMount() {
    this.props.getLaundry()
    setInterval(() => this.props.getLaundry(), 120000)
  }

  render() {
    return (
      <GrommetApp centered={false}>
        <Header
          size='small'
          float={false}
          fixed
          pad='small'
          colorIndex='grey-3'
        >
          <Box size={{ width: { max: 'xxlarge' } }} direction='row' flex='grow' justify="center" align='center' responsive={false} pad={{horizontal: 'medium'}}>
            <Box align='start'>
              <GrommetIcon colorIndex='' size='large' />
            </Box>
            <Box align='end' flex='grow' className='menu-flex'>
              <Menu label='Menü' responsive inline primary={false} direction='row' size='medium'>
                <Anchor href='#'>MosógépSCH</Anchor>
                <Anchor href='#'>TanulóSCH</Anchor>
                <Anchor href='#'>PrinterSCH</Anchor>
              </Menu>
            </Box>
          </Box>
        </Header>

        <Columns maxCount={2} size='medium' masonry responsive justify='center'>
          <Box align='center' pad='medium' margin='small' colorIndex='light-2'>
            Box 1
          </Box>
          <Box align='center' pad='medium' margin='small' colorIndex='light-2'>
            Box 1
          </Box>
          <Box align='center' pad='medium' margin='small' colorIndex='light-2'>
            Box 1
          </Box>
        </Columns>
        {
            /* <div style={styles.page}>
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
                  <Route path='/laundry-rooms' component={LaundryContainer} />
                  <Route path='/study-rooms' component={Study} />
                  <Route path='/printer' component={Printer} />
                  <Route component={NotFound} />
                </Switch>
              </Page>
            </div>
            <Segment inverted vertical textAlign='center'>
              Created by DevTeam
            </Segment> */
        }
      </GrommetApp>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getLaundry: () => {
    dispatch(getLaundry())
  },
})

export default connect(null, mapDispatchToProps)(App)
