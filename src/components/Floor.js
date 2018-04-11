import React from 'react'
import Card from 'grommet/components/Card'
import List from 'grommet/components/List'
import Heading from 'grommet/components/Heading'
import Label from 'grommet/components/Label'
import { Machine } from '../components'

import './Floor.css'

const Floor = ({
  floor, machines, hour, minute, second, subscribe, timeDiff, unsubscribe, subscriptions,
}) => (
  <Card
    label={
      <div>
        <Heading tag='h3'>
          {floor}. szint
        </Heading>
        {
          timeDiff >= 1 ?
            <Label>
              Utolsó lekérdezés - <small>Lost in space (&gt;1h)</small>
            </Label>
            :
            <Label>
              Utolsó lekérdezés - {hour}:{minute}<sub>{second}</sub>
            </Label>
        }
      </div>
    }
    contentPad='small'
  >
    <List selectable={false}>
      {
        machines.sort(a => a.kind_of === 'DR').map(machine => (
          <Machine
            key={machine.id}
            id={machine.id}
            kind={machine.kind_of}
            status={machine.status}
            message={machine.message}
            subscribe={() => subscribe(machine.id)}
            lost={timeDiff >= 1}
            unsubscribe={() => unsubscribe(machine.id)}
            subscriptions={subscriptions}
          />
        ))
      }
    </List>
  </Card>
)

export { Floor }
