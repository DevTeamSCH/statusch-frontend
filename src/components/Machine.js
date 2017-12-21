import React from 'react'
import { Feed, Icon } from 'semantic-ui-react'
import { Circle } from '../components'

const statusToColor = (status) => {
  switch (status) {
    case 0:
      return 'green'
    case 1:
      return 'red'
    default:
      return 'blue'
  }
}

const Machine = ({
  kind, status, message, subscribe,
}) => (
  <Feed.Event>
    <Feed.Label>
      <Circle diameter={20} color={statusToColor(status)} />
    </Feed.Label>
    <Feed.Content>
      <Feed.Summary>
        {kind === 'WM' ? 'Mosógép' : 'Szárító'} {
          message && `- ${message}`
        }
      </Feed.Summary>
      <Feed.Meta>
        <Feed.Like onClick={subscribe}>
          <Icon name='add' />
          Felíratkozás
        </Feed.Like>
      </Feed.Meta>
    </Feed.Content>
  </Feed.Event>
)

export { Machine }
