import React, { Component } from 'react'
import { connect } from 'react-redux'
import Columns from 'grommet/components/Columns'
import Box from 'grommet/components/Box'
import { Floor } from '../components'
import { subscribe as subscribeAction } from '../actions'

import './LaundryContainer.css'

class LaundryContainer extends Component {
  render() {
    const { laundry: { floors }, subscribe } = this.props

    return (
      <Columns maxCount={2} size='medium' masonry responsive justify='center'>
        <Box align='center' pad='small' margin='small' colorIndex='light-1' className='floor-box'>
          <Floor
            floor={1}
            machines={[{
              id: 1,
              kind_of: 1,
              status: 0,
              message: 'message'
            }]}
            hour={new Date().getHours().toString().padStart(2, '0')}
            minute={new Date().getMinutes().toString().padStart(2, '0')}
            second={new Date().getSeconds().toString().padStart(2, '0')}
            subscribe={subscribe}
          />
        </Box>
        <Box align='center' pad='medium' margin='small' colorIndex='light-2'>
          Box 1
        </Box>
        <Box align='center' pad='medium' margin='small' colorIndex='light-2'>
          Box 1
        </Box>
        <Box align='center' pad='medium' margin='small' colorIndex='light-2'>
          Box 1
        </Box>
        <Box align='center' pad='medium' margin='small' colorIndex='light-2'>
          Box 1
        </Box>
        <Box align='center' pad='medium' margin='small' colorIndex='light-2'>
          Box 1
        </Box>
        <Box align='center' pad='medium' margin='small' colorIndex='light-2'>
          Box 1
        </Box>
        <Box align='center' pad='medium' margin='small' colorIndex='light-2'>
          Box 1
        </Box>
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
      // <Columns maxCount={2} size='medium' masonry responsive justify='center'>
      //   {
      //     floors.map((floor) => {
      //       const time = new Date(floor.last_query_time)
      //       return (
      //         <Box align='center' pad='small' margin='small' colorIndex='light-1' className='floor-box' key={floor.id}>
      //           <Floor
      //             floor={floor.id}
      //             machines={floor.machines}
      //             queryTime={time}
      //             hour={time.getHours().toString().padStart(2, '0')}
      //             minute={time.getMinutes().toString().padStart(2, '0')}
      //             second={time.getSeconds().toString().padStart(2, '0')}
      //             subscribe={subscribe}
      //           />
      //         </Box>
      //       )
      //     })
      //   }
      //   <Box align='center' pad='medium' margin='small' colorIndex='light-2' />
      // </Columns>
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
