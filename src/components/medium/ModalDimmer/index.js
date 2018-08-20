import React, { Component } from 'react'
import { Header, Image, Modal, Button, Icon } from 'semantic-ui-react'

import ButtonModern from '../../small/Button'

import 'animate.css'

class ModalDimmer extends Component {
    state = { open: false }

    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })
    render() {

        const { open, dimmer } = this.state
        if (this.props.name === 'ariebrainware') {
            return (
                <div >
                    <Button onClick={this.show('blurring')} animated='fade'>
                        <Button.Content visible><Icon size='large' name='address card outline'></Icon></Button.Content>
                        <Button.Content hidden>Detail</Button.Content>
                    </Button>

                    <Modal dimmer={dimmer} open={open} onClose={this.close}>
                        <Modal.Header>Arie Brainware</Modal.Header>
                        <Modal.Content image>
                            <Image size='medium' src='https://avatars0.githubusercontent.com/u/26453961?v=4' wrapped />

                            <Modal.Description>
                                <Header>Description</Header>
                                <p>We've found the following gravatar image associated with your e-mail address.</p>
                                <p>Is it okay to use this photo?</p>
                            </Modal.Description>
                        </Modal.Content>
                        <Modal.Actions><ButtonModern reverse icon='github' hiddenContent='Profile' animated='vertical' link='https://github.com/ariebrainware/' /></Modal.Actions>
                    </Modal>
                </div>
            )
        } else if (this.props.name === 'indrolie') {
            return (
                <div>
                    <Button onClick={this.show('blurring')} animated='fade'>
                        <Button.Content visible><Icon size='large' name='address card outline'></Icon></Button.Content>
                        <Button.Content hidden>Detail</Button.Content>
                    </Button>

                    <Modal dimmer={dimmer} open={open} onClose={this.close}>
                        <Modal.Header>Indro Lie</Modal.Header>
                        <Modal.Content image>
                            <Image size='medium' src='https://avatars0.githubusercontent.com/u/41278410?v=4' wrapped />

                            <Modal.Description>
                                <Header>Description</Header>
                                <p>We've found the following gravatar image associated with your e-mail address.</p>
                                <p>Is it okay to use this photo?</p>
                            </Modal.Description>
                        </Modal.Content>
                        <Modal.Actions>
                            <ButtonModern reverse icon='github' hiddenContent='Profile' animated='vertical' link='https://github.com/indrolie' />
                        </Modal.Actions>
                    </Modal>
                </div>
            )
        } else if (this.props.name === 'abbayosua') {
            return (
                <div>
                    <Button onClick={this.show('blurring')} animated='fade'>
                        <Button.Content visible><Icon size='large' name='address card outline'></Icon></Button.Content>
                        <Button.Content hidden>Detail</Button.Content>
                    </Button>

                    <Modal dimmer={dimmer} open={open} onClose={this.close} >
                        <Modal.Header>Abba Yosua Siagian</Modal.Header>
                        <Modal.Content image>
                            <Image size='medium' src='https://avatars0.githubusercontent.com/u/37859571?v=4' wrapped />

                            <Modal.Description>
                                <Header>Description</Header>
                                <p>We've found the following gravatar image associated with your e-mail address.</p>
                                <p>Is it okay to use this photo?</p>
                            </Modal.Description>
                        </Modal.Content>
                        <Modal.Actions>
                            <ButtonModern reverse icon='github' hiddenContent='Profile' animated='vertical' link='https://github.com/abbayosua' />
                        </Modal.Actions>
                    </Modal>
                </div>
            )
        } else {
            return (
                <div>
                    <Button onClick={this.show('blurring')} animated='fade'>
                        <Button.Content visible><Icon size='large' name='address card outline'></Icon></Button.Content>
                        <Button.Content hidden>Detail</Button.Content>
                    </Button>

                    <Modal dimmer={dimmer} open={open} onClose={this.close} >
                        <Modal.Header>Wondo Indra</Modal.Header>
                        <Modal.Content image>
                            <Image size='medium' src='https://avatars1.githubusercontent.com/u/31862158?v=4' wrapped />

                            <Modal.Description>
                                <Header>Description</Header>
                                <p>We've found the following gravatar image associated with your e-mail address.</p>
                                <p>Is it okay to use this photo?</p>
                            </Modal.Description>
                        </Modal.Content>
                        <Modal.Actions>
                            <ButtonModern reverse icon='github' hiddenContent='Profile' animated='vertical' link='https://github.com/wondoindra' />
                        </Modal.Actions>
                    </Modal>
                </div>
            )
        }
    }
}

export default ModalDimmer