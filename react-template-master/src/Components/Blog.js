import React, { Component } from 'react';
import Articlecard from './ArticleCard/article_card';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }

  componentDidMount() {
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

  render() {
    console.log(this.state.articles);
    const allArticles = this.state.articles.map((article, i) => {
      return (
        <div>
          <Link to={`/article/${i}/${article._id}`}>
            <Articlecard
              key={article._id}
              id={article._id}
              image={article.image}
              title={article.title}
              content={article.content}
            />
          </Link>
        </div>
      );
    });
    return  (
      <div>
        <h3>Blog</h3>
        {allArticles}
      </div>
    )
  }
}
