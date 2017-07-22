import fetch from 'node-fetch'

import User from './gql/User'
import Post from './gql/Post'

export default class RESTHandler {
  static async post(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(post => new Post(post))
  }

  static async posts() {
    return fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => res.json())
      .then(posts => posts.map(post => new Post(post)))
  }

  static async user(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(user => new User(user))
  }

  static async users() {
    return fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(users => users.map(user => new User(user)))
  }

}
