import { GQLEnum, Schema } from 'graphql-lattice'

@Schema('enum Country { US, FOREIGN }')
export default class Country extends GQLEnum {
  static get values() {
    const { valueFor } = this;
    
    return {
      US: valueFor('United States of America'),
      FOREIGN: valueFor('Someplace there be dragons')
    }
  }

  static apiDocs() {
    const { DOC_CLASS, DOC_FIELDS, joinLines } = this;
    
    return {
      [DOC_CLASS]: joinLines`
        A totally contrived enumeration of countries to test
        functionality.
      `,

      [DOC_FIELDS]: {
        US: 'United States of America',
        FOREIGN: 'Other non-USA countries'
      }
    }
  }
}
