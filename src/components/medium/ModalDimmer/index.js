import React, { Component } from 'react'
import { Header, Image, Modal, Button, Icon } from 'semantic-ui-react'

import ButtonModern from '../../small/Button'

import 'animate.css'

class ModalDimmer extends Component {
    constructor(props) {
        super(props)
        this.state = { open: false }

        this.show = dimmer => () => this.setState({ dimmer, open: true })
        this.close = () => this.setState({ open: false })
    }

    render() {
        const { open, dimmer } = this.state
        const { data } = this.props
        return (
            <div>
                <Button onClick={this.show('blurring')} animated='fade'>
                    <Button.Content visible><Icon size='large' name='address card outline'></Icon></Button.Content>
                    <Button.Content hidden>Detail</Button.Content>
                </Button>

                <Modal className='animated fadeIn delay-1s' dimmer={dimmer} open={open} onClose={this.close}>
                    <Modal.Header>{data.fullname}</Modal.Header>
                    <Modal.Content image>
                        <Image size='large' src={data.pictureURL} rounded />

                        <Modal.Description>
                            <Header>Description</Header>
                            {data.description2}
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions><ButtonModern reverse icon='github' hiddenContent='Profile' animated='vertical' link='https://github.com/ariebrainware/' /></Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default ModalDimmer