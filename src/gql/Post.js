import { GQLBase } from 'graphql-lattice'
import handleREST from '../RESTHandler'

export default class Post extends GQLBase {
  get userId()  { return this.model.userId }
  get id()      { return this.model.id }
  get title()   { return this.model.title }
  get body()    { return this.model.body }
  async user()  { return await handleREST.user(this.model.userId) }

  static RESOLVERS(express) {
    return {
      post: async ({id}) => (await handleREST.post(id)),
      posts: async () => (await handleREST.posts())
    }
  }

  static get SCHEMA() {
    return `
      type Post {
        userId: Int!
        id: Int!
        title: String
        body: String
        user: User
      }

      type Query {
        post(id: Int!): Post
        posts: [Post]
      }
    `
  }
}
