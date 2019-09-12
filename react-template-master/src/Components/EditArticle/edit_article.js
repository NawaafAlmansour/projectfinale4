import React, { Component } from 'react';
import styled from 'styled-components';
import { Form,Button } from 'react-bootstrap';
import { changeArticle } from '../../auth/api';
import { withRouter } from 'react-router-dom'


const Message = styled.div`
      .jumbo-text{
        color: #828282;
        margin-left: 10%;
      }
      `;
class Editarticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      image: ''
    };
  }
  componentWillMount(){
    console.log('HEREEEE')
    console.log(this.props)
    const article = this.props.articles[this.props.match.params.index];
    this.setState({
      title: article.title,
      content: article.content,
      image: article.image
    });

  }
  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onPatchArticle = event => {
    event.preventDefault()

    // const {  history } = this.props
    const data = this.state;
    const id = this.props.match.params.id;
    const getUserToken = localStorage.getItem('userToken')
    console.log(data)
    changeArticle(id, getUserToken, data)
      .then(res => {
        console.log(res)
      })

      .catch(error => {
        console.error(error)

      })
  }


  render() {
    const article = this.props.articles[this.props.match.params.index];
    if (article){



      return(
        <Message>
          <h2>  Edit Article</h2>
          <Form onSubmit={this.onPatchArticle}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Article title</Form.Label>
              <Form.Control name="title" type="text"  value={this.state.title} placeholder="Article title" onChange={this.handleChange} />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput3">
              <Form.Label>Image url</Form.Label>
              <Form.Control name="image" type="text" value={this.state.image} placeholder="http://---------" onChange={this.handleChange}/>
            </Form.Group>


            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" rows="3" value={this.state.content} name="content" onChange={this.handleChange} />
            </Form.Group >
            <Button variant="primary" type="submit">
         Edit
            </Button>
          </Form>
        </Message>
      );

    }else {
      return null
    }
  }
}
export default withRouter(Editarticle) ;
