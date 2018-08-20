import React,{ Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';

import ContainerParent from './components/large/container'
import CardProfile from './components/medium/Card'

import 'animate.css'
import './App.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            devTeam: [
                {
                    id: 0,
                    pictureURL: 'https://avatars0.githubusercontent.com/u/26453961?v=4',
                    name: 'ariebrainware',
                    fullname: 'Arie Brainware',
                    title: 'Full-Stack Developer',
                    description: 'Arie Brainware is a Full-stack Junior Web Developer.',
                    description2: 'Arie Brainware is a Full-stack Junior Web Developer. Arie have a duty to manage Server-side, create API and doing bussiness with Database. And also second-hand Integrator between Back-End and Front-End'
                },
                {
                    id: 1,
                    pictureURL: 'https://avatars0.githubusercontent.com/u/41278410?v=4',
                    name: 'indrolie',
                    fullname: 'Indro Lie',
                    title: 'Front-End Developer',
                    description: 'Indro Lie is a Front-End Junior Web Developer.',
                    description2:'Indro Lie is a Front-End Junior Web Developer. Indro is an first-hand integrator between Back-End including API and Front-End.'
                },
                {
                    id: 2,
                    pictureURL: 'https://avatars0.githubusercontent.com/u/37859571?v=4',
                    name: 'abbayosua',
                    fullname: 'Abba Yosua Siagian',
                    title: 'Front-End Developer',
                    description: 'Abba Yosua is a Front-End Junior Web Developer.',
                    description2:'Abba Yosua is a Front-End Junior Web Developer. Doing bussiness with Web Design and Mockup Web.'
                }, {
                    id: 3,
                    pictureURL: 'https://avatars1.githubusercontent.com/u/31862158?v=4',
                    name: 'wondoindra',
                    fullname: 'Wondo Indra',
                    title: 'Back-End Developer',
                    description: 'Wondo Indra is a Back-End Junior Web Developer.',
                    description2:'Wondo Indra is a Back-End Junior Web Developer. Work with great performance with Server-side and API'
                }
            ]
        };
    }

    render() {
       
        const ColumnSegment = this.state.devTeam.map(item => {
            return (
                <Grid.Column key={item.id}>
                    <Segment raised>
                        <CardProfile data={item} title={this.props.title} />
                    </Segment>
                </Grid.Column>
            )
        })

        return (
            <div className="App">
                <ContainerParent>
                    <div className='wrapper'>
                        <Grid columns='equal'>
                            <Grid.Row className='animated pulse'>
                                {ColumnSegment}
                            </Grid.Row>
                        </Grid>
                    </div>
                </ContainerParent>
            </div>
        );
    }
}


export default App;