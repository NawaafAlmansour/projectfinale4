import React, { Component } from 'react';
import styled from 'styled-components';
import { Button ,Table} from 'react-bootstrap';
// import { Link } from 'react-router-dom'
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
class Connectmanagement extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }
  deleteConnect(id){
    console.log('hi i am  contacts the delete function',id);
    const getUserToken = localStorage.getItem('userToken')
    console.log('id and token',getUserToken)

    const token = {
      headers: {
        Authorization: `bearer ${getUserToken}`
      }
    }
    // const getOwnerId = localStorage.getItem('ownerId')
    // console.log(getOwnerId)


    axios.delete(`http://localhost:3000/contacts/${id}`, token)
      .then(res => {
        console.log('deleted',res)
      })

      .catch(err => {
        console.log(this.state)
        console.log(err)
      })
  }





  render() {
    const ControllerConnects = this.props.contacts.map((contact,i) => {
      return (
        <tr>
          <td>{i}</td>
          <td>{contact.name} </td>
          <td>{contact.phone} </td>
          <td>{contact.email} </td>
          <td><Button variant="danger" onClick={()=>this.deleteConnect(contact._id)} >delete</Button></td>
          <td><Button variant="danger"  >Show</Button></td>

        </tr>
      );
    });

    return(
      <Style>
        <div className="connects">

connects

        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>name</th>
              <th>phone</th>
              <th>Email</th>
              <th>delete</th>
              <th>show</th>

            </tr>
          </thead>
          <tbody>

            {ControllerConnects}
          </tbody>
        </Table>
      </Style>
    );

  }
}
export default Connectmanagement ;
