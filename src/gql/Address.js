import { GQLBase } from 'graphql-lattice'
import Geo from './Geo'

export default class Address extends GQLBase {
  street() { return this.model.street }
  suite() { return this.model.suite }
  city() { return this.model.city }
  zipcode() { return this.model.zipcode }
  geo() { return new Geo(this.model.geo) }

  static get SCHEMA() {
    return `
      type Address {
        street: String
        suite: String
        city: String
        zipcode: String
        geo: Geo
      }
    `
  }
}
