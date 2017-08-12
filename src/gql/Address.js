import { GQLBase, Getters, Schema } from 'graphql-lattice'
import Geo from './Geo'
import Country from './Country'

@Schema(`
  type Address {
    street: String
    suite: String
    city: String
    zipcode: String
    geo: Geo
    country: Country
    json: JSON
  }
`)
@Getters('street', 'suite', 'city', 'zipcode', ['geo', Geo], ['country', Country], 'json')
export default class Address extends GQLBase {
  constructor(model, requestData) {
    super(model, requestData);

    Object.defineProperties(this.getModel(), {
      country: {
        get: function() {
          return parseInt(Math.random() * (10 + Math.random())) % 2 == 0
            ? 'FOREIGN'
            : 'United States of America'
        }
      },
      
      json: { 
        get: function() {
          return this;
        }        
      }
    })
  }

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
