import React from 'react'
import { Feed, Icon } from 'semantic-ui-react'
import { Circle } from '../components'

const statusToColor = (status) => {
  switch (status) {
    case 1:
      return 'green'
    case 0:
      return 'red'
    default:
      return 'yellow'
  }
}

const Machine = ({ kind, status, message }) => (
  <Feed.Event>
    <Feed.Label>
      <Circle diameter={20} color={statusToColor(status)} />
    </Feed.Label>
    <Feed.Content>
      <Feed.Summary>
        {kind} - {message}
      </Feed.Summary>
      <Feed.Meta>
        <Feed.Like>
          <Icon name='add' />
          Subscribe
        </Feed.Like>
      </Feed.Meta>
    </Feed.Content>
  </Feed.Event>
)

export { Machine }
