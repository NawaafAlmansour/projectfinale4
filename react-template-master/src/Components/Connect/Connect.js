import React from 'react';
import styled from 'styled-components';
import { newConnect } from '../../auth/api';
import { Form,Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'


const Message = styled.div`
  .jumbo-text{
    color: #828282;
    margin-left: 10%;
  }
  `;

class Connect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '' ,
      phone: '',
      message: ''
    };
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onPostConnect = event => {
    event.preventDefault()
    // console.log(this.state);
    const {  history } = this.props

    newConnect(this.state)
      .then(res => console.log(res.data))
      .then(() => history.push('/'))

      .catch(error => {
        console.error(error)
        this.setState({ name: '', email: '' , phone: '', message: ''})
      })
  }



  render() {
    return(
      <Message>
        <Form onSubmit={this.onPostConnect}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>your name</Form.Label>
            <Form.Control  type="text" name="name"  placeholder="your name" onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="name@example.com" onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput3">
            <Form.Label>phone number</Form.Label>
            <Form.Control type="number" name="phone" placeholder="05 xxx xxx xx" onChange={this.handleChange}/>
          </Form.Group>


          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="3" name="message"  onChange={this.handleChange}/>
          </Form.Group>
          <Button variant="primary" type="submit">
         Submit
          </Button>
        </Form>
      </Message>
    )

  }
}
export default withRouter(Connect) ;
