import { GQLBase, Getters, Schema } from 'graphql-lattice'
import handleREST from '../RESTHandler'

import Address from './Address'
import Company from './Company'

@Schema(`
  type User {
    id: Int!
    name: String!
    username: String!
    email: String
    phone: String
    website: String
    address: Address
    company: Company
  }

  type Query {
    user(id: Int!): User
    users: [User]
  }
`)
@Getters(
  'id', 'name', 'username', 'email', 'phone', 'website',
  ['address', Address], ['company', Company]
)
export default class User extends GQLBase {
  static RESOLVERS(express) {
    return {
      user: async ({id}) => await handleREST.user(id),
      users: async () => await handleREST.users()
    }
  }

  static apiDocs() {
    const { DOC_CLASS, DOC_FIELDS, DOC_QUERIES, joinLines } = this;

    return {
      [DOC_CLASS]: joinLines`
        The User represents the writer of posts on the site and all the
        information pertinent to the user in question.
      `,

      [DOC_FIELDS]: {
        id: 'A unique identifier denoting a user',
        name: 'The real life name of the person in question',
        username: 'A pseudonym for the user on the site',
        email: 'An email address as a way to contact the user in question',
        phone: 'A string of digits denoting a telephony id for the user',
        website: 'A url denoting the personal website of the user',
        address: 'A full Address type for the user in question',
        company: 'A full Company association for the use in question'
      },

      [DOC_QUERIES]: {
        user: 'Fetches a single user by their id',
        users: 'Fetches all the users available'
      }
    }
  }
}
