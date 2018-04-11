import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect, Link } from 'react-router-dom'

import GrommetApp from 'grommet/components/App'
import Box from 'grommet/components/Box'
import Header from 'grommet/components/Header'
import Menu from 'grommet/components/Menu'
import Toast from 'grommet/components/Toast'
import Anchor from 'grommet/components/Anchor'
import Footer from 'grommet/components/Footer'
import Heading from 'grommet/components/Heading'
import Section from 'grommet/components/Section'
import Status from 'grommet/components/icons/Status'

import { getLaundry, hideToast, loadSave } from '../actions'
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

  componentDidMount() {
    const subscriptions = JSON.parse(localStorage.getItem('mosogepschdatasave')) || []

    this.props.loadSave(subscriptions)
    this.props.getLaundry()
    setInterval(() => this.props.getLaundry(), 5000)

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
    const { showToast, toastData: { text, status } } = this.props
    return (
      <GrommetApp centered={false} lang='hu-HU'>
        <Header
          size='small'
          float={false}
          fixed
          pad='small'
          colorIndex='light-2'
          full='horizontal'
          className='header-gr'
        >
          <Box direction='row' flex='grow' responsive={false} align='center' pad={{ horizontal: 'medium' }}>
            <Box align='start' flex='grow'>
              <Link to='/' href='/'>
                <picture>
                  <source type='image/svg+xml' width='40' srcSet='status_icon.svg' />
                  <img width='40' src='status_icon.png' alt='' />
                </picture>
              </Link>
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

        <Section>
          <Switch>
            <Redirect exact from='/' to='/laundry-rooms' />
            <Route path='/laundry-rooms' component={LaundryContainer} />
            <Route path='/study-rooms' component={Study} />
            <Route path='/printer' component={Printer} />
            <Route component={NotFound} />
          </Switch>
        </Section>

        {
          showToast &&
          <Toast onClose={() => this.props.hideToast()} >
            <Box direction='row' align='center' justify='around' responsive={false}>
              <Status value={status} />
              <Heading tag='h3' className='toast-text'>
                {text}
              </Heading>
            </Box>
          </Toast>
        }

        <Footer
          colorIndex='grey-5-a'
          className='footer'
          pad={{ vertical: 'small' }}
          full='horizontal'
        >
          <Box align='center' flex='grow'>
              Created by DevTeam
          </Box>
        </Footer>
      </GrommetApp>
    )
  }
}

const mapStateToProps = ({ laundry: { showToast, toastData } }) => ({
  showToast,
  toastData,
})

const mapDispatchToProps = dispatch => ({
  getLaundry: () => {
    dispatch(getLaundry())
  },
  hideToast: () => {
    dispatch(hideToast())
  },
  loadSave: (save) => {
    dispatch(loadSave(save))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
