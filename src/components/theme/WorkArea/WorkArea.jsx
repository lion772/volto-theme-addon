import { Button, Container, Header, Image, Segment } from 'semantic-ui-react';
import React from 'react';

const WorkArea = () => {
  const image1 =
    'https://images.unsplash.com/photo-1682687982049-b3d433368cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60';
  const image2 =
    'https://plus.unsplash.com/premium_photo-1694799609768-63b7be194989?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60';
  const image3 =
    'https://images.unsplash.com/photo-1695623803163-f2843be82d50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80';

  const image4 =
    'https://images.unsplash.com/photo-1682687982183-c2937a74257c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80';
  const image5 =
    'https://images.unsplash.com/photo-1696233803601-3988d2c06d97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
  const image6 =
    'https://images.unsplash.com/photo-1695779539366-b221da6b9fcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80';

  return (
    <Segment basic>
      <Container>
        <Header as={'h2'} style={{ fontWeight: 'bold' }}>
          Our areas of work
        </Header>

        <Image.Group
          size={'medium'}
          style={{
            marginBottom: '6px',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <Image
            className="image-segment"
            style={{
              backgroundImage: `url(${image1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '350px',
              height: '250px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Header as="h2" textAlign="center" inverted>
              State of Europe's Environment
            </Header>
          </Image>

          <Image
            className="image-segment"
            style={{
              backgroundImage: `url(${image3})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '250px',
              width: '350px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 20px',
            }}
          >
            <Header as="h2" textAlign="center" inverted>
              Nature
            </Header>
          </Image>

          <Image
            className="image-segment"
            style={{
              backgroundImage: `url(${image2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '250px',
              width: '350px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 20px',
            }}
          >
            <Header as="h2" inverted>
              Health
            </Header>
          </Image>
        </Image.Group>
        <Image.Group
          size={'medium'}
          style={{
            marginBottom: '6px',
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
          }}
        >
          <Image
            className="image-segment"
            style={{
              backgroundImage: `url(${image4})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '250px',
              width: '350px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Header as="h2" textAlign="center" inverted>
              Climate
            </Header>
          </Image>

          <Image
            className="image-segment"
            style={{
              backgroundImage: `url(${image6})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '250px',
              width: '350px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 20px',
            }}
          >
            <Header as="h2" textAlign="center" inverted>
              Economy and resources
            </Header>
          </Image>

          <Image
            className="image-segment"
            style={{
              backgroundImage: `url(${image5})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '250px',
              width: '350px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 20px',
            }}
          >
            <Header as="h2" inverted>
              Sustainability
            </Header>
          </Image>
        </Image.Group>
      </Container>
      <Container textAlign={'right'}>
        <Button content="All topics" size="big" color={'facebook'} />
      </Container>
    </Segment>
  );
};

export default WorkArea;
