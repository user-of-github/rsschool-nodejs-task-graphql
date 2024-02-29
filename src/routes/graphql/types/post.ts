import { GraphQLInterfaceType, GraphQLNonNull, GraphQLString } from 'graphql/type';
import { UUIDType } from './uuid.js';

export const PostType = new GraphQLInterfaceType({
  name: 'Post type',
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
