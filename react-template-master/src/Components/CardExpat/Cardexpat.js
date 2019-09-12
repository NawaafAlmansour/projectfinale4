

import React from 'react';
import styled from 'styled-components';
import { Card  ,CardColumns } from 'react-bootstrap';


const Cardx = styled.div`
.Img{
  min-width: 50px;
  max-width: 250px;

  margin: auto;
}
  `;

const cardexpat = () => (
  <Cardx>
    <CardColumns>
      <Card>
        <Card.Img className="Img" variant="top" src="/images/product_5.png" />
        <Card.Body>
          <Card.Title>github</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to additional
            content.{' '}
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="p-3">
        <Card.Img className="Img" variant="top" src="/images/product_5.png" />
        <Card.Body>
          <Card.Title>github</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to additional
            content.{' '}
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="text-center">
        <Card.Img className="Img" variant="top" src="/images/product_5.png" />
        <Card.Body>
          <Card.Title>github</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to additional
            content.{' '}
          </Card.Text>
        </Card.Body>
      </Card>

    </CardColumns>
  </Cardx>
)
export default cardexpat
