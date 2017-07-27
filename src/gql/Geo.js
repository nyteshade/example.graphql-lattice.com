import { GQLBase, Getters, Schema } from 'graphql-lattice'

@Schema(` type Geo { lat: String lng: String } `)
@Getters('lat', 'lng')
export default class Geo extends GQLBase { }