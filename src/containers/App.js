import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'

import GrommetApp from 'grommet/components/App'
import Paragraph from 'grommet/components/Paragraph'
import Box from 'grommet/components/Box'
import Header from 'grommet/components/Header'
import Menu from 'grommet/components/Menu'
import Anchor from 'grommet/components/Anchor'
import GrommetIcon from 'grommet/components/icons/base/BrandGrommetOutline'
import Footer from 'grommet/components/Footer'
import Section from 'grommet/components/Section'

import { getLaundry } from '../actions'
import { Printer, Study, NotFound } from '../components'
import LaundryContainer from './LaundryContainer'

import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      desktop: false,
    }
    this.onResize = this.onResize.bind(this)
  }

  componentWillMount() {
    this.props.getLaundry()
    setInterval(() => this.props.getLaundry(), 120000)
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    this.onResize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize() {
    const desktop = window.innerWidth > 720
    if (desktop !== this.state.desktop) {
      this.setState({ desktop });
    }
  }

  render() {
    return (
      <GrommetApp centered={false}>
        <Header
          size='small'
          float={false}
          fixed
          pad='small'
          colorIndex='light-2'
          full='horizontal'
        >
          <Box direction='row' flex='grow' responsive={false} align='center' pad={{ horizontal: 'medium' }}>
            <Box align='start' flex='grow'>
              <GrommetIcon colorIndex='' size='large' />
            </Box>
            <Box align='end' flex='grow'>
              <Menu
                label='Menü'
                inline={this.state.desktop}
                primary={false}
                direction='row'
              >
                <Anchor className='menu-anchor' path='laundry-rooms'>MosógépSCH</Anchor>
                <Anchor className='menu-anchor' path='/study-rooms'>TanulóSCH</Anchor>
                <Anchor className='menu-anchor' path='/printer'>PrinterSCH</Anchor>
              </Menu>
            </Box>
          </Box>
        </Header>
<Section align='center' full='true'>
        <Switch>
          <Redirect exact from='/' to='/laundry-rooms' />
          <Route path='/laundry-rooms' component={LaundryContainer} />
          <Route path='/study-rooms' component={Study} />
          <Route path='/printer' component={Printer} />
          <Route component={NotFound} />
        </Switch>
</Section>
        <Footer
          colorIndex='grey-5-a'
          size='small'
          className='footer'
          pad={{ vertical: 'small' }}
          full='horizontal'
        >
          <Box align='center' flex='grow'>
            <Paragraph>
              Created by DevTeam
            </Paragraph>
          </Box>
        </Footer>
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
