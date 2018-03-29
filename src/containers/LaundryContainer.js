import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import { Floor } from '../components'
import Columns from 'grommet/components/Columns'
import Box from 'grommet/components/Box'
import { subscribe as subscribeAction } from '../actions'

class LaundryContainer extends Component {
  render() {
    const { laundry: { floors }, subscribe } = this.props

    return (
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
      // <Grid>
      //   {
      //     floors.map((floor) => {
      //       const time = new Date(floor.last_query_time)
      //       return (
      //         <Grid.Column mobile={16} tablet={8} computer={8} widescreen={4} key={floor.id}>
      //           <Floor
      //             floor={floor.id}
      //             machines={floor.machines}
      //             queryTime={`${time.getHours()}:${time.getMinutes()}`}
      //             second={time.getSeconds()}
      //             subscribe={subscribe}
      //           />
      //         </Grid.Column>
      //       )
      //     })
      //   }
      // </Grid>
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
