import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { GraphQLSchema } from 'graphql';
import path from 'path';

export const typeDefs: GraphQLSchema = loadSchemaSync(
  path.join(__dirname, 'schema.graphql'),
  {
    loaders: [new GraphQLFileLoader()],
  }
);
