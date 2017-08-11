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
export default class Address extends GQLBase {
  static apiDocs() {
    const { DOC_CLASS, DOC_FIELDS, joinLines } = this;

    return {
      [DOC_CLASS]: joinLines`
        The Address represents a real world location identifier, usually
        pertaining to a residence or business where a user might live.
      `,

      [DOC_FIELDS]: {
        street: 'The street name for the given address',
        suite: 'A suite number or identifier',
        city: 'The name of the city',
        zipcode: 'A numeric identifier for postal codes',
        geo: 'The longitude/lattitude for our location'
      }
    }
  }
}
