import React, { Component } from 'react';
import {Grid, Container} from 'semantic-ui-react';
import {
  Menu
} from 'semantic-ui-react';
import {
  Route,
  Link
} from 'react-router-dom';
import About from './About';
import Albumes from './Albumes';
import Playlist from './Playlist';

export class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home'
    };
  }
  handleItemClick = (e, {name}) => this.setState({activeItem: name})
  render() {
    console.log(this.props);
    return (
      <div>
        <Container>
            <div>
              <Menu>
                  <Menu.Item as={Link} to='/' name='home' active={this.state.activeItem === 'home'} onClick={this.handleItemClick.bind(this)} />
                  <Menu.Item as={Link} to='/about' name='about' active={this.state.activeItem === 'about'} onClick={this.handleItemClick.bind(this)} />
                  <Menu.Item as={Link} to='/albumes' name='albumes' active={this.state.activeItem === 'albumes'} onClick={this.handleItemClick} />
                  <Menu.Item as={Link} to='/playlist' name='playlist' active={this.state.activeItem === 'playlist'} onClick={this.handleItemClick.bind(this)} />
                  <Menu.Item as={Link} to='/' position='right' name='logout' active={this.state.activeItem === 'logout'} onClick={this.handleItemClick.bind(this)} />
              </Menu>                                 
            </div>
            <Grid>
                <Grid.Row>
                  <Route path='/about' component={About}/>
                  <Route path='/albumes' component={Albumes}/>
                  <Route path='/playlist' component={Playlist}/>
                </Grid.Row>
            </Grid>
        </Container>
      </div>
    )
  }
}

export default Content
