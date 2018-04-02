import React from 'react'
import Card from 'grommet/components/Card'
import List from 'grommet/components/List'
import Heading from 'grommet/components/Heading'
import Label from 'grommet/components/Label'
import { Machine } from '../components'

import './Floor.css'

const Floor = ({
  floor, machines, hour, minute, second, subscribe,
}) => (
  <Card
    label={
      <div>
        <Heading tag='h3'>
          {floor}. szint
        </Heading>
        <Label>
          Utolsó lekérdezés - {hour}:{minute}<sub>{second}</sub>
        </Label>
      </div>
    }
    contentPad='small'
  >
    <List selectable={false}>
      {
        machines.sort((a, b) => a.id - b.id).map(machine => (
          <Machine
            key={machine.id}
            kind={machine.kind_of}
            status={machine.status}
            message={machine.message}
            subscribe={() => subscribe(floor, machine.id)}
          />
        ))
      }
    </List>
  </Card>
)

export { Floor }
