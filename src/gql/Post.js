import { GQLBase, Getters, Schema } from 'graphql-lattice'
import handleREST from '../RESTHandler'

@Schema(`
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
`)
@Getters('userId', 'id', 'title', 'body')
export default class Post extends GQLBase {
  async user()  { return await handleREST.user(this.model.userId) }

  static async RESOLVERS(express) {
    return {
      post: async ({id}) => await handleREST.post(id),
      posts: async () => await handleREST.posts()
    }
  }
}
