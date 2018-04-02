import React, { Component } from 'react'
import { connect } from 'react-redux'
import Columns from 'grommet/components/Columns'
import Box from 'grommet/components/Box'
import Spinning from 'grommet/components/icons/Spinning'
import { Floor } from '../components'
import { subscribe as subscribeAction } from '../actions'

import './LaundryContainer.css'

class LaundryContainer extends Component {
  render() {
    const { laundry: { floors }, subscribe } = this.props

    return (
      <div>
        {floors.length === 0 ?
          (
            <Box align='center'>
              <Spinning size='xlarge' />
            </Box>
          )
          :
          (
            <Columns
              className='laundry-container'
              maxCount={2}
              masonry
              size='small'
              responsive
              justify='center'
            >
              {
                floors.map((floor) => {
                  const time = new Date(floor.last_query_time)
                  return (
                    <Box
                      align='center'
                      pad='small'
                      margin='small'
                      colorIndex='light-1'
                      className='floor-box'
                      key={floor.id}
                    >
                      <Floor
                        floor={floor.id}
                        machines={floor.machines}
                        queryTime={time}
                        hour={time.getHours().toString().padStart(2, '0')}
                        minute={time.getMinutes().toString().padStart(2, '0')}
                        second={time.getSeconds().toString().padStart(2, '0')}
                        subscribe={subscribe}
                      />
                    </Box>
                  )
                })
              }
            </Columns>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = ({ laundry }) => ({ laundry })

const mapDispatchToProps = dispatch => ({
  subscribe: (floor, machine) => {
    dispatch(subscribeAction(floor, machine))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(LaundryContainer)
