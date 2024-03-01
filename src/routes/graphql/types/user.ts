import { UUIDType } from './uuid.js';
import { GraphQLFloat, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';

const UserType: GraphQLObjectType = new GraphQLObjectType({
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
export default UserType;
