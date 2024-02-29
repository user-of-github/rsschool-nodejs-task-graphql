import { GraphQLBoolean, GraphQLInt, GraphQLInterfaceType, GraphQLNonNull } from 'graphql/type';
import { UUIDType } from './uuid.js';

export const ProfileType = new GraphQLInterfaceType({
  name: 'ProfileType',
  description: 'Profile type',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(UUIDType),
      description: 'ID'
    },
    isMale: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: 'Is male'
    },
    yearOfBirth: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Year of birth'
    },
    userId: {
      type: new GraphQLNonNull(UUIDType),
      description: 'User ID'
    },
    memberTypeId: {
      type: new GraphQLNonNull(UUIDType),
      description: 'Member type ID'
    }
  })
});
