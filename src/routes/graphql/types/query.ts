import { PrismaClient } from '@prisma/client';
import { GraphQLList, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { MemberType, MemberTypeId } from './member.js';
import UserType from './user.js';
import { UUIDType } from './uuid.js';
import { ProfileType } from './profile.js';
import { PostType } from './post.js';

export const rootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
    memberTypes: {
      type: new GraphQLList(MemberType),
      resolve: async (_, __, prismaClient: PrismaClient) => await prismaClient.memberType.findMany()
    },
    memberType: {
      type: MemberType,
      args: {
        id: {
          type: new GraphQLNonNull(MemberTypeId)
        }
      },
      resolve: async (_, args, prismaClient: PrismaClient) => await prismaClient.memberType.findUnique({
        where: {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
          id: args.id
        }
      })
    },
    users: {
      type: new GraphQLList(UserType),
      resolve: async (_, __, prismaClient: PrismaClient) => await prismaClient.user.findMany(),
    },
    user: {
      type: UserType,
      args: {
        id: {
          type: new GraphQLNonNull(UUIDType)
        }
      },
      resolve: async (_, args, prismaClient: PrismaClient) => await prismaClient.user.findUnique({
        where: {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
          id: args.id
        }
      })
    },
    profiles: {
      type: new GraphQLList(ProfileType),
      resolve: async (_, __, prismaClient: PrismaClient) => await prismaClient.profile.findMany()
    },
    profile: {
      type: ProfileType,
      args: {
        id: {
          type: new GraphQLNonNull(UUIDType)
        }
      },
      resolve: async (_, args, prismaClient: PrismaClient) => await prismaClient.profile.findUnique({
        where: {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
          id: args.id
        }
      })
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve: async (_, __, prismaClient: PrismaClient) => await prismaClient.post.findMany()
    },
    post: {
      type: PostType,
      args: {
        id: {
          type: new GraphQLNonNull(UUIDType)
        }
      },
      resolve: async (_, args, prismaClient: PrismaClient) => await prismaClient.post.findUnique({
        where: {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
          id: args.id
        }
      })
    },
  }
});
