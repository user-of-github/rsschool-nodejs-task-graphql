import { GraphQLInterfaceType, GraphQLNonNull, GraphQLString } from 'graphql/type';
import { UUIDType } from './uuid.js';

export const ProfileType = new GraphQLInterfaceType({
  name: 'Profile type',
  description: 'Profile type',
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
