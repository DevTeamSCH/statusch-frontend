import React from 'react'
import ListItem from 'grommet/components/ListItem'
import Heading from 'grommet/components/Heading'
import AddIcon from 'grommet/components/icons/base/Add'
import Status from 'grommet/components/icons/Status'
import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'

const statusToColor = (status, lost) => {
  if (lost) {
    return 'unknown'
  }
  switch (status) {
    case 0:
      return 'ok'
    case 1:
      return 'critical'
    default:
      return 'unknown'
  }
}

const Machine = ({
  kind, status, subscribe, lost,
}) => (
  <ListItem pad='small' separator='top' direction='column' >
    <Box responsive={false} direction='row' style={{ width: '100%' }}>
      <Box responsive={false} direction='row' align='center'>
        <Status value={statusToColor(status, lost)} />
        <Heading tag='h3' className='list-item-h3' style={{ marginTop: 12 }}>
          {kind === 'WM' ? 'Mosógép' : 'Szárító'}
        </Heading>
      </Box>
      <Box responsive={false} align='end' flex='grow'>
        <Button
          icon={<AddIcon />}
          onClick={subscribe}
          primary={false}
          plain
          size='small'
        />
      </Box>
    </Box>

  </ListItem>
)

export { Machine }
