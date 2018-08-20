import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react'

import ContainerParent from './components/large/container'
import CardProfile from './components/medium/Card'

import 'animate.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContainerParent>
          <div className='wrapper'>
            <Grid columns='equal'>
              <Grid.Row className='animated pulse'>
                <Grid.Column>
                  <Segment raised><CardProfile name='Arie' /></Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment raised> <CardProfile name='Indro' /></Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment raised> <CardProfile name='Abba' /></Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment raised><CardProfile name='Wondo' /></Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>

          </div>
        </ContainerParent>
      </div>
    );
  }
}

export default App;