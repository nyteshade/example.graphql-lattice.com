import { GQLBase } from 'graphql-lattice'

export default class Geo extends GQLBase {  
  lat() { return this.model.lat }
  lng() { return this.model.lng }
  
  static get SCHEMA() {
    return `
      type Geo {
        lat: String
        lng: String 
      }
    `
  }
}