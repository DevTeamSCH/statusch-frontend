import React from 'react'
import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Button from 'grommet/components/Button';

const NotFound = () => (
  <Section align='center'>
    <Heading align='center'>
      404 - Not Found
    </Heading>
    <Button
      label='Főoldal'
      primary={false}
      accent
      path='/'
    />
  </Section>
)

export { NotFound }
