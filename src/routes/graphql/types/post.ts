import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { UUIDType } from './uuid.js';

export const PostType = new GraphQLObjectType({
  name: 'Post',
  description: 'Post type',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(UUIDType),
      description: 'ID'
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Title'
    },
    content: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Content'
    },
    authorId: {
      type: new GraphQLNonNull(UUIDType),
      description: 'Author ID'
    }
  })
})