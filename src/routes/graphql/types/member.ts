import { GraphQLFloat, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { UUIDType } from './uuid.js';

export const MemberType = new GraphQLObjectType({
  name: 'MemberType',
  description: 'Member type',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Id'
    },
    discount: {
      type: new GraphQLNonNull(GraphQLFloat),
      description: 'Discount'
    },
    postsLimitPerMonth: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Posts limit per month'
    }
  })
});
