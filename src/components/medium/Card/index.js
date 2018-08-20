import React from 'react'
import { Card, Image } from 'semantic-ui-react'

import ModalDimmer from '../ModalDimmer'

import 'animate.css'
import './index.css'

const CardProfile = ({ data, title }) => {
    return (
        <Card>
            <Image src={data.pictureURL} />
            <Card.Content>
                <Card.Header>{data.fullname} {title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{data.title}</span>
                </Card.Meta>
                <Card.Description>{data.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <ModalDimmer data={data}/>
            </Card.Content>
        </Card>
    )
}

export default CardProfile