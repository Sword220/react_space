import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';


class Home extends Component {
  render() {
    return (
      <Header as='h1' textAlign='center'>Welcome to <Link to="./Profiles">ReactSpace Profiles</Link></Header>
    );
  }
}

export default Home;
