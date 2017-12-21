import React from 'react'
import { Card, Feed } from 'semantic-ui-react'
import { Machine } from '../components'

const Floor = ({
  floor, machines, queryTime, subscribe,
}) => (
  <Card fluid centered>
    <Card.Content textAlign='center'>
      <Card.Header>
        {floor}. szint
      </Card.Header>
      <Card.Meta>
        Utolsó lekérdezés: {queryTime}
      </Card.Meta>
    </Card.Content>
    <Card.Content>
      <Feed size='large'>
        {
          machines.map(machine => (
            <Machine
              key={machine.id}
              kind={machine.kind_of}
              status={machine.status}
              message={machine.message}
              subscribe={() => subscribe(floor, machine.id)}
            />
          ))
        }
      </Feed>
    </Card.Content>
  </Card>
)

export { Floor }
