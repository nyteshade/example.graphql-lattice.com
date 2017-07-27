import { GQLBase, Getters, Schema } from 'graphql-lattice'
import Geo from './Geo'

@Schema(`
  type Address {
    street: String
    suite: String
    city: String
    zipcode: String
    geo: Geo
  }
`)
@Getters('street', 'suite', 'city', 'zipcode', 'geo')
export default class Address extends GQLBase { }
