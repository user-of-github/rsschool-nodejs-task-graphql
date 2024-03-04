import { GraphQLSchema } from 'graphql';
import { rootQuery } from './query.js';
import { rootMutation } from './mutations.js';

export const Schema: GraphQLSchema = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation
});
