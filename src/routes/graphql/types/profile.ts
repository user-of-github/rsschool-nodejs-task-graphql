import { PrismaClient } from '@prisma/client';
import { GraphQLBoolean, GraphQLInt, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { UUIDType } from './uuid.js';
import { MemberType } from './member.js';

export const ProfileType = new GraphQLObjectType({
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
    memberType: {
      type: MemberType,
      resolve: async (member, _, prisma: PrismaClient) => await prisma.memberType.findUnique({
        where: {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
          id: member.memberTypeId
        }
      })
    }
  })
});
