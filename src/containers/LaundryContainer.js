import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import { Floor } from '../components'
import { subscribe as subscribeAction } from '../actions'

class LaundryContainer extends Component {
  render() {
    const { laundry: { floors }, subscribe } = this.props

    return (
      <Grid>
        {
          floors.map((floor) => {
            const time = new Date(floor.last_query_time)
            console.log(time)
            return (
              <Grid.Column mobile={16} tablet={8} computer={8} widescreen={4} key={floor.id}>
                <Floor
                  floor={floor.id}
                  machines={floor.machines}
                  queryTime={`${time.getHours()}:${time.getMinutes()}`}
                  second={time.getSeconds()}
                  subscribe={subscribe}
                />
              </Grid.Column>
            )
          })
        }
      </Grid>
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
