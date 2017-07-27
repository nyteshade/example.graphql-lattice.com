import { GQLBase, Getters, Schema } from 'graphql-lattice'

@Schema(`
  type Company {
    name: String
    catchPhrase: String
    bs: String
  }  
`)
@Getters('name', 'catchPhrase', 'bs')
export default class Company extends GQLBase { }