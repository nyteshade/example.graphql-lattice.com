import { GQLBase } from 'graphql-lattice'
import Geo from './Geo'

export default class Address extends GQLBase {
  street() { return this.model.street }
  suite() { return this.model.suite }
  city() { return this.model.city }
  zipcode() { return this.model.zipcode }
  geo() { return new Geo(this.model.geo) }

  static get SCHEMA() { return GQLBase.ADJACENT_FILE }
  static get module() { return module; }
}
