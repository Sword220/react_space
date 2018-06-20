import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProfiles } from '../actions/profiles';
import { Container, Header, Card, Image } from 'semantic-ui-react';

class Profiles extends React.Component {
  componentDidMount() {
    this.props.dispatch(getProfiles())
  }

  profiles = () => {
    return this.props.profiles.map( profile =>
      <Card key={profile.id}>
        <Image src={profile.avatar} />
        <Card.Content>
          <Card.Header>
            {profile.user_name}
          </Card.Header>
          {/* <Card.Meta>
            <span>
              {profile.age}
            </span>
          </Card.Meta>
          <Card.Description>
            {profile.hobbies}
          </Card.Description> */}
        </Card.Content>
        <Card.Content extra>
          <Link to={`/profiles/${profile.id}`}>
            View Profile
          </Link>
        </Card.Content>
      </Card>
    )
  }

  render() {
    return (
      <Container>
        <Header as="h3" textAlign="center">Profiles</Header>
          <Card.Group itemsPerRow={4}>
           { this.profiles() }
          </Card.Group>
        </Container>
      )
    }
  }

  const mapStateToProps = (state) => {
    return { profiles: state.profiles }
  }

export default connect(mapStateToProps)(Profiles);