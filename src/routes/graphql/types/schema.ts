import {GraphQLList, GraphQLSchema} from 'graphql';
import { UUIDType } from './uuid.js';
import  UserType from './user.js';
import { ProfileType } from './profile.js';
import { PostType } from './post.js';
import { MemberType } from './member.js';
import {GraphQLObjectType} from 'graphql/index.js';
import { PrismaClient } from '@prisma/client'

export const getResolvers = (prismaClient: PrismaClient): GraphQLSchema => new GraphQLSchema({
  query:  new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      users: {
        type: new GraphQLList(UserType),
        resolve: () => prismaClient.user.findMany()
      },
      memberTypes: {
        name: 'member-typess',
        type: new GraphQLList(MemberType),
        resolve: () => prismaClient.memberType.findMany()
      }
    })
  }),
  types: [UUIDType, UserType, ProfileType, PostType, MemberType],
});
