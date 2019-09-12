

import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';


const Cardx = styled.div`
.Img{
  min-width: 50px;
  max-width: 250px;
}
  .title{
    color:#000;
    font-size: 5vw;
    font-weight: 900;
  }
  .Dictionary{
    color:#000;
    font-size: 3vw;
  }
  .text-content{
    margin: 10px;
  }
  .card-content{
    color:#000;
    display: flex;
    background-color: #fff;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 5px solid #ffdb3a;
  }

  `;

const Articlecard = (props) => (
  <Cardx>
    <div className="card-content">
      <Card.Img className="Img" variant="top" src={props.image} />
      <div className="text-content">
        <h1 className="title">{props.title}</h1>
        <p className="Dictionary">
               This is the Description...
        </p>
      </div>
    </div>
  </Cardx>
)
export default Articlecard
