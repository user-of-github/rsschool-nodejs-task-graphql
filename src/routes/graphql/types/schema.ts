import { GraphQLBoolean, GraphQLList, GraphQLSchema } from 'graphql';
import { MemberType } from './member.js';
import {GraphQLObjectType} from 'graphql/index.js';
import { PrismaClient } from '@prisma/client'

export const createRootQuery = (prismaClient: PrismaClient) => new GraphQLObjectType({
  name: 'Query',
  fields: {
    memberTypes: {
      type: new GraphQLList(MemberType),
      resolve: () => prismaClient.memberType.findMany()
    },
    users: {
      type: new GraphQLList(MemberType),
      resolve: async () => await prismaClient.user.findMany()
    }
  }
});

export const rootMutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createArtist: {
      type: GraphQLBoolean,
      resolve: () => true
    }
  }
});

export const createSchema = (prisma: PrismaClient): GraphQLSchema => new GraphQLSchema({
  query: createRootQuery(prisma),
  mutation: rootMutation
});
