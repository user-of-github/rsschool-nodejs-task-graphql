import { GraphQLFloat, GraphQLInt, GraphQLInterfaceType, GraphQLNonNull, GraphQLString } from 'graphql/type';
import { UUIDType } from './uuid.js';

const UserType: GraphQLInterfaceType = new GraphQLInterfaceType({
  name: 'User',
  description: 'User',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(UUIDType),
      description: 'The id of the user.',
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The name of the user.',
    },
    balance: {
      type: new GraphQLNonNull(GraphQLFloat),
      description: 'The balance of the user'
    }
  })
});
