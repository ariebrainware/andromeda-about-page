import React, { Component } from 'react';
import './App.css';
import ContainerParent from './components/large/container'
import CardProfile from './components/medium/card'
import { Grid, Segment } from 'semantic-ui-react'
import 'animate.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContainerParent>
          <div className='wrapper'>
          <Grid columns='equal'>
            <Grid.Row className='animated pulse'>
              <Grid.Column>
                <Segment><CardProfile name='Arie' /></Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment> <CardProfile name='Indro' /></Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment> <CardProfile name='Abba' /></Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment><CardProfile name='Wondo' /></Segment>
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
