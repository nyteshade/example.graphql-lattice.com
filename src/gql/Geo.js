import { GQLBase } from 'graphql-lattice'

export default class Geo extends GQLBase {
  lat() { return this.model.lat }
  lng() { return this.model.lng }

  static get SCHEMA() { return GQLBase.ADJACENT_FILE }
  static get module() { return module; }
}
