import apiUrl from '../apiConfig'
import axios from 'axios'

export const signUp = credentials => {
  return axios({
    method: 'POST',
    url: apiUrl + '/sign-up',
    data: {
      credentials: {
        email: credentials.email,
        password: credentials.password,
        password_confirmation: credentials.passwordConfirmation
      }
    }
  })
}

export const signIn = credentials => {
  return axios({
    url: apiUrl + '/sign-in',
    method: 'POST',
    data: {
      credentials: {
        email: credentials.email,
        password: credentials.password
      }
    }
  })
}


export const newarticle = article => {
  const getUserToken = localStorage.getItem('userToken')


  return axios({
    url: apiUrl + '/articles',
    method: 'POST',
    headers: {
      Authorization: `bearer ${getUserToken}`
    },
    data: {
      article: {
        title: article.title,
        content: article.content,
        image: article.image
      }
    }
  })
}


export const newConnect = obj => {
  // const getUserToken = localStorage.getItem('userToken')
  // console.log(connects);
  return axios({
    url: apiUrl + '/contacts',
    method: 'POST',
    data: {
      contacts: {
        name: obj.name,
        email: obj.email ,
        phone: obj.phone,
        message: obj.message
      }
    }
  })
}

export const article = () => axios.get(apiUrl+'/articles');


export const signOut = user => {
  return axios({
    url: apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    }
  })
}

export const changePassword = (passwords, user) => {
  return axios({
    url: apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    },
    data: {
      article: {
        title: article.title,
        content: article.content,
        image: article.image

      }
    }
  })
}

export const changeArticle = (id, token, data) => {
  return axios({
    url: apiUrl + `/articles/${id}`,
    method: 'PATCH',
    data: {
      article: {
        title: data.title,
        content: data.content,
        image: data.image
      }
    },
    headers: {
      'Authorization': `Bearer ${token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    }
  })
}
