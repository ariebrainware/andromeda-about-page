import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import ButtonShowProfile from '../../small/Button'
import './index.css'

const CardProfile = ({ name }) => {
  if (name === 'Arie') {
    return (
      <Card>
        <Image src='https://avatars0.githubusercontent.com/u/26453961?v=4' />
        <Card.Content>
          <Card.Header>Arie Brainware</Card.Header>
          <Card.Meta>
            <span className='date'>Full-stack Developer</span>
          </Card.Meta>
          <Card.Description>Arie Brainware is a Full-stack Junior Web Developer.</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <ButtonShowProfile link='https://github.com/ariebrainware' />
        </Card.Content>
      </Card>
    )
  } else if (name === 'Indro') {
    return (
      <Card>
        <Image src='https://avatars0.githubusercontent.com/u/41278410?v=4' />
        <Card.Content>
          <Card.Header>Indro Lie</Card.Header>
          <Card.Meta>
            <span className='date'>Front-end Developer</span>
          </Card.Meta>
          <Card.Description>Indro Lie is a Front-end Junior Web Developer.</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <ButtonShowProfile link='https://github.com/indrolie' />
        </Card.Content>
      </Card>
    )
  } else if (name === 'Abba') {
    return (
      <Card>
        <Image src='https://avatars0.githubusercontent.com/u/37859571?v=4' />
        <Card.Content>
          <Card.Header>Abba Yosua Siagian</Card.Header>
          <Card.Meta>
            <span className='date'>Front-end Developer</span>
          </Card.Meta>
          <Card.Description>Abba is a Front-end Junior Web Developer.</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <ButtonShowProfile link='https://github.com/abbayosua' />
        </Card.Content>
      </Card>
    )
  } else if (name === 'Wondo') {
    return (
      <Card>
        <Image src='https://avatars1.githubusercontent.com/u/31862158?v=4' />
        <Card.Content>
          <Card.Header>Wondo Indra</Card.Header>
          <Card.Meta>
            <span className='date'>Back-end Developer</span>
          </Card.Meta>
          <Card.Description>Wondo is a Back-end Junior Web Developer.</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <ButtonShowProfile link='https://github.com/wondoindra' />
        </Card.Content>
      </Card>
    )
  }
}

export default CardProfile