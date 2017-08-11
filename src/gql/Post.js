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

  static apiDocs() {
    const { DOC_CLASS, DOC_FIELDS, DOC_QUERIES, joinLines } = this;

    return {
      [DOC_CLASS]: joinLines`
        A Post is the data associated with a blog post on the site.
        Typically, data written by an author of sorts for online
        consumption.
      `,

      [DOC_FIELDS]: {
        id: 'A unique identifier denoting a blog post',
        userId: 'A unique identifier denoting a user',
        user: 'A complete User type with all the information around a user',
        title: 'The synopsis of the post',
        body: 'The contents of the post'
      },

      [DOC_QUERIES]: {
        [DOC_CLASS]: 'The primary query object shows all the availabe queries',
        post: 'Fetches a single blog post by its unique id',
        posts: 'Fetches all the blog posts listed in the system'
      }
    }
  }
}
