import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Segment,
} from 'semantic-ui-react';
import React from 'react';

const About = () => {
  return (
    <Container style={{ marginTop: '1em' }}>
      <Header as="h2" icon textAlign="center">
        What We Do
      </Header>
      <h3>
        Together with our Eionet network, we provide the knowledge and the data
        needed to achieve sustainability in Europe.
      </h3>

      <Segment vertical>
        <Grid container stackable columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Icon name="chart pie" size="huge" />
              <Header as="h4">Data Analysis</Header>
              <p style={{ marginBottom: '10px' }}>
                Providing in-depth data analysis for sustainable solutions.
              </p>
            </Grid.Column>
            <Grid.Column>
              <Icon name="lightbulb" size="huge" />
              <Header as="h4">Innovative Ideas</Header>
              <p style={{ marginBottom: '10px' }}>
                Generating innovative ideas to address environmental challenges.
              </p>
            </Grid.Column>
            <Grid.Column>
              <Icon name="tasks" size="huge" />
              <Header as="h4">Project Management</Header>
              <p>
                Efficiently managing projects to achieve sustainability goals.
              </p>
            </Grid.Column>
            <Grid.Column>
              <Icon name="users" size="huge" />
              <Header as="h4">Collaboration</Header>
              <p>
                Collaborating with partners to promote environmental
                sustainability.
              </p>
            </Grid.Column>
          </Grid.Row>
          <Container textAlign={'right'} style={{ marginTop: '12px' }}>
            <Grid.Column>
              <Button
                content="More about us"
                size="big"
                color={'google plus'}
              />
            </Grid.Column>
          </Container>
        </Grid>
      </Segment>
    </Container>
  );
};

export default About;
