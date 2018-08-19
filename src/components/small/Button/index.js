import React from 'react'
import './index.css'
import 'semantic-ui-css/semantic.min.css'


const ButtonShowProfile = ({ link }) => (
    <div>
        <a href={link}>
            <button className='ui fade animated button button-profile'>
                <div className='visible content'>Profile</div>
                <div className='hidden content'>View GitHub</div>
            </button>
        </a>
    </div>
)

export default ButtonShowProfile