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
@Getters('id', 'name', 'username', 'email', 'phone', 'website')
export default class User extends GQLBase {
  address() { return new Address(this.model.address) }
  company() { return new Company(this.model.company) }

  static RESOLVERS(express) {
    return {
      user: async ({id}) => await handleREST.user(id),
      users: async () => await handleREST.users()
    }
  }
}
