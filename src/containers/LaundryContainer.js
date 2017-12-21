import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Floor } from '../components'

class LaundryContainer extends Component {
  render() {
    const { floors } = this.props.laundry
    return (
      <div>
        {
          floors.map((floor) => {
            const time = new Date(floor.last_query_time)
            return (
              <Floor
                key={floor.id}
                floor={floor.id}
                machines={floor.machines}
                queryTime={`${time.getHours()}:${time.getMinutes()}`}
              />
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = ({ laundry }) => ({ laundry })

export default connect(mapStateToProps, {})(LaundryContainer)
