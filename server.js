import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import fs from 'fs'
import graphqlEndpoint from './server-gql-endpoint'

module.exports = (root, inProd) => {
  const app = express();
  const favIconPath = path.join(root, 'public', 'favicon.ico')

  // Check to see if we have a favicon, if so, set it up.
  if (fs.existsSync(favIconPath))
    app.use(favicon(favIconPath));

  // Configure the bodyParser; typical affair for an express server
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  // Configure the cookieParser
  app.use(cookieParser());

  // Add our GraphQL Lattice Middleware
  app.use(graphqlEndpoint);

  // Configure the static route
  app.use(express.static(path.join(root, 'public')));

  return app;
}
