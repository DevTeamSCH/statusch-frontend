import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import { Floor } from '../components'

class LaundryContainer extends Component {
  render() {
    const { floors } = this.props.laundry
    return (
      <Grid centered>
        {
          floors.map((floor) => {
            const time = new Date(floor.last_query_time)
            return (
              <Grid.Column mobile={16} tablet={8} computer={4}>
                <Floor
                  floor={floor.id}
                  machines={floor.machines}
                  queryTime={`${time.getHours()}:${time.getMinutes()}`}
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

export default connect(mapStateToProps, {})(LaundryContainer)
