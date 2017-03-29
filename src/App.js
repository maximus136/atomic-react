import React, { Component } from 'react';
import { Header, Footer, CardContainer } from './organisms';
import { Panel, Grid, Hero, Navigation } from './molecules';
import classnames from 'classnames';

import './App.css';
import config from './data/config.json';

// TODO: Move these arrays to JSON file(s). Remove Index and use uniqueKeys
const navLinks = [
  { title: 'Home', url: 'https://github.com/pagesource/atomic-react', index: '1' },
  { title: 'Guidelines', url: 'https://github.com/areai51/react-component-design', index: '2' },
  { title: 'Random Bash', url: 'http://bash.org/?random', index: '3' }
];

/* eslint-disable */
class App extends Component {
  render() {

    const theme = config.theme;

    return (
      <div className={classnames('app', `acss-theme-${theme}`, 'acss-background-primary')}>
        <Header theme={theme}/>
        
        <Navigation 
          links={navLinks}
          theme={theme}
          align="left"
        />

        <Hero 
          backgroundImg="http://placehold.it/1600x400/"
          imgWidth={100}
          theme={theme}
          heading="Hero component"
          subHeading="with text headings"
          headingPosition="left"
        />
        
        <Grid>
          <h2>Cards</h2>
          <CardContainer 
            theme={theme}
          />

          <h2>Panel</h2>
          <Panel heading="This is Panel header" theme={theme}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet elementum dolor sed elementum. Quisque aliquam libero erat, at tempus quam malesuada in. Aliquam libero lectus, bibendum at magna sodales, dictum cursus mauris. Vestibulum blandit massa at orci finibus euismod. Nam convallis, purus et bibendum sodales, purus nisi euismod nunc, et tristique sapien lacus et metus. Aliquam elementum posuere arcu, at tempus ante sodales sed. Ut cursus, purus non rutrum eleifend, nulla mauris faucibus tellus, in auctor purus ex quis tellus. Aliquam erat volutpat. Donec et velit varius, porta ante ac, egestas nulla. Curabitur eu tellus ex. Donec at placerat elit. Aliquam erat volutpat. Fusce tempor quam et urna faucibus lobortis.
          </Panel>
        </Grid>

        <Footer
          currentYear={2017}
          links={navLinks}
          theme={theme}
        />
      </div>
    );
  }
}

export default App;
