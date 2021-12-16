import Express from 'express'
import { GQLExpressMiddleware, GQLJSON } from 'graphql-lattice'

import Post from './src/gql/Post'
import User from './src/gql/User'
import Company from './src/gql/Company'
import Geo from './src/gql/Geo'
import Address from './src/gql/Address'
import Country from './src/gql/Country'
import {Page} from './src/gql/Page'

const router = Express();
const lattice = new GQLExpressMiddleware([
  // List all your imported Lattice classes here
  Post, User, Company, Geo, Address, Country, Page, GQLJSON
]);

router.use('/graphql', lattice.middleware);
router.get('/schema', lattice.schemaMiddleware);

export default router;
