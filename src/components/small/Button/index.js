import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

import './index.css'

const ButtonModern = ({ reverse, visibleContent = '', hiddenContent = '', icon = '', animated = '' ,link}) => {

    if (reverse) {
        return (
            <a href={link}>
                <Button animated={animated}>
                    <Button.Content visible><Icon name={icon} size='large'></Icon></Button.Content>
                    <Button.Content hidden>{hiddenContent}</Button.Content>
                </Button>
            </a>
        )
    } else {
        return (
            <a href={link}>
                <Button animated={animated}>
                    <Button.Content visible>{visibleContent}</Button.Content>
                    <Button.Content hidden><Icon name={icon}></Icon>{hiddenContent}</Button.Content>
                </Button>
            </a>
        )
    }
}

export default ButtonModern