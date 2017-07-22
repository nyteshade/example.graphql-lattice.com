import { GQLBase } from 'graphql-lattice'
import handleREST from '../RESTHandler'

import Address from './Address'
import Company from './Company'

export default class User extends GQLBase {
  id() { return this.model.id }
  name() { return this.model.name }
  username() { return this.model.username }
  email() { return this.model.email }
  phone() { return this.model.phone }
  website() { return this.model.website }
  address() { return new Address(this.model.address) }
  company() { return new Company(this.model.company) }

  static RESOLVERS(express) {
    return {
      user: async ({id}) => (await handleREST.user(id)),
      users: async () => (await handleREST.users())
    }
  }

  static get SCHEMA() { return GQLBase.ADJACENT_FILE }
  static get module() { return module; }
}
