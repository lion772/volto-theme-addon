import { Container, Grid, Header, Segment } from 'semantic-ui-react';

const NumberDisplay = () => {
  return (
    <Segment basic style={{ backgroundColor: '#F9F9F9', padding: '4em 0 6em' }}>
      <Container
        style={{
          padding: '1em 0 1em',
        }}
      >
        <Segment
          basic
          style={{
            padding: '2em 0 2em',
            margin: '0 0 2em',
          }}
        >
          <Header as="h1" style={{ fontWeight: 'bold' }}>
            EEA in numbers
          </Header>
        </Segment>
        <Container>
          <Grid columns={4}>
            <Grid.Row>
              <Grid.Column>
                <Segment
                  basic
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <h1 style={{ fontSize: '300%' }}>38</h1>
                  <p style={{ textAlign: 'center' }}>
                    Member and cooperating countries
                  </p>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment
                  basic
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <h1 style={{ fontSize: '300%' }}>400+</h1>
                  <p style={{ textAlign: 'center' }}>
                    National partner institutions
                  </p>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment
                  basic
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <h1 style={{ fontSize: '300%' }}>200+</h1>
                  <p style={{ textAlign: 'center' }}>Datasets</p>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment
                  basic
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <h1 style={{ fontSize: '300%' }}>260+</h1>
                  <p style={{ textAlign: 'center' }}>Employees</p>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Container>
    </Segment>
  );
};

export default NumberDisplay;
