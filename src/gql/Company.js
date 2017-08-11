import { GQLBase, Getters, Schema } from 'graphql-lattice'

@Schema(`
  type Company {
    name: String
    catchPhrase: String
    bs: String
  }
`)
@Getters('name', 'catchPhrase', 'bs')
export default class Company extends GQLBase {
  static apiDocs() {
    const { DOC_CLASS, DOC_FIELDS, joinLines } = this;

    return {
      [DOC_CLASS]: joinLines`
        A user's place of business. A Company, aside from the name it is
        known by, is often associated with a catch phrase and ...um... some
        other, bs.
      `,

      [DOC_FIELDS]: {
        name: 'The name of the company',
        catchPhrase: 'A slogan or phrase associated with the company',
        bs: 'Excrement, er, uh, other company phrasing'
      }
    }
  }
}
