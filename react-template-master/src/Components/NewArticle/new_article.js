import React, { Component } from 'react';
import styled from 'styled-components';
import { Form,Button } from 'react-bootstrap';
import { newarticle } from '../../auth/api';
import { withRouter } from 'react-router-dom'


const Message = styled.div`
      .jumbo-text{
        color: #828282;
        margin-left: 10%;
      }
      `;
class Newarticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      image: ''
    };
  }
  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onPostArticle = event => {
    event.preventDefault()

    const {  history } = this.props

    newarticle(this.state)
      // .then(() => alert(messages.signInSuccess, 'success'))
      .then(res => console.log(res.data))
      .then(() => history.push('/Contentmanagement'))

      .catch(error => {
        console.error(error)
        this.setState({ title: '', content: '' , image: ''})
        // alert(messages.signInFailure, 'danger')
      })
  }


  render() {
    return(
      <Message>
        <h2>  New Article</h2>
        <Form onSubmit={this.onPostArticle}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Article title</Form.Label>
            <Form.Control name="title" type="text"  placeholder="Article title" onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput3">
            <Form.Label>Image url</Form.Label>
            <Form.Control name="image" type="text" placeholder="http://---------" onChange={this.handleChange}/>
          </Form.Group>


          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Content</Form.Label>
            <Form.Control as="textarea" rows="3" name="content" onChange={this.handleChange} />
          </Form.Group >
          <Button variant="primary" type="submit">
         Submit
          </Button>
        </Form>
      </Message>
    );

  }
}
export default withRouter(Newarticle) ;
