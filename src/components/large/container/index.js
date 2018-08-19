import React from 'react'
import './index.css'
import {Container} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const ContainerParent = ({ backgroundColor, children }) => (
    <Container className={backgroundColor}>
        {children}
    </Container>
)

export default ContainerParent
