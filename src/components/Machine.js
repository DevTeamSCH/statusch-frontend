import React from 'react'
import ListItem from 'grommet/components/ListItem'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'
import AddIcon from 'grommet/components/icons/base/Add'
import Status from 'grommet/components/icons/Status'
import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'

const statusToColor = (status) => {
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
  kind, status, message, subscribe,
}) => (
  <ListItem pad='small' separator='top' direction='column'>
    <Box responsive={false} align='start' justify='between' direction='row'>
      <Box responsive={false} direction='row' align='start'>
        <Status value={statusToColor(status)} />
        <Heading tag='h3' strong className='list-item-h3'>
          {kind === 'WM' ? 'Mosógép' : 'Szárító'}
        </Heading>
      </Box>
      <Box responsive={false} align='end'>
        <Paragraph align='end' size='small'>
          {message}
          valami szöveg
          valami szöveg
          valami szöveg
          valami szöveg
        </Paragraph>
      </Box>
    </Box>
    <Box responsive={false}>
      <Button
        icon={<AddIcon />}
        label='Feliratkozás'
        onClick={subscribe}
        primary={false}
        plain
        size='small'
      />
    </Box>
  </ListItem>
)

export { Machine }
