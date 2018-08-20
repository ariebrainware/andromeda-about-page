import React from 'react'
import { Header, Image, Modal, Button, Icon } from 'semantic-ui-react'

import 'animate.css'

import ButtonModern from '../../small/Button'

const ModalProfileDetail = ({ name }) => {
    if (name === 'ariebrainware') {
        return (
            <Modal className='animated fadeIn' trigger={<Button animated='fade'>
                <Button.Content visible><Icon size='large' name='address card outline'></Icon></Button.Content>
                <Button.Content hidden>Detail</Button.Content>
            </Button>}>
                <Modal.Header>Arie Brainware</Modal.Header>
                <Modal.Content image scrolling>
                    <Image size='medium' src='https://avatars0.githubusercontent.com/u/26453961?v=4' wrapped />

                    <Modal.Description>
                        <Header>Description</Header>
                        <p>Email : </p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <ButtonModern reverse icon='github' hiddenContent='Profile' animated='vertical' link='https://github.com/ariebrainware/' />
                </Modal.Actions>
            </Modal>
        )
    } else if (name === 'indrolie') {
        return (
            <Modal className='animated fadeIn' trigger={<Button animated='fade'>
                <Button.Content visible><Icon size='large' name='address card outline'></Icon></Button.Content>
                <Button.Content hidden>Detail</Button.Content>
            </Button>}>
                <Modal.Header>Indro Lie</Modal.Header>
                <Modal.Content image scrolling>
                    <Image size='medium' src='https://avatars0.githubusercontent.com/u/41278410?v=4' wrapped />

                    <Modal.Description>
                        <Header>Description</Header>
                        <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <ButtonModern reverse icon='github' hiddenContent='Profile' animated='vertical' link='https://github.com/indrolie' />
                </Modal.Actions>
            </Modal>
        )
    } else if (name === 'abbayosua') {
        return (
            <Modal className='animated fadeIn' trigger={<Button animated='fade'>
                <Button.Content visible><Icon size='large' name='address card outline'></Icon></Button.Content>
                <Button.Content hidden>Detail</Button.Content>
            </Button>}>
                <Modal.Header>Abba Yosua Siagian</Modal.Header>
                <Modal.Content image scrolling>
                    <Image size='medium' src='https://avatars0.githubusercontent.com/u/37859571?v=4' wrapped />

                    <Modal.Description>
                        <Header>Description</Header>
                        <p>Email : </p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <ButtonModern reverse icon='github' hiddenContent='Profile' animated='vertical' link='https://github.com/abbayosua' />

                </Modal.Actions>
            </Modal>
        )
    } else {
        return (
            <Modal className='animated fadeIn' trigger={<Button animated='fade'>
                <Button.Content visible><Icon size='large' name='address card outline'></Icon></Button.Content>
                <Button.Content hidden>Detail</Button.Content>
            </Button>}>
                <Modal.Header>Wondo Indra</Modal.Header>
                <Modal.Content image scrolling>
                    <Image size='medium' src='https://avatars1.githubusercontent.com/u/31862158?v=4' wrapped />

                    <Modal.Description>
                        <Header>Description</Header>
                        <p>Email : </p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <ButtonModern reverse icon='github' hiddenContent='Profile' animated='vertical' link='https://github.com/wondoindra' />
                </Modal.Actions>
            </Modal>
        )
    }
}

export default ModalProfileDetail