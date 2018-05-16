import React, { Component } from 'react';
import { Grid, Header, Container, Responsive } from 'semantic-ui-react'
import TableEmps from './containers/TableEmps/TableEmps'

class App extends Component {
  render() {
    return (
      <div>
        <Responsive>
          <Container>
            <Grid verticalAlign='middle' textAlign='center' padded='vertically'>
              <Grid.Row>
                <Grid.Column>
                  <Header as='h2'>FakeApi</Header>
                  <TableEmps />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Responsive>
      </div>
    );
  }
}

export default App;
