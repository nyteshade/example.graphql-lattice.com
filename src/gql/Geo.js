import { GQLBase, Getters, Schema } from 'graphql-lattice'

@Schema(` type Geo { lat: String lng: String } `)
@Getters('lat', 'lng')
export default class Geo extends GQLBase {
  static apiDocs() {
    const { DOC_CLASS, DOC_FIELDS, joinLines } = this;

    return {
      [DOC_CLASS]: joinLines`
        A Geographical location. Often used with Addresses, it denotes
        a location in the real world outside of the normal addressing
        adopted by various cultures and societies.
      `,

      [DOC_FIELDS]: {
        lng: joinLines`
          Longitude, is a geographic coordinate that specifies the
          east-west position of a point on the Earth's surface. It is
          an angular measurement, usually expressed in degrees and
          denoted by the Greek letter lambda
        `,
        lat: joinLines`
          In geography, latitude is a geographic coordinate that specifies
          the north–south position of a point on the Earth's surface.
          Latitude is an angle which ranges from 0° at the Equator to
          90° at the poles
        `
      }
    }
  }
}
