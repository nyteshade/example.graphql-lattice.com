import { GQLBase } from 'graphql-lattice'

export default class Company extends GQLBase {
  name() { return this.model.name }
  catchPhrase() { return this.model.catchPhrase }
  bs() { return this.model.bs }

  static get SCHEMA() { return GQLBase.ADJACENT_FILE }
  static get module() { return module; }
}
