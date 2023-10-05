import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
} from 'semantic-ui-react';
import React from 'react';

const FullEditorial = () => {
  return (
    <Segment basic padded={'very'}>
      <Container>
        <Grid stackable columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Header as={'h2'} style={{ fontWeight: 'bold' }}>
                Preparing Europe for a changing climate
              </Header>

              <Grid>
                <Grid.Row>
                  <Grid.Column width={1}>
                    <Icon name="quote left" size="big" />
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <p>
                      From wildfires to disastrous floods across southern
                      Europe, the summer of 2023 will be remembered by extreme
                      weather. How prepared are we for such events and their
                      impacts? Relentless heatwaves affecting millions of
                      Europeans across the continent, wildfires and flash floods
                      impacting many communities call for even more ambitious
                      action to prepare a new reality while speeding up the
                      transition towards sustainability.
                    </p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Segment basic textAlign={'right'}>
                <Icon name="quote right" size="big" />
              </Segment>
              <Segment basic textAlign={'right'}>
                <h3>William Steinke de Mello</h3>
                <p>Front-end Developer</p>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Image
                src={
                  'https://images.unsplash.com/photo-1457301547464-91995555cd25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2096&q=80'
                }
                alt={'unsplash picture'}
              ></Image>
            </Grid.Column>
            <Container textAlign={'left'} style={{ marginTop: '12px' }}>
              <Grid.Column>
                <Button
                  content="Read full editorial"
                  size="big"
                  color={'facebook'}
                />
              </Grid.Column>
            </Container>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default FullEditorial;
