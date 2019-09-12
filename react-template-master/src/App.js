import React, {Component} from 'react'
import './App.scss'
import {Route, Switch} from 'react-router-dom'
import axios from 'axios';

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import AlertDismissible from './auth/components/AlertDismissible'

import Portfolio from './Components/Portfolio';
import Contant from './Components/Contant';
import Work from './Components/Work';
import Blog from './Components/Blog';
import Article from './Components/ShowArticle/show_article';
import newarticle from './Components/NewArticle/new_article';
import Editarticle from './Components/EditArticle/edit_article';
import Contentmanagement from './Components/ContentManagement/content_management'
import Connectmanagement from './Components/ConnectManagement/connect_management'
class App extends Component {
  constructor() {
    super()

    this.state = {
      user: null,
      alerts: [],
      articles: []

    }
  }

  setUser = user => {this.setState({user})
    localStorage.setItem('userToken', user.token)
  }

  clearUser = () => this.setState({user: null})

  alert = (message, type) => {
    this.setState({
      alerts: [
        ...this.state.alerts, {
          message,
          type
        }
      ],
      idArticle: 0
    })
  }
  changeArticle =(e)=>{
    console.log('changeArticle', e.target.id)
    this.setState({
      idArticle : e.target.id,
      idCinter : e.target.id,
      articles: [],
      connects: []

    })
  }
  componentDidMount() {
    // getArticles() {
    axios
      .get('http://localhost:3000/articles')
      .then(response => {
        console.log('articles');
        console.log(response.data.articles);
        this.setState({
          articles: response.data.articles
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  componentWillMount(){
    axios
      .get('http://localhost:3000/contacts')
      .then(response => {
        console.log('contacts');
        console.log(response.data.contacts);
        this.setState({
          contacts: response.data.contacts
        });
      })
      .catch(error => {
        console.log(error);
      });
  }



  render() {
    const {alerts, user} = this.state

    return (<React.Fragment>
      <Header user={user}/> {alerts.map((alert, index) => (<AlertDismissible key={index} variant={alert.type} message={alert.message}/>))}
      <main className="container">
        <Switch>
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />)} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />)} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (<SignOut alert={this.alert} clearUser={this.clearUser} user={user}/>)}/>
          <AuthenticatedRoute user={user} path='/change-password' render={() => (<ChangePassword alert={this.alert} user={user}/>)}/>

          <Route path="/" exact component={Portfolio} />
          <Route path="/Portfolio" exact component={Portfolio} />
          <Route path="/Contant"  component={Contant} />
          <Route
            path="/Work"
            component={Work}
          />
          <Route path="/Blog" component={Blog}/>
          <Route path="/article/:index/:id" render={props => <Article articles={this.state.articles} {...props} changeCinter = {this.changeArticle} />} />
          <Route path="/newarticle" component={newarticle}/>
          <Route path="/Contentmanagement" render={props => <Contentmanagement  articles={this.state.articles} {...props}/>} />
          <Route path="/Editarticle/:index/:id" render={props => <Editarticle articles={this.state.articles} {...props}/>} />
          <Route path="/Connectmanagement" render={props => <Connectmanagement contacts={this.state.contacts}   {...props}/>} />


          <Route component={Portfolio}/>
        </Switch>
      </main>

    </React.Fragment>
    )
  }
}

export default App
