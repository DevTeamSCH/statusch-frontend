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
  <ListItem pad='small' separator='top' direction='column'>
    <Box responsive={false} align='start' justify='between' direction='row'>
      <Box responsive={false} direction='row' align='start'>
        <Status value='critical' />
        <Heading tag='h3' strong className='list-item-h3'>
          Szárító
        </Heading>
      </Box>
      <Box responsive={false} align='end'>
        <Paragraph align='end' size='small'>
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

// <Feed.Event>
//   <Feed.Label>
//     <Circle diameter={20} color={statusToColor(status)} />
//   </Feed.Label>
//   <Feed.Content>
//     <Feed.Summary>
//       {kind === 'WM' ? 'Mosógép' : 'Szárító'} {
//         message && `- ${message}`
//       }
//     </Feed.Summary>
//     <Feed.Meta>
//       <Feed.Like onClick={subscribe}>
//         <Icon name='add' />
//         Feliratkozás
//       </Feed.Like>
//     </Feed.Meta>
//   </Feed.Content>
// </Feed.Event>
