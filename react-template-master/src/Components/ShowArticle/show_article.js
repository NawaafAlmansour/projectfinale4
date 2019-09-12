import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const Cardx = styled.div`
.Img{
  min-width: 50px;
  max-width: 90%;
  margin-top: 4vw;
    margin-left: 4vw;
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
    background-color: #f5f5f5;
    margin-bottom: 20px;
    border-radius: 5px;
    align-items: center;
  }
  p, h1{
    text-align:center;
  }

  `;


export default class Showarticle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }



  render() {
    const article = this.props.articles[this.props.match.params.index];
    if (article) {
      return (
        <Cardx>


            article
          <div className="card-content">
            <Card.Img className="Img" variant="top" src={article.image} />
            <div className="text-content">
              <h1 className="title">{article.title}</h1>
              <p className="Dictionary">
                {article.content}
              </p>
            </div>
          </div>
        </Cardx>
      )
    } else {
      return null;
    }


  }
}
