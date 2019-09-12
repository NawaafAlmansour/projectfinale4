import React, { Component } from 'react';
import styled from 'styled-components';
import { Button ,Table} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import axios from 'axios';
// import { changeArticle } from '../../auth/api';



const Style = styled.div`
      .jumbo-text{
        color: #828282;
        margin-left: 10%;
      }
      .NewArticle{
        margin: 10px;

      }
      `;
class Contentmanagement extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }
  deleteArticle(id){
    console.log('hi i am the delete function',id);
    const getUserToken = localStorage.getItem('userToken')
    console.log('id and token',getUserToken)

    const token = {
      headers: {
        Authorization: `bearer ${getUserToken}`
      }
    }
    // const getOwnerId = localStorage.getItem('ownerId')
    // console.log(getOwnerId)


    axios.delete(`http://localhost:3000/articles/${id}`, token)
      .then(res => {
        console.log('deleted',res)
      })

      .catch(err => {
        console.log(this.state)
        console.log(err)
      })
  }





  render() {
    const ControllerArticles = this.props.articles.map((article,i) => {
      return (
        <tr>
          <td>{i}</td>
          <td>{article.title} </td>
          <td>
            <Link to={`/Editarticle/${i}/${article._id}`}>
              <Button variant="primary" >Edit</Button>
            </Link>
          </td>

          <td><Button variant="danger" onClick={()=>this.deleteArticle(article._id)} >delete</Button></td>
          <td><Button variant="warning">publish</Button></td>

        </tr>
      );
    });

    return(
      <Style>
        <div className="NewArticle">
          <Link to="/newarticle">
            <Button variant="primary" size="lg" block>
      New article
            </Button>
          </Link>



        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>



              <th>Title</th>
              <th>Edit</th>
              <th>delete</th>
              <th>publish</th>

            </tr>
          </thead>
          <tbody>

            {ControllerArticles}
          </tbody>
        </Table>
      </Style>
    );

  }
}
export default Contentmanagement ;
